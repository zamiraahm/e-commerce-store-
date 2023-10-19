import { createAsyncThunk, createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { Product, ProductParams } from "../../app/models/product";
import agent from "../../app/api/agents";
import { RootState } from "../../app/store/configureStore";

interface CatalogState {
    productsLoaded: boolean;
    filtersLoaded: boolean;
    status: string;
    authors: string[];
    genres: string[];
    productParams : ProductParams;
}

const productsAdapter=createEntityAdapter<Product>();

function getAxiosParams(productParams: ProductParams){
    const params = new URLSearchParams();
    params.append('pageNumber', productParams.pageNumber.toString());
    params.append('pageSize', productParams.pageSize.toString());
    params.append('orderBy', productParams.orderBy.toString());
    if(productParams.searchTerm) params.append('searchTerm', productParams.searchTerm);
    if (productParams.authors)params.append('authors', productParams.authors.toString());
    if (productParams.genres)params.append('genres', productParams.genres.toString());
    return params;
}

export const fetchProductsAsync=createAsyncThunk<Product[], void, {state: RootState}>(
    'catalog/fetchProductsAsync',
    async(_,thunkAPI)=>{
        const params = getAxiosParams(thunkAPI.getState().catalog.productParams);
        try{
            return await agent.Catalog.list(params);
        }catch(error){
            return thunkAPI.rejectWithValue(error)
        }
    }
)
export const fetchProductAsync=createAsyncThunk<Product,number>(
    'catalog/fetchProductAsync',
    async(productId,thunkAPI)=>{
        try{
            return await agent.Catalog.details(productId);
        }catch(error){
            return thunkAPI.rejectWithValue({error})
        }
    }
)

export const fetchFilters = createAsyncThunk(
    'catalog/fetchFilters',
    async(_, thunkAPI) => {
        try {
            return agent.Catalog.fetchFilters();
        } catch (error : any) {
            return thunkAPI.rejectWithValue({error: error.data})
        }
    }
)

function initParams() {
    return{
        pageNumber: 1, 
            pageSize: 6,
            orderBy: 'name'
    }
}

export const catalogSlice=createSlice({
    name:'catalog',
    initialState: productsAdapter.getInitialState<CatalogState>({
        productsLoaded:false,
        filtersLoaded: false,
        status:'idle',
        authors: [],
        genres : [],
        productParams: initParams()

    }),
    reducers:{
        setProductParams: (state, action) => {
            state.productsLoaded = false;
            state.productParams = {...state.productParams, ...action.payload};
        },
        resetProductParams : (state) => {
            state.productParams = initParams();
        }
    },
    extraReducers:(builder=>{
        builder.addCase(fetchProductsAsync.pending,(state)=>{
            state.status='pendingFetchProducts';
        });
        builder.addCase(fetchProductsAsync.fulfilled,(state,action)=>{
            productsAdapter.setAll(state,action.payload);
            state.status='idle';
            state.productsLoaded=true;
        });
        builder.addCase(fetchProductsAsync.rejected,(state,action)=>{
            console.log(action.payload);
            state.status='idle';
        });
        builder.addCase(fetchProductAsync.pending,(state) =>{
            state.status='pendingFetchProduct';
        });
        builder.addCase(fetchProductAsync.fulfilled,(state,action)=>{
            productsAdapter.upsertOne(state,action.payload);
            state.status='idle';
        });
        builder.addCase(fetchProductAsync.rejected,(state,action)=>{
            console.log(action);
            state.status='idle';
        });
        builder.addCase(fetchFilters.pending, (state) => {
            state.status = 'pendingFetchFilters';
        });
        builder.addCase(fetchFilters.fulfilled, (state,action) => {
            state.authors = action.payload.authors;
            state.genres = action.payload.genres;
            state.filtersLoaded = true;
            state.status='idle';
        });
        builder.addCase(fetchFilters.rejected, (state, action) => {
           state.status = 'idle';
           console.log(action.payload);
        });
    })
})
export const productSelectors=productsAdapter.getSelectors((state:RootState)=>state.catalog);

export const {setProductParams, resetProductParams} = catalogSlice.actions;


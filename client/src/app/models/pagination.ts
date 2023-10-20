export interface MetaData{
    currentPage: number;
    totalPages: number;
    pageSize: number;
    totalCount: number;
}

export class PaginatedResponse<G>{
     items: G;
     metaData: MetaData;

     constructor(items: G, metaData: MetaData){
        this.items = items;
        this.metaData = metaData;
     }
}
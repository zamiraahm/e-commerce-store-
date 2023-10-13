import { createBrowserRouter } from "react-router-dom";
import App from "../layout/App";
import HomePAge from "../../features/home/HomePage";
import Catalog from "../../features/catalog/Catalog";
import ProductDetails from "../../features/catalog/ProductDetails";
import AboutPage from "../../features/about/AboutPage";
import ContactPage from "../../features/contact/ContactPage";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {path : '', element: <HomePAge/>},
            {path : 'catalog', element: <Catalog/>},
            {path : 'catalog/:id', element: <ProductDetails/>},
            {path : 'about', element: <AboutPage/>},
            {path : 'contact', element: <ContactPage/>},
        ]
    }
])
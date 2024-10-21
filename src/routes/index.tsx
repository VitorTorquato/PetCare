import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../layout";
import { Home } from "../pages/home";
import { Details } from "../pages/details";
import { Cart } from "../pages/cart";
import { Success } from "../pages/succes";
import { NotFound } from "../pages/notFound";



const router = createBrowserRouter([

    {
        element: <Layout/>,
        children: [

            {
                path:'/',
                element: <Home/>
            },
            {
                path:'/details/:id',
                element:<Details/>
            },
            {
                path:'/cart',
                element: <Cart/>

            },

            {
                path: '/success',
                element: <Success/>
            },

            {
                path: '*',
                element: <NotFound/>
            }
        ]
        
    }

])

export {router}
import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/home";
import { Layout } from "./components/layout";
import { Details } from "./pages/details";
import { NotFound } from "./pages/notfound";


const route = createBrowserRouter([

    {
        element:<Layout />,
        children:[
            {
                path:"/",
                element: <Home />
            } ,

            {
                path:"/detail/:cripto",
                element: <Details />
            } ,

            {
                path:"*",
                element: <NotFound />
            }

            
        ]
    }
])

export{route}
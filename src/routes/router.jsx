import {createBrowserRouter} from "react-router";
import HomeLayout from "../layouts/HomeLayout.jsx";
import Home from "../pages/Home.jsx";
import CategoryNews from "../pages/CategoryNews.jsx";


const router = createBrowserRouter([
        {
            path: "/",
            element:<HomeLayout></HomeLayout>,
            children: [
                {
                    path: "",
                element:<Home></Home>
                },
                {
                    path: "/category/:id",
                    element:<CategoryNews />,
                    loader:()=>fetch('/news.json')
                }

            ]
        },
        {
            path: '/auth',
            element: <h2>auth layout</h2>
        },
        {
            path: '/news',
            element: <h2>news layouts</h2>
        },
        {
            path: '/*',
            element: <h2>404</h2>
        }]
)

export default router
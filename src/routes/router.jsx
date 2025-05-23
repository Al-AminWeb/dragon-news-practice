import {createBrowserRouter} from "react-router";
import HomeLayout from "../layouts/HomeLayout.jsx";
import Home from "../pages/Home.jsx";
import CategoryNews from "../pages/CategoryNews.jsx";
import Login from "../pages/LogIn.jsx";
import Register from "../pages/Register.jsx";
import AuthLayout from "../layouts/AuthLayout.jsx";
import NewsDetails from "../pages/NewsDetails.jsx";
import PrivateRoute from "../provider/PrivateRoute.jsx";


const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout></HomeLayout>,
        children: [
            {
                path: "",
                element: <Home></Home>
            },
            {
                path: "/category/:id",
                element: <CategoryNews/>,
                loader: () => fetch('/news.json')
            }

        ]
    },
    {
        path: '/auth',
        element: <AuthLayout></AuthLayout>,
        children: [
            {
                path: "/auth/login",
                element: <Login></Login>
            },
            {
                path: "/auth/register",
                element: <Register></Register>
            }
        ]
    },
    {
        path: '/news-details/:id',
        element: <PrivateRoute>
            <NewsDetails/>
        </PrivateRoute>,
        loader: ()=>fetch('/news.json')
    },
    {
        path: '/*',
        element: <h2>404</h2>
    }]
)

export default router
import {createBrowserRouter} from "react-router";
import HomeLayout from "../layouts/HomeLayout.jsx";


const router = createBrowserRouter([
        {
            path: "/",
            element:<HomeLayout></HomeLayout>
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
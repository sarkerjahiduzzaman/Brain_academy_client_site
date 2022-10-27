import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main/Main";
import Login from "../Login/Login";
import Register from "../Login/Register";
import Blog from "../page/Blog/Blog";
import Catagory from "../page/Catagory/Catagory";
import Course from "../page/Course/Course";
import Home from "../page/Home/Home";
import Not from "../page/Not/Not";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const routes=createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {

                path:'/',
                element:<Home></Home>,
                loader:()=>fetch(`http://localhost:5000/course`)
            },
            {
                path:'/catagory/:id',
                element:<PrivateRoute><Course></Course></PrivateRoute>,
                loader:({params})=>fetch(`http://localhost:5000/course/${params.id}`)
            },
            {
                path:'/course/:id',
                element:<PrivateRoute><Course></Course></PrivateRoute>,
                loader:({params})=>fetch(`http://localhost:5000/course/${params.id}`)
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            },
            {
                path:'*',
                element:<Not></Not>
            }
        ]
    }
])



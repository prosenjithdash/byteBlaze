import { createBrowserRouter } from "react-router-dom";
import MainRoot from "../Components/MainRoot/MainRoot";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";
import Blogs from "../Pages/Blogs/Blogs";
import Blog from "../Pages/Blog/Blog";
import Content from "../Components/Content/Content";
import Bookmarks from "../Pages/Bookmarks/Bookmarks";
import Author from "../Components/Author/Author";

export  const router = createBrowserRouter([
    {
        path: "/",
        element: <MainRoot></MainRoot>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/blogs',
                loader: () => fetch('https://dev.to/api/articles?per_page=20?top=7'),
                element: <Blogs></Blogs>
            },
            {
                path: '/blog/:id',
                element: <Blog></Blog>,
                loader: ({ params }) => fetch(`https://dev.to/api/articles/${params.id}`),

                children: [
                    {
                        index:true,
                        element: <Content></Content>,
                        loader: ({ params }) => fetch(`https://dev.to/api/articles/${params.id}`),
                    },
                    {
                        path: 'author',
                        element: <Author></Author>,
                        loader: ({ params }) => fetch(`https://dev.to/api/articles/${params.id}`),
                    }
                ]
            },
            {
                path: '/bookmarks',
                element: <Bookmarks></Bookmarks>
            }
        ]
    },
]);
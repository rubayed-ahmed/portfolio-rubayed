import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main"
import ProjectDetails from "../Pages/Home/Works/ProjectDetails";
import Dashboard from "../Pages/AdminDashboard/Dashboard/Dashboard";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main/>
    },
    {
            path: "/project/:id",
            element: <ProjectDetails/>,
            loader: ({ params }) => fetch(`http://localhost:5000/project/${params.id}`)
    },
    {
            path: "/admin",
            element: <Dashboard/>
    }
])

export default router;

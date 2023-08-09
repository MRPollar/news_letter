import { createHashRouter } from "react-router-dom";
import App from "./App";
import Home from "./routes/Home";
import Registered from "./routes/Registered";
import Error from "./routes/Error";

const router = createHashRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "registered",
                element: <Registered/>
            },
            {
                path: "*",
                element: <Error/>
            }
        ]
    }
])

export default router;
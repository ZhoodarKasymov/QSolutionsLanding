import { BrowserRouter, Routes, Route } from "react-router-dom"
import App from "./layouts/main/App"
import NotFoundPage from "./common/pageNotFound/PageNotFound";
import Home from "./home/Home";

const Router = () => {
    return <BrowserRouter>
        <Routes>
            <Route element={<App><Home/></App>} path="/"/>                
            <Route element={<NotFoundPage/>} path="*"/>
        </Routes>
    </BrowserRouter>
}

export default Router;
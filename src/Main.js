import  ReactDOM  from 'react-dom/client';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import LayOut from './components/LayOut.js';
import Home from "./pages/Home.js"
import Project from './pages/Project.js';
function Main(){
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<LayOut/>}>
                        <Route index element={<Home/>}/>
                        <Route path='project' element={<Project/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}
export default Main;
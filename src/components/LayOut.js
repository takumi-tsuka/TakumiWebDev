import { Link, Outlet } from "react-router-dom"
import Footer from "./Footer";
import Header from "./header/Header";
import NavCompo from "./header/NavCompo";
function LayOut(){
    return (
        <>
        <NavCompo>
        </NavCompo>
        <Header/>
        <main>
           <Outlet/>
        </main>
        <Footer/>
        </>
    )
}
export default LayOut;
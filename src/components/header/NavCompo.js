import { Link } from "react-router-dom";
function NavCompo(){
    return(
        <nav className="navbar navbar-expand-lg navbar-light" style={{padding:"3% 10%"}}>
            <h1 className="title"><Link className="navbar-brand">Takumi Web developer</Link></h1>
            <div className="collapse navbar-collapse" id="collapsibleNavId">
                <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/project">Projects</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
export default NavCompo;
import { Link } from "react-router-dom";
function NavCompo(){
    return(
        <nav className="navbar navbar-expand-lg navbar-light" style={{padding:"3% 5%"}}>
            <div className="container-fluid">
            <Link className="navbar-brand" to="/">
            <img src="../../../../img/logo_transparent.png"  alt="Logo" width="30" height="24" className="d-inline-block align-text-top" />
                Takumi Web developer
            </Link>
            </div>
            <div className="collapse navbar-collapse" id="collapsibleNavId">
                <a href="https://github.com/takumi-tsuka"><i className="fa-brands fa-github"></i></a>
                <a href="https://www.linkedin.com/in/takumi-iitsuka-b1a176251/"><i className="fa-brands fa-linkedin"></i></a>
                <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                    <li className="nav-item">
                        <Link className="nav-link" to="/About">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/project">Projects</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/resume">Resume</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
export default NavCompo;
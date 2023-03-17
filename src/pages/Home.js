import { Link } from "react-router-dom";
function Home(){
    return(
        <>
            <div className="row justify-content-center align-items-center g-2">
                <div className="col-6">
                    <h1>I'm Frontend Developer</h1>
                    <h1>Backend</h1>
                    <figure className="figure">
                        <img src="../../.././img/logo_transparent.png" className="figure-img img-fluid rounded" alt="profileimg" style={{width:"50vh"}}/>
                    </figure>
                    <address>
                        <h4>Email: <a href="mailto:test@test.com">test@test.com</a></h4>
                        <h4>Phone: <a href="tel:0000000000">000000000</a></h4>
                        <h4>Adress: <a href="vancouver">Vancouver, BC</a></h4>
                    </address>
                </div>
                <div className="col-6">
                <ul className="nav flex-column">
                    <li className="nav-item">
                        <h2>
                            <Link className="nav-link" to="/About">About</Link>
                        </h2>
                    </li>
                    <li className="nav-item">
                        <h2>
                            <Link className="nav-link" to="/project">Projects</Link>
                        </h2>
                    </li>
                    <li className="nav-item">
                        <h2>
                            <Link className="nav-link" to="/resume">Resume</Link>
                        </h2>
                    </li>
                </ul>
                </div>
            </div>
        </>
    )
}
export default Home;
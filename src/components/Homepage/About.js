function About(){
    return(
        <>
            <div className="container-fluid" style={{padding:"3% 10%"}}>
                <div className="container-fluid" style={{display:"flex",flexDirection:"column",rowGap:"5vh"}}>
                    <h1>Takumi Iitsuka</h1>
                    <h4>Frontend, Backend Web Developer</h4>
                </div>
                <div className="container-fluid">
                    <p className="lead" style={{lineHeight:"1.5"}}>
                        I have been to Canada for 6 months. <br/> I'm learning fundamental knowledge about web development in Tamwood Careers as international student. I am actually a university student in Japan, studying materials engineering. <br/>I have experience in team web development and production in HTML, CSS, Sass, and PHP. I am familiar with both frontend and backend.<br/> I hope I can experience in web development and develop myself as web developer in Internship for six months.<br/> I like taking a sauna, doing light exercise, and drinking coffee.
                    </p>
                </div>
                <div className="row justify-content-center align-items-start g-2">
                    <div className="col-3">
                        <figure className="figure" style={{paddingLeft:"5%"}}>
                            <img style={{width:"45vh"}} src="../img/header-bg.jpg" className="figure-img img-fluid rounded"/>
                        </figure>                  
                    </div>
                    <div className="col-9">
                        <div className="container">
                            <ul className="list-unstyled">
                                <li>Email: <a href="mailto:takumi99701@gmail.com">takumi99701@gmail.com</a></li>
                                <li>Tel: <a href="tel:2368862338 ">+1 (236) 886 - 2338</a></li>
                                <li>Place: Vancouver, BC Canada</li>
                            </ul>
                            <p>
                                If you have any questions or would like to confirm any information, please feel free to use the contact information and links below. I would be glad to hear from you.
                            </p>
                            <div className="row justify-content-center align-items-center g-2" style={{width:"15%"}}>
                                <div className="col-6">
                                    <a href="https://linkedin.com/in/takumi-iitsuka-b1a176251"><i className="fa-brands fa-linkedin-in"></i></a>
                                </div>
                                <div className="col-6">
                                    <a href="https://github.com/takumi-tsuka"><i className="fa-brands fa-github"></i></a>
                                </div>
                            </div>
                            <div className="container-sm">
                                <a href="resume" download={"../takumiwebdev.pdf"}>Download Resume</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default About;
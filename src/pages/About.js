import {useState} from "react"
import ModalCompo from "../components/ModalCompo";
function About(){
    const [sk,setSk] = useState();
    const skills =[
        {
            name:"HTML&CSS",
            img:"html-5.png",
            des:"something"
        },
        {
            name:"Javascript",
            img:"javascript.png",
            des:"something js"
        },
        {
            name:"React",
            img:"react.png",
            des:"something react"
        },
        {
            name:"vue",
            img:"vue.png",
            des:"something vue"
        },
        {
            name:"Angular",
            img:"angular.png",
            des:"something angular"
        },
        {
            name:"PHP",
            img:"php.png",
            des:"something php"
        },
        {
            name:"node.js",
            img:"nodejs.png",
            des:"something node.js"
        }
    ];
    const select =(idx)=>{
        console.log(idx);
        setSk(idx);
    }
    return(
        <section>
            <div className="row justify-content-center align-items-start g-2">
                <div className="col-5">
                    <h1><i>Takumi Iitsuka</i></h1>
                    <figure className="figure">
                        <img src="../../../img/logo_transparent.png" className="figure-img img-fluid rounded" alt=""/>
                    </figure>
                    <div className="container-fluid">
                        <h1>About me</h1>
                        <div className="container-fluid">
                            
                        </div>
                    </div>
                </div>
                <div className="col-7">
                    <div className="container-fluid">
                        <h1>Skills</h1>
                        <figure className="figure">
                            {skills.map((skill,idx)=>
                                <div key={idx}>
                                    <img onClick={()=>select(idx)}  src={"../../../img/"+skill.img} className="figure-img img-fluid rounded" alt="html css" data-bs-toggle="modal" data-bs-target="#modalId"/>
                                    <figcaption className="figure-caption text-start">{skill.name}</figcaption>
                                </div>
                            )
                            }
                        </figure> 
                        <ModalCompo />             
                    </div>
                    <div className="container-fluid">
                        <h1>Educations</h1>
                        <div className="row justify-content-between align-items-start g-2">
                            <div className="col-9">
                                <h2>Tamwood Careers</h2>
                                <div className="container-fluid">
                                    <p>
                                        I studied web development at Tamwood careers.I am able to design and code interactive websites for clients using HTML, CSS, and JavaScript, build dynamic websites using a CMS, create and use web applications.I have learned a lot about programming and web development.
                                    </p>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="container-fluid">
                                    <h5><i>Location:</i></h5>
                                    <h5>Vancouver,BC</h5>
                                </div>
                                <div className="container-fluid">
                                    <h5><i>Duration:</i></h5>
                                    <h5>Oct 2022 - Mar 2023</h5>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-between align-items-start g-2">
                            <div className="col-9">
                                <h2>Nagoya Institute of Technology</h2>
                                <div className="container-fluid">
                                    <p>
                                        I learned materials engineering. I am still in school and currently on a leave of absence.I learned about knowledge of basic math, physics, and chemistry and used them to do cutting edge research. In my engineering studies, I had the opportunity to learn mathematical information fundamentals, and I have learned R.I mainly studied magnesium alloys and their strengthening mechanisms.
                                    </p>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="container-fluid">
                                    <h5><i>Location:</i></h5>
                                    <h5>Nagoya,Japan</h5>
                                </div>
                                <div className="container-fluid">
                                    <h5><i>Duration:</i></h5>
                                    <h5>Apr 2018 - Mar 2025</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default About;
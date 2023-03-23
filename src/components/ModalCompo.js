import { useState } from "react";

function ModalCompo({sk}){
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
    return(
        <>
            <div className="modal fade" id="modalId" tabIndex="-1" role="dialog" aria-labelledby="modalTitleId" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                            {/* <div className="modal-header">
                                    <h5 className="modal-title" id="modalTitleId">Modal title</h5>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div> */}
                        <div className="modal-body">
                            <div className="container-fluid">
                            {
                                skills.map((val,idx)=>{
                                    <h1>{val.name}</h1>
                                })
                            }
                            </div>
                        </div>
                        {/* <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save</button>
                        </div> */}
                    </div>
                </div>
            </div>   
        </>
    )
}
export default ModalCompo;
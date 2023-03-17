function ModalCompo(){
    return(
        <>
            <div className="modal fade" id="modalId" tabIndex="-1" role="dialog" aria-labelledby="modalTitleId" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                            <div className="modal-header">
                                    <h5 className="modal-title" id="modalTitleId">Modal title</h5>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                        <div className="modal-body">
                            <div className="container-fluid">
                                Add rows here
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save</button>
                        </div>
                    </div>
                </div>
            </div>   
        </>
    )
}
export default ModalCompo;
import React, { useEffect, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import '../update/updatedata.css';
// import GetApi from '../services/getApi';
export default function UpdateData() {
    const [insertpost, setInsertpost] = useState([]);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    // useEffect(()=>{
    //     (async function(){
    //         const {data} = await GetApi.insertAllPosts();
    //         console.log(data)
    //         setInsertpost(data)
    //     })()
    // }, [])

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Launch demo modal
      </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add New</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <form className="inputfrom" action="">
                    <input type="text" placeholder="user id" />
                    <input type="text" placeholder="Title" />
                    <input type="text" placeholder="body" />
                </form>
                </Modal.Body>
            </Modal>
        </>


    )
}
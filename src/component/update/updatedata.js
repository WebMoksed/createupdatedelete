import React, { useEffect, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import '../update/updatedata.css';



export default function UpdateData(props) {
    const { show, handleClose, onChange, submit } = props;

    // const [insertpost, setInsertpost] = useState([]);
    // const [value, setValue] = useState(true, {
    //     title: "",
    //     body: "",
    //     userId: ""
    // });


    return (
        <>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add New</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={(e) => submit(e)} className="inputfrom" action="">
                        <input onChange={(e) => onChange(e)} name='userId' type="text" placeholder="User ID" />
                        <input onChange={(e) => onChange(e)} name="title" type="text" placeholder="Title" />
                        <input onChange={(e) => onChange(e)} name="body" type="text" placeholder="body" />
                        <button className="btn btn-primary">Add</button>
                    </form>
                </Modal.Body>
            </Modal>

        </>


    )
}
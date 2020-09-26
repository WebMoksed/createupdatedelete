import React, { useEffect, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import '../update/updatedata.css';
import Axios from 'axios'
// import GetApi from '../services/getApi';
export default function UpdateData() {
    const [insertpost, setInsertpost] = useState([]);
    const [show, setShow] = useState(false);
    const [data, setData]=useState({
        title:"",
        body:"",
    });

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    // useEffect(()=>{
    //     (async function(){
    //         const {data} = await GetApi.insertAllPosts();
    //         console.log(data)
    //         setInsertpost(data)
    //     })()
    // }, [])

const url ="https://jsonplaceholder.typicode.com/posts";

    function submit(e){
        e.preventDefault();
        Axios.post(url, data)
        .then((res)=>{
            console.log(res.data)
        })
    }
    function handle(e){
        const newdata =[]
        newdata[e.target.id] = e.target.value;
        setData(newdata)
        
    }

    return (
        <>
            <Button variant="primary" onClick={handleShow}>Launch demo modal</Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add New</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <form onSubmit={(e)=>submit(e)} className="inputfrom" action="">
                    {/* <input onChange={(e)=>handle(e)}  type="text" placeholder="user id" /> */}
                    <input onChange={(e)=>handle(e)} value={data.title} name="title" type="text" placeholder="Title" />
                    <input onChange={(e)=>handle(e)} value={data.body} name="body" type="text" placeholder="body" />
                    <button className="btn btn-primary">Add</button>
                </form>
                </Modal.Body>
            </Modal>
            {/* <form onSubmit={(e)=>submit(e)} className="inputfrom" action="">
                    <input onChange={(e)=>handle(e)}  type="text" placeholder="user id" />
                    <input onChange={(e)=>handle(e)} value={data.title} name="title" type="text" placeholder="Title" />
                    <input onChange={(e)=>handle(e)} value={data.body} name="body" type="text" placeholder="body" />
                    <button className="btn btn-primary">Add</button>
                </form> */}
        </>


    )
}
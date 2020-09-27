import React, { useEffect, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import '../update/updatedata.css';
// import Axios from 'axios'
// import {GetApi} from '../services/getApi'
import GetApi from '../services/getApi';



export default function UpdateData(props) {
    const { handleShow, show, handleClose, onChange, submit } = props;
    const [insertpost, setInsertpost] = useState([]);
    // const [show, setShow] = useState(true);

    const [post, setPost] = useState({
        title: "",
        body: "",
        userId: ""
    });


    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);
    // useEffect(()=>{
    //     (async function(){
    //         const {data} = await GetApi.insertAllPosts();
    //         console.log(data)
    //         setInsertpost(data)
    //     })()
    // }, [])

    // const url ="https://jsonplaceholder.typicode.com/posts";



    // async function submit(e) {
    //     e.preventDefault();
    //     // Axios.post(url, data)
    //     // .then((res)=>{
    //     //     console.log(res.data)
    //     // })
    //     const newPost = {
    //         title: post.title,
    //         body: post.body,
    //         userId: post.userId
    //     }
    //     console.log('new post', newPost);
    //     // const { data } = await GetApi(newPost);

    //     // console.log('post', data)
    // }
    // function handle(e) {
    //     // const newdata = []
    //     // newdata[e.target.id] = e.target.value;
    //     setPost({ [e.target.id]: e.target.value })
    // }

    return (
        <>
            {/* <Button variant="primary" onClick={handleShow}>Launch demo modal</Button> */}

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add New</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={(e) => submit(e)} className="inputfrom" action="">
                        {/* <input onChange={(e)=>handle(e)}  type="text" placeholder="user id" /> */}
                        <input onChange={onChange} name="title" type="text" placeholder="Title" />
                        <input onChange={onchange} name="body" type="text" placeholder="body" />
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
import React, { useEffect, useState } from 'react';
import PostApi from '../services/postApi';
import '../postview/postview.css';
 function Postview(props, handleShow) {
    const [post, setPost] = useState([]);
    useEffect(() => {
        (async function () {
            const { data } = await PostApi.Getallpost();
            console.log(data)
            setPost(data)
        })()
    }, [])

    function btnEdit() {
        var tdz = document.querySelectorAll("td");
        tdz.forEach(td => {
            td.setAttribute('contenteditable', true)
            td.style.outline = "auto";
        });

    }
    function btnDelete() {
        document.getElementById('myTable').deleteRow(0)
    }
    function btnAdd() {
        var table = document.getElementById("myTable");
        var row = table.insertRow(1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        cell1.innerHTML = "";
        cell2.innerHTML = "";
        cell3.innerHTML = "";
        cell4.innerHTML = "";
    }
    return (
        <div className="container">
            <div className="table-wrapper">
                <div className="table-title">
                    <div className="row">
                        <div className="col-sm-8"><h2>Employee <b>Details</b></h2></div>
                        <div className="col-sm-4">
                            <button type="button" className="btn btn-info add-new" onClick={handleShow}><i className="fa fa-plus"></i> Add New</button>
                        </div>
                    </div>
                </div>
                <table className="table table-bordered" id="myTable">
                    <thead>
                        <tr>
                            <th>User Id</th>
                            <th>Title</th>
                            <th>Body</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {post && post.map((item, i) =>
                            <tr key={i}>
                                <td>
                                    {item.userId}
                                </td>
                                <td>
                                    {item.title}
                                </td>
                                <td>
                                    {item.body}
                                </td>
                                <td>
                                    <button onClick={() => btnEdit()} className="edit" title="Edit" data-toggle="tooltip"><i className="fa fa-pencil-square-o" aria-hidden="true"></i></button>
                                    <button onClick={() => btnDelete()} className="delete" title="Delete" data-toggle="tooltip"><i className="fa fa-trash" aria-hidden="true"></i></button>
                                </td>
                            </tr>
                        )}

                    </tbody>
                </table>
            </div>
        </div>


    )
}
export default Postview;
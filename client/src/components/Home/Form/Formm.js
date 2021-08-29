import React, { useState } from 'react'
import './Form.css'
import api from '../../../api/index'
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux'
import { createPost } from '../../../ACTIONS/Post';
import { getPosts } from '../../../ACTIONS/Post';
import FileBase from 'react-file-base64';
const Formm = () => {
    const dispatch = useDispatch();
    const [postData, setPostData] = useState(
        {
            name: '', title: '', image: '', Details: '', tags: ''
        }
    )


    const clear = () => {
        setPostData({
            id: '',
            name: '', title: '', image: '', Details: '', tags: ''
        })
    }


    const Submit = () => {
        clear();

        dispatch(getPosts());
        console.log(postData);
        dispatch(createPost(postData));


    }
    const handleSubmit = async (e) => {

        e.preventDefault();
        dispatch(createPost(postData));

        clear();
    }

    return (
        <div className="Form">
            <form className="form" onSubmit={handleSubmit}>

                <div className="fromD">
                    <h2>Name:</h2>


                    <TextField
                        name="name"
                        variant="outlined"
                        label="NAME"
                        fullWidth
                        value={postData.name}
                        onChange={(e) => setPostData({ ...postData, name: e.target.value })}
                    />
                    <h2>Title:</h2>
                    <TextField
                        name="title"
                        variant="outlined"
                        label="TITLE"
                        fullWidth

                        value={postData.message}
                        onChange={(e) => setPostData({ ...postData, title: e.target.value })}
                    />
                    <h2></h2>
                    <TextField
                        name="tags"
                        variant="outlined"
                        label="Tags (coma separated)"
                        fullWidth
                        value={postData.tags}
                        onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',') })}

                    />
                </div>

                {/* <input type="text" placeholder="textt"
                    value={postData.name}
                    onChange={(e) => {
                        setPostData({ ...postData, name: e.target.value })
                    }}
                /> */}
                <div className="fromD">

                    <h2>Details</h2>
                    <TextField
                        name="Details"
                        variant="outlined"
                        label="DETAILS"
                        fullWidth
                        multiline rows={4}
                        value={postData.message}
                        onChange={(e) => setPostData({ ...postData, Details: e.target.value })}
                    />
                </div>
                <div className="fromD">
                    <h2>Image</h2>
                    <div className="fileInput">
                        <FileBase className="tag"
                            type="file"

                            multiple={false}
                            onDone={({ base64 }) => setPostData({ ...postData, image: base64 })
                                // console.log(postData.selectedFiles)
                            }
                        />

                    </div>


                </div>

                <Button
                    variant="contained"
                    color="secondary"
                    size="small"
                    onClick=
                    {Submit}
                    fullWidth>Clear

                </Button>

            </form>
        </div>
    )
}

export default Formm

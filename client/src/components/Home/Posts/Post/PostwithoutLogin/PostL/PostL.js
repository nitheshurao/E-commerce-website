import React from 'react'
import './Postl.css'
import DeleteIcon from '@material-ui/icons/Delete';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import { useDispatch } from 'react-redux';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
function PostL({ post, setCurrentId }) {
    const dispatch = useDispatch();
    return (
        <div className="Posts">
            {/* <h1>postWihout Login</h1> */}

            <div className="Post">

                <img src={post.selectedFiles || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} />

                <div className="Container">


                    <h4><b>{post.title}</b></h4>
                    <p>{post.details}</p>


                </div>



            </div>




        </div>
    )
}

export default PostL
// "id": 1,
// "title": "Nithesh",
// "author": "typicode",
// "like": 0,
// "details": "details1",
// "selectedFiles"
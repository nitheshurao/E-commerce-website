import React from 'react'
import './Post.css'
import DeleteIcon from '@material-ui/icons/Delete';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import { useDispatch } from 'react-redux';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
function Post({ post, setCurrentId }) {
    const dispatch = useDispatch();
    return (
        <div className="Posts">

            <div className="Post">

                <img src={post.selectedFiles || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} />

                <div className="Container">

                    <button className="btn">  <MoreHorizIcon fontSize="default" /></button>



                    <h4><b>{post.title}</b></h4>
                    <p>Architect & Engineer,jhadgasjkbca.j kajshlaskJDGCBASJDlskjdgladjba kjadhlakjdh    LADHLDAFAGUDBFUIADKUAIUIAUfasdfsdsa</p>
                    <div className="cont">
                        <button className="btn"><ThumbUpAltIcon /></button>
                        <button className="btn" ><DeleteIcon /></button>
                    </div>

                </div>



            </div>




        </div>
    )
}

export default Post
// "id": 1,
// "title": "Nithesh",
// "author": "typicode",
// "like": 0,
// "details": "details1",
// "selectedFiles"
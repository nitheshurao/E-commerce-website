import React from 'react'
import './Post.css'
import DeleteIcon from '@material-ui/icons/Delete';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import { useDispatch } from 'react-redux';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import { LikePost, deletePost } from '../../../../ACTIONS/Post';
function Post({ post, setCurrentId }) {
    const dispatch = useDispatch();
    return (
        <div className="Posts">

            <div className="Post">
                <div className="cont">
                    <h4><b>{post.title}</b></h4>
                    <button className="btn">  <MoreHorizIcon fontSize="default" /></button>
                </div>

                <img src={post.image || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} />

                <div className="Container">





                    <p>Architect & Engineer,jhadgasjkbca.j kajshlaskJDG ladjba kjadhlakjdh    LADHLDAFAGU DBFUIADKUAIUI AUfasdfsd sadqadas dedas dedasd adeafd asdafas asfa asfa f asfwef jhadgasjkbca.j kajshlaskJDGCBASJDlskjdgladjba kjadhlakjdh    LADHLDAF AGUDBFUIADKU AIUIAUfasdfsds adqadasded asde dasd adeafd asdafas asfa asfa f asfwef </p>
                    <div className="cont">
                        <button className="btn" onClick={
                            () => {
                                // console.log(post.id)
                                dispatch(LikePost(post.id))

                            }
                        }><ThumbUpAltIcon />{post.like}</button>
                        <button className="btn" onClick={() => dispatch(deletePost(post._id))}><DeleteIcon /></button>
                    </div>

                </div>



            </div>




        </div >
    )
}

export default Post
// "id": 1,
// "title": "Nithesh",
// "author": "typicode",
// "like": 0,
// "details": "details1",
// "selectedFiles"
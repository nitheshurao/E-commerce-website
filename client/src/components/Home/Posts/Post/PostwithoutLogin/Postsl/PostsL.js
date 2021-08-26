import React from 'react'
import { Grid, CircularProgress } from '@material-ui/core';

import { useSelector } from 'react-redux';
import PostL from '../PostL/PostL';
function PostsL({ setCurrentId }) {
    const posts = useSelector((state) => state.posts)
    console.log(posts)
    return (
        !posts.length ? <CircularProgress /> :
            (

                <div alignItems="stretch" spacing={3}>
                    {posts.map((post) => (
                        <div key={post._id} item >
                            <PostL post={post} setCurrentId={setCurrentId} />

                        </div>
                    ))}
                    posts
                </div>
            )

    )
}

export default PostsL


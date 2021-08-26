import React from 'react'
import { Grid, CircularProgress } from '@material-ui/core';
import Post from './Post/Post'
import { useSelector } from 'react-redux';
function Posts({ setCurrentId }) {
    const posts = useSelector((state) => state.posts)
    console.log(posts)
    return (
        !posts.length ? <CircularProgress /> :
            (

                <div alignItems="stretch" spacing={3}>
                    {posts.map((post) => (
                        <div key={post._id} item >
                            <Post post={post} setCurrentId={setCurrentId} />
                        </div>
                    ))}
                    posts
                </div>
            )

    )
}

export default Posts


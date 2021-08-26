
import React, { useState, useEffect } from 'react';
import Posts from './Posts/Posts'
import './Home.css';
import { useDispatch } from 'react-redux';
import { getPosts } from './../../ACTIONS/Post';
import PostL from './Posts/Post/PostwithoutLogin/PostL/PostL';
import PostsL from './Posts/Post/PostwithoutLogin/Postsl/PostsL';
function Home() {

    const [currentId, setCurrentId] = useState(0);
    const dispatch = useDispatch();



    useEffect(() => {
        dispatch(getPosts());
    }, [currentId, dispatch])
    return (
        <div className="Home">
            <Posts setCurrentId={setCurrentId} />

            {/* <PostsL setCurrentId={setCurrentId} /> */}

        </div>
    )
}

export default Home

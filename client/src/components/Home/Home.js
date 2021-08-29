
import React, { useState, useEffect } from 'react';
import Posts from './Posts/Posts'
import './Home.css';
import { useDispatch } from 'react-redux';
import { getPosts } from './../../ACTIONS/Post';
import Form from './Form/Formm';


function Home() {

    const [currentId, setCurrentId] = useState(0);
    const dispatch = useDispatch();



    useEffect(() => {
        dispatch(getPosts());
    }, [currentId, dispatch])
    return (
        <div className="Home">
            <Posts setCurrentId={setCurrentId} />

            {/* <Form /> */}

        </div>
    )
}

export default Home

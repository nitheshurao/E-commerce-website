import React, {
    useState, useEffect
} from 'react'
import Home from './components/Home/Home'
import { useDispatch } from 'react-redux';
import { getPosts } from './ACTIONS/Post'
const Appp = () => {
    const [currentId, setCurrentId] = useState(0);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, [currentId, dispatch]);
    return (
        <div>
            <Home />
        </div>
    )
}

export default Appp

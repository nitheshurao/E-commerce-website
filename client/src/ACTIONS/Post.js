import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionstype';
import * as api from '../api/index'

export const getPosts = () => async (dispatch) => {
    try {
        const { data } = await api.fetchPosts();

        dispatch({ type: FETCH_ALL, payload: data });
    } catch (error) {
        console.log(error.message);
    }
};

export const createPost = (post) => async (dispatch) => {
    try {
        const { data } = await api.createPost(post);

        dispatch({ type: CREATE, payload: data });
    } catch (error) {
        console.log(error.message);
    }
};
export const LikePost = (id) => async (dispatch) => {
    try {
        console.log(id)
        const { data } = await api.likePost(id);
        console.log(data)

        dispatch({ type: LIKE, payload: data });
        // dispatch({ type: LIKE, payload: data.like = data.like + 1 });

    } catch (error) {
        console.log(error.message);
    }
};

export const deletePost = (id) => async (dispatch) => {
    try {
        await api.deletePost(id);

        dispatch({ type: DELETE, payload: id });
    } catch (error) {
        console.log(error.message);
    }
};

// export const updatePost = (id, post) => async (dispatch) => {
//     try {
//         const { data } = await api.updatePost(id, post);

//         dispatch({ type: UPDATE, payload: data });
//     } catch (error) {
//         console.log(error.message);
//     }
// };

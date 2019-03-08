import { FETCH_POSTS, NEW_POST } from './types';
import axios from 'axios';

export function fetchPosts() {
    return function (dispatch) {
        axios({
            method: 'get',
            url: 'https://jsonplaceholder.typicode.com/posts',
            responseType: 'json'
        })
            // .then(response => {
            //     console.log(response.data);
            // })
            .then(response => dispatch({
                type: FETCH_POSTS,
                payload: response.data
            }));
    }
}
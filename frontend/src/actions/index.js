import axios from 'axios';
axios.defaults.xsrfHeaderName = 'X-CSRFTOKEN';
axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.withCredentials = true;

export const FETCH_POSTS = 'FETCH_POSTS';

export const fetchPosts = () => async dispatch => {
  const response = await axios.get(`http://127.0.0.1:8000/api/posts/`);
  dispatch({
    type: FETCH_POSTS,
    payload: response.data
  });
};

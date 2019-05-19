import { FETCH_POSTS } from '../actions';

const PostReducer = (posts = [], action) => {
  switch (action.type) {
    case FETCH_POSTS:
      return action.payload;
    default:
      return posts;
  }
};

export default PostReducer;

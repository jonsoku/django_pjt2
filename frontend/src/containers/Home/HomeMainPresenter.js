import React from 'react';

const HomeMainPresenter = ({ posts }) => {
  return (
    <div>
      {posts.map(post => (
        <div key={post.id}>
          <div>{post.title}</div>
        </div>
      ))}
    </div>
  );
};

export default HomeMainPresenter;

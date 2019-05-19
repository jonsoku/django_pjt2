import React, { Component } from 'react';
import { fetchPosts } from '../../actions';
import { connect } from 'react-redux';
import HomeMainPresenter from './HomeMainPresenter';

class HomeMainContainer extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    const { posts } = this.props;
    return (
      <div>
        <HomeMainPresenter posts={posts} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts
  };
};

export default connect(
  mapStateToProps,
  { fetchPosts }
)(HomeMainContainer);

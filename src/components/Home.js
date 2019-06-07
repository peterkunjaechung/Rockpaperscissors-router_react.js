import React from "react";
import Post from "./Post";
import { Header, } from "semantic-ui-react";
import PostForm from "./PostForm";

//const Home = () => (
   // <h1>Home</h1>
//);

class Home extends React.Component {
    state = {
      posts: [
        { id: 1, title: "Rock", body: "Choose" },
        { id: 2, title: "Paper", body: "Choose" },
        { id: 3, title: "Scissors", body: "Choose" },
      ]
    };
  
    getId = () => {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    };
    
    addPost = (postData) => {
      const { posts, } = this.state;
      const post = { id: this.getId(), ...postData, };
      this.setState({ posts: [post, ...posts], });
    };
  
    editPost = (postData) => {
      const posts = this.state.posts.map( post => {
          if (post.id === postData.id)
          return postData;
         return post
      });
      this.setState({ posts, });
      }
  
    renderPosts = () => {
      return this.state.posts.map( post => <Post key={post.id} {...post} edit={this.editPost} />)
    };
    
    render() {
      return (
        <div>
          <Header as="h1">Home</Header>
          <PostForm add={this.addPost} />
          { this.renderPosts() }
        </div>
      )
    }
  };


export default Home;
import React, { Component } from 'react';
import axios from 'axios';

class Posts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        }
    }
    
    componentDidMount() {
        axios({
            method: 'get',
            url: 'https://jsonplaceholder.typicode.com/posts',
            responseType: 'json'
        })
            .then((response) => {
                console.log(response.data);
                this.setState({posts: response.data});
            });
    }

    render() {
        const postItems = this.state.posts.map(post => (
            <div key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
            </div>
        ));
        return (
            <div>
                <h1>Posts</h1>
                {postItems}
            </div>
        );
    }
}

export default Posts;
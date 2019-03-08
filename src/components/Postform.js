import React, { Component } from 'react';
import axios from 'axios';

class Postform extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            body: ''
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit(e) {
        e.preventDefault();
        const post = {
            title: this.state.title,
            body: this.state.body
        }

        axios({
            method: 'post',
            url: 'https://jsonplaceholder.typicode.com/posts',
            headers: {
                'content-type': 'application/json'
            },
            data: JSON.stringify(post)
        })
        .then((response) => {
            console.log(response.data);
        }) 
    }

    render() {
        return (
            <div>
                <h1>Add Post</h1>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <label>Title: </label>
                        <br />
                        <input type="text" name="title" value={this.state.title} onChange={this.onChange}></input>
                    </div>
                    <br />
                    <div>
                        <label>Body: </label>
                        <br />
                        <textarea name="body" value={this.state.body} onChange={this.onChange} />
                    </div>
                    <br />
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}

export default Postform;
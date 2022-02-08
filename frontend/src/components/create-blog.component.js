import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';
export default class CreateBlog extends Component {
  constructor(props) {
    super(props)
    // Setting up functions
    this.onChangeauthorid = this.onChangeauthorid.bind(this);
    this.onChangeauthor = this.onChangeauthor.bind(this);
    this.onChangetitle = this.onChangetitle.bind(this);
    this.onChangecontent = this.onChangecontent.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    // Setting up state
    this.state = {
      authorid: '',
      author: '',
      title: '',
      content: '',
    }
  }
  onChangeauthorid(e) {
    this.setState({ authorid: e.target.value })
  }
  onChangeauthor(e) {
    this.setState({ author: e.target.value })
  }
  onChangetitle(e) {
    this.setState({ title: e.target.value })
  }
  onChangecontent(e) {
    this.setState({ content: e.target.value })
  }
  onSubmit(e) {
    e.preventDefault()
    const blogObject = {
      authorid: this.state.authorid,
      author: this.state.author,
      title: this.state.title,
      content: this.state.content

    };
    axios.post('http://localhost:4000/blogs/create-blog', blogObject)
      .then(res => console.log(res.data));
    this.setState({ authorid: '', author: '', title: '' ,content:''})
    this.props.history.push('/blog-list')

  }
  render() {
    return (
    <div className="form-wrapper">
      <br/>
      <h3>Create New Blog</h3>
      <br/>

      <Form onSubmit={this.onSubmit}>
        <Form.Group className='mb3' controlId="authorid">
          <Form.Label>Authorid</Form.Label>
          <Form.Control type="text" value={this.state.authorid} onChange={this.onChangeauthorid} />
        </Form.Group>
        <Form.Group controlId="author">
          <Form.Label>Author</Form.Label>
          <Form.Control type="text" value={this.state.author} onChange={this.onChangeauthor} />
        </Form.Group>
        <Form.Group controlId="title">
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" value={this.state.title} onChange={this.onChangetitle} />
        </Form.Group>
        <Form.Group controlId="content">
          <Form.Label>Content</Form.Label>
          <Form.Control as="textarea" value={this.state.content} onChange={this.onChangecontent} />
        </Form.Group>
        <Button variant="danger" size="lg" block="block" type="submit" className="mt-4">
          Create Blog
        </Button>
      </Form>
    </div>
    );
  }
}
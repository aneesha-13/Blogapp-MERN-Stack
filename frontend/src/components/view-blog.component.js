import React, { Component } from "react";
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
// import BlogTableRowDetails from './blogTableRowDetails';

export default class ViewBlog extends Component {
    constructor(props) {
        super(props)
        // Setting up functions
        this.onChange_id = this.onChangeauthorid.bind(this);
        this.onChangeauthorid = this.onChangeauthorid.bind(this);
        this.onChangeauthor = this.onChangeauthor.bind(this);
        this.onChangetitle = this.onChangetitle.bind(this);
        this.onChangecontent = this.onChangecontent.bind(this);
        this.deleteBlog = this.deleteBlog.bind(this);
        // this.onSubmit = this.onSubmit.bind(this);
        // Setting up state
        this.state = {
            _id:'',
            authorid: '',
            author: '',
            title: '',
            content: '',
        }
    }
    deleteBlog() {
        axios.delete('http://localhost:4000/blogs/delete-blog/' + this.state._id)
            .then((res) => {
                console.log('Blog successfully deleted!')
            }).catch((error) => {
                console.log(error)
            })
        // window.location.reload(false);
        window.location.href='http://localhost:3000/'
        // this.props.history.push('/blog-list')
    }
    onChange_id(e) {
        this.setState({ _id: e.target.value })
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
    componentDidMount() {
        axios.get('http://localhost:4000/blogs/' + this.props.match.params.id)
            .then(res => {
                this.setState({
                    _id:res.data._id,
                    authorid: res.data.authorid,
                    author: res.data.author,
                    title: res.data.title,
                    content: res.data.content
                });
            })
            .catch((error) => {
                console.log("error");
            })
    }
    //   DataTable() {
    //     return this.state.blogs.map((res, i) => {
    //       return <BlogTableRowDetails obj={res} key={i} />;
    //     });
    //   }

    render() {
        return (<div className="table-wrapper">
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>AuthorID</th>
                        <th>Author</th>
                        <th>Title</th>
                        <th>Content</th>
                        {/* <th>View Details</th> */}
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    {/* {this.DataTable()} */}
                    <td>{this.state.authorid}</td>
                    <td>{this.state.author}</td>
                    <td>{this.state.title}</td>
                    <td>{this.state.content}</td>
                    <td>
                    <Link className="edit-link" to={"/edit-blog/" + this.state._id}>
                        Edit   
                    </Link>
                    <Button onClick={this.deleteBlog} size="sm" variant="danger">   Delete</Button>
                    </td>
                    </tr>
                </tbody>
            </Table>
        </div>);
    }
}
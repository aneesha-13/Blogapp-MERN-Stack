import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
export default class BlogTableRow extends Component {
    // constructor(props) {
    //     super(props);
    //     this.deleteBlog = this.deleteBlog.bind(this);
    // }
    // deleteBlog() {
    //     axios.delete('http://localhost:4000/blogs/delete-blog/' + this.props.obj._id)
    //         .then((res) => {
    //             console.log('Blog successfully deleted!')
    //         }).catch((error) => {
    //             console.log(error)
    //         })
    //     window.location.reload(false);
    //     // this.props.history.push('/blog-list')
    // }
    render() {
        return (
            <tr>
                <td>{this.props.obj.authorid}</td>
                <td>{this.props.obj.author}</td>
                {/* <td>{this.props.obj.title}</td>
                <td>{this.props.obj.content}</td> */}
                <td>
                    <Link className="view-link" to={"/view-blog/" + this.props.obj._id}>
                        View   
                    </Link>
                </td>
                {/* <td>
                    <Link className="edit-link" to={"/edit-blog/" + this.props.obj._id}>
                        Edit   
                    </Link>
                    <Button onClick={this.deleteBlog} size="sm" variant="danger">   Delete</Button>
                </td> */}
            </tr>
        );
    }
}

import React from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import CreateBlog from './components/create-blog.component'
import EditBlog from './components/edit-blog.component'
import BlogList from './components/blog-list.component'
function App() {
  return (
    <div className="App">
      <Router>
        {/* <header className="App-header"> */}
          <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand>
                <Link to={'/'} className="nav-link">
                  Blog App
                </Link>
              </Navbar.Brand>
              <Nav className="justify-content-end">
                <Nav>
                  <Link to={'/create-blog'} className="nav-link">
                    Create blog
                  </Link>
                </Nav>
                {/* <Nav>
                  <Link to={'/'} className="nav-link">
                    Blog List
                  </Link>
                </Nav> */}
              </Nav>
            </Container>
          </Navbar>
        {/* </header> */}
        <Container>
          <Row>
            <Col md={12}>
              <div className="wrapper">
                <Switch>
                  <Route
                    exact
                    path="/"
                    component={(props) => <BlogList {...props} />}
                  />
                  <Route
                    exact
                    path="/create-blog"
                    component={(props) => <CreateBlog {...props} />}
                  />
                  <Route
                    exact
                    path="/edit-blog/:id"
                    component={(props) => <EditBlog {...props} />}
                  />
                  {/* <Route
                    exact
                    path="/blog-list"
                    component={(props) => <BlogList {...props} />}
                  /> */}
                </Switch>
              </div>
            </Col>
          </Row>
        </Container>
      </Router>
    </div>
  )
}
export default App
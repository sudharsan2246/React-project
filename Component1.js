import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Component1.css';
import { Button } from 'react-bootstrap';
import {Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom';





export default function Component1() {
  return (
    <div >
      <Navbar className="bg" expand="xl">
        <Container fluid className='bg'>
          <Navbar.Brand>BIG FACTORY</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <nav className='lineheight mx-auto  d-flex'>
              <Nav ><Link className="padding" to='/'>Home</Link></Nav>
              <Nav ><Link className="padding" to='/gallery'>Gallery</Link></Nav>
              <Nav ><Link className="padding" to="/ourstory">Our Story</Link></Nav>
              <Nav ><Link className="padding" to="/ourproject">Our Projects</Link></Nav>
              <Nav ><Link className="padding" to="/ourteam">Our Team</Link></Nav>
              <Nav ><Link className="padding" to="/testimonials">Testimonials</Link></Nav>
              <Nav ><Link className="padding" to="/blogsnews">Blogs&News</Link></Nav>            
            </nav>
            <Nav style={{paddingRight:"20px"}}><Button><Link className="padding"  to="/">LogIn</Link></Button></Nav>
            <Nav ><Button><Link className="padding" to="/">SignIn</Link></Button></Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
<Outlet/>
    </div>
  )
}
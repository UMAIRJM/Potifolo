import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './mainScreen.css'; 
import { FaInstagram, FaFacebook, FaTwitter, FaGithub } from 'react-icons/fa';
function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" className="custom-navbar" data-bs-theme="dark">
      <Container> 
        <Navbar.Brand href="#home" className='textColor'>Umair's Portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features" className='textColor'>Home</Nav.Link>
            <Nav.Link href="#Skills" className='textColor'>Skills</Nav.Link>
            <Nav.Link href="#Ptojects" className='textColor'>Projects</Nav.Link>
            <Nav.Link href="#Aboutme" className='textColor'>About Me</Nav.Link>
            <Nav.Link href="#Resume" className='textColor'>My Resume</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets" className='textColor'>
            <FaInstagram size={32} />
            
            </Nav.Link>
            <Nav.Link href="#deets" className='textColor'>
            <FaFacebook size={32} />
            
            </Nav.Link>
            <Nav.Link href="#deets" className='textColor'>
            <FaTwitter size={32} />
            
            </Nav.Link>
            <Nav.Link href="#deets" className='textColor'>
            <FaGithub size={32} />
            
            </Nav.Link>
            <Nav.Link eventKey={2} href="#memes" className='textColor'>
              Let's Connect
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;

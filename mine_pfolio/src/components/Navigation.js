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
            <Nav.Link href="#main" className='textColor'>Home</Nav.Link>
            <Nav.Link href="#Skills" className='textColor'>Skills</Nav.Link>
            <Nav.Link href="#Ptojects" className='textColor'>Projects</Nav.Link>
            <Nav.Link href="#Aboutme" className='textColor'>About Me</Nav.Link>
            <Nav.Link href="#Resume" className='textColor'>My Resume</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="https://www.instagram.com/um.air78o/?igsh=MWhtNGc1aHJqbWw4bg%3D%3D" className='textColor'>
            <FaInstagram size={32} />
            
            </Nav.Link>
            <Nav.Link href="https://www.facebook.com/umair.m.1238?mibextid=qi2Omg&rdid=iNwKMrEoujwOSIcX&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F4BiQcAYbamqAKxiJ%2F%3Fmibextid%3Dqi2Omg" className='textColor'>
            <FaFacebook size={32} />
            
            </Nav.Link>
            <Nav.Link href="https://x.com/UMAIRMEHMO42274?s=08" className='textColor'>
            <FaTwitter size={32} />
            
            </Nav.Link>
            <Nav.Link href="https://github.com/umairjm" className='textColor'>
            <FaGithub size={32} />
            
            </Nav.Link>
            <Nav.Link eventKey={2} href="#intouch" className='textColor'>
              Let's Connect
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;

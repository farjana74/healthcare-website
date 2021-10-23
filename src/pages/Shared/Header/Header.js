import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
//
import './Header.css'
import logo from '../../../images/logo (1).png'
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Header = () => {
  const {user,logOut}=useAuth();
  // console.log(user)
    return (
      
      <Navbar bg="dark"  
      variant="dark"  collapseOnSelect expand="lg"  sticky="top"  >
      <Container>
        <Navbar.Brand as={Link} href="/home#home">

          <img src={logo} alt="" />

        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto text-primary nav fs-4">
            <Nav.Link className="text-primary" as={Link} to="/home#home">Home</Nav.Link>
            
            <Nav.Link className="text-primary" as={Link} to="/doctor">Doctor</Nav.Link>
            <Nav.Link className="text-primary" as={Link} to="/contact">Contact</Nav.Link>
            {user.email?

              <button onClick={logOut} on className="bg-primary"> Logout</button>:
            <Nav.Link className="text-white bg-primary rounded p-2" as={Link} to="/login#login">Login</Nav.Link>
}
           <Navbar.Text className="text-primary">



<a href="#login"> {user?.displayName}</a>
          </Navbar.Text>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      
    );
};

export default Header;

import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
//
import './Header.css'
import logo from '../../../images/logo (1).png'
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Header = () => {
  const { user, logOut } = useAuth();
  // console.log(user)
  return (

    <Navbar collapseOnSelect expand="lg" bg="blue" variant="light" className='shadow-sm nav-header-link-text py-3  sticky-top nav-bg  '>
      <Container>
        <Navbar.Brand to="/home">
          <img src={logo} alt="" className='img-fluid' width={"150"} height={"50"} />
        </Navbar.Brand>
        <Navbar.Toggle className='text-white bg-white' aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto  ">
            <Nav.Link as={Link} to="/home#home" className="pe-sm-3 ">Home</Nav.Link>


            <Nav.Link as={Link} to="/doctor" className="pe-sm-3">About Us</Nav.Link>
            <Nav.Link as={Link} to="/contact" className="pe-sm-3 ">Explores</Nav.Link>



            {user?.email ?

              <Nav>
                <Nav.Link className="pe-sm-3  " as={Link} to="/dashboard">Dashboard</Nav.Link>
                <button onClick={logOut} on className="logout-button ms-5  "> Logout</button>


              </Nav>
              :
              <Nav.Link as={Link} to="/login" className="login-button ms-5  ">Login</Nav.Link >
            }





          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>

    //       <Navbar bg="dark"  

    //       variant="dark"  collapseOnSelect expand="lg"  sticky="top"  >
    //       <Container>
    //         <Navbar.Brand as={Link} href="/home#home">

    //           <img src={logo} alt="" />

    //         </Navbar.Brand>
    //         <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //         <Navbar.Collapse id="basic-navbar-nav">
    //           <Nav className="ms-auto text-primary nav fs-4">
    //             <Nav.Link className="text-primary" as={Link} to="/home#home">Home</Nav.Link>

    //             <Nav.Link className="text-primary" as={Link} to="/doctor">Doctor</Nav.Link>
    //             <Nav.Link className="text-primary" as={Link} to="/contact">Contact</Nav.Link>
    //             {user.email?

    //               <button onClick={logOut} on className="bg-primary"> Logout</button>:
    //             <Nav.Link className="text-white bg-primary rounded p-2" as={Link} to="/login#login">Login</Nav.Link>
    // }
    //            <Navbar.Text className="text-primary">



    // <a href="#login"> {user?.displayName}</a>
    //           </Navbar.Text>

    //           </Nav>
    //         </Navbar.Collapse>
    //       </Container>
    //     </Navbar>

  );
};

export default Header;

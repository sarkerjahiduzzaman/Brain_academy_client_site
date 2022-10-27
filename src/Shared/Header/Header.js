import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaGoogle,FaGithub ,FaUserCircle, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Leftside from '../Leftside/Leftside';
import './Header.css'

import ReactTooltip from "react-tooltip";


import DarkModeToggle from "react-dark-mode-toggle";
import { useContext } from 'react';
import { Authcontext } from '../../context/AuthProvider/AuthProvider';
import { Button, Image } from 'react-bootstrap';


const Header = () => {
    const {user,logOut}=useContext(Authcontext)
    const [isDarkMode, setIsDarkMode] = useState(() => false);
    const handaleLogout=()=>{
        logOut()
        .then(()=>{})
        .catch(error=>console.error('error',error))
    }
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" >
      <Container>
      <Navbar.Brand href="/"> <Image style={{height:'40px'}} roundedCircle src=' https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHRQcj2cx3Y7Bfct3rIX25g-3k5YqblRIM4ciq0NY&s'></Image> </Navbar.Brand>
        <Navbar.Brand href="/">Brain Academy</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" >
          
          <Nav className="ms-auto">


          <Nav.Link href="#pricing"> <DarkModeToggle
      onChange={setIsDarkMode}
      checked={isDarkMode}
      size={80}
      
    /></Nav.Link>
          <Nav.Link ><Link to='/' className='link' style={{ textDecoration: 'none' }}>Course</Link></Nav.Link>
         
            <Nav.Link ><Link to='/blog' className='link' style={{ textDecoration: 'none' }}>Blog</Link> </Nav.Link>
            <Nav.Link >FAQ</Nav.Link>
           
              
            <Nav.Link href="">
                {
                    user?.uid ?
                    <>
                    <span> {user?.displayName}</span>
                     <Button onClick={handaleLogout} variant='light'>Logout</Button>
                     

                    </>:
                     <>
                     <Link className='link' style={{ textDecoration: 'none' } }to='/login'>login</Link>
                     <Link className='link' style={{ textDecoration: 'none' } }to='/register' >Register</Link>
                    </>
                   
                }
                
               </Nav.Link>
            <Nav.Link  href="#memes">
                {
                    user?.photoURL ?<> <Image style={{height:'40px'}} roundedCircle src={user?.photoURL} data-tip data-for="registerTip"></Image>
                    <ReactTooltip id="registerTip" place="top" effect="solid">
                      {user.displayName}
      </ReactTooltip>
                    </>
                   
                    :
                    <FaUser></FaUser>
                }
              
            </Nav.Link>
          </Nav>
          <div className='d-lg-none text-center text-white '>
            <Leftside ></Leftside>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </div>
    );
};

export default Header;
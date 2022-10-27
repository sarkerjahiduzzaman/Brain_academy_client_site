import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router';
import Header from '../../Shared/Header/Header';
import Leftside from '../../Shared/Leftside/Leftside';

const Main = () => {
    return (
        <div>
            <Header></Header>
             <Container>
                
             <Row>
               <Col lg='3' className='d-none d-lg-block '>
               <Leftside></Leftside>
               </Col>
               <Col lg='9'>
                
               <Outlet></Outlet>
               </Col>
               </Row>
                </Container>  
                     
        </div>
    );
};

export default Main;
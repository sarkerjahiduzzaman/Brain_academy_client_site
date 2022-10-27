import React from 'react';
import { useLoaderData } from 'react-router';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './Course.css'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Pdfg from '../Pdf/Pdf';

const Course = () => {
    const cours=useLoaderData()
    return (
        <div >
           
          <Card className='course'>
            <Card.Img variant="top" src={cours.image_url} />
            <Card.Body>
              <Card.Title>{cours.name}</Card.Title>
              <Card.Text>
               {cours.details}
              </Card.Text>
            </Card.Body>
            <Card.Footer>
                <div className='text-center text-danger'><h2>{cours.instuctor}</h2></div>
                <div className='d-flex justify-content-between'>
                    <h2>{cours.price}</h2>
                    <Button variant='dark' > <Link  style={{ textDecoration: 'none' }} to={`/course/${cours.id}`}> Get Course</Link> </Button>
                </div>
                <div>
              <Pdfg></Pdfg>
                </div>
            </Card.Footer>
            </Card>
          
    
        </div>
    );
};

export default Course;


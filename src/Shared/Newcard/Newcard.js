import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';
const Newcard = ({course}) => {
    const  {name,image_url,details,id}=course
    return (
          
          <div className="col">
    <div className="card">
      <img src={image_url} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{

            details.length>100 ?
            <p>{details.slice(0,100)+'....'}<Link to={`/course/${id}`}>Read More</Link></p> 
            :
            <p>{details}</p>
     }
</p>
      </div>
    </div>
        </div>
    );
};

export default Newcard;
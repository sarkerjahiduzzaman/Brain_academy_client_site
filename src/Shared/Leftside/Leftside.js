import React, { useState } from 'react';
import { useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { DropdownButton, MenuItem } from "react-bootstrap";

const Leftside = () => {
    const [catagories,setCatagories]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/categories')
        .then(res=>res.json())
        .then(data=>setCatagories(data))
    },[])
    return (
        <div>
            <h2>Skill Development Course</h2>
            {
                catagories.map(catagory=> <p>
                    <Link to={`/catagory/${catagory.id}`} style={{ textDecoration: 'none' }}
                    key={catagory.id}>
                     {catagory.name}
                      </Link>
                </p> )
            }
        </div>
    );
};

export default Leftside;
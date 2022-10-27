import React from 'react';
import { useLoaderData } from 'react-router';
import Newcard from '../../Shared/Newcard/Newcard';

const Home = () => {
    const courses=useLoaderData();
    return (
        <div > 
            <h1>This is home component:{courses.length}</h1>
            <div  className="row row-cols-1 row-cols-md-2 g-4">
                 {
                courses.map(course=><Newcard 
                    key={courses._id}
                    course={course}
                ></Newcard>)
            }
            </div>
           
        </div>
    );
};

export default Home;



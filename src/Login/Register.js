import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FaGoogle } from 'react-icons/fa';
import { Authcontext } from '../context/AuthProvider/AuthProvider';

const Register = () => {
    const { providerLogin ,createUser} = useContext(Authcontext);
    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photoURL, email, password);

        createUser(email, password)
        .then( result => {
            const user = result.user;
            console.log(user);
            form.reset();
        })
        .catch( e => console.error(e));
    }



    const googleProvider = new GoogleAuthProvider()

    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.error(error))
    }
    return (
        <div>
            <h2>Please SignUp</h2>
             <Form onSubmit={handleSubmit}>
       

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Enter Full Name</Form.Label>
          <Form.Control name='name' type="name" placeholder="Enter Full Name"  />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Enter Photo Url</Form.Label>
          <Form.Control name='photoURL' type="text" placeholder="Enter Photo Url"  />
        </Form.Group>
        
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control name='email' type="email" placeholder="Enter email"  required/>
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control name='password' type="password" placeholder="Password" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <Button onClick={handleGoogleSignIn} className='mb-2' variant="outline-primary"><FaGoogle></FaGoogle> Log in Google</Button>
        </div>
    );
};

export default Register;
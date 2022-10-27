import { GoogleAuthProvider } from 'firebase/auth';
import React, { useState } from 'react';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FaGoogle } from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router';
import { Authcontext } from '../context/AuthProvider/AuthProvider';

const Login = () => {
    const [error,setError]=useState(''); 

    const { providerLogin,signIn } = useContext(Authcontext);
    const navigate = useNavigate();
    const location=useLocation()


    const from=location.state?.from?.pathname || '/'
    const handleSubmit = event =>{
      event.preventDefault();
      const form = event.target;
      const email = form.email.value;
      const password = form.password.value;
      signIn(email, password)
      .then(result => {
          const user = result.user;
          console.log(user);
          form.reset();
            setError('')
            navigate(from,{replace:true})
        })
        .catch(error => console.error(error))

    }
    const googleProvider = new GoogleAuthProvider()

    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from,{replace:true})
            })
            .catch(error =>{
                 console.error(error)
                 setError(error.message);
                })
    }
    return (
        <div>
             <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control name='email' type="email" placeholder="Enter email" />
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control name='password' type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
        <Form.Text >
            {error}
        </Form.Text>
      </Form>
     
      <Button onClick={handleGoogleSignIn} className='mb-2' variant="outline-primary"><FaGoogle></FaGoogle> Log in Google</Button>
        </div>
    );
};

export default Login;
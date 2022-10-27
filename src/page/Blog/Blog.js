import React from 'react';
import './blog.css'

const Blog = () => {
    return (
        <div className='blog'>
            <div className='question'>
                <h1>What is Cors?</h1>
                <p>CORS stands for Cross-Origin Resource Sharing . It allows us to relax the security applied to an API. This is done by bypassing the Access-Control-Allow-Origin headers, which specify which origins can access the API</p>
            </div>
            <div  className='question'>
                <h1>Why are you using firebase?</h1>
                <p>Indeed, Firebase is a less technical and time-saving alternative to writing full-fledged backend code for dynamic apps.
                 You might also want to consider leveraging this tool if you eventually wish to host and manage your app in the cloud. Being serverless, Firebase removes the need to worry about the technicalities of cloud server configuration.As a Google Cloud service, it also gives you access to other Google products and features, like Google Drive and Sheets. For instance, you can import dummy data from Google Sheets and use it temporarily to serve your app.With Firebase, it's pretty simple to connect and use built-in third-party authentication providers, including Google, Facebook, Twitter, among others. And if you want to use a pre-built authentication UI, you have it at your disposal as well.</p>
                             </div>
                    <div  className='question'><h2>How does Privae Router Work</h2>
                    <p>The react private route component renders child components ( children ) if the user is logged in. If not logged in the user is redirected to the /login page with the return url passed in the location state property.</p>
                    </div>
                    <div  className='question'>
                        <h2>What is Node</h2>
                        <p>Learn about Node.js, a JavaScript runtime for building 

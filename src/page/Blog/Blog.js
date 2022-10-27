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
                        server-side or desktop applications.</p>
                        <h2>How does Node Work</h2>
                        <p>Node.js is the JavaScript runtime environment which is based on Google’s V8 Engine i.e. with the help of Node.js we can run the JavaScript outside of the browser. Other things that you may or may not have read about Node.js is that it is single-threaded, based on event-driven architecture, and non-blocking based on the I/O model.

1 .Node.js Architecture: Node.js is made of Chrome V8 engine which is written in C++ and Libuv which is a multi-platform C library that provides support for asynchronous I/O based events on event loops and thread loops. Don’t worry it is explained in this later at the end. An important thing that we need to remember is that, even though Node.js is made using the V8 engine and Libuv which are written in C or C++, we can still use Node.js in pure JavaScript.

2. Node.js Application: So now that, we have learned about the Node.js architecture, it’s time to learn how a Node.js application runs and this part includes the concept of Node.js being single-threaded and its non-blocking nature as well. So, first of all, what is a thread? A thread in simple terms is basically a set of programming instructions that can be run independently in a computer’s processor and every process that we want to run has its own thread to run the programming instructions and the process can have more than one thread. But, the point to remember is, Node.js application runs only on a single thread and by that, It mean whether that Node.js application is being used by 5 users or 5 million users, it will only run on a single thread which makes the Node.js application blockable (which means that a single line of code can block the whole app because an only single thread is being used). So, to keep the Node.js application running, asynchronous code must be used everywhere having callback functions because as we know that asynchronous code keeps on running in the background and the callback gets executed as soon as the promise gets 
resolved rather than synchronous code which blocks the whole application until it gets finished executing. But, we can still use synchronous code however at someplace in our application and that place is before our application enters Event-loop. Event-loop is what allows Node.js applications to run non-blocking asynchronous I/O based operations i.e, all the asynchronous code is managed and executed within the event-loop and before that, we can use our synchronous code which is in this case known as Top-Level code. So, try to write synchronous code only for those operations which are executed only once at the start of our application and not every time, for Ex: reading some data from your computer memory which later can be requested by some user (many times) in asynchronous code.</p>
                    </div>
        </div>
    );
};

export default Blog;






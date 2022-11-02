// How do you create a simple Express.js application?

const express = require('express');
const app = express()

app.get('/',(req,res) =>{
    console.log(req);
    res.send(`<h1>Login</h1>`)
})
app.get('/Home',(req,res) =>{
    console.log(req);
    res.send(`<h1>Home</h1>`)
})

app.listen('5050',(req,res) =>{
    console.log(`The port connected`);
})

//Implementation of all type of exports in backend application?
//Implement CORS.

const express = require('express');
const api = express()
const cors = require('cors');	
const Data = require("./Data");
api.use(cors());
api.get('/',(req,res) =>{
        console.log(req);
        res.json(Data).status(200);;
    res.end();
    })
   
api.listen('5050',(req,res) =>{
    console.log(`The port connected`);
})																							
//Create a middleware which will be applicable to all the routes?																									

const express = require('express');
const appp = express()

const middleware1 = (req,res,next) =>{
    console.log('Middleware request-1');
    next();
}
const middle = (req,res,next) =>{
    console.log('Middleware request-2');
    next();
}
appp.use(middleware1)
appp.get('/',(req,res) =>{
    console.log(req);
    res.send(`<h1>Login</h1>`)
})
appp.get('/Home',middle,(req,res) =>{
    console.log(req);
    res.send(`<h1>Home</h1>`)
})

appp.listen('5050',(req,res) =>{
    console.log(`The port connected`);
})
																									


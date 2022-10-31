<h1>What are the different types of HTTP requests?</h1>
<p>HTTP (Hypertext Transfer Protocol) specifies a collection of request methods to specify what action is to be performed on a particular resource. 
The most commonly used HTTP request methods are GET, POST, PUT, PATCH, and DELETE. These are equivalent to the CRUD operations (create, read, update, and delete). </p>
<ul>
<li>GET: GET request is used to read/retrieve data from a web server.
GET returns an HTTP status code of 200 (OK) if the data is successfully retrieved from the server.</li>
<li>GET: GET request is used to read/retrieve data from a web server. 
GET returns an HTTP status code of 200 (OK) if the data is successfully retrieved from the server.</li>
<li>PUT: A PUT request is used to modify the data on the server. It replaces the entire content at a particular location with data that is passed in the body payload.
If there are no resources that match the request, it will generate one.</li>
<li>PATCH: PATCH is similar to PUT request, but the only difference is, it modifies a part of the data. 
It will only replace the content that you want to update.</li>
<li>DELETE: A DELETE request is used to delete the data on the server at a specified location.</li>
</ul>
<h1>Explain the concept of middleware in Node.js?</h1>
<ul>
<li>Express.js is a routing and Middleware framework for handling the different routing of the webpage and it works between the request and response cycle.</li>
<li>Middleware gets executed after the server receives the request and before the controller actions send the response.</li>
<li>Middleware has the access to the request object, responses object, and next, it can process the request before the server send a response. An Express-based application is a series of middleware function calls.</li>
<li>The next() function in the express is responsible for calling the next middleware function if there is one.</li>
</ul>
<h1>Explain CORS?</h1>
<p>CORS : (Cross-Origin Resource Sharing) is a mechanism by which data or any other resource of a site could be shared intentionally to a third party website when there is a need. 
Generally, access to resources that are residing in a third party site is restricted by the browser clients for security purposes.</p>
<h1>What is Express? How does it help you to create a backend application?</h1>
<ul>
<li> Express is a small framework that sits on top of Node.js’s web server functionality to simplify its APIs and add helpful new features.</li>
<li>It makes it easier to organize your application’s functionality with middleware and routing.</li>
<li>It adds helpful utilities to Node.js’s HTTP objects.</li>
<li>It facilitates the rendering of dynamic HTTP objects.</li>
</ul>
<h1>Explain min 5 status codes gets used in Backend development?</h1>
<p>An HTTP status code is a message a website's server sends to the browser to indicate whether or not that request can be fulfilled. Status codes specs are set by the W3C. Status codes are embedded in the HTTP header of a page to tell the browser the result of its request. </p>
<ul>
<li>*102 PROCESSING Processing 200 OK OK </li>
<li>*400 BAD_REQUEST Bad Request </li>
<li>*401 UNAUTHORIZED Unauthorized </li>
<li>*402 PAYMENT_REQUIRED Payment Required </li>
<li>*403 FORBIDDEN Forbidden</li>
<li>*404 NOT_FOUND Not Found</li>
<li>*500 INTERNAL_SERVER_ERROR Internal Server Error</li>
<li>*503 - Service Unavailable</li>
</ul>
<h1>Difference between HTTP and HTTPS.</h1>
<ul>
<li>HTTPS is HTTP with encryption. </li>
<li>The only difference between the two protocols is that HTTPS uses TLS (SSL) to encrypt normal HTTP requests and responses.</li>
<li>As a result, HTTPS is far more secure than HTTP.</li>
<li>A website that uses HTTP has http:// in its URL, while a website that uses HTTPS has https://. Some difference of http and https;</li>
</ul>
<h1>What are JWT tokens?</h1>
<ul>
<li> JSON Web Token, is an open standard used to share security information between two parties — a client and a server. </li>
<li>Each JWT contains encoded JSON objects, including a set of claims.</li>
<li>JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.</li>
</ul>

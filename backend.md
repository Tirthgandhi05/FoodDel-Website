PS C:\Users\tirth\OneDrive\Documents\Tirth Gandhi\Food-del\backend> npm init
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help init` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg>` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
package name: (backend)
version: (1.0.0)                                                                                                                
description:                                                                                                                    
entry point: (index.js) server.js                                                                                               
test command:                                                                                                                   
git repository:                                                                                                                 
keywords:                                                                                                                       
author:                                                                                                                         
license: (ISC)
About to write to C:\Users\tirth\OneDrive\Documents\Tirth Gandhi\Food-del\backend\package.json:

{
  "name": "backend",
  "version": "1.0.0",
  "main": "server.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC",
  "description": ""
}


Is this OK? (yes)

npm notice
npm notice New minor version of npm available! 10.8.3 -> 10.9.0
npm notice Changelog: https://github.com/npm/cli/releases/tag/v10.9.0
npm notice To update run: npm install -g npm@10.9.0
npm notice
PS C:\Users\tirth\OneDrive\Documents\Tirth Gandhi\Food-del\backend> npm install express mongoose jsonwebtoken bcrypt cors doten body-parser multer stripe validator nodemon
npm error code E404
npm error 404 Not Found - GET https://registry.npmjs.org/doten - Not found
npm error 404
npm error 404  'doten@*' is not in this registry.
npm error 404
npm error 404 Note that you can also install from a
npm error 404 tarball, folder, http url, or git url.
npm error A complete log of this run can be found in: C:\Users\tirth\AppData\Local\npm-cache\_logs\2024-11-04T18_49_18_207Z-debug-0.log
PS C:\Users\tirth\OneDrive\Documents\Tirth Gandhi\Food-del\backend> npm install express mongoose jsonwebtoken bcrypt cors dotenv body-parser multer stripe validator nodemon
npm warn deprecated inflight@1.0.6: This module is not supported, and leaks memory. Do not use it. Check out lru-cache if you want a good and tested way to coalesce async requests by a key value, which is much more comprehensive and powerful.
npm warn deprecated rimraf@3.0.2: Rimraf versions prior to v4 are no longer supported
npm warn deprecated npmlog@5.0.1: This package is no longer supported.
npm warn deprecated glob@7.2.3: Glob versions prior to v9 are no longer supported
npm warn deprecated are-we-there-yet@2.0.0: This package is no longer supported.
npm warn deprecated gauge@3.0.2: This package is no longer supported.

added 203 packages, and audited 204 packages in 7s

23 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities

Express: A web framework that simplifies routing and middleware handling.
Mongoose: An ODM (Object Data Modeling) library for MongoDB, which lets you define schemas and work with data in a more structured way.
jsonwebtoken (JWT): A library for handling JSON Web Tokens, used for stateless authentication.
bcrypt: For hashing passwords securely.
cors: To manage Cross-Origin Resource Sharing, which is useful when your frontend and backend are on different domains or ports.
dotenv: For environment variables, which is a good practice for managing sensitive data.
body-parser: Now typically bundled with Express, it’s used for parsing incoming request bodies.
Multer: For handling file uploads, a common need in applications that manage images or files.
Stripe: For handling payments. It’s advanced, but very useful in building a complete app with a payment feature.
Validator: Useful for input validation, which is essential for building secure and robust applications.
Nodemon: Automatically restarts the server when you make changes, which is a big productivity booster.


Folders Added witht the contents:
1) config Folder - Configuration Files
What It Is: Imagine this folder as a central place for all the settings and preferences your app needs to work. Instead of scattering these settings around, you keep them in one place.
What’s Inside: Things like database connection details (where your data is stored), and any other special options your app might need to work correctly. It’s like setting up the controls before using a machine.
Example: If your app connects to a database, the config folder might have a file called database.js that has all the information needed to connect, like the database name, username, and password.

2) controller Folder - Controls How the App Works
What It Is: Controllers are like the “brains” of your app. They decide what happens when someone interacts with the app, like pressing a button or submitting a form.
What’s Inside: Each file in here represents a specific part of the app. For example, if you’re building a shopping app, you might have a ProductController to handle all product-related actions and a UserController to handle user actions.
Example: If someone requests a list of all products, the ProductController decides what to do — it might tell the app to get the product data and then send it back to the user.

3) middleware Folder - Adds Extra Steps to Requests
What It Is: Middleware is like a series of checkpoints. When someone sends a request to your app (for example, to log in or view a page), middleware steps in and checks things before the app responds.
What’s Inside: Files for each “check” or “step” that needs to happen. Some common examples are:
Authentication: Making sure the user is logged in.
Logging: Keeping a record of the requests that come in.
Example: Imagine a security guard at a building entrance. The guard (middleware) checks if a person is allowed to enter before letting them in. Middleware does similar checks for your app.

4) models Folder - Represents the Data Structure
What It Is: Models are like blueprints for the types of data in your app. They define what the data looks like, and they make it easy to work with the data in your code.
What’s Inside: Each model file represents a different type of data. For example, a User model defines what information a user has (like name, email, and password).
Example: Imagine a form where you enter information. The User model defines what fields are in the form and what kind of data each field should accept.

5) .env File - Environment Variables
What It Is: This file is like a list of secret settings or values your app needs. These values are not directly in your code for security reasons, especially for sensitive information like passwords.
What’s Inside: Each line in the .env file is a variable that holds some setting. For example:
makefile
Copy code
DATABASE_URL=mydatabaseurl
API_KEY=mysecretkey
PORT=3000
Example: Instead of putting your database password in your code where anyone can see it, you put it in the .env file. When your app needs the password, it looks it up here instead.




```javascript
import express from "express"
import cors from "cors"



// app config
const app = express()
const port = 4000

//middleware
app.use(express.json())
app.use(cors())

app.get("/",(req,res) => {
    res.send("API Working")
})

app.listen(port,()=>{
    console.log(`Server Started on http://localhost:${port}`)
})
```
express: Express is a popular web framework for Node.js. It simplifies setting up a web server and handling HTTP requests. Think of it as a tool that helps you quickly set up routes (URL endpoints) for your web application.

cors: CORS stands for Cross-Origin Resource Sharing. It’s a security feature of web browsers that restricts how resources (like your API) can be requested by other websites. By default, browsers block cross-origin requests (i.e., requests from other domains), but CORS allows you to control who can access your API. The cors library is a middleware that makes it easy to enable CORS in Express apps.

const app = express(): This line creates an instance of an Express application. app will be the main object that handles everything related to the server, such as routing, middleware, and configuration.

const port = 4000: Here, we define the port number on which our server will listen. A port is like a “door” through which a web application receives requests. The number 4000 is arbitrary; it’s simply a common practice to use ports like 3000 or 4000 in development.

Middleware: Middleware functions are functions that run between receiving a request and sending a response. In Express, app.use() is used to add middleware functions. These functions can modify requests, add security, or handle errors before they’re passed to your main route handlers.
Here, two middleware functions are used:

app.use(express.json()): This middleware function parses incoming requests with JSON payloads. It’s needed because by default, Express does not automatically handle JSON data in requests. So if you send JSON data in a request body, express.json() converts it into a JavaScript object that you can access in your route handler.

app.use(cors()): This enables CORS for your application, allowing it to accept requests from different origins (domains). This is useful when your frontend and backend are hosted on different URLs, like if your frontend is on http://localhost:3000 and your backend is on http://localhost:4000. This middleware will handle setting the appropriate CORS headers, which let the browser know that requests from different domains are allowed.

app.get(): This sets up a route handler for GET requests to the root URL (in this case, /). Routes define what response is sent when a client accesses a particular URL.
"/": This part specifies the URL path. Here, it’s the root path, meaning that when a request is made to http://localhost:4000/, this route handler will be triggered.

(req, res) => {...}: This is an arrow function that acts as the route handler, which defines what should happen when a request is made to the root path.
req and res:
req (Request): This object represents the incoming HTTP request, containing details like parameters, query strings, headers, and body data.
res (Response): This object represents the response that will be sent back to the client. You can use it to specify what the response should be (e.g., a success message, error, or data).
res.send("API Working"): This line sends a response back to the client with the text “API Working”. send() is a method of the res object that sends a response body to the client. Here, it simply sends a message indicating that the API is working correctly.

app.listen(): This method starts the server and makes it listen for incoming connections on a specified port.
port: This variable holds the port number (in this case, 4000), so the server will listen on http://localhost:4000.
Callback Function () => {...}: When the server starts successfully, this callback function is triggered, which logs a message to the console saying that the server is running and specifies the URL where you can access it.

```js
import mongoose from "mongoose";

export const connectDB = async() =>{
    await mongoose.connect('mongodb+srv://tirthg2612:T%21rt%23%40data@cluster0.emv5y.mongodb.net/food-del').then(() =>console.log("DB Connected"));
}
```

export const connectDB = async () => {...}
This line defines an asynchronous function connectDB, which is responsible for connecting to MongoDB. Since establishing a database connection can take time (due to network latency and other factors), the function is marked with async to handle the asynchronous nature of the operation.

export: This makes the function available for import in other parts of your application (e.g., in your main Express server file, so you can call connectDB() when starting the server).

await mongoose.connect('mongodb+srv://tirthg2612:T%21rt%23%40data@cluster0.emv5y.mongodb.net/food-del')
mongoose.connect(): This is the method provided by Mongoose to establish a connection to a MongoDB database. It takes a MongoDB connection URI as a parameter, which specifies the MongoDB instance you want to connect to.

MongoDB URI: The URI you're using here is the connection string that MongoDB Atlas provides for connecting to your cloud-hosted database.

mongodb+srv://: This part indicates that you're using a MongoDB Atlas "SRV" connection string, which is a DNS-based connection format for MongoDB Atlas clusters.
tirthg2612:T%21rt%23%40data: This is your username and password, URL-encoded for special characters.
T%21 is the encoded form of !
rt%23 is the encoded form of #
%40 is the encoded form of @
@cluster0.emv5y.mongodb.net: This is your MongoDB Atlas cluster’s address, which uniquely identifies your hosted MongoDB instance.
/food-del: This is the database name you want to connect to within the cluster. If the database doesn't exist, MongoDB will automatically create it for you once you insert some data.

await: This keyword is used to wait for the promise returned by mongoose.connect() to resolve. Since database connections can take some time, this ensures the application doesn’t proceed until the connection is successfully established.

.then(() => console.log("DB Connected"));
After the connection attempt completes, then() is used to handle the success case. If the connection is successful, this function will execute and print "DB Connected" to the console, indicating that your MongoDB database connection is now active and working.

The function console.log("DB Connected") is a simple success message to inform you that the connection to the MongoDB cluster has been established successfully.

In modern JavaScript, async and await are used to handle asynchronous code in a more readable and structured manner than traditional callback functions or promises alone.

async: Marks the function as asynchronous, meaning that the function will always return a promise, even if no explicit promise is returned within the function. You can then use await inside this function to wait for promises to resolve.

await: It’s used to pause the execution of the function until the promise resolves. In this case, we are pausing the execution until the database connection is established.


```jsx
import express from "express";
import { addFood } from "../controllers/foodController.js";
import multer from "multer";

const foodRouter = express.Router();
```

routers are actually responsible to call the controllers like main logic controllers ka but konsa controller call karna uska logic router ka.
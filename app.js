// Dependencies
const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
// var public = __dirname + "/public/";

// Globals
const PORT = 9000;

// Set-up app
const app = express();
app.use(bodyParser.json());
app.use(cors());

// Set Static Folder (has webpage files like index.html)
app.use(express.static(path.join(__dirname, 'public')));
// app.use('/static', express.static('public'));

// Post for a cookie
app.post('/postme', (req, res, next) => {
    console.log(req.body);
    const email = req.body.email;
    const password = req.body.password;
    
    const options = {
        maxAge: 100000, // would expire after 15 minutes
        httpOnly: false, // The cookie only accessible by the web server
        signed: false // Indicates if the cookie should be signed
    };
    console.log(email);
    console.log(password);
    res.cookie('user', email, options);
    res.send("ok.");
});

// Post for a cookie
app.get('/getme', (req, res) => {
    const options = {
        maxAge: 100000, // would expire after 15 minutes
        httpOnly: false, // The cookie only accessible by the web server
        signed: false // Indicates if the cookie should be signed
    };
    res.cookie('test', "testvalue", options);
    res.send("ok.");
});

// app.get('/', function(req, res) {
//     res.sendFile(path.join(public + "index.html"));
// });

// app.use('/', express.static(public));


// Start server
app.listen(PORT, () => {
    console.log("Server started on port " + PORT);
});



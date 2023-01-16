from index.js
```
const express = require("express");
const router = express.Router();

// Do work here
router.get("/", (req, res) => {
  const broder = { name: "brian", age: 45, cool: true };
  // res.send('Hey! It works!');
  // res.json(broder);
  // TRY: http://localhost:7777/?name=brian$cool=true
  // res.send(req.query.name);
  // res.json(req.query);
  res.render("hello", {
    name: "brian",
    dog: "Deputy",
    breed: req.query.breed, // http://localhost:7777/?breed=wolf
    title: "I go nuts for donuts",
  });
});

router.get("/reverse/:name", (req, res) => {
  const reverse = [...req.params.name].reverse().join("");
  res.send(reverse);
});

module.exports = router;
```

#### MVC
1. M - Model: Fetching data from db 
2. V - View: Templating (Pug)
3. C - Controller: Traffic cop gets data from Model and sends it to View

##### Middleware
  Does any work between the request and the response, (data normalization, fetching data, body parsing, authorizeUser, etc.)
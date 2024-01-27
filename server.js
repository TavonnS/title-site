const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');

const app = express();
const port = 3000;

const hbs = exphbs.create({
  defaultLayout: 'main',
  extname: '.hbs',
});

// Configure Handlebars as the view engine
app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');

app.use(express.static(path.join(__dirname, 'public')));

// Define a simple route
app.get('/', (req, res) => {
  // Render the 'home' view with a message variable
  res.render('homepage');
});

app.get('/about', (req, res) => { 
  res.render('about');
});

app.get('/contact', (req, res) => {
  res.render('contact');
});


// Start the server
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});

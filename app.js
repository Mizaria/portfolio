const express = require('express');
const app = express();
const path = require('path');

// Set EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files from the 'public' folder
app.use('/public', express.static(path.join(__dirname, 'public')));

// Route to render the EJS file with dynamic variables
app.get('/', (req, res) => {
  res.render('Front', { 
    EnterPage: 'Enter', 
    heading: 'Welcome To My Portfolio'  
  });
});
app.get('/Home', (req, res) => {
  res.render('Home', { 
   
  });

});
app.get('/C337', (req, res) => {
  res.render('C337', { 
  });
});
app.get('/C337p', (req, res) => {
  res.render('C337process', { 
  });
});
app.get('/C257', (req, res) => {
  res.render('C257', { 
  });
});
app.get('/C257p', (req, res) => {
  res.render('C257process', { 
  });
});
app.get('/C257p2', (req, res) => {
  res.render('C257process2', { 
  });
});
app.get('/C257p3', (req, res) => {
  res.render('C257process3', { 
  });
});
app.get('/C218', (req, res) => {
  res.render('C218', { 
  });
});
app.get('/C218p', (req, res) => {
  res.render('C218process', { 
  });
});
app.get('/C218p2', (req, res) => {
  res.render('C218process2', { 
  });
});
app.get('/C219', (req, res) => {
  res.render('C219', { 
  });
});
app.get('/C219p', (req, res) => {
  res.render('C219process', { 
  });
});


app.get('/aboutme', (req, res) => {
  res.render('AboutMe', { 
   
  });

});
app.get('/contactme', (req, res) => {
  res.render('Contact', { 
   
  });

});



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});


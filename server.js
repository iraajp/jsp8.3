const express = require('express');
const app = express();
const port = 3005;

// Serve static files (for the form)
app.use(express.static(__dirname));

// Handle form submission
app.get('/userinfo', (req, res) => {
  const name = req.query.userName || '(not provided)';
  const bdate = req.query.birthDate || '(not provided)';
  const email = req.query.emailAddr || '(not provided)';
  const lucky = parseInt(req.query.luckyNo) || 0;
  
  // HTML escape function
  const escape = (str) => String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
  
  res.send(`
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <title>Practical 8.3: User Information</title>
  <style>
    body {
      font-family: system-ui, -apple-system, Arial, sans-serif;
      padding: 20px;
      background-color: white;
    }
    ul {
      line-height: 2;
    }
  </style>
</head>
<body bgcolor="white">
  <h2>Practical 8.3: User Information Display</h2>
  <ul>
    <li>Name : ${escape(name)}</li>
    <li>BirthDate : ${escape(bdate)}</li>
    <li>EMail : ${escape(email)}</li>
    <li>Lucky : ${lucky}</li>
  </ul>
  <p><a href="/">Go back to form</a></p>
</body>
</html>
  `);
});

// Serve the form at root
app.get('/', (req, res) => {
  res.send(`
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <title>Practical 8.3: User Info Form</title>
  <style>
    body {
      font-family: system-ui, -apple-system, Arial, sans-serif;
      padding: 20px;
      background-color: white;
    }
    label {
      display: block;
      margin-top: 10px;
    }
    input {
      margin-top: 5px;
      padding: 5px;
      width: 300px;
    }
    button {
      margin-top: 15px;
      padding: 8px 20px;
    }
  </style>
</head>
<body>
  <h2>Practical 8.3: User Information Form</h2>
  <form action="/userinfo" method="GET">
    <label>
      User Name:
      <input type="text" name="userName" required />
    </label>
    
    <label>
      Birth Date:
      <input type="date" name="birthDate" required />
    </label>
    
    <label>
      Email Address:
      <input type="email" name="emailAddr" required />
    </label>
    
    <label>
      Lucky Number:
      <input type="number" name="luckyNo" required />
    </label>
    
    <div>
      <button type="submit">Submit</button>
    </div>
  </form>
</body>
</html>
  `);
});

app.listen(port, () => {
  console.log(`Practical 8.3 (userinfo) running at http://localhost:${port}/`);
});

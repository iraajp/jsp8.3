const express = require('express');
const app = express();
const port = 3005;

app.use(express.static(__dirname));

app.get('/submit', (req, res) => {
  const name = req.query.userName || '';
  const bdate = req.query.birthDate || '';
  const email = req.query.emailAddr || '';
  const lucky = req.query.luckyNo || '';
  
  res.json({
    name: name,
    birthDate: bdate,
    email: email,
    luckyNumber: lucky
  });
});

app.listen(port, () => {
  console.log('Server running on http://localhost:' + port);
});

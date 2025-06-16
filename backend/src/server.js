const express = require('express');

app.use('/api/articles', require('./routes/articles'));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
const express = require('express');
const app = express();
const PORT = 5000;

const articles = [
  { id: 1, title: "Race Day Highlights", summary: "Top moments from the weekend." },
  { id: 2, title: "Behind the Pit Wall", summary: "A look at the team strategy." }
];

app.get('/api/articles', (req, res) => {
  res.json(articles);
});

app.listen(PORT, () => {
  console.log("Server running on http://localhost:8080");
});

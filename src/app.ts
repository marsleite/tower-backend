import express from 'express';

const app = express();

const port = process.env.PORT || 5000;

app.get('/', (_req, res) => {
  return res.send('Hello World!');
});

app.get('/api', (req, res) => {
  const { code } = req.query;

  return res.json({ code });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
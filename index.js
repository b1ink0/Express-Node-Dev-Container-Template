import express from 'express';
const app = express();

const PORT = process.env.BACKEND_PORT || 8080;
app.get('/', (req, res) => res.send('Hello World! This is my first Node.js app!'));
app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));
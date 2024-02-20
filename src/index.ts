import express from 'express';
import routes from './routes';

const app = express();

// TODO Use this way
app.use('/api', routes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

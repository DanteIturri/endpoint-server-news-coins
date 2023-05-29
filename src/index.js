import express from 'express';
import morgan from 'morgan';
import * as dotenv from 'dotenv';
dotenv.config({
  path: './.env',
});

/* Importing the routes from the routes folder. */
import indexRoute from './routes/index.routes.js';
import coinsRoutes from './routes/coins.routes.js';
import newsRoutes from './routes/news.routes.js';

/* This is creating a new express application and setting the port to the environment variable PORT. */
const app = express();
const PORT = process.env.PORT;

/* A middleware that logs all requests to the console. */
app.use(morgan('dev'));
app.use(express.json());

/* Telling the app to use the indexRoute when the user goes to the root of the website. */
app.use(indexRoute);
app.use(coinsRoutes);
app.use(newsRoutes);

/* Listening to port 3000 and logging a message to the console. */
app.listen(PORT, () => {
  console.log(`Server listen on port http://localhost:${PORT}`);
});

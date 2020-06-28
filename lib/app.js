import 'dotenv/config.js';
import express from 'express';

import bodyParser from 'body-parser';

import indexRouter from './routes/index';

const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/', indexRouter);

app.listen(process.env.PORT, () => {
  console.log(`Server started on port ${process.env.PORT}`);
});

export default app;
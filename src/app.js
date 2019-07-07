import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import { userRoute } from './routes';

dotenv.config();

const app = express();

//connect to mongodb
mongoose.connect(process.env.MONGODB_URI, {
  useCreateIndex: true,
  useNewUrlParser: true
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', userRoute);
app.get('/', (req, res) => {
  res.status(200).json({ message: 'Welcome to my API' });
});

export default app;

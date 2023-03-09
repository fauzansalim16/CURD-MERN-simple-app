import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import PostRoute from './routes/PostRoute.js';

const app = express();
mongoose.connect('mongodb://localhost:27017/MERN_Stack', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', (error) => console.log(error));
db.once('open', () => console.log('database berjalan...'));

app.use(cors());
app.use(express.json());
app.use(PostRoute);

app.listen(5000, () => console.log('server berjalan...'));

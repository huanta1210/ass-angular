import express from 'express';
import router from './routers';
import cors from 'cors';
import { connect } from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
const app = express();

app.use(express());
app.use(express.json());
const corsOptions = {
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
};

app.use(cors(corsOptions));

connect(process.env.MONGO_URL);
app.use('/api', router);

export const viteNodeApp = app;

import 'dotenv/config';
import express from 'express';
import mongoose from 'mongoose';

const app = express();
const port = Number(process.env.PORT) || 5000;
app.use(express.json());

app.get('/api/hello', (_req, res) => {
  res.json({ message: 'Hello from Hoocar API' });
});

async function start() {
  if (process.env.MONGODB_URI) {
    try {
      await mongoose.connect(process.env.MONGODB_URI);
      console.log('MongoDB connected');
    } catch (error) {
      console.error('MongoDB connection failed:', error.message);
      process.exitCode = 1;
      return;
    }
  } else {
    console.log('MONGODB_URI is not set; API is running without a database.');
  }

  app.listen(port, () => console.log(`Hoocar API: http://localhost:${port}`));
}

start();

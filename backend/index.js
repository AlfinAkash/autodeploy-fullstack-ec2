import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import authRoutes from './routes/auth.js';

dotenv.config();
const app = express();


app.use(cors({
  origin: '*', 
  credentials: true, 
}));

app.use(express.json());
app.use(cookieParser());


app.get('/', (req, res) => {
  res.send('Backend server is running ');
});


app.use('/api/v1/auth', authRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
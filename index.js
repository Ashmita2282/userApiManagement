import express from 'express';
import userRoutes from './routes/userRoutes.js';
import logger from './middleware/logger.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(express.json());
app.use(logger); // Middleware for logging

app.use('/users', userRoutes); // Mount user routes

// 404 handler for unknown routes
app.use((req, res) => {
  res.status(404).json({ error: 'Resource not found' });
});

// Error-handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

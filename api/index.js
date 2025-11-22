import express from 'express';
const app = express();

// Your routes here
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from serverless!' });
});

// Export for Vercel serverless
export default app;
import express from 'express'; 
import healthRoutes from './routes/health.routes.js';
import userRoutes from './routes/user.routes.js';


const app = express(); 
app.use(express.json());

app.use(`/api`,healthRoutes);
app.use('/api',userRoutes);

export default app ;
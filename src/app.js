import express from 'express'
import employeeRoutes from './routes/employees.routes.js';
import indexRoutes from './routes/index.routes.js'

const app = express();

app.use(express.json());
app.get("/", (req, res) => {
    res.send("API working 🎉");
});
app.use('/api/employees', employeeRoutes);
app.use(indexRoutes);

app.use((req, res) => {
    res.status(404).json({message:"endpoint not found"})
});

export default app;
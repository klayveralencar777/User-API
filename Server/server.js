import express from 'express'
import userRoutes from '../routes/userRoutes.js'

const app = express();

app.use(express.json());
app.use('/api', userRoutes);



const port = 5000;

app.listen(port, () => {
    console.log(`Server running on port ${port}`);

})


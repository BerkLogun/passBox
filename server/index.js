import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';

import passRouter from './router/passRouter.js'

dotenv.config();

const app = express();
app.use(express.json());






app.use('/passlists', passRouter)




app.listen(process.env.PORT, () =>{
    console.log('listening on port '+process.env.PORT)

    mongoose.connect(process.env.MONGO_URI, () => {
        useNewUrlParser: true;
        useUnifiedTopology: true;
        useFindAndModify: true;
    }).then(() => {console.log('database baglantısı aktif')}).catch(() => console.log(err))
})
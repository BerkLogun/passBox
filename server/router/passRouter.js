import express from 'express';
import mongoose from 'mongoose';

import pasModel from '../db/passModel.js';

const router = express.Router()

// get all passwords from the db
router.get('/', async (req, res) => {
    try {
        const passwords = await pasModel.find()
        res.json(passwords)
    } catch (error) {
        
    }
})


router.post('/', async (req, res) => {
    try {
        const password = req.body
        const createdPasswords = await pasModel.create(password)
        res.json('passCreated')
    } catch (error) {
        
    }
})


router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params

        if(!mongoose.Types.ObjectId.isValid(id))
            res.status(404).json({message: "bole bisi yok"})

        await pasModel.findByIdAndDelete(id)
        res.json({message: "kayit silindi"})
    } catch (error) {
        
    }
})

export default router
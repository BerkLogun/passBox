import mongoose from 'mongoose';

const passScheme = mongoose.Schema({
    username: {
        type: String,
        required: true,
    },

    website: {
        type: String,
        required: false,
    },

    savedPass: {
        type: String,
        required: true,
    },

    createdAt: {
        type: Date,
        default: new Date(),
    }
})


const passModel = mongoose.model('passwordList', passScheme)

export default passModel
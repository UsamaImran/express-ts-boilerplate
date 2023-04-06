import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
})

interface UserDoc extends mongoose.Document {
    username: string
    password: string
}

export const User = mongoose.model<UserDoc>('User', userSchema)

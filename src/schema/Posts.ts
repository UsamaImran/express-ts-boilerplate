import mongoose from 'mongoose'

const postSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
})

export interface PostDoc extends mongoose.Document {
    title: string
    description: string
    userId: string
}

export const Post = mongoose.model<PostDoc>('Posts', postSchema)

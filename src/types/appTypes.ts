import mongoose from 'mongoose'
import type { Router } from 'express'
interface IRoutes {
    endpoint: string
    path: string
}

export interface IRoute {
    endpoint: string
    path: Router
}

export type MongoDocument = mongoose.Document

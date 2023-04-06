import { NextFunction, Request, Response } from 'express'

export const authMiddleware = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    console.log('---------')
    if (true) next()
    else res.send({ ERROR: 'ERROR' })
}

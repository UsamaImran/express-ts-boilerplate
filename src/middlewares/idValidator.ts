import { NextFunction, Request, Response } from 'express'

export const idValidatorMiddleWare = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    console.log('id validator hit')
    next()
}

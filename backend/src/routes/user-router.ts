import express from 'express'

import { Page } from '../types/user-types'
import { getUsersPage } from '../services/users/get-users-page'

export const userRouter = express.Router()

userRouter.get('/', async (req, res) => {
    const page = req.query as unknown as Page;
    const result = await getUsersPage(page);

    res.status(200).json(result);
})
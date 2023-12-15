import express from 'express'
import cors from 'cors'

import { userRouter } from './routes/user-router'

const port = 3000
const corsOptions = {
    origin: '*'
}

const app = express()

app.use(cors(corsOptions))

app.use('/users', userRouter)

app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`)
})


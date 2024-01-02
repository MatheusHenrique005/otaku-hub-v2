import * as yup from 'yup'

export const createUserSchema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().required().min(8).max(255),
    name: yup.string().required().min(1).max(255),
    nickname: yup.string().required().min(1).max(255),
})
import * as yup from 'yup';

const EMAIL = yup
    .string()
    .matches(
        /^[+\w-]+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
        'Enter a valid email'
    )
    .required('Email is required')
    .max(150, 'Email must be maximum 150 characters');

const PASSWORD = yup
    .string()
    .matches(/.{6,15}$/, 'Password must be minimum 6 and maximum 15 characters')
    .required('Password is required')

export const LoginValidator = yup.object({
    email: EMAIL,
    password: PASSWORD
})
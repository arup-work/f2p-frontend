import { Form, Formik } from "formik";
import React, { useCallback } from "react";
import { LoginValidator } from "../../Shared/Validator";
import { Box, FormGroup, TextField, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import MuiButton from "../../Componets/MUI/MuiButton";
import StyledAuthLayout from "../../Componets/StyledAuthLayout";
import AuthService from "../../Services/AuthService";
import { login } from '../../Redux/Reducers/Auth.Reducer';

const initialValues = {
    email: '',
    password: ''
}
const Login = () => {
    const dispatch = useDispatch();
    const handleFormSubmit = async (values, { setSubmitting }) => {
        const { email, password } = values;
        try {
            const response = await AuthService.login(email, password);
            
            if (response) {
                dispatch(
                    login({
                        token: response.token,
                        user: response.user,
                    })
                );
            }
        } catch (error) {
            console.error("Login failed:", error);
        } finally {
            setSubmitting(false); // important: stop the formik submitting state
        }
    }

    return (
        <StyledAuthLayout>
            <Typography variant="h5" gutterBottom align="center">
                Login
            </Typography>
            <Formik initialValues={initialValues} validationSchema={LoginValidator} onSubmit={handleFormSubmit}>
                {({ values, handleChange, handleBlur, handleSubmit, touched, errors, isSubmitting }) => {
                    return (
                        <Form noValidate onSubmit={handleSubmit} className="mt-d">
                            <FormGroup>
                                <label className="mb-h" htmlFor="email">
                                    Email
                                </label>
                                <TextField
                                    id="email"
                                    name="email"
                                    type="email"
                                    placeholder="you@company.com"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.email}
                                    error={touched.email && !!errors?.email}
                                    helperText={touched.email && errors?.email ? String(errors?.email) : ''}
                                    sx={{ mb: 2 }}
                                >
                                </TextField>
                            </FormGroup>
                            <FormGroup>
                                <label className="mb-h" htmlFor="password">
                                    Password
                                </label>
                                <TextField
                                    id="password"
                                    name="password"
                                    type="password"
                                    placeholder="******"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.password}
                                    error={touched.password && !!errors?.password}
                                    helperText={touched.password && errors?.password ? String(errors?.password) : ''}
                                    sx={{ mb: 2 }}
                                >
                                </TextField>
                            </FormGroup>
                            <Box className="pt-d">
                                <MuiButton loading={isSubmitting} type="submit" fullWidth size="large">
                                    Login
                                </MuiButton>
                            </Box>
                        </Form>
                    )
                }}
            </Formik>
        </StyledAuthLayout>
    )
}

export default Login;
import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../Pages/Auth/Login";

const RoutesComponent = () => {
    return (
        <Routes>
            <Route
                path="/"
                name="Login"
                element={
                    <Suspense fallback="<div>Loading...</div>">
                        <Login />
                    </Suspense>

                }
            />
        </Routes>
    )
}

export default RoutesComponent;

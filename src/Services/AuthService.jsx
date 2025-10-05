import apiRequest from "../Helpers/Utils/Api"
import { showErrorToast, showSuccessToast } from "../Helpers/Utils/ToastUtils";

const AuthService = {
    login: async (email, password) => {
        try {
            const response = await apiRequest("auth/login", "POST", { email, password });
            showSuccessToast(response.message);
            return response;
        } catch (error) {
            showErrorToast(error.message);
        }
    },
    register: async (name, email, password) => {
        try {
            const response = await apiRequest("auth/register", "POST", { name, email, password });
            console.log(response);

            showSuccessToast(response.message);
            return response;
        } catch (error) {
            showErrorToast(error.message);
            return;
        }
    }
}

export default AuthService;
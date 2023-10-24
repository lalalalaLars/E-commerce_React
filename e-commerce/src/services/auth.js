import api from "./api";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginSuccess, logout } from "../features/authSlice";

export function useAuth() {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  const navigate = useNavigate();

  const login = async (credentials) => {
    const response = await api.post("/auth/login", credentials);
    localStorage.setItem("token", response.data.token);
    console.log("Login API Response:", response.data);
    dispatch(loginSuccess({ token: response.data.token }));

    navigate("/");
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    dispatch(logout()); // Dispatch the logout action

    navigate("/");
  };

  return {
    login,
    logout: handleLogout,
    isAuthenticated: !!token,
  };
}

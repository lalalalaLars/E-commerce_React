import { useState } from "react";
import { useAuth } from "../services/auth";

const LoginForm = () => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const { login } = useAuth();

  const handleLogin = () => {
    login(credentials);
  };

  return (
    <>
      <div className="login-container">
        <div className="login-form">
          <input
            type="text"
            placeholder="Username"
            value={credentials.username}
            onChange={(e) =>
              setCredentials({ ...credentials, username: e.target.value })
            }
          />
          <input
            type="password"
            placeholder="Password"
            value={credentials.password}
            onChange={(e) =>
              setCredentials({ ...credentials, password: e.target.value })
            }
          />
          <button onClick={handleLogin} className="btn">
            Login
          </button>
        </div>
      </div>
    </>
  );
};

export default LoginForm;

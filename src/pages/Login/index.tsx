import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import authService from "../../api/services/authService";
import { AppRoutes } from "../../routes";
import { TloginData } from "../../Types";

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let formData = new FormData(e.currentTarget);
    const data: TloginData = {
      email: formData.get("email"),
      password: formData.get("password"),
    };
    authService.login(data);
  };

  //   useEffect(() => {
  // const user:

  //     if (user) navigate(AppRoutes.HOME);
  //   }, [navigate, user]);

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Email:{" "}
          <input
            required
            name="email"
            type="email"
            value="sreehari@gmail.com"
            onChange={() => {}}
          />
        </label>
        <br />
        <label>
          Password:{" "}
          <input
            required
            name="password"
            type="password"
            value="qweqweqwe"
            onChange={() => {}}
          />
        </label>
        <br />
        <button type="submit">
          {/* {loading === "pending" ? "Loading..." : "Login"} */}
        </button>
      </form>
    </div>
  );
};

export default Login;

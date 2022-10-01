import { useMutation, useQueryClient } from "@tanstack/react-query";
import React from "react";
import { useNavigate } from "react-router-dom";
import authService from "../../api/services/authService";
import { AppRoutes } from "../../routes";
import { TloginData } from "../../Types";
import { storage } from "../../utils/storageUtils";

const Login = () => {
  const navigate = useNavigate();

  // Access the client
  const queryClient = useQueryClient();

  const loginQuery = useMutation(
    (data: TloginData) => {
      return authService.login(data);
    },
    {
      onSuccess: (data) => {
        const userData = { ...data?.data.user, token: data?.data?.token };
        storage.setItem("user", userData);
        navigate(AppRoutes.HOME);
        queryClient.invalidateQueries();
      },
    }
  );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let formData = new FormData(e.currentTarget);
    const data: TloginData = {
      email: formData.get("email"),
      password: formData.get("password"),
    };
    loginQuery.mutate(data);
  };

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
          {loginQuery.isLoading ? "Loading..." : "Login"}
        </button>
      </form>
    </div>
  );
};

export default Login;

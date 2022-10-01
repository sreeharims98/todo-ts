import React from "react";
import { useNavigate } from "react-router-dom";
import { AppRoutes } from "../routes";
import { TUserData } from "../Types";
import { storage } from "../utils/storageUtils";

function useUserHook() {
  const navigate = useNavigate();

  const [user, setUser] = React.useState<TUserData | null>(null);

  const getUser = () => {
    if (user) return user;
    else return storage.getItem("user");
  };
  React.useEffect(() => {
    const userGot = getUser();
    setUser(userGot);
  }, []);

  const logout = () => {
    setUser(null);
    storage.removeItem("user");
    navigate(AppRoutes.LOGIN);
  };

  return [user, logout] as const;
}

export default useUserHook;

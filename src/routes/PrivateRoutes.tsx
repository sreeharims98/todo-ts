import { Outlet, Navigate } from "react-router-dom";
import { AppRoutes } from ".";
import { storage } from "../utils/storageUtils";

const PrivateRoutes = () => {
  const user = storage.getItem("user");

  return user ? <Outlet /> : <Navigate to={AppRoutes.LOGIN} />;
};

export default PrivateRoutes;

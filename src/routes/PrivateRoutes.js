import { Outlet, Navigate } from "react-router-dom";
import { AppRoutes } from ".";

const PrivateRoutes = () => {
  const { user } = {};

  return user ? <Outlet /> : <Navigate to={AppRoutes.LOGIN} />;
};

export default PrivateRoutes;

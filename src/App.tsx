import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { AppRoutes } from "./routes";
import PrivateRoutes from "./routes/PrivateRoutes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route path={AppRoutes.HOME} element={<Home />} />
        </Route>
        <Route path={AppRoutes.LOGIN} element={<Login />} />
        <Route path="*" element={<Navigate to={AppRoutes.LOGIN} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

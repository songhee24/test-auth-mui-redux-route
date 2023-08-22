import { Registration } from "../components/Registration";
import { Navigate, Route, Routes } from "react-router-dom";
import { Home } from "../components/Home";
import { PrivateAuthRoute } from "./PrivateAuthRoute";

export const AppRoutes = ({ isAuth }) => {
  return (
    <Routes>
      {/* <Route path="/" element={<Navigate to="/login" />} /> */}
      <Route
        path="/"
        element={
          <PrivateAuthRoute
            Element={<Registration />}
            isAuth={!isAuth}
            fallbackPath="/home"
          />
        }
      />
      <Route
        path="/home"
        element={
          <PrivateAuthRoute
            Element={<Home />}
            isAuth={isAuth}
            fallbackPath="/login"
          />
        }
      />
    </Routes>
  );
};

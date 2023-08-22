import { Navigate } from "react-router-dom";

export const PrivateAuthRoute = ({ Element, isAuth, fallbackPath }) => {
  if (!isAuth) {
    return <Navigate to={fallbackPath} />;
  }
  return Element;
};

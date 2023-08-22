import React from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { AppRoutes } from "./routes/AppRoutes";
import { authActions } from "./redux/slices/auth/authSlice";
import { Navigate } from "react-router-dom";

function App() {
  const [loading, setLaoding] = React.useState(true);
  const isAuth = useSelector((state) => state.auth.isAuth);
  const dispatch = useDispatch();

  React.useEffect(() => {
    const jwtToken = localStorage.getItem("MUI_LESSON@TOKEN");
    if (Boolean(jwtToken)) {
      const authorizedUserData = {
        token: jwtToken,
        isAuth: true,
        role: "user",
      };
      dispatch(authActions.setAuth(authorizedUserData));
    }

    setLaoding(false);
  }, []);

  if (loading) {
    return <p>Loading....</p>;
  }

  return (
    <div className="App">
      <AppRoutes isAuth={isAuth} />
    </div>
  );
}

export default App;

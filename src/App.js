import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Signup from "./Pages/Signup/Signup";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  const PrivateRoute = ({ component: Component, ...rest }) => {
    const userInfo = JSON.parse(sessionStorage.getItem("userInfo"));
    const auth = !!userInfo;

    if (auth) return <Component />;
    return <Navigate to="/" />;
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Signup />} />
        <Route
          path="/dashboard"
          element={<PrivateRoute component={Dashboard} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

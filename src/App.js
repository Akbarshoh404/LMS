import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";

// Landing Pages
import LandingHome from "./Pages/Landing/Home";

// Auth Pages

import Login from "./Pages/Auth/Login";

// Dashboard Pages

function App() {
  return (
    <>
      <Routes>
        {/* Landing */}

        <Route path="/" element={<LandingHome />} />

        {/* Auth */}

        <Route path="/login" element={<Login />} />  

        {/* Dashboard */}

      </Routes>
    </>
  );
}

export default App;

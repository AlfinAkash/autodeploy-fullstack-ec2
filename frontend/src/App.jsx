import React, { useState } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Header from "./components/Headers.jsx";
import Welcome from "./pages/Welcome.jsx";
import Version from "./pages/Version.jsx";
import Register from "./components/Register.jsx";
import Login from "./components/Login.jsx";
import Users from "./components/Users.jsx";

function AppWrapper() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const navigate = useNavigate();

  return (
    <>
      <Header token={token} setToken={setToken} navigate={navigate} />

      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/version" element={<Version />} />
        {!token && <Route path="/register" element={<Register />} />}
        {!token && <Route path="/login" element={<Login setToken={setToken} />}/>}
        {token && <Route path="/users" element={<Users token={token} />} />}
      </Routes>
    </>
  );
}

export default AppWrapper;
import React from "react";
import { AppBar, Toolbar, Button, Typography } from "@mui/material";

const Header = ({ token, setToken, navigate }) => {
  const handleLogout = () => {
    localStorage.removeItem("token"); 
    setToken(null); 
    navigate("/"); 
  };

  return (
    <AppBar position="static">
      <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6">Cloud Control Application</Typography>

        <div>
          <Button color="inherit" onClick={() => navigate("/")}>
            Home
          </Button>
          <Button color="inherit" onClick={() => navigate("/version")}>
            Version
          </Button>

          {!token ? (
            <>
              <Button color="inherit" onClick={() => navigate("/register")}>
                Register
              </Button>
              <Button color="inherit" onClick={() => navigate("/login")}>
                Login
              </Button>
            </>
          ) : (
            <>
              <Button color="inherit" onClick={() => navigate("/users")}>
                Users
              </Button>
              <Button color="inherit" onClick={handleLogout}>
                Logout
              </Button>
            </>
          )}
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
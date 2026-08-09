import React from "react"
import { Container, Typography, Button, Box } from "@mui/material"
import { useNavigate } from "react-router-dom"
import welcomeImg from "../assets/welcome.svg"

const Welcome = () => {
  const navigate = useNavigate()

  return (
    <Box
      sx={{
        minHeight: "90vh",
        display: "flex",
        alignItems: "center",
        background: "linear-gradient(135deg, #1e3c72, #2a5298)",
        color: "#fff",
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            justifyContent: "space-between",
            gap: 5,
          }}
        >
    
          <Box sx={{ flex: 1 }}>
            <Typography variant="h3" fontWeight="bold" gutterBottom>
              Welcome to My Application
            </Typography>

            <Typography variant="h6" sx={{ opacity: 0.9, mb: 3 }}>
              A secure and scalable platform to manage users efficiently with a modern interface.
            </Typography>

            <Button
              variant="contained"
              size="large"
              sx={{ mr: 2, background: "#fff", color: "#1e3c72" }}
              onClick={() => navigate("/register")}
            >
              Get Started
            </Button>

            <Button
              variant="outlined"
              size="large"
              sx={{ borderColor: "#fff", color: "#fff" }}
              onClick={() => navigate("/login")}
            >
              Login
            </Button>
          </Box>

        
          <Box sx={{ flex: 1, textAlign: "center" }}>
         <img src={welcomeImg} alt="welcome" style={{ width: "100%" }} />
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Welcome
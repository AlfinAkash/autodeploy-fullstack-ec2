import React, { useState } from "react"
import { Container, TextField, Button, Typography, Paper } from "@mui/material"
import API from "../api.jsx"
import { useNavigate } from "react-router-dom"

const Login = ({ setToken }) => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [message, setMessage] = useState("")
  const navigate = useNavigate()

  const handleLogin = async () => {
    try {
      const res = await API.post("/api/v1/auth/login", { username, password })
      localStorage.setItem("token", res.data.token)
      setToken(res.data.token)
      setMessage("Login successful!")
      navigate("/users")
    } catch (err) {
      setMessage(err.response?.data?.error || "Error occurred")
    }
  }

  return (
    <Container maxWidth="sm" style={{ marginTop: "50px" }}>
      <Paper style={{ padding: "30px" }}>
        <Typography variant="h5">Login</Typography>

        <TextField fullWidth label="Username" margin="normal"
          value={username} onChange={(e) => setUsername(e.target.value)} />

        <TextField fullWidth label="Password" type="password" margin="normal"
          value={password} onChange={(e) => setPassword(e.target.value)} />

        <Button fullWidth variant="contained" onClick={handleLogin}>
          Login
        </Button>

        <Typography color="secondary" style={{ marginTop: "10px" }}>
          {message}
        </Typography>
      </Paper>
    </Container>
  )
}

export default Login
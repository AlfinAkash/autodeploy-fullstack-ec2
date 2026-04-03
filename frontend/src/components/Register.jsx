import React, { useState } from "react"
import { Container, TextField, Button, Typography, Paper } from "@mui/material"
import API from "../api.jsx"

const Register = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [message, setMessage] = useState("")

  const handleRegister = async () => {
    try {
      const res = await API.post("/api/v1/auth/register", { username, password })
      setMessage(`User ${res.data.username} registered successfully!`)
    } catch (err) {
      setMessage(err.response?.data?.error || "Error occurred")
    }
  }

  return (
    <Container maxWidth="sm" style={{ marginTop: "50px" }}>
      <Paper style={{ padding: "30px" }}>
        <Typography variant="h5">Register</Typography>

        <TextField fullWidth label="Username" margin="normal"
          value={username} onChange={(e) => setUsername(e.target.value)} />

        <TextField fullWidth label="Password" type="password" margin="normal"
          value={password} onChange={(e) => setPassword(e.target.value)} />

        <Button fullWidth variant="contained" onClick={handleRegister}>
          Register
        </Button>

        <Typography color="secondary" style={{ marginTop: "10px" }}>
          {message}
        </Typography>
      </Paper>
    </Container>
  )
}

export default Register
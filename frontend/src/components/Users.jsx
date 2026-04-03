import React, { useEffect, useState } from "react"
import API from "../api.jsx"
import { Container, Typography, Paper, List, ListItem, ListItemText } from "@mui/material"

const Users = ({ token }) => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    API.get("/api/v1/auth/users", {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => setUsers(res.data))
      .catch((err) => console.error(err))
  }, [token])

  return (
    <Container style={{ marginTop: "50px" }}>
      <Paper style={{ padding: "20px" }}>
        <Typography variant="h5">All Users</Typography>

        <List>
          {users.map((u) => (
            <ListItem key={u.id} divider>
              <ListItemText primary={u.username} />
            </ListItem>
          ))}
        </List>
      </Paper>
    </Container>
  )
}

export default Users
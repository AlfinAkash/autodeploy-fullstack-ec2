import React, { useEffect, useState } from "react"
import { Container, Typography, Paper } from "@mui/material"

const Version = () => {
  const [version, setVersion] = useState("Loading...")

  useEffect(() => {
    fetch("/VERSION")
      .then((res) => {
        if (!res.ok) throw new Error("Not found")
        return res.text()
      })
      .then((data) => setVersion(data.trim()))
      .catch(() => setVersion("Not available"))
  }, [])

  return (
    <Container maxWidth="sm" style={{ marginTop: "60px" }}>
      <Paper style={{ padding: "30px", textAlign: "center" }}>
        <Typography variant="h5" gutterBottom>
          Application Version
        </Typography>

        <Typography variant="h4" color="primary">
          {version}
        </Typography>
      </Paper>
    </Container>
  )
}

export default Version
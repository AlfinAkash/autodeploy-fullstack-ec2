import React, { useEffect, useState } from "react";
import { Container, Typography, Paper } from "@mui/material";

const Version = () => {
  const [version, setVersion] = useState("Loading...");

  useEffect(() => {
    fetch("/VERSION", { cache: "no-store" })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch version");
        }
        return res.text();
      })
      .then((data) => {
        const cleanVersion = data.trim();

        // Optional safety check
        if (!cleanVersion) {
          throw new Error("Empty version");
        }

        setVersion(cleanVersion);
      })
      .catch((err) => {
        console.error("Version fetch error:", err);
        setVersion("Not available");
      });
  }, []);

  return (
    <Container maxWidth="sm" sx={{ mt: 6 }}>
      <Paper sx={{ p: 4, textAlign: "center" }}>
        <Typography variant="h5" gutterBottom>
          Application Version
        </Typography>

        <Typography variant="h4" color="primary">
          {version}
        </Typography>
      </Paper>
    </Container>
  );
};

export default Version;
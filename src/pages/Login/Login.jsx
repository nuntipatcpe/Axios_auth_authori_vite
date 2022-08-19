import React, { useState } from "react";

import { Button } from "@mui/material";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import axios from "axios";
import { Alert } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

import { fetchAuthorization } from "../../../service/fetchAuthorization";


function Login() {
  const [username, setUsername] = useState("karn.yong@mecallapi.com");
  const [password, setPassword] = useState("mecallapi");

  const [loading, setLoading] = useState(false);
  let round = useNavigate();

  async function getToken() {
    await axios
      .post("https://www.mecallapi.com/api/login", {
        username: username,
        password: password,
        expiresIn: 60000,
      })
      .then((res) => {
        localStorage.setItem("token", res.data.accessToken);
        round("/");
      })
      .catch((err) => {
        alert(`Not found\n${err}`);
      });
  }

  function hendleSubmit(e) {
    e.preventDefault();
    getToken();
    setUsername("");
    setPassword("");
  }

  return (
    <Container
          sx={{
            width: 300,
            p: 2,
            boxShadow: "1px 1px 10px 1px #cdcdcd",
          }}
        >
          <Box component="form" autoComplete="off" onSubmit={hendleSubmit}>
            <Stack spacing={2}>
              <h1>Sing In</h1>
              <TextField
                label="username"
                variant="outlined"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <TextField
                label="password"
                variant="outlined"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button type="submit" variant="contained">
                Login
              </Button>
            </Stack>
          </Box>
        </Container>
  );
}

export default Login;

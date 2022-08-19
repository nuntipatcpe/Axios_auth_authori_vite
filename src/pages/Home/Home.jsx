import React from "react";

import { Button } from "@mui/material";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";

import { fetchAuthorization } from "../../../service/fetchAuthorization";

import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Home() {
  const round = useNavigate();
  const [user, setUsername] = useState("");

  const onlogOut = () => {
    localStorage.removeItem("token");
    round("/login");
  };
  const onRemove = () => {
    setUsername("");
  };

  async function getData() {
    await fetchAuthorization
      .get("https://www.mecallapi.com/api/auth/user")
      .then((res) => {
        setUsername(res.data.user);
      })
      .catch((err) => {
        alert(`Token expire\n${err.message}`);
        round("/login");
      });
  }

  return (
    <Container
      sx={{
        width: 300,
        p: 2,
        boxShadow: "1px 1px 10px 1px #cdcdcd",
      }}
    >
      <h1>Home</h1>
      <Stack direction={"row"} justifyContent="space-between">
        <Button variant="contained" onClick={getData}>
          Fetch Data
        </Button>
        <Button variant="outlined" onClick={onlogOut}>
          Logout
        </Button>
      </Stack>

      <br />
      {user === "" ? (
        <></>
      ) : (
        <Card>
          <CardHeader
            avatar={<Avatar aria-label="recipe" src={user.avatar} />}
            title={`${user.fname} ${user.lname}`}
            subheader={user.email}
          />
          <Stack>
            <Button variant="text" onClick={onRemove}>
              remove
            </Button>
          </Stack>
        </Card>
      )}
    </Container>
  );
}

export default Home;

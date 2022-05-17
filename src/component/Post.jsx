import React, { useState} from "react";
import { useHistory } from 'react-router-dom'
import axios from "axios";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import TextField from "@mui/material/TextField";

const Post = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const history = useHistory();

  const postData = (e) => {
    e.preventDefault();
    axios
      .post("http://employeemanagerservice-env.eba-azh5g6a4.us-west-1.elasticbeanstalk.com/api/employee", {
        firstName,
        lastName,
        email,
      })
      .then((res) => console.log("posting data", res));
      history.push('/');
      window.location.reload(true);
  };

  return (
    <Container maxWidth="md" sx={{marginTop: 10, marginBottom:3}}>
      <Grid container maxWidth="md">
        <Grid item xs={12}>
          <Paper className="form-paper" elevation={10}>
            <Grid container spacing={1}>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="First Name"
                  variant="outlined"
                  fullWidth
                  required
                  value={firstName}
                  onChange={(e)=> setFirstName(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Last Name"
                  variant="outlined"
                  fullWidth
                  required
                  value={lastName}
                  onChange={(e)=> setLastName(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Email"
                  variant="outlined"
                  fullWidth
                  required
                  value={email}
                  onChange={(e)=> setEmail(e.target.value)}
                />
              </Grid>
            </Grid>
            <div className="post-button">
              <Button
                type="submit"
                variant="contained"
                fullWidth
                endIcon={<SendIcon color="secondary" />}
                onClick={postData}
              >
                Add
              </Button>
            </div>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Post;

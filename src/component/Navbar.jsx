import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Link from '@mui/material/Link';
import BadgeIcon from '@mui/icons-material/Badge';


export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1, marginBottom: 5,  }}>
      <AppBar position="static" sx={{color: "#fff"}} color="primary">
        <Toolbar>
          <Typography variant="h4" component="div" sx={{ padding: 0}}>
            <Link href="/" color="inherit" underline="hover">
              The Employee Manager
            </Link>
          </Typography>
          <Typography variant="h" component="div" sx={{ padding: 0 }}>
            <Button
                variant="contained"
                size="large"
                fullWidth
                endIcon={<BadgeIcon color="secondary" />}
              >
              </Button>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

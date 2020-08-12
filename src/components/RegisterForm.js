import React from "react";
import {
  TextField,
  Grid,
  Card,
  Box,
  Button,
  Typography,
} from "@material-ui/core";

function RegisterForm({ onSubmit, onType }) {
  return (
    <Grid item xs={12} md={6} lg={4}>
      <Card>
        <Box p={3}>
          <Typography variant="h5" color="initial">
            Registro
          </Typography>
          <Box my={2}>
            <TextField onChange={onType} fullWidth id="name" label="Name" />
          </Box>

          <Box my={2}>
            <TextField
              onChange={onType}
              fullWidth
              id="last_name"
              label="Last Name"
            />
          </Box>

          <Box my={2}>
            <TextField onChange={onType} fullWidth id="email" label="Email" />
          </Box>

          <Box my={2}>
            <TextField
              onChange={onType}
              type="password"
              fullWidth
              id="password"
              label="Password"
            />
          </Box>
          <Button
            onClick={onSubmit}
            mt={3}
            variant="contained"
            color="primary"
            fullWidth
          >
            Registrarse
          </Button>
        </Box>
      </Card>
    </Grid>
  );
}

export default RegisterForm;

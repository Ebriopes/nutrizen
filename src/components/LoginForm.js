import React from "react";
import {
  TextField,
  Grid,
  Card,
  Box,
  Button,
  Typography,
} from "@material-ui/core";
import {Link} from 'react-router-dom';

function LoginForm({ onSubmit, onType }) {
  return (
    <Grid item xs={12} sm={8} md={6} lg={4}>
      <Card>
        <Box p={3}>
          <Typography variant="h5" color="initial">
            Iniciar Sesión
          </Typography>

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
            entrar
          </Button>
          <Typography style={{textAlign: "center"}}>
            No tienes cuenta? <Link to='/register'>registrate</Link>
          </Typography>
        </Box>
      </Card>
    </Grid>
  );
}

export default LoginForm;

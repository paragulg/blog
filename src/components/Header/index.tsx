import React from 'react';
import { AppBar, Typography, Toolbar, Box } from '@mui/material';

const Header = () => {
  return (
    <AppBar>
      <Toolbar variant="dense">
        <Typography variant="h6" color="inherit">
          Фото
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

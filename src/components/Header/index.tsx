import React from 'react';
import { AppBar, Typography, Toolbar } from '@mui/material';

const Header = () => {
  return (
    <div className="header">
      <AppBar>
        <Toolbar>
          <Typography variant="h6" color="inherit">
            Фото
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;

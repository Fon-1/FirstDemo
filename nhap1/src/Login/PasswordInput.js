import React, { useState } from 'react';
import { TextField, InputAdornment, IconButton } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useNavigate } from 'react-router-dom';

const PasswordInput = () => {
  const [hide, setHide] = useState(true);
  const navigate = useNavigate();

  const toggleVisibility = () => {
    setHide(!hide);
  };

  const handleForgotPassword = () => {
    // Navigate to the "create-new-password" route when needed
    navigate('/test');
  };

  return (
    <TextField
      fullWidth
      variant="outlined"
      placeholder="Enter your password"
      type={hide ? 'password' : 'text'}
      InputProps={{
        startAdornment: <InputAdornment position="start">$&nbsp;</InputAdornment>,
        endAdornment: (
          <InputAdornment position="end">
            <IconButton onClick={toggleVisibility} edge="end">
              {hide ? <VisibilityOffIcon /> : <VisibilityIcon />}
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};

export default PasswordInput;

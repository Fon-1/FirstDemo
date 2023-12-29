import React, { useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FilledInput from "@mui/material/FilledInput";
import IconButton from "@mui/material/IconButton";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useNavigate } from 'react-router-dom';
import "./LoginEP.css"
const LoginEP = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const navigate = useNavigate();

  const ForgetPassword = () => {
    navigate('/ForgetPassword');
  };

  const LoginEPHome = () => {
    navigate('/home');
  };
  const [email, setEmail] = useState("");
  const [isLabelVisible, setIsLabelVisible] = useState(false);

  const handleInputChange = (event) => {
    setEmail(event.target.value);
    setIsLabelVisible(event.target.value.length > 0);
  };


  return (
    <div>
      <Box className="homeBox" >
        <img
          className="logo"
          alt=""
          src="/logo--v7@2x.png"
        />

        <div className="login-action-container">
          <div className="login-conten-and-forgot">
            <div className="page-title-conten">
              <div className="page-title">Đăng nhập</div>
              <p className="page-conten">
                Quý phụ huynh vui lòng đăng nhập tài khoản để theo dõi hành
                trình của bé!
              </p>
            </div>

            <div className="login-input-frogot">


              <div className="input-from">
                <span >
                  <img src="/uenvelopealt@2x.png" alt="" style={{ padding: "16px 0 0 0" }} />

                  <FormControl
                    className="form-control-email"
                    sx={{ m: 1, width: "85%" }} variant="filled">
                    <InputLabel htmlFor="email">Email</InputLabel>
                    <FilledInput
                      id="email"
                      type="email"
                    />
                  </FormControl>
                </span>
              </div>

              <div className="input-from">
                <img src="/upadlock@2x.png" alt="Lock" style={{ padding: "16px 0 0 0" }} />

                <FormControl
                  className="form-control-pass"
                  sx={{ m: 1, width: "85%" }} variant="filled">
                  <InputLabel htmlFor="password">Password</InputLabel>
                  <FilledInput
                    id="password"
                    type={showPassword ? "text" : "password"}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                          style={{ color: showPassword ? 'black' : 'inherit' }}
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                </FormControl>
              </div>


              <div
                className="forget-password"
                onClick={ForgetPassword} >
                Quên mật khẩu
              </div>
            </div>


          </div>

          <div>
            <button
              className={`home-login-button`}
              onClick={LoginEPHome}
              style={{
                borderRadius: '6px',
                color: '#FFF',
                fontSize: '16px',
                lineHeight: '24px',
                background: 'var(--primary-100, #813999)',
                padding: '12px 16px',
                cursor: 'pointer',
                width: '100%',
              }}
            >
              Login
            </button>
          </div>
        </div>




      </Box>
    </div>


  );
};

export default LoginEP;

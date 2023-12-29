import React, { useState } from 'react';
import './CreatePassword.css';
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FilledInput from "@mui/material/FilledInput";
import IconButton from "@mui/material/IconButton";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useNavigate } from 'react-router-dom';

function CreatePassword() {
  const [showPassword, setShowPassword] = useState(false);
  const [isPopoverVisible, setPopoverVisible] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const navigate = useNavigate();

  function checkPassword() {
    let password = document.getElementById("password").value;
    let cnfrmPassword = document.getElementById("cnfrm-password").value;
    let message = document.getElementById("message");

    if (!password || !cnfrmPassword) {
      alert("Password can't be empty!");
      message.textContent = "";
      return;
    }

    if (password === cnfrmPassword) {
      message.textContent = "Passwords match";
      message.style.backgroundColor = "#1dcd59";
      setPopoverVisible(true);
    } else {
      message.textContent = "Password don't match";
      message.style.backgroundColor = "#ff4d4d";
      setPopoverVisible(false);
    }
  }

  return (
    <div className={`Create-new-password-page `}>
      <div className="back-btn">
        <img className="uangle-left-icon" alt="" src="/u_angle-left.png" />
      </div>
      <div>
        <Box className="homeBox">
          <div className="login-action-container">
            <div className="login-conten-and-forgot">
              <div className="page-title-conten">
                <div className="page-title">Đăng nhập</div>
                <p className="page-conten">
                  Quý phụ huynh vui lòng đăng nhập tài khoản để theo dõi hành trình của bé!
                </p>
              </div>

              <div className="login-input-frogot">
                <div className="input-from">
                  <img src="/upadlock@2x.png" alt="Lock" style={{ padding: "16px 0 0 0" }} />

                  <FormControl
                    className="form-control-pass"
                    sx={{ m: 1, width: "85%" }} variant="filled">
                    <InputLabel htmlFor="password">nhập mật khẩu mới</InputLabel>
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

                <div className="input-from">
                  <img src="/upadlock@2x.png" alt="Lock" style={{ padding: "16px 0 0 0" }} />

                  <FormControl
                    className="form-control-pass"
                    sx={{ m: 1, width: "85%" }} variant="filled">
                    <InputLabel htmlFor="password">xác nhận lại mật khẩu mới</InputLabel>
                    <FilledInput
                      id="cnfrm-password"
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
              </div>
              <div id="message"></div>
            </div>

            <div>
              <button
                className={`home-login-button`}
                onClick={checkPassword}
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
                đổi mật khẩu mới
              </button>
            </div>
          </div>
        
        </Box>
      </div>
    </div>
  );
}

export default CreatePassword;

import React, { useState, useCallback } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import FilledInput from "@mui/material/FilledInput";
import FormControl from "@mui/material/FormControl";
import { useNavigate } from 'react-router-dom';

const ForgetPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const validateEmail = (val) => {
    return val.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
  }

  const handleEmailChange = (val) => {
    setEmail(val);
    setError("");
  }

  const goToLoginEP = useCallback(() => {
    // Navigate to the "/" route when the back button is clicked
    navigate("/");
  }, [navigate]);

  const goToOTP = useCallback(() => {
    if (!email.trim()) {
      // Show error message if the input is empty
      setError("Please input an email.");
    } else if (!validateEmail(email)) {
      // Show error message if the email is not valid
      setError("Invalid email. Please input a valid email.");
    } else {
      // Navigate to the "/otp" route when the "Tiếp Theo" button is clicked and email is valid
      navigate("/otp");
    }
  }, [navigate, email]);

  return (
    <>
      <div className="forget-password-page">
        <div className="back-btn" onClick={goToLoginEP}>
          <img className="uangle-left-icon" alt="" src="/u_angle-left.png" />
        </div>

        <div>
          <Box className="homeBox">
            <div className="forgot-pass-page">
              <div className="page-title-conten">
                <div className="page-title">Quên mật khẩu</div>
                <p className="page-conten">
                  Vui lòng nhập Email hoặc Số điện thoại đã đăng ký để xác nhận tài khoản.
                </p>
              </div>

              <div className="input-email">
                <div className="input-from">
                  <span>
                    <img src="/uenvelopealt@2x.png" alt="" style={{ padding: "16px 0 0 0" }} />

                    <FormControl
                      className="form-control-email"
                      sx={{ m: 1, width: "85%" }} variant="filled">
                      <InputLabel htmlFor="email">Email</InputLabel>
                      <FilledInput
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => handleEmailChange(e.target.value)}
                      />
                    </FormControl>
                  </span>
                  {error && <p style={{ color: "red" }}>{error}</p>}
                </div>
              </div>
              <div>
                <button
                  className={`home-login-button`}
                  onClick={goToOTP}
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
                  Tiếp Theo
                </button>
              </div>
            </div>
          </Box>
        </div>
      </div>
    </>
  );
};

export default ForgetPassword;

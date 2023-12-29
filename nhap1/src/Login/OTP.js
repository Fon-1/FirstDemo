import React, { useCallback, useEffect } from "react";
import "./OTP.css";
import "./LoginEP.css";
import { useNavigate } from "react-router-dom";

const OTP = () => {
  const navigate = useNavigate();

  // Callback to handle navigation when the button is clicked
  const onButtonContainerClick = useCallback(() => {
    navigate("/ForgetPassword");
  }, [navigate]);

  // useEffect to handle the focus and keydown events for the OTP input fields
  useEffect(() => {
    const codes = document.querySelectorAll('.code');

    // Set focus on the first OTP input field
    codes[0].focus();

    // Add event listeners for keydown events
    codes.forEach((code, idx) => {
      code.addEventListener('keydown', (e) => {
        if (e.key >= 0 && e.key <= 9) {
          // Clear the current input value and move focus to the next input field
          codes[idx].value = '';
          setTimeout(() => codes[idx + 1]?.focus(), 10);
        } else if (e.key === 'Backspace') {
          // Move focus to the previous input field on Backspace
          setTimeout(() => codes[idx - 1]?.focus(), 10);
        }
      });
    });

    // Cleanup: remove event listeners
    return () => {
      codes.forEach((code, idx) => {
        code.removeEventListener('keydown', (e) => {
          if (e.key >= 0 && e.key <= 9) {
            codes[idx].value = '';
            setTimeout(() => codes[idx + 1]?.focus(), 10);
          } else if (e.key === 'Backspace') {
            setTimeout(() => codes[idx - 1]?.focus(), 10);
          }
        });
      });
    };
  }, []);

  return (
    <div className="otp-page">
      <div className="back-btn" onClick={() => navigate("/forgot-password")}>
        <img className="uangle-left-icon" alt="" src="/u_angle-left.png" />
      </div>
      <div className="page-content">
        <div className="page-title-conten">
          <div className="page-title">Quên mật khẩu</div>
          <p className="page-conten">
            Vui lòng nhập Email hoặc Số điện thoại đã đăng ký để xác nhận tài khoản.
          </p>
        </div>

        <div className="page-main-act">
          <div className="code-container">
            {/* Use "type" attribute as "text" to allow input of numeric characters */}
            <input type="text" className="code" placeholder="0" minLength="0" maxLength="9" required></input>
            <input type="text" className="code" placeholder="0" minLength="0" maxLength="9" required></input>
            <input type="text" className="code" placeholder="0" minLength="0" maxLength="9" required></input>
            <input type="text" className="code" placeholder="0" minLength="0" maxLength="9" required></input>
            <input type="text" className="code" placeholder="0" minLength="0" maxLength="9" required></input>
            <input type="text" className="code" placeholder="0" minLength="0" maxLength="9" required></input>
          </div>
          <div>
            <button
              className={`page-main-button`}
              onClick={onButtonContainerClick}
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
              Verify
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OTP;

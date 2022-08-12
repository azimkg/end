import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { authContext } from "../../contexts/authContext";
import "./SignIn.css";

const SignIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { error, signIn, user } = useContext(authContext);
  const [alert, setAlert] = useState("");
  const [errors, setErrors] = useState("");

  useEffect(() => {
    setErrors(error);
  }, [error]);

  function handleRegister(email, password) {
    if (!email || !password) {
      return setAlert("*Заполните все поля!");
    }

    signIn(email, password, navigate);
    setErrors("");
    setAlert("");
  }
  return (
    <div className="main_pages">
      <div className="container">
        <div className="auth_main">
          <div className="auth_main-control">
            <h2 className="auth_welcome-title">Добро пожаловать!</h2>
          </div>
          {alert ? <p className="signIn_alert">{alert}</p> : null}
          {errors ? <p className="signIn_alert">{errors}</p> : null}
          <div className="authorization_inputs">
            <div>
              <label className="auth_label">Email</label>
              <input
                type="email"
                placeholder="Email"
                value={email}
                className="auth_form-control"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label className="auth_label">Пароль</label>
              <input
                type="password"
                placeholder="Пароль"
                value={password}
                className="auth_form-control"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              className="auth_button-control"
              onClick={() => handleRegister(email, password)}
            >
              Войти
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;

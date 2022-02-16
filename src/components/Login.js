import React from "react";
import ReCAPTCHA from "react-google-recaptcha";
import ReactDOM from "react-dom";

function onChange(value) {
  console.log("Captcha value:", value);
}
ReactDOM.render(
  <ReCAPTCHA sitekey="Your client site key" onChange={onChange} />,
  document.body
);
const Login = () => {
  return (
    <div className="login">
      <div className="inputs">
        <input type="text" placeholder="Usuario" />
        <input type="text" placeholder="Contraseña" />
      </div>
      <div className="acceso">
        <button
          class="g-recaptcha"
          data-sitekey="reCAPTCHA_site_key"
          data-callback="onSubmit"
          data-action="submit"
        >
          Acceder
        </button>
      </div>
    </div>
  );
};

export default Login;

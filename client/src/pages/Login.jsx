import { useState } from "react";
import "./Login.css";

function Login({ setIsLoggedIn }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    console.log("Login button clicked");

    const response = await fetch("https://scamshield-backend-dj3g.onrender.com/api/auth/login", {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });

    const data = await response.json();

    console.log(data);

    if (data.token) {
      localStorage.setItem("token", data.token);
      setIsLoggedIn(true);
      } else {
      alert(data.message || "Invalid Email or Password");
      }
    };

  return (
    <div className={darkMode ? "login-container" : "light-container"}>
      <button
        className="theme-button"
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
      </button>

      <div className="login-box">
        <h2>ScamShield Login</h2>

        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

   <div className="password-box">
      <input
        type={showPassword ? "text" : "password"}
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <span
        className="eye-icon"
        onClick={() => setShowPassword(!showPassword)}
       >
        {showPassword ? "🙈" : "👁️"}
      </span>
    </div>

          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
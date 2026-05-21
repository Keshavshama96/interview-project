import { useState } from "react";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [darkMode, setDarkMode] = useState(true);

  const handleLogin = async (e) => {
    e.preventDefault();

    console.log("Login button clicked");

    const response = await fetch("http://localhost:8000/api/auth/login", {
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
      alert("Login Successful");
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

          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
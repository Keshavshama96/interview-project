import { useState } from "react";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  const [showLogin, setShowLogin] = useState(true);
  //logout 
  const handleLogout = () => {
  localStorage.removeItem("token");
  alert("Logged out successfully");
  setShowLogin(true);
};

  return (
    <div>
      {showLogin ? <Login /> : <Register />}
<button
  className="switch-button"
  onClick={() => setShowLogin(!showLogin)}
>
  {showLogin ? "Go to Register" : "Go  to Login"}
    </button>
<button
  className="logout-button"
  onClick={handleLogout}
>
  Logout
</button>
    </div>
  );
}

export default App;
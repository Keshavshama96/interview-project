import { useState } from "react";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Analyze from "./pages/Analyze";
import Dashboard from "./pages/Dashboard";
import History from "./pages/History";

function App() {
  const [currentPage, setCurrentPage] = useState("dashboard");
  const [showLogin, setShowLogin] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(
  localStorage.getItem("token") ? true : false
   );
  //logout 
  const handleLogout = () => {
  localStorage.removeItem("token");
  alert("Logged out successfully");

  setIsLoggedIn(false);
  setShowLogin(true);
  setCurrentPage("dashboard");
  };

//   return (
//     <div>
//       {showLogin ? <Login /> : <Register />}
// <button
//   className="switch-button"
//   onClick={() => setShowLogin(!showLogin)}
// >
//   {showLogin ? "Go to Register" : "Go  to Login"}
//     </button>
// <button
//   className="logout-button"
//   onClick={handleLogout}
// >
//   Logout
// </button>
//     </div>
//   );

  //this is for render analyze page (testing period)

// return (
//   <div>
//     <Analyze />
//   </div>
// );
 
  //this is for render dashboard page (testing period)
//   return (
//   <div>
//     <Dashboard />
//   </div>
// );

if (!isLoggedIn) {
    return (
      <div>
        {showLogin ? (
          <Login setIsLoggedIn={setIsLoggedIn} />
        ) : (
          <Register setIsLoggedIn={setIsLoggedIn} />
        )}

        <button
          className="switch-button"
          onClick={() => setShowLogin(!showLogin)}
        >
          {showLogin ? "Go to Register" : "Go to Login"}
        </button>
      </div>
    );
  }


return (
  <div>
     {currentPage === "dashboard" && (
  <Dashboard
    setCurrentPage={setCurrentPage}
    handleLogout={handleLogout}
  />
   )}

    {currentPage === "analyze" && (
      <Analyze setCurrentPage={setCurrentPage} />
      )}

    {currentPage === "history" && (
      <History setCurrentPage={setCurrentPage} />
    )}
    </div>
);
}

export default App;
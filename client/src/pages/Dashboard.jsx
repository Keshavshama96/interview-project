import "./Dashboard.css";

function Dashboard({ setCurrentPage, handleLogout }) {
  return (
    <div className="dashboard-container">
      <div className="dashboard-card">
        <h1>ScamShield Dashboard</h1>

        <p className="dashboard-subtitle">
          Protect yourself from suspicious messages and scams.
        </p>

        <div className="dashboard-actions">
          <button onClick={() => setCurrentPage("analyze")}>
            Analyze Message
          </button>

          <button onClick={() => setCurrentPage("history")}>
            View History
          </button>

          <button onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
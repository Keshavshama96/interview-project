import { useEffect, useState } from "react";
import "./History.css";

function History({ setCurrentPage }) {
  const [scans, setScans] = useState([]);

  useEffect(() => {
    const fetchHistory = async () => {
      const token = localStorage.getItem("token");

      const response = await fetch("http://localhost:8000/api/scam/history", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await response.json();

      console.log(data);

      setScans(data.scans);
    };

    fetchHistory();
  }, []);

  return (
    <div className="history-container">
      <button
        className="back-button"
        onClick={() => setCurrentPage("dashboard")}
      >
        Back to Dashboard
      </button>

      <h1>Previous Scan History</h1>

      <div className="history-list">
        {scans.length === 0 ? (
          <p className="empty-history">No scan history found.</p>
        ) : (
          scans.map((scan) => (
            <div className="history-card" key={scan._id}>
              <p>
                <strong>Message:</strong> {scan.message}
              </p>

              <p>
                <strong>Risk Score:</strong> {scan.riskScore}
              </p>

              <p>
                <strong>Risk Level:</strong> {scan.riskLevel}
              </p>

              <p>
                <strong>Status:</strong>{" "}
                {scan.isScam ? "Scam Detected" : "Safe Message"}
              </p>

              <p>
                <strong>Matched Keywords:</strong>{" "}
                {scan.matchedKeywords.join(", ")}
              </p>

              <p>
                <strong>Analyzed At:</strong>{" "}
                {new Date(scan.createdAt).toLocaleString()}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default History;
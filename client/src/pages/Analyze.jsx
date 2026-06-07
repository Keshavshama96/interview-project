import { useState } from "react";
import "./Analyze.css";

function Analyze() {
  const [message, setMessage] = useState("");
  const [result, setResult] = useState(null);

  const handleAnalyze = async () => {
    console.log("Analyze button clicked");
    console.log("Message:", message);
    

    const token = localStorage.getItem("token");

    const response = await fetch("http://localhost:8000/api/scam/analyze", {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },

      body: JSON.stringify({
        message: message,
      }),
    });

    const data = await response.json();

    console.log(data);
    setResult(data);
  };

  const getRiskClass = () => {
  if (result?.riskLevel === "High") {
    return "risk-high";
  }

  if (result?.riskLevel === "Medium") {
    return "risk-medium";
  }

  return "risk-low";
};
//////
const getStatusText = () => {
  if (result?.riskLevel === "High") {
    return "Scam Detected";
  }

  if (result?.riskLevel === "Medium") {
    return "Suspicious Message";
  }

  return "Safe Message";
};

const getStatusClass = () => {
  if (result?.riskLevel === "High") {
    return "status-scam";
  }

  if (result?.riskLevel === "Medium") {
    return "status-warning";
  }

  return "status-safe";
};

  return (
    <div className="analyze-container">
      <div className="analyze-box">
        <h2>ScamShield Analyzer</h2>

        <textarea
          placeholder="Paste suspicious message here..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>

        <button onClick={handleAnalyze}>Analyze</button>
        {result && (
   <div className="result-box">
    <h3>Analysis Result</h3>

    <p>
    <strong>Status:</strong>{" "}
    <span className={getStatusClass()}>
    {getStatusText()}
    </span>
    </p>

    <p>
      <strong>Risk Score:</strong> {result.riskScore}
    </p>

    <p>
     <strong>Risk Level:</strong>{" "}
     <span className={getRiskClass()}>{result.riskLevel}</span>
    </p>

    <p>
      <strong>Matched Keywords:</strong>{" "}
      {result.matchedKeywords.join(", ")}
    </p>
  </div>
)}
      </div>
    </div>
  );
}

export default Analyze;
export const analyzeScam = async (req, res) => {
  try {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({
        message: "Message is required",
      });
    }

    const scamKeywords = [
      "otp",
      "urgent",
      "verify",
      "bank",
      "blocked",
      "click",
      "lottery",
      "winner",
      "prize",
      "password",
      "account",
      "limited time",
    ];

    const lowerMessage = message.toLowerCase();

    const matchedKeywords = scamKeywords.filter((keyword) => {
      return lowerMessage.includes(keyword);
    });

    const riskScore = matchedKeywords.length * 15;

    let finalRiskScore;

    if (riskScore > 100) {
      finalRiskScore = 100;
    } else {
      finalRiskScore = riskScore;
    }

    let riskLevel;

    if (finalRiskScore >= 70) {
      riskLevel = "High";
    } else if (finalRiskScore >= 40) {
      riskLevel = "Medium";
    } else {
      riskLevel = "Low";
    }

    let isScam;

    if (finalRiskScore >= 50) {
      isScam = true;
    } else {
      isScam = false;
    }

    res.status(200).json({
      message: "Scam analysis completed",
      isScam,
      riskScore: finalRiskScore,
      riskLevel,
      matchedKeywords,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
    });
  }
};
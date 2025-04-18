import React, { useState } from "react";
import "./AgeVerification.css";

function AgeVerification({ onVerify }) {
  const [birthDate, setBirthDate] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!birthDate) {
      setError("Please enter your date of birth");
      return;
    }

    const birthYear = new Date(birthDate).getFullYear();
    const currentYear = new Date().getFullYear();
    const age = currentYear - birthYear;

    if (age < 21) {
      setError("You must be 21 or older to access this site");
      return;
    }

    onVerify(true);
  };

  return (
    <div className="age-verification-container">
      <div className="age-verification-box">
        <h2>Age Verification</h2>
        <p>You must be 21 or older to access this site</p>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="birthDate">Date of Birth</label>
            <input
              type="date"
              id="birthDate"
              value={birthDate}
              onChange={(e) => setBirthDate(e.target.value)}
            />
          </div>
          {error && <div className="error-message">{error}</div>}
          <button type="submit" className="verify-button">
            Verify Age
          </button>
        </form>
      </div>
    </div>
  );
}

export default AgeVerification;

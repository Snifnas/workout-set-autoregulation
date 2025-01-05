// Register Service Worker
if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("/service-worker.js")
    .then(() => console.log("Service Worker Registered"))
    .catch((error) => console.error("Service Worker Registration Failed:", error));
}

// Handle MEV Calculation
document.getElementById("mevForm").addEventListener("submit", (event) => {
  event.preventDefault();

  // Get scores
  const pumpScore = parseInt(document.getElementById("pumpScore").value, 10);
  const challengeScore = parseInt(document.getElementById("challengeScore").value, 10);
  const sorenessScore = parseInt(document.getElementById("sorenessScore").value, 10);

  // Calculate total score
  const totalScore = pumpScore + challengeScore + sorenessScore;

  // Determine feedback
  let feedback;
  if (totalScore <= 1) {
    feedback = "You're under your Minimum Effective Volume (MEV). Consider increasing volume.";
  } else if (totalScore >= 5) {
    feedback = "You're above your MEV. Consider reducing volume.";
  } else {
    feedback = "You're likely at your MEV. Keep training at this volume.";
  }

  // Display result
  const resultDiv = document.getElementById("mevResult");
  resultDiv.innerHTML = `<p>Your total score is ${totalScore}: ${feedback}</p>`;
});

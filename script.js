function recommendSets() {
  // Get the values from the input fields
  const lastSets = parseInt(document.getElementById("lastSets").value);
  const pump = parseInt(document.getElementById("pump").value);
  const workload = parseInt(document.getElementById("workload").value);
  const energy = parseInt(document.getElementById("energy").value);
  
  let recommendedSets = lastSets;

  // Increase Sets Aggressively
  if ((pump <= 2 || workload <= 2) && energy >= 4) {
    recommendedSets += 2; // Increase sets aggressively if pump/workload is low and energy is high
  } else if (energy >= 4) {
    recommendedSets += 1; // Increase sets moderately if energy is high
  }

  // Ensure recommended sets is at least 1
  recommendedSets = Math.max(1, recommendedSets);

  // Display the recommendation
  document.getElementById("recommendation").textContent = `Recommended Sets: ${recommendedSets}`;
}

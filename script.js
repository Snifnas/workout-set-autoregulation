function recommendSets() {
  // Get the values from the input fields
  const lastSets = parseInt(document.getElementById("lastSets").value);
  const pump = parseInt(document.getElementById("pump").value);
  const workload = parseInt(document.getElementById("workload").value);
  const energy = parseInt(document.getElementById("energy").value);
  
  let recommendedSets = lastSets;

  // Recommendation logic
  if ((pump < 3 || workload < 3) && energy >= 4) {
    recommendedSets += 1; // Increase by 1 if pump or workload was low and energy is high
  } else if ((pump >= 4 || workload >= 4) && energy <= 2) {
    recommendedSets -= 1; // Decrease by 1 if pump or workload was high and energy is low
  }

  // Ensure recommended sets is at least 1
  recommendedSets = Math.max(1, recommendedSets);

  // Display the recommendation
  document.getElementById("recommendation").textContent = `Recommended Sets: ${recommendedSets}`;
}

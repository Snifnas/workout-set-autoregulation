// Initialize volume
let volume = 0;

// Function to set initial volume
function setInitialVolume() {
  const initialVolumeInput = document.getElementById("initialVolume").value;
  volume = parseInt(initialVolumeInput) || 0; // Default to 0 if input is empty or invalid
  updateDisplay();
}

// Muscle Pump Feedback
function updatePump(pumpLevel) {
  switch (pumpLevel) {
    case 'low':
      volume += 1;
      break;
    case 'moderate':
      // No change in volume
      break;
    case 'amazing':
      volume -= 1;
      break;
    default:
      console.error("Invalid pump level");
  }
  updateDisplay();
}

// Muscle Workload Feedback
function updateWorkload(workloadLevel) {
  switch (workloadLevel) {
    case 'easy':
      volume += 1;
      break;
    case 'prettyGood':
      volume += 1;
      break;
    case 'pushedLimits':
      // No change in volume
      break;
    case 'tooMuch':
      volume -= 1;
      break;
    default:
      console.error("Invalid workload level");
  }
  updateDisplay();
}

// Muscle Soreness Feedback
function updateSoreness(sorenessLevel) {
  switch (sorenessLevel) {
    case 'neverGotSore':
      volume += 1;
      break;
    case 'healedAWhileAgo':
      volume += 1;
      break;
    case 'healedOnTime':
      // No change in volume
      break;
    case 'stillSore':
      volume -= 1;
      break;
    default:
      console.error("Invalid soreness level");
  }
  updateDisplay();
}

// Update display function
function updateDisplay() {
  document.getElementById("volumeDisplay").innerText = `Current Volume: ${volume}`;
}

// Event listeners for each button
document.getElementById("lowPump").addEventListener("click", () => updatePump('low'));
document.getElementById("moderatePump").addEventListener("click", () => updatePump('moderate'));
document.getElementById("amazingPump").addEventListener("click", () => updatePump('amazing'));

document.getElementById("easyWorkload").addEventListener("click", () => updateWorkload('easy'));
document.getElementById("prettyGoodWorkload").addEventListener("click", () => updateWorkload('prettyGood'));
document.getElementById("pushedLimitsWorkload").addEventListener("click", () => updateWorkload('pushedLimits'));
document.getElementById("tooMuchWorkload").addEventListener("click", () => updateWorkload('tooMuch'));

document.getElementById("neverSore").addEventListener("click", () => updateSoreness('neverGotSore'));
document.getElementById("healedWhileAgo").addEventListener("click", () => updateSoreness('healedAWhileAgo'));
document.getElementById("healedOnTime").addEventListener("click", () => updateSoreness('healedOnTime'));
document.getElementById("stillSore").addEventListener("click", () => updateSoreness('stillSore'));

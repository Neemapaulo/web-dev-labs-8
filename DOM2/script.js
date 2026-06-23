// Get elements
const scoreInput = document.getElementById("scoreInput");
const calcBtn = document.getElementById("calcBtn");
const results = document.getElementById("results");

// Add event listener
calcBtn.addEventListener("click", calculateGrade);

function calculateGrade() {

let score = Number(scoreInput.value);

// Input validation
if (isNaN(score) || score < 0 || score > 100) {
results.innerHTML = "<p style='color:red;'>Please enter a valid score between 0 and 100.</p>";
return;
}

let grade = "";
let color = "";

// Grade calculation
if (score >= 70) {
grade = "A";
color = "green";
}
else if (score >= 60) {
grade = "B";
color = "brown";
}
else if (score >= 50) {
grade = "C";
color = "yellow";
}
else if (score >= 40) {
grade = "D";
color = "purple";
}
else {
grade = "F";
color = "red";
}

// Display result dynamically
results.innerHTML = `
<h3 style="color:${color};">Result</h3>
<p><strong>Entered Score:</strong> ${score}</p>
<p><strong>Grade:</strong> ${grade}</p>
`;

// Reset input field
scoreInput.value = "";

// Place cursor back in input field
scoreInput.focus();
}

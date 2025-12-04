//your JS code here. If required.
const output = document.getElementById("output");

// Function to create one promise with random delay
function createPromise(index) {
  const delay = Math.random() * 2 + 1; // between 1 and 3 seconds

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        name: `Promise ${index}`,
        time: delay
      });
    }, delay * 1000);
  });
}

// Create 3 promises
const promises = [
  createPromise(1),
  createPromise(2),
  createPromise(3)
];

// Resolve all promises
const startTime = performance.now();

Promise.all(promises).then((results) => {
  const endTime = performance.now();
  const totalTime = ((endTime - startTime) / 1000).toFixed(3);

  // Clear loading row
  output.innerHTML = "";

  // Add each promise result to table
  results.forEach((result) => {
    const tr = document.createElement("tr");

    const td1 = document.createElement("td");
    td1.textContent = result.name;

    const td2 = document.createElement("td");
    td2.textContent = result.time.toFixed(3);

    tr.appendChild(td1);
    tr.appendChild(td2);
    output.appendChild(tr);
  });

  // Add TOTAL row
  const totalRow = document.createElement("tr");

  const tdTotal = document.createElement("td");
  tdTotal.textContent = "Total";

  const tdTotalTime = document.createElement("td");
  tdTotalTime.textContent = totalTime;

  totalRow.appendChild(tdTotal);
  totalRow.appendChild(tdTotalTime);

  output.appendChild(totalRow);
});

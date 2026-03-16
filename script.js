//your JS code here. If required.

const output = document.getElementById("output");

// Create loading row
const loadingRow = document.createElement("tr");
loadingRow.id = "loading";

const loadingCell = document.createElement("td");
loadingCell.colSpan = "2";
loadingCell.textContent = "Loading...";

loadingRow.appendChild(loadingCell);
output.appendChild(loadingRow);

// Function to create promise
function createPromise(index) {

  const delay = Math.random() * 2 + 1;

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

const startTime = performance.now();

Promise.all(promises).then((results) => {

  const endTime = performance.now();
  const totalTime = ((endTime - startTime) / 1000).toFixed(3);

  // Remove loading row
  document.getElementById("loading").remove();

  results.forEach((result) => {

    const row = document.createElement("tr");

    const col1 = document.createElement("td");
    col1.textContent = result.name;

    const col2 = document.createElement("td");
    col2.textContent = result.time.toFixed(3);

    row.appendChild(col1);
    row.appendChild(col2);

    output.appendChild(row);

  });

  // Total row
  const totalRow = document.createElement("tr");

  const totalName = document.createElement("td");
  totalName.textContent = "Total";

  const totalValue = document.createElement("td");
  totalValue.textContent = totalTime;

  totalRow.appendChild(totalName);
  totalRow.appendChild(totalValue);

  output.appendChild(totalRow);

});

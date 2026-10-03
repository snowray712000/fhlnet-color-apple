// 當 ready 時，在 table tbody append 35 rows
document.addEventListener("DOMContentLoaded", function () {
    const tbody = document.querySelector("table tbody");
    for (let i = 1; i <= 35; i++) {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>Row ${i}</td>
            <td>${Math.floor(Math.random() * 100)}</td>
            <td>${Math.floor(Math.random() * 100)}</td>
        `;
        tbody.appendChild(row);
    }

    // row 7 selected
    const row7 = tbody.querySelector("tr:nth-child(7)");
    row7.classList.add("selected");
    // row 7 td 0 (Row 7 seleted) text color to accentColor
    const row7Td0 = row7.querySelector("td:nth-child(1)");
    row7Td0.textContent = "Row 7 selected";

    // row 10 selected
    const row10 = tbody.querySelector("tr:nth-child(10)");
    row10.classList.add("selected");
    const row10d0 = row10.querySelector("td:nth-child(1)");
    row10d0.textContent = "Row 10 selected";
});
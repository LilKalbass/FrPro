let table = document.createElement("table");

document.body.append(table);

for (let i = 1; i < 11; i++) {
    let tr = document.createElement("tr");

    table.appendChild(tr);

    for (let j = 1; j < 11; j++) {
        let td = document.createElement("td");

        tr.appendChild(td);
        td.innerText = i * j;
    }
}
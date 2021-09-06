var records = [
    {
        local: moment.locale('pt-br'),
        date: getDate(),
        entrance: localStorage.getItem('start'),
        exit: localStorage.getItem('finish')
    }    
];

function addTable() {
    let tBody = document.getElementById("minhaTabela");
    for (record in records) {
        let tr = addLine(records[record]);
        tBody.appendChild(tr);
    }
}
addTable();

function getDate() {
    let result = localStorage.getItem('date');
    if (!result) {
        result = "N/A";
    }
    return result;
}

function addLine(record) {
    let tr = document.createElement('tr');
    let tdDate = addCell(record, "date");
    tr.appendChild(tdDate);
    let tdEntrada = addCell(record, "entrance");
    tr.appendChild(tdEntrada);
    let tdSaida = addCell(record, "exit");
    tr.appendChild(tdSaida);
    return tr;
}

function addCell(record, nameItem) {
    let border = '2px solid black';
    let td = document.createElement('td');
    let date = record[nameItem];
    td.appendChild(document.createTextNode(date));
    td.style.border = border;
    return td;
}


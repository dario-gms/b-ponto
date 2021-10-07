// var records = [
//     {
//         local: moment.locale('pt-br'),
//         date: getDate(),
//         entrance: localStorage.getItem('start'),
//         exit: localStorage.getItem('finish')
//     }   
// ];
moment.locale('pt-br')
let dayWeek = moment().format('LL');
document.getElementById("dayWeek").innerHTML = dayWeek;
let retrievedObject = localStorage.getItem('testObject');
let records = JSON.parse(retrievedObject);

function addTable() {
    let tBody = document.getElementById("minhaTabela");
    // let count = 0;
    for (record in records) {
        // count += 1

        // if (count > 4) {

        // } else {
            let tr = addLine(records[record]);
            tBody.appendChild(tr);
        // }
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
    let tdEntrada = addCell(record, "entrance");
    tr.appendChild(tdEntrada);
    return tr;
}

function addCell(record, nameItem) {
    let border = '1px solid black';
    let td = document.createElement('table');
    let date = record[nameItem];
    td.appendChild(document.createTextNode(date));
    td.style.border = border;
    return td;
}


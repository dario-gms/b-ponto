// moment().locale('pt-br');
// moment().format('l');

var records = [
    getDateToView(new Date(2014,10,1,8,4,2)),
    getDateToView(new Date(2014,10,1,12,4,2)),
    getDateToView(new Date(2014,10,1,13,4,2)),
    getDateToView(new Date(2014,10,1,18,4,2)),

    getDateToView(new Date(2015,10,1,8,4,2)),
    getDateToView(new Date(2015,10,1,12,4,2)),
    getDateToView(new Date(2015,10,1,13,4,2)),
    getDateToView(new Date(2015,10,1,18,4,2)),
]
.sort()
;

function getDateToView(date) {
    return moment(date).format("HH:mm");
};

// let dayWeek = moment().format('l');
document.getElementById("dayWeek").innerHTML = dayWeek;
let retrievedObject = localStorage.getItem('testObject');
// let records = JSON.parse(retrievedObject);

function prepareData() {
    let min = Math.min(...records);
    console.log("------------");
    console.log(min)
};
prepareData()

function addTable() {
    records.sort()
    console.log(records);
    let tBody = document.getElementById("myTable");
    let tr = addLine(records);
    tBody.appendChild(tr);
}
addTable();

function getDate() {
    let result = localStorage.getItem('date');
    if (!result) {
        result = "N/A";
    }
    return result;
}

function addLine(marks) {
    //Essa função adiciona uma nova linha para cada data;
    //Por essa razão, o objeto marks deve receber todas as marcações de um determinado dia
    //Para que isso ocorra, é necessário modelar os dados para essa funcão ser usada da melhor forma
    // console.log(marks)
    let tr = document.createElement('tr');
    let td = document.createElement('td');
    td.appendChild(document.createTextNode("data x/x/xx"));
    tr.appendChild(td);
    for (index in marks) {
        let td = addCell(marks[index]);
        tr.appendChild(td);
    }
    return tr;
}

function addCell(record) {
    console.log(record);
    // let border = '1px solid black';
    let td = document.createElement('td');
    td.appendChild(document.createTextNode(record));
    // td.style.border = border;
    return td;
}
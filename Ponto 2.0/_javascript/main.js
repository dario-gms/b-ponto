moment.locale('pt-br')
let hour = moment().format('LT')
let date = new Date();
let time = date.getHours();
let user = 'Dario';
function load() {
    let msg = window.document.getElementById('msg');
    let img = window.document.getElementById('image');
    msg.innerHTML = `Agora são <strong>${hour}</strong>.`;
    if (time >= 0 && time < 12) {
        img.src = '_imagens/manha.png';
        document.body.style.background = '#1fa64c';
        msg.innerHTML += '<p>Tenha um bom dia.</p>';
    } else if (time >= 12 && time < 18) {
        img.src = '_imagens/tarde.png';
        document.body.style.background = '#6693c4';
        msg.innerHTML += '<p>Tenha uma boa tarde!</p>';
    } else {
        img.src = '_imagens/noite.png';
        document.body.style.background = '#0e151d';
        msg.innerHTML += '<p>Tenha uma boa noite.</p>';
    }
}
function mark() {
    document.getElementById("start").innerHTML = `Expediente iniciado às <strong>${hour}</strong>. \nTenha um bom trabalho <strong>${user}</strong>!`;
    localStorage.setItem('startTime', moment().format('LT'))
    histPersist()
}

function histPersist() {
    let retrievedObject = localStorage.getItem('testObject');
    var records = JSON.parse(retrievedObject)

    let testObject = {
        date: moment().format('L'),
        entrance: localStorage.getItem('startTime'),
        exit: localStorage.getItem('endTime')
    };
    if (records) {
        records.push(testObject);
    } else {
        records = [testObject]
    }
    localStorage.setItem('testObject', JSON.stringify(records));
}

function terminate(){
    let endHour = moment().format('LT');
    document.getElementById("finish").innerHTML = `Expediente encerrado às <strong>${endHour}</strong>. \nBom descanso <strong>${user}</strong>!`;
    localStorage.setItem('endTime', moment().format('LT'))
}
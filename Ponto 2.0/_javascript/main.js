moment.locale('pt-br')
var hour = moment().format('LT')
var date = new Date();
var time = date.getHours();
var user = 'Dario';
function load() {
    var msg = window.document.getElementById('msg');
    var img = window.document.getElementById('image');
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

 let newMark = {
    date: moment().format('L'),
    entrance: moment().format('LT'),
    exit: moment().format('LT'),
};

function mark() {
    //primeiro recuperar o que já existe
    let retrievedString = localStorage.getItem('testObject'); // recuperou a string
    var records = JSON.parse(retrievedString) // transformou num obj
    var start = `Expediente iniciado às <strong>${moment().format('LT')}</strong>. \nTenha um bom trabalho <strong>${user}</strong>!`
    if (records) { // verificou se já existe
        records.push(newMark); // caso exista, adiciou mais um lá dentro
    } else {
        records = [newMark]; // caso n exista, cria um array já com o novo valor
    }
    document.getElementById("start").innerHTML = start;
    let recordsString =  JSON.stringify(records); // transformação de obj em string
    localStorage.setItem('testObject', recordsString);
}

function terminate() {    
    localStorage.setItem('finish', moment().format('LT'));
    let finish = `Expediente encerrado às <strong>${localStorage.getItem('finish')}</strong>. \nBom descanso <strong>${user}</strong>!`;
    document.getElementById("finish").innerHTML = finish;
}

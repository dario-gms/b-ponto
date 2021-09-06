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
function mark() {
        localStorage.setItem('date', moment().format('L'));
        localStorage.setItem('start', moment().format('LT'));
        localStorage.setItem('mark', `Expediente iniciado às <strong>${localStorage.getItem('start')}</strong>. \nTenha um bom trabalho <strong>${user}</strong>!`)
        if (localStorage.mark) {
            document.getElementById('start').innerHTML = localStorage.mark;
        }
}

function terminate() {
    var reply = confirm("Deseja encerrar o expediente?");
    localStorage.setItem('finish', moment().format('LT'));
    if (reply) {
        finish = `Expediente encerrado às <strong>${localStorage.getItem('finish')}</strong>. \nBom descanso <strong>${user}</strong>!`;
    }
    else {
        alert("Ação cancelada!");
        finish = "Tenha um bom trabalho.";
    }
    document.getElementById("finish").innerHTML = finish;
}




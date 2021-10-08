moment.locale('pt-br')
var hour = moment().format('LT')
var date = new Date();
var time = date.getHours();
var user = 'Dario';
function load() {
    var msg = window.document.getElementById('msg');
    var img = window.document.getElementById('image');
    let path = "./main/_imagens/";
    
    msg.innerHTML = `Agora são <strong>${hour}</strong>.`;
    if (time >= 0 && time < 12) {
        img.src = path + '/manha.png';
        document.body.style.background = '#1fa64c';
        msg.innerHTML += '<p>Tenha um bom dia.</p>';
    } else if (time >= 12 && time < 18) {
        img.src = path + 'tarde.png';
        document.body.style.background = '#6693c4';
        msg.innerHTML += '<p>Tenha uma boa tarde!</p>';
        if (time >=12 && time < 14){
            msg.innerHTML += 'Que tal uma pausa para o almoço?'
        }
    } else {

        img.src = path + 'noite.png';
        document.body.style.background = '#0e151d';
        msg.innerHTML += '<p>Tenha uma boa noite.</p>';
    }
}
function mark() {
    document.getElementById("start").innerHTML = "Marcação realizada com sucesso!"
        let retrievedObject = localStorage.getItem('testObject');
        var records = JSON.parse(retrievedObject)


        let testObject = {
            // date: moment().format('L'),
            entrance: moment().format("DD/MM"+' - '+'LT'),
        };

        if (records) {
            records.push(testObject);
        } else {
            records = [testObject]
        };


        // var testObject = { 'one': 1, 'two': 2, 'three': 3 };

        // Put the object into storage
        localStorage.setItem('testObject', JSON.stringify(records));
        
        // Retrieve the object from storage
        
        // console.log('retrievedObject: ', JSON.parse(retrievedObject));





        // localStorage.setItem('reg', reg);
        // if (localStorage.mark) {
        //     document.getElementById('start').innerHTML = localStorage.mark;
        // }
}

// function terminate() {
//     var reply = confirm("Deseja encerrar o expediente?");
//     localStorage.setItem('finish', moment().format('LT'));
//     if (reply) {
//         finish = `Expediente encerrado às <strong>${localStorage.getItem('finish')}</strong>. \nBom descanso <strong>${user}</strong>!`;
//     }
//     else {
//         alert("Ação cancelada!");
//         finish = "Tenha um bom trabalho.";
//     }
//     document.getElementById("finish").innerHTML = finish;
// }




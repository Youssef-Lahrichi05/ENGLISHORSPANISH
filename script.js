const english = document.getElementById('england');
const spanish = document.getElementById('spain');
const dare = document.getElementsByClassName('dare')[0];
const buttons = document.querySelectorAll('button'); // Select all buttons

function say(event) {
    if (event.target === english) {
        document.body.style.backgroundImage= '';
        dare.innerHTML = '<h1>Whoever moves first is gay</h1>';
    } else if (event.target === spanish) {
        document.body.style.backgroundImage= '';
        dare.innerHTML = '<h1>El primero que se mueve es gay</h1>';
    }
}

english.onclick = say;
spanish.onclick = say;
english.ontouchend= say;
spanish.ontouchend= say;

function bck() {
    document.body.style.backgroundImage = "url('image/drapeau-gay-au-vent.jpg')";
    dare.innerHTML = '<h1>You moved! Gay!</h1>';
}

buttons.forEach(button => {
    button.onmouseout = bck;
    button.ontouchend = bck;
});


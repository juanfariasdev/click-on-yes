

let isover = false;
document.querySelector("#no").addEventListener("mouseover", (function () {
    Move()
}), false)

document.querySelector("#noWithBorder").addEventListener("mouseover", (function () {
    Move()
}), false)

document.
    querySelector("#no").addEventListener("mouseout", (function () {
        Move()
    }), false)

function Move() {
    let e = document.querySelector('#noWithBorder');

    console.log(e)

    e.style.position = "absolute";

    e.style.right = Math.floor(Math.random() * 95) + "%"
    e.style.bottom = Math.floor(Math.random() * 95) + "%"


}


let responsePopUp = "hehehe <3"


function popUpYes() {
    alert(responsePopUp)
}

// Função para obter o valor de um parâmetro na query string
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

// Captura o valor do parâmetro 'text' da query string
const title = getQueryParam('title');

const response = getQueryParam('response');


// Se o parâmetro 'text' existir, muda o título da página
if (title) {
    document.title = title;
    document.getElementById('title').innerHTML = title;
}
if (response) {
    responsePopUp = response;
}


function checkAnswer() {
    const title = document.getElementById('question').value;
    const answer = document.getElementById('answer').value;
    window.location.href = "/play.html?title=" + title + "&response=" + answer;
}

function copyLink() {
    // Obtém a URL atual da página
    const link = window.location.href;

    // Utiliza a API Clipboard para copiar o link para a área de transferência
    navigator.clipboard.writeText(link).then(function () {
        alert('Link copiado para a área de transferência!');
    }).catch(function (error) {
        console.error('Erro ao copiar o link:', error);
    });
}
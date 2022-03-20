'use strict'

let modal = document.getElementById('modalWindow');
let btn = document.getElementById('modal');
let close = document.getElementsByClassName('close')[0];

btn.onclick = function () {
    modal.style.display = 'block';
}

close.onclick = function () {
    modal.style.display = 'none';
}

window.onclick = function (event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}
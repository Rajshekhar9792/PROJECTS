let minus = document.querySelector('.minus');
let value = document.querySelector('.value');
let plus = document.querySelector('.plus');
let button = document.querySelector('.btn');

minus.addEventListener('click', () => {
    let b = value.innerText - 1;
    b = (b < 10 && b >= 0 ? "0" + b : b)
    value.innerText = b;
});

let a = 1;
plus.addEventListener('click', () => {
    a++;
    a = (a < 10 && a >= 0 ? '0' + a : a);
    value.innerText = a;
});

button.addEventListener('click', () => {
    value.innerText = "00";
    a = 0;

});




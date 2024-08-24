let inputBox = document.getElementById('inputBox');
let inputSlider = document.querySelector('#slider');
let length = document.getElementById('length');
let lowerCase = document.getElementById('lowercase');
let uperCase = document.getElementById('upercase');
let numbers = document.getElementById('numbers');
let symbols = document.getElementById('symbols');
let button = document.getElementById('genrateBtn');
let copyIcon = document.querySelector('#copy-Icon');
let check = document.querySelector('#check');

length.textContent = inputSlider.value;

inputSlider.addEventListener('input',() =>{
    length.textContent = inputSlider.value;
});

button.addEventListener('click',()=>{
    inputBox.value = genratePassword();
});

let lowerChars = "abcdefghijklmnopqrstuvwxyz";
let upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let allNumbers = "0123456789";
let allSymbols = "!@#$%^&*~";

function genratePassword(){
    let genPassword = ""; 
    let allChars = "";
    allChars += lowerCase.checked ? lowerChars : "";
    allChars += uperCase.checked ? upperChars : "";
    allChars += numbers.checked ? allNumbers : "";
    allChars += symbols.checked ? allSymbols : "";

    if(allChars == "" || allChars.length == 0){
        return genPassword;
    }

    let i =1;
    while(i <= inputSlider.value){
        genPassword += allChars.charAt(Math.floor(Math.random()* allChars.length));
        i++;
    }
    // genPassword = lowerChars.charAt(Math.floor(Math.random()* lowerChars.length));
    return genPassword;
    
}

copyIcon.style.display = "flex";
copyIcon.addEventListener('click',() =>{
    // let copy = "";
    // copy = inputBox.value;
    // console.log(copy);
    // return copy;
    if(inputBox.value != "" || inputBox.value.length >= 1){
    navigator.clipboard.writeText(inputBox.value);
    // copyIcon.style.display = "none";
    // copyIcon.innerText = "check";
    check.style.display = "flex";
    copyIcon.style.display = "none";
    check.title = "Password Copied";
    } 
    setTimeout(() =>{
        copyIcon.style.display = "flex";
        check.style.display = "none"; 
    },2000)

});

   
    


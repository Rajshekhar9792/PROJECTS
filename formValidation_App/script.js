const submitBtn = document.getElementById('btn');
const nameError = document.getElementById('nameError');

submitBtn.addEventListener('click', (e)=>{
e.preventDefault();

if(validateName()){
    alert("form submitted Successfully");
}

});

function validateName(){
    let name = document.getElementById('name');
    
    if(name.length == 0){
        nameError.innerHTML = "Name is required";
        return false;
    }
    return true;
};
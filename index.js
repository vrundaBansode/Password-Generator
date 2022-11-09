const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

function random(){
    let ran = Math.floor(Math.random()*characters.length)
    return ran
}

function renderPwd(){
    let pwd = ""
    for(let i = 0; i < 15; i++){
        pwd += characters[random()]
    }
    return pwd
}

let pwd1 = document.querySelector("#pass1")
let pwd2 = document.querySelector("#pass2")

function generatePwd(){
    pwd1.textContent = renderPwd()
    pwd2.textContent = renderPwd()
}

function clipText(value){
    if(value == 1){
        navigator.clipboard.writeText(pwd1.textContent);
        alert("Copied the text: " + pwd1.textContent);
    }else{
        navigator.clipboard.writeText(pwd2.textContent);
        alert("Copied the text: " + pwd2.textContent);
    }
}





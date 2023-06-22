let counter=0
let num = document.getElementById("count-el")
let sav = document.getElementById("save-el")

function increment(){
    counter += 1; 
    num.innerText=counter;
}

increment()

function save(){
    sav.textContent += counter + " -"
    num.innerText = 0
    counter = 0
}
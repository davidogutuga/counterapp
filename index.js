let number = document.getElementById('number')
let count = 0

function increase(){
    count += 1
    number.textContent = count
    if(count > 0){
        number.style.color = "green"
    }
}

function decrease(){
    count -= 1
    number.textContent = count
    if(count < 0){
        number.style.color = "red"
    }
}
function reset(){
    count = 0
    number.textContent = count
    if(count === 0){
        number.style.color = "white"
    }
}
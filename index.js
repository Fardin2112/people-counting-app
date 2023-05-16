//document.getElementById("count-el").innerText = 5

let saveEl = document.getElementById("save-id")
let countEl=document.getElementById("count-el")

let count = 0

// increment function
function increment(){
    count += 1
    countEl.innerText = count

}

// decrement function
function decrement(){
    count -= 1
    if(count<0){
        count=0
    }
    countEl.innerText = count

}
//save count
function save(){
    let countStr = count + " - "
    // saveEl.innerText += countStr
    saveEl.textContent += countStr 
    countEl.innerText = 0
    count = 0

    
}

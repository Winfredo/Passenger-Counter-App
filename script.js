let countEl = document.getElementById("count-element")


let count = 0


function increments() {
    count += 1
    countEl.innerHTML = count
    console.log(count)
}
let nocount = document.getElementById("count-element")


let counts = 0
 
function decrements() {
    counts = 0
    count = 0
    allcount = counts + count 
    nocount.innerHTML = allcount
    console.log(counts)
}

let saveEl = document.getElementById("save-el")

function save(){
    let saveStr = count + "-" 
    saveEl.innerText += saveStr
    console.log(saveStr)
    countEl.innerText = 0
    count = 0 

}















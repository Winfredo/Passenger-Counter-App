let countEl = document.querySelector(".count-element")
let IncrementBtn = document.querySelector(".increment-btn")
let ResetBtn = document.querySelector(".reset-btn")
let SaveBtn = document.querySelector(".save-btn")
let saveEl = document.querySelector(".save-el")
let nocount = document.querySelector(".count-element")


let count = 0


function increments()  {
    count += 1
    countEl.innerHTML = count
    console.log(count)
}

 IncrementBtn.addEventListener("click", increments)



let counts = 0
 
function decrements () {
    counts = 0
    count = 0
    allcount = counts + count 
    nocount.innerHTML = allcount
    console.log(counts)
}

ResetBtn.addEventListener("click", decrements)


function save(){
    let saveStr = count + "-" 
    saveEl.innerText += saveStr
    console.log(saveStr)
    countEl.innerText = 0
    count = 0 

}

SaveBtn.addEventListener("click",save)














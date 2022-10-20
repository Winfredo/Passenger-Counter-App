
let countEl = document.getElementById("count-element")

console.log(countEl)



let count = 0


function increments(){
    count = count + 1
    countEl.innerHTML = count
    console.log(count)
}


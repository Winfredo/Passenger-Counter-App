let countEl = document.getElementById("count-element")


let count = 0

function increments() {
    count = count + 1
    countEl.innerHTML = count
    console.log(count)
}
let countDel = document.getElementById("reset-btn")


function decrements(){
    let counts = 0
    countDel.innerHTML = counts
    console.log(counts)

}

let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

function reset() {
    alert("Are you sure? Your data all will be lost.")
    countEl.textContent = 0
    saveEl.textContent = "Previous Entries : 0"
}

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let countStr = count + " + "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}

function incrementReset() {
    countEl.textContent = 0
    count = 0
}


let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let totalEl = document.getElementById("total-el")
let count = 0
let totalCount = 0

function reset() {
    alert("Are you sure? Your all data will be lost.")
    countEl.textContent = 0
    totalEl.textContent = "Total : "
    saveEl.textContent = "Previous Entries : "
    count = 0
    totalCount = 0
}

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let countStr = count + " + "
    saveEl.textContent += countStr
    countEl.textContent = 0
    totalCount += count
    totalEl.textContent = "Total : " + totalCount
    count = 0
}

function incrementReset() {
    countEl.textContent = 0
    count = 0
}


// intialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked
// change the count-el in the HTML

let countEl = document.getElementById("count-el")
let count = 0
let savedString = document.getElementById("saved-string")

function increment() {
    count += 1
    countEl.textContent = count
}

function save(){
	if (savedString.textContent == "Previous Entries: "){
		savedString.textContent += count
	}
	else{
		savedString.textContent += " - " + count
	}
	count = 0
	countEl.textContent = count
	}
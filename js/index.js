const inputEl = document.getElementById("search");
const buttonEl = document.getElementById("submit");
const listEl = document.getElementById("list");

function displayError() {
    console.log('ERROR')
}

buttonEl.addEventListener('click', () => {
    if (inputEl.value.length < 1) {
        displayError();
        return;
    }

    listEl.innerHTML += "<li>" + inputEl.value + "</li>";
    console.log(inputEl.value);
    inputEl.value = "";
})
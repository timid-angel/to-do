import { checkboxFunctionality } from "./checkbox.js";
const inputEl = document.getElementById("addItem");
const buttonEl = document.querySelector(".home__infield-button");
const listEl = document.querySelector(".display__list");
const errMsg = document.querySelector('.error');
const successMsg = document.querySelector('.success');
const sysError = document.querySelector('.systemError');

function displayError() {
    errMsg.classList.remove("hidden");
    setTimeout(() => {
        errMsg.classList.add("hidden");
    }, 2000)
}

function displaySuccess() {
    successMsg.classList.remove("hidden");
    setTimeout(() => {
        successMsg.classList.add("hidden");
    }, 2000)
}

function displaySystemError() {
    sysError.classList.remove("hidden");
    setTimeout(() => {
        sysError.classList.add("hidden");
    }, 2000)
}

function addItem(str) {
    const divItem = document.createElement('div');
    divItem.classList.add("display__item");
    divItem.setAttribute('data-id', '0');

    const divCheckBox = document.createElement('div');
    divCheckBox.classList.add("display__item-checkboxDiv");
    const checkBox = document.createElement('div');
    checkBox.classList.add('display__item-checkbox');
    divCheckBox.append(checkBox)
    // divCheckBox.innerHTML = `<div class="display__item-checkbox"></div>`;

    const divP = document.createElement('div');
    divP.classList.add('display__item-pDiv');
    const pItem = document.createElement('p');
    pItem.classList.add('display__item-p');
    divP.append(pItem);
    pItem.textContent = str;

    const divTrash = document.createElement('div');
    divTrash.classList.add("display__item-trashDiv");
    divTrash.innerHTML = `<div class="display__item-trash"><img src="images/trash.png" alt="Trash Icon" width="20" height="20" class="display__item-trashPic"></div>`;

    divItem.append(divCheckBox);
    divItem.append(divP);
    divItem.append(divTrash);
    listEl.append(divItem);

    checkboxFunctionality(checkBox, pItem);

    return divItem;
}

buttonEl.addEventListener('click', () => {
    if (inputEl.value.length < 1) {
        displayError();
        return;
    }

    const lastChild = document.querySelector('.display__item:last-child');
    const divItem = addItem(inputEl.value);
    const idN = Number(lastChild.dataset.id) + 1;
    divItem.dataset.id = idN;

    const todoMain = {
        userId: 1,
        id: idN,
        title: inputEl.value,
        completed: false
    };

    fetch('https://jsonplaceholder.typicode.com/todos', {
        method: 'POST',
        body: JSON.stringify(todoMain),
        headers: { 'Content-type': 'application/json; charset=UTF-8' }
    }).then((response) => response.json())
        .catch((err) => {
            console.log(err);
            displaySystemError();
        })
        .then((json) => {
            console.log(json);
            displaySuccess();
        })
        .catch((err) => {
            console.log(err);
            displaySystemError();
        })

})

export { addItem };
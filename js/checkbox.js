function checkboxFunctionality(checkbox, pEl) {
    checkbox.addEventListener('click', () => {
        if (checkbox.classList.contains('display__item-checkbox--checked')) {
            pEl.classList.remove('display__item-p--checked');
        } else {
            pEl.classList.add('display__item-p--checked');
        }
        checkbox.classList.toggle('display__item-checkbox--checked');
    })
}

function addCheckboxListener() {
    const checkboxArr = document.querySelectorAll('.display__item-checkbox');
    const pElArr = document.querySelectorAll('.display__item-p');
    checkboxArr.forEach((checkbox, index) => {
        checkboxFunctionality(checkbox, pElArr[index]);
    })
}

addCheckboxListener()

export { checkboxFunctionality };
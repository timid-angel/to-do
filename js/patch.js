function checkboxFunctionality(checkbox, pEl) {
    checkbox.addEventListener('click', () => {
        if (checkbox.classList.contains('display__item-checkbox--checked')) {
            pEl.classList.remove('display__item-p--checked');
        } else {
            pEl.classList.add('display__item-p--checked');
        }
        checkbox.classList.toggle('display__item-checkbox--checked');
        const itemEl = checkbox.parentNode.parentNode;
        const newValue = checkbox.classList.contains('display__item-checkbox--checked');
        const url = 'https://jsonplaceholder.typicode.com/posts/' + itemEl.dataset.id;

        fetch(url, {
            method: 'PATCH',
            body: JSON.stringify({
                completed: newValue
            }),
            headers: { 'Content-type': 'application/json; charset=UTF-8' }
        })
            .then((response) => response.json())
            .then((json) => console.log(json));
    })
    const pArea = checkbox.parentNode.parentNode.firstChild.nextSibling;
    pArea.addEventListener('click', () => {
        checkbox.click();
    });
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
const checkboxArr = document.querySelectorAll('.display__item-checkbox');
console.log(checkboxArr)
checkboxArr.forEach((checkbox) => {
    checkbox.addEventListener('click', () => {
        checkbox.classList.toggle('display__item-checkbox--checked');
    })
})
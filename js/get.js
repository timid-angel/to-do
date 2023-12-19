import { addItem } from "./post.js";
const inputEl = document.getElementById("addItem");
inputEl.value = "";

const url = "https://jsonplaceholder.typicode.com/todos";

fetch(url).then((response) => {
    return response.json()
})
    .then((dataArr) => {
        dataArr = dataArr.filter((data) => data["userId"] == 2);
        dataArr.forEach((data) => {
            if (!data.completed) {
                const divItem = addItem(data['title']);
                divItem.dataset.id = data["id"];
            } else {
                const divItem = addItem(data['title']);
                divItem.dataset.id = data["id"];
                const checkBox = divItem.firstChild.firstChild;
                const pItem = divItem.firstChild.nextSibling.firstChild;
                checkBox.classList.add('display__item-checkbox--checked');
                pItem.classList.add('display__item-p--checked');
            }
            console.log(data);
        });
    })


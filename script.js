//Seleção de elementos
const multiplicationForm = document.querySelector("#multiplication-form");
const numberInput = document.querySelector("#number");
const multiplicationInput = document.querySelector("#multiplicator");

const multiplicationTile = document.querySelector("#multiplication-title span")

const multiplicationTable = document.querySelector("#multiplicaton-operations")

//funções
const createTable = (number, multiplicatorNumber) => {
    multiplicationTable.innerHTML = "";

    for(i=1;i<=multiplicatorNumber;i++){
        const result = number * i;
         
        const template = `<div class="row">
            <div class="operation">${number} x ${i} = </div>
            <div class="result">${result}</div>
            </div>`;

        const parser = new DOMParser()    

        const htmlTemplate = parser.parseFromString(template, "text/html")

        const row = htmlTemplate.querySelector(".row")

        multiplicationTable.appendChild(row);
    }

    multiplicationTile.innerHTML = number;

}

//Eventos
multiplicationForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const multiplicationNumber = +numberInput.value;

    const multiplicationNumber = +multiplicationInput.value;

    if(!multiplicationNumber || !multiplicationNumber) return;

    createTable(multiplicationNumber, multiplicationNumber);    

})

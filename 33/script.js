//Вивести таблицю 10 × 10, заповнену числами від 1 до 100 (таблиця створюється динамічно)

const container = document.createElement("div");
container.classList.add("container-wrapp");

for (let i = 1; i < 101; i++) {
    const cell = document.createElement("div");
    cell.classList.add("number");
    cell.innerText = i;

    container.append(cell);
}

document.body.append(container);
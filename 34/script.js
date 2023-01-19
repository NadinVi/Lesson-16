//У папці images є зображення 1.jpg, 2.jpg, 3.jpg, 4.jpg, 5 .jpg, 6.jpg, 7.jpg, 8.jpg, 9.jpg
 //Вивести зображення з цієї папки, отримане випадковим чином (Math.random)

//  const container = document.createElement("div");
//  const img = document.createElement("img");
//  img.setAttribute("src", `images/1.jpg`);
//  document.body.append(img);

const img = document.createElement("img");
const imgContainer = document.createElement("div");

imgContainer.classList.add("picture")
img.setAttribute("src", `images/${imgRandom()}.jpg`);
img.setAttribute("width", "600");
img.setAttribute("alt", "picture");

function imgRandom() {
    return Math.floor(Math.random() * (9 - 1) + 1);
};

imgContainer.append(img);
document.body.append(imgContainer);
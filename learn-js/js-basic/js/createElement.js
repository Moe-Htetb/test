const root = document.querySelector("#root");

const h2 = document.createElement("h2");
h2.innerText = "San Kyi tr";
h2.classList.add("font-bold");

const img = document.createElement("img");
img.classList.add("w-36", "h-40");
img.src = "/img/IMG_6753.jpeg";

const img2 = new Image(200, 200);
img2.src = "/img/IMG_6880.jpeg";

// root.append(img);
// root.append(img2);

const div = document.createElement("div");

div.classList.add("flex", "gap-3");
div.append(img);
div.append(img2);

const ul = document.createElement("ul");

const createList = (text) => {
  const li = document.createElement("li");
  li.innerText = text;

  return li;
};

ul.append(createList("apple"));
ul.append(createList("mango"));
ul.append(createList("tea"));

ul.removeChild(ul.children[2]);

root.append(h2);
root.append(div);
root.append(ul);

// console.log(createList("apple"));
// console.log(createList("apple"));
// console.log(createList("mango"));

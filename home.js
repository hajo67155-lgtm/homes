const add = document.getElementById("add-back");
const sample = document.getElementById("sample-back");
const title = document.getElementById("title");
const ww = window.innerWidth;
const wh = window.innerHeight;
let clone_no = 0;
update();
sample.style.display = "none";

add.addEventListener("click", function () {
    clone_no++;
    title.style.display = "flex";
    add_element();
    update();
});

document.getElementById("exit").onclick = function() {
    title.style.display = "none";
}

function add_element() {
    const clone = sample.cloneNode(true);
    clone.id = `project_No${clone_no}`;
    clone.style.display = "block";
    document.body.appendChild(clone)
}

function update() {
    add.style.left = `${ww*0.14+ww*0.15*(clone_no%5)}px`;
    add.style.top = `${ww*0.05+ww*0.13*Math.floor(clone_no/5)}px`;
    for(let j = 0; j < clone_no; j++) {
        const clone_element = document.getElementById(`project_No${j+1}`);
        clone_element.style.left = `${ww*0.14+ww*0.15*(j%5)}px`;
        clone_element.style.top = `${ww*0.05+ww*0.13*Math.floor(j/5)}px`;
    }
}

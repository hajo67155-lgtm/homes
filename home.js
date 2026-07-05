const add = document.getElementById("add-back");
const sample = document.getElementById("sample-back");
const title = document.getElementById("title");
const ww = window.innerWidth;
const wh = window.innerHeight;
let clone_no = 0, mx = 0, my = 0, mxx = 0, myy = 0, x2 = 0, y2 = 0;
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

document.addEventListener("mousemove", (event) => {
    mx = event.clientX - ww*0.14;
    my = event.clientY - ww*0.05;
    mxx = mx%(ww*0.15);
    myy = my%(ww*0.13);
    document.getElementById("debug").innerHTML = "x:"+mx+"<br>y:"+my+"<br>mxx:"+mxx+"<br>myy:"+myy+"<br>";
    if(mx%(ww*0.15) < ww*0.1 && mx > 0 && my%(ww*0.13) < ww*0.1 && my > 0) {
        x2 = Math.ceil(mx-mxx)/Math.ceil(ww*0.15)+1;
        y2 = Math.ceil(my-myy)/Math.ceil(ww*0.13);
        if(x2+y2 < clone_no) {
            const clone_element = document.getElementById(`project_No${x2+y2}`);
            clone_element.style.transform = "scale(0.95)";
        }
    } else {
        x2 = 0;
        y2 = 0;
    }
    document.getElementById("debug").innerHTML += "<br>x2:"+x2+"<br>y2:"+y2;
})

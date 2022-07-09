function createSquare(num, q) {
    const card = document.createElement("div");
    card.classList.add("square");

    if(q){
        const p = document.createElement("p");
        const btnContainer = document.createElement("div");
        const btnIncrease = document.createElement("button");
        const btnDecrease = document.createElement("button");
        p.textContent = 0;
        p.setAttribute("id", num);
        card.appendChild(p);

        btnContainer.classList.add("button-container");

        btnIncrease.classList.add("btn-plus");
        btnIncrease.setAttribute("id",num);
        btnIncrease.innerText = "+"

        btnDecrease.classList.add("btn-minus");
        btnDecrease.setAttribute("id",num);
        btnDecrease.innerText = "-"

        btnContainer.appendChild(btnIncrease);
        btnContainer.appendChild(btnDecrease);

        card.appendChild(btnContainer);
    }
    return card;
}

function plus(id){
    const p = document.getElementById(id);
    const textContent = Number(p.textContent);
    p.textContent = textContent + 1;
}

function minus(id){
    const p = document.getElementById(id);
    const textContent = Number(p.textContent);
    p.textContent = textContent - 1;
}

function handler(e){
    const target = e.target;
    if(target.className.includes("btn-plus")){
        plus(target.getAttribute("id"));
    }else if(target.className.includes("btn-minus")){
        minus(target.getAttribute("id"));
    }
}

function FirstTask() {
    const firstTask = document.querySelector(".firstTask")
    for(let i = 0; i < 5; i++){
        const card = createSquare(i,true);
        card.addEventListener("click",handler)
        firstTask.appendChild(card);
    }
}

function SecondTask() {
    const SecondTask = document.querySelector(".secondTask");
    for(let i = 0; i < 5; i++){
        let count = 0;
        const colors = ["blue", "green", "yellow"]
        const card = createSquare();
        card.addEventListener("click",function()  {
            if(count === 3) count = 0;
            card.style.background = colors[count];
            count++;
        });
        SecondTask.appendChild(card);
    }
}

function ThirdTask() {
    const ThirdTask = document.querySelector(".thirdTask");
    let previousSquare = 0;
    for(let i = 0; i < 5; i++){
        const card = createSquare();
        ThirdTask.appendChild(card);
    }
    ThirdTask.addEventListener("click", selectedSquare => {
        const currentTarget = selectedSquare.target;
        if(currentTarget.className === "square"){
            currentTarget.classList.add("green");
            if(previousSquare){
                previousSquare.classList.remove("green");
            }
            previousSquare = currentTarget;
        }
    })
}

FirstTask();
SecondTask();
ThirdTask();
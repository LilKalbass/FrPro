const API_URL = "https://rickandmortyapi.com/api/character?page=1";
let nextPage = null;

// XHR - XML Http Request
// fetch - ES6 - Promise

const loadButton = document.querySelector(".wrapper button");
const content = document.querySelector(".wrapper .content");

function renderList(items) {
    const ul = document.createElement("ol");

    for (const item of items) {
        const listElement = document.createElement("li");
        listElement.textContent = item.name;

        ul.appendChild(listElement);
    }

    content.innerHTML = "";
    content.appendChild(ul);
}

function setButtonLoadingState() {
    loadButton.textContent = "Loading...";
    loadButton.disabled = true;
}

function setButtonInitialState() {
    loadButton.textContent = "Load";
    loadButton.disabled = false;
}

loadButton.addEventListener("click", () => {
    load({
        url: API_URL,
        onLoadStart: setButtonLoadingState,
        onLoadSuccess: data => {
            renderList(data.results);
            setButtonInitialState();
        },
        onLoadError: () => {
            alert("Error loading data!");
            setButtonInitialState();
        }
    })
});

function load(props) {
    const xhr = new XMLHttpRequest();
    xhr.responseType = "json";
    xhr.onload = function() {
        if (xhr.status === 200) {
            props.onLoadSuccess(xhr.response);
            nextPage = xhr.response.info.next;
        } else {
            props.onLoadError();
        }
    }

    xhr.onerror = props.onLoadError;

    if(!nextPage) {
        xhr.open("GET", props.url);
    } else {
        props.url = nextPage;
        xhr.open("GET", props.url);
    }
    // xhr.send();

    props.onLoadStart();
    setTimeout(() => {
        xhr.send();
    }, 2000)
}


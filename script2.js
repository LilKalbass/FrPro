document.body.appendChild(createHtml());

function createHtml() {
    const wrapper = document.createElement('div');
    wrapper.classList.add("wrapper");

    const form = document.createElement("form");
    form.classList.add("form");

    const saveInput = document.createElement("input");
    saveInput.placeholder = "Enter text";
    saveInput.addEventListener("input", () => {
        saveButton.disabled = !Boolean(saveInput.value);
    });

    const saveButton = document.createElement("button");
    saveButton.textContent = "Insert"
    saveButton.type = "button";
    saveButton.disabled = true;
    saveButton.addEventListener("click", () => {
        userStorageManager.save(saveInput.value);
        ulList.appendChild(createLi(saveInput.value));
    })

    const ulList = document.createElement("ul");

    ulList.classList.add("ul-list");

    /////////////////////////////////////////////////////////////////

    function createLi(value) {
        const listItem = document.createElement("li");
        const span = document.createElement("span");
        span.textContent = value;
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", () => {
            listItem.remove();
            userStorageManager.clear();
        })

        listItem.appendChild(span);
        listItem.appendChild(deleteButton);

        return listItem;
    }

    /////////////////////////////////////////////////////////////////

    form.appendChild(saveInput);
    form.appendChild(saveButton);
    wrapper.appendChild(form);
    wrapper.appendChild(ulList);

    return wrapper;

}


const USER_DATA_KEY = "userData";
const userStorageManager = createStorageManager(USER_DATA_KEY); // "local" "session"

const userData = userStorageManager.load();

function createStorageManager(storageKey) {
    const storage = localStorage;

    function save(data) {
        const json = JSON.stringify(data);
        storage.setItem(storageKey, json);
        console.log("saved");
    }

    function load() {
        const json = storage.getItem(storageKey);
        try {
            return JSON.parse(json);
        } catch (error) {
            console.error(error);
            return null;
        }
    }

    function clear() {
        storage.removeItem(storageKey);
    }

    return { save, load, clear };
}
function loadFromLocalStorage(){
    let data = localStorage.getItem("userData");
    const obj = {};
    try{
        data = JSON.parse(data);
    }catch{
        console.log("Ошибка данных");
        return {};
    }
    for (const storageKey in data) {
        obj[storageKey] = storageKey;
    }
    return obj;
}
























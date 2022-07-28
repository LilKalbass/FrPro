const form = document.querySelector("form");
const deleteButton = document.querySelector(`form [data-type="delete"]`)

const firstNameInput = form.elements["firstName"];
const lastNameInput = form.elements["lastName"];

const USER_DATA_KEY = "userData";
const userStorageManager = createStorageManager(USER_DATA_KEY, "session"); // "local" "session"

const userData = userStorageManager.load();
if (userData !== null) {
    firstNameInput.value = userData.firstName;
    lastNameInput.value = userData.lastName;
}

form.addEventListener("submit", event => {
    event.preventDefault();

    const firstName = firstNameInput.value;
    const lastName = lastNameInput.value;

    const data = { firstName, lastName };

    userStorageManager.save(data);
    console.log("SAVED!");
});

deleteButton.addEventListener("click", () => {
    userStorageManager.clear();

    firstNameInput.value = "";
    lastNameInput.value = "";
});

// function save(key, value) {}
//
// function load(key) {}

function getStorage(storageType) {
    switch (storageType) {
        case "local":
            return localStorage;
        case "session":
            return sessionStorage;
        default:
            return localStorage;
    }
}
 //
function createStorageManager(storageKey, storageType) {
    const storage = getStorage(storageType);

    function save(data) {
        const json = JSON.stringify(data);
        storage.setItem(storageKey, json);
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
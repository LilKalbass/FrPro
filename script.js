function createLi(input)
{
    const li = document.createElement("li");
    li.innerText = input;
    return li;
};

function createUl()
{
    return document.createElement("ul")
};

function generateList(arr)
{
    let ul = createUl();
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[ i ]) === true) {
            let li = generateList(arr[ i ]);
            ul.append(li);
        }
        else {
            let li = createLi(arr[ i ]);
            ul.append(li);
        }
    };
    return ul;
};

const q = generateList([ 1, 2, 3 ]);
console.log(q);

const q1 = generateList([ 1, 2, [ 1.1, 1.2, 1.3 ], 3 ]);
console.log(q1);
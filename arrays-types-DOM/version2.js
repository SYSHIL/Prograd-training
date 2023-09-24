let users = [
    {
        id:1,
        college:'SRM',
        name:'ilhan',
        hobbies:['football','movies','cricket'],
        address:{
            streetName:'Egattur',
            cityName:'Chennai',
            pinCode:600130
        }
    },

    {
        id:2,
        college:'VIT',
        name:'Mahesh',
        hobbies:['crickey','poetry'],
        address:{
            streetName:'Saligramam',
            cityName:'Chennai',
            pinCode:600012
        }
    },

    {
        id:3,
        college:'PSG',
        name:'Suraj',
        hobbies:['football','gaming','cricket'],
        address:{
            streetName:'adyar',
            cityName:'Chennai',
            pinCode:600015
        }
    },

];

function displayArrayTypes(arr) {
    let res = "\t";
    for (let ele of arr) {
        res += typeof ele + "/";
    }
    return res;
}

function displayObject(obj, container) {
    for (let key in obj) {
        let value;
        let element = document.createElement("div");

        if (Array.isArray(obj[key])) {
            // Handle arrays
            value = 'array';
            element.textContent = `${key}=${value}`;
            element.appendChild(document.createTextNode(displayArrayTypes(obj[key])));
        } else if (typeof obj[key] === 'object') {
            // Handle objects
            value = 'object';
            element.textContent = `${key}=${value}`;
            let subContainer = document.createElement("div");
            displayObject(obj[key], subContainer);
            element.appendChild(subContainer);
        } else {
            // Handle other data types
            value = typeof obj[key];
            element.textContent = `${key}=${value}`;
        }

        container.appendChild(element);
    }
    container.innerHTML += "<br>"
}

let userContainer = document.getElementById("user-container");

for (let user of users) {
    displayObject(user, userContainer);
}

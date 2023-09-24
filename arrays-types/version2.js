let user = {
    id:2,
    college:'SRM',
    name:'ilhan',
    hobbies:['football','movies','skydiving'],
    address:{
        streetName:'Egattur',
        cityName:'Chennai',
        pinCode:600130
    }
}

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
    }
]


function displayArrayTypes(arr){
    res = "\t"
    for(let ele of arr){
        res += typeof ele+"/"
    }
    return res
}
function displayObject(obj){
    res = ""
    for(let key in obj){
        res += key+"-"+obj[key]+"/"
    }
    return res
}

function display(obj) {
    for (let key in obj) {
        let value;
        if (Array.isArray(obj[key])) {
            // arrays in js are homogenous, discussed and decided not to display 
            value = 'array'
            console.log(key+"="+value)
            console.log(displayArrayTypes(obj[key]))
            continue
        } else if (typeof obj[key] === 'object') {
            value = 'object'
            console.log(key+"="+value+"{")
            display(obj[key])
            console.log("}")
            continue

        } else if (typeof obj[key] === 'string') {
            value = 'string';
        } else if (typeof obj[key] === 'number') {
            value = 'number';
        } else if (typeof obj[key] === 'boolean') {
            value = 'boolean';
        } else {
            value = 'unknown';
        }
        console.log(key + "=" + value);
    }
    console.log("\n");
}

for (let user of users) {
    display(user);
}

for(let user of users){
    display(user)
}
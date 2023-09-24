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


function displayArray(arr){
    res = ""
    for(let ele of arr){
        res += ele+"/"
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
function display(obj){
    for(let key in obj){
        let value;
        if(Array.isArray(obj[key])){
            value = displayArray(obj[key])
        }
        else if(typeof obj[key]==='object'){
            value = displayObject(obj[key])
        }
        else{
            value = obj[key]
        }
        console.log(key+"="+value)
    }
    console.log("\n")
}

for(let user of users){
    display(user)
}
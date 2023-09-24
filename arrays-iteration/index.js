// Given an array of objects iterate over it and perform some action with each object
function Employee(name,title,age){
    this.name = name 
    this.title = title
    this.age = age
}

Employee.prototype.display = function(){
    console.log(`Hi my name is ${this.name} and I'm a ${this.title}. I'm ${this.age} years old`)
}

function setupEmployees(){
    employee1 = new Employee("ilhan","backend engineer",19)
    employee2 = new Employee("sanjay","frontend engineer",20)
    employee3 = new Employee("sathish","backend engineer",21)

    let employees = []
    employees.push(employee1)
    employees.push(employee2)
    employees.push(employee3)

    for(let i=0;i<employees.length;i++){
        employees[i].display()
    }
}
setupEmployees()
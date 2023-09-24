// Given an array of objects iterate over it and perform some action with each object
function Employee(name,title){
    this.name = name 
    this.title = title
}

Employee.prototype.display = function(){
    console.log(`Hi my name is ${this.name} and I'm a ${this.title}`)
}

employee1 = new Employee("ilhan","backend engineer")
employee2 = new Employee("sanjay","frontend engineer")
employee3 = new Employee("sathish","backend engineer")

let employees = []
employees.push(employee1)
employees.push(employee2)
employees.push(employee3)

for(let i=0;i<employees.length;i++){
    employees[i].display()
}
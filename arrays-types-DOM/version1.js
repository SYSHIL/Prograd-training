// Given an array of objects iterate over it and display the types of every object's properties

function Employee(name, title, age) {
    this.name = name;
    this.title = title;
    this.age = age;
  }
  
Employee.prototype.display = function () {
    console.log(`Hi my name is ${this.name} and I'm a ${this.title}. I'm ${this.age} years old`);
};
  

function setupEmployees() {
  const container = document.getElementById("hero")
  const employee1 = new Employee("ilhan", "backend engineer", 19);
  const employee2 = new Employee("sanjay", "frontend engineer", 20);
  const employee3 = new Employee("sathish", "backend engineer", 21);
  
  const employees = [employee1, employee2, employee3];
  
  for (let i = 0; i < employees.length; i++) {
    const employee = employees[i];
    const employeeContainer = document.createElement("div")
    const employeeHeader = document.createElement("h4")
    employeeHeader.innerHTML = `Employee ${i+1}`
    const employeeDescription = document.createElement("p")
    console.log(`Employee ${i + 1}:`);
  
    for (const key in employee) {
        employeeDescription.innerHTML += `${key} : ${typeof employee[key]}`
        employeeDescription.innerHTML += `<br>`
    }
    employeeContainer.appendChild(employeeHeader)
    employeeContainer.appendChild(employeeDescription)
    container.appendChild(employeeContainer)
  }

}
setupEmployees()
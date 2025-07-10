const employees = [
  { id: 1, name: "John Doe", age: 30, department: "IT", salary: 50000 , specialisation:"JS"},
  { id: 2, name: "Alice Smith", age: 28, department: "HR", salary: 45000 , specialisation:"C++"},
  { id: 3, name: "Bob Johnson", age: 35, department: "Finance", salary: 60000 , specialisation:"Python"},
  //... More employee records can be added here
];

function displayEmployees() {
  const totalEmployees = employees
    .map(function getInfoParas(employee) {
      return `<p>${employee.id}:${employee.name}:${employee.department}-$${employee.salary}</p>`;
    })
    .join("");
  document.getElementById("employeesDetails").innerHTML = totalEmployees;
}

function calculateTotalSalaries() {
  const totalSalary = employees.reduce(function addingSalaries(acc, curr) {
    return acc + curr.salary;
  }, 0);
  alert(`Total Salaries : ${totalSalary}`);
}

function displayHREmployees()
{
  const HREmployees=employees.filter(function isHR(employee){
    return employee.department==="HR"
});
const HRToDisplay=HREmployees.map(function getInfoParas(employee){
  return `<p>${employee.id}:${employee.name}:${employee.department}-$${employee.salary}</p>`;
}).join('');
document.getElementById("employeesDetails").innerHTML=HRToDisplay;
}

function findEmployeeById(employeeId){
  const requiredEmployee=employees.find(function getEmployee(employee){
    if(employee.id===employeeId)
      return employee;
  })
  if(requiredEmployee){
    document.getElementById("employeesDetails").innerHTML=`<p>${requiredEmployee.id}:${requiredEmployee.name}:${requiredEmployee.department}-$${requiredEmployee.salary}</p>`
  }
  else{
      document.getElementById("employeesDetails").innerHTML=`<p>Employee Not Found</p>`;
  }
}

function findEmployeeBySpec(employeeSpec){
  const requiredEmployee=employees.find(function getEmployee(employee){
    if(employee.specialisation===employeeSpec)
      return employee;
  })
  if(requiredEmployee){
    document.getElementById("employeesDetails").innerHTML=`<p>${requiredEmployee.id}:${requiredEmployee.name}:${requiredEmployee.department}-$${requiredEmployee.salary}-$${requiredEmployee.specialisation}</p>`
  }
  else{
      document.getElementById("employeesDetails").innerHTML=`<p>Employee Not Found</p>`;
  }
}




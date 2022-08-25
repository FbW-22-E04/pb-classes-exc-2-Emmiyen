class Employee {
    constructor(id, firstName, lastName, taxId, salary) {
      this.id = id;
      this.firstName = firstName;
      this.lastName = lastName;
      this.taxId = taxId;
      this.salary = salary;
    }
    generatePaySlip() {
      console.log(`Employee ID: ${this.id}`);
      console.log(`Name: ${this.firstName} ${this.lastName}`);
      console.log(`Tax ID: ${this.taxId}`);
      console.log(`Monthly Pay: ${(this.salary / 12).toFixed(2)}`);
    }
  }
  const danica = new Employee(1, "Danica", "Yener", 12345678, 50000);
  const antonio = new Employee(2, "Antonio", "Mena", 54641461, 60000);
  const daniel = new Employee(3, "Daniel", "Reiller", 12345678, 50000);
  const izabela = new Employee(4, "Izabella", "IzaBELLA", 54641461, 60000);
  console.log(danica);
  console.log(`----------------------------`);
  console.log(antonio);
  console.log(`---------------------------------`);
  danica.generatePaySlip();
  console.log(`-------------------------------------`);
  antonio.generatePaySlip();
  console.log(`-------------------------------------`);
  class Manager extends Employee {
    constructor(id, firstName, lastName, taxId, salary) {
      super(id, firstName, lastName, taxId, salary);
      this.managedEmployees = [];
    }
    addManagedEmployee(employee) {
      this.managedEmployees.push(employee);
    }
    removeManagedEmployee(employee) {
      const idx = this.managedEmployees.findIndex(
        (item) => employee.id === item.id
      );
      this.managedEmployees.splice(idx, 1);
      console.log(this.managedEmployees);
    }
  }
  const manager1 = new Manager(1, "Rami", "Basheer", 1234856456456, 70000);
  const manager2 = new Manager(2, "Lala", "Christl", 1234856456456, 75000);
  // console.log(manager1);
  // manager1.generatePaySlip();
  manager1.addManagedEmployee(danica);
  manager1.addManagedEmployee(antonio);
  console.log(manager1);
  console.log(`---------------------------------------`);
  manager2.addManagedEmployee(daniel);
  manager2.addManagedEmployee(izabela);
  console.log(manager2);
  console.log(`---------------------------------------`);
  manager1.removeManagedEmployee(danica);
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
describe("Inheritence", () => {
    // parent class
    class Employee {
        name: string
        constructor(name: string) {
            this.name = name
        }
    }

    class Manager extends Employee {

    }

    class Director extends Employee {

    }

    it("should support", () => {
        const employee = new Employee("Fadjrir")
        console.info(employee.name)

        const manager = new Manager("Herlambang")
        console.info(manager.name)

        const director = new Director("Rifai")
        console.info(director.name)
    })
})
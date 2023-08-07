describe("Method Overriding", () => {
    class Employee {
        name: string

        constructor(name: string) {
            this.name = name
        }

        sayHello(name: string): void {
            console.info(`Hello ${name}, My name is ${this.name}`)
        }
    }

    class Manager extends Employee {
        sayHello(name: string): void {
            super.sayHello(name)
            console.info(`And, I am your manager`)
        }
    }

    it("should support", () => {
        const employee = new Employee("Fadjrir")
        employee.sayHello("Herlambang")

        const manager = new Manager("Ery")
        manager.sayHello("Fadjrir Herlambang")
    })
})
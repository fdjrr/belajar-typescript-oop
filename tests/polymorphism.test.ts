describe("Polymorphism", () => {
    class Employee {
        constructor(public name: string) {

        }
    }

    class Manager extends Employee {

    }

    class VicePresident extends Manager {

    }

    function sayHello(employee: Employee): void {
        if (employee instanceof VicePresident) {
            const vp = employee as VicePresident
            console.info(`Hello VP ${vp.name}`)
        } else if (employee instanceof Manager) {
            const manager = employee as Manager
            console.info(`Hello Manager ${manager.name}`)
        } else {
            console.info(`Hello Employee ${employee.name}`)
        }
    }

    function sayHelloWrong(employee: Employee): void {
        if (employee instanceof Manager) {
            const vp = employee as Manager
            console.info(`Hello Manager ${vp.name}`)
        } else if (employee instanceof VicePresident) {
            const manager = employee as VicePresident
            console.info(`Hello VP ${manager.name}`)
        } else {
            console.info(`Hello Employee ${employee.name}`)
        }
    }

    it("should support polymorphism", () => {
        let employee: Employee = new Employee("Fadjrir")
        console.info(employee)

        employee = new Manager("Herlambang")
        console.info(employee)

        employee = new VicePresident("Ery")
        console.info(employee)
    })

    it("should support method parameter polymorphism", () => {
        sayHello(new Employee("Fadjrir"))
        sayHello(new Manager("Herlambang"))
        sayHello(new VicePresident("Ery"))
    })

    it("should support method parameter polymorphism wrong", () => {
        sayHelloWrong(new Employee("Fadjrir"))
        sayHelloWrong(new Manager("Herlambang"))
        sayHelloWrong(new VicePresident("Ery"))
    })
})
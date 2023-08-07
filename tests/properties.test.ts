describe("Properties", () => {
    class Customer {
        readonly id: number
        name: string = "Guest"
        age?: number

        constructor(id: number, name: string) {
            this.id = id
            this.name = name
        }

        sayHello(name: string): void {
            console.info(`Hello ${name}, My name is ${this.name}`)
        }
    }

    it("should can create properties", () => {
        const customer = new Customer(1, "Fadjrir")
        customer.age = 19

        console.info(customer.id)
        console.info(customer.name)
        console.info(customer.age)
        console.info(customer)
    })

    it("should can create method", () => {
        const customer = new Customer(1, "Fadjrir")
        customer.sayHello("Herlambang")
    })
})
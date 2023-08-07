describe("Abstract Class", () => {
    abstract class Customer {
        readonly id: number
        abstract name: string

        constructor(id: number) {
            this.id = id
        }

        hello(): void {
            console.info("Hello")
        }

        abstract sayHello(name: string): void
    }

    class RegularCustomer extends Customer {
        name: string

        constructor(id: number, name: string) {
            super(id)
            this.name = name
        }

        sayHello(name: string): void {
            console.info(`Hello ${name}, My name is ${this.name}`)
        }
    }

    it("should support", () => {
        const customer1 = new RegularCustomer(1, "Fadjrir")
        customer1.sayHello("Herlambang")
    })
})
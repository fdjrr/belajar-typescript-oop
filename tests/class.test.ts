describe("Class", () => {
    class Customer {
        constructor() {
            console.info("Create new customer")
        }
    }

    class Order {
        constructor() {
            console.info("Create new order")
        }
    }

    it("should can create class", () => {
        const customer: Customer = new Customer()
        const order = new Order()
    })

    it("should can create constructors", () => {
        new Customer()
        new Customer()
    })
})
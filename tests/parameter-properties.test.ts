describe("Parameter Properties", () => {
    class Person {
        constructor(public name: string) {
        }
    }

    it("should support", () => {
        const person = new Person("Fadjrir")
        console.info(person.name)

        person.name = "Fadjrir Herlambang"
        console.info(person.name)
    })
})
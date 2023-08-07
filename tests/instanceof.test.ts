describe("Instance Of", () => {
    class Employee {

    }

    class Manager {

    }

    it("should have problem using typeof", () => {
        const fadjrir = new Employee()
        const herlambang = new Manager()

        console.info(typeof fadjrir)
        console.info(typeof herlambang)
    })

    it("should support instanceof", () => {
        const fadjrir = new Employee()
        const herlambang = new Manager()

        expect(fadjrir instanceof Employee).toBe(true)
        expect(fadjrir instanceof Manager).toBe(false)

        expect(herlambang instanceof Employee).toBe(false)
        expect(herlambang instanceof Manager).toBe(true)
    })
})  
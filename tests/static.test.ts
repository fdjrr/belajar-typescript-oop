describe("Static", () => {
    class Configuration {
        static NAME: string = "Belajar TypeScript OOP"
        static VERSION: number = 1.0
        static AUTHOR: string = "Fadjrir Herlambang"
    }

    class MathUtil {
        static sum(...values: number[]): number {
            return values.reduce((a, b) => a + b)
        }
    }

    it("should support static method", () => {
        console.info(MathUtil.sum(1, 2, 3, 4, 5))
    })

    it("should support", () => {
        console.info(Configuration.NAME)
        console.info(Configuration.VERSION)
        console.info(Configuration.AUTHOR)
    })
})
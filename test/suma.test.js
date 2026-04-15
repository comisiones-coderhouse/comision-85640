//TDD : Test Driven Development
import { it, expect } from "@jest/globals"

import { suma } from "../utils/suma.js"

//describe - it/test - 

it("should return 0 when no arguments provided", () => {
    const resultado = suma()
    expect(resultado).toBe(0)
})


it("should add 2 numbers correctly", () => {
    //suma(3,5) === 8

    const dataset = [
        { first: 3, second: 5, expected: 8 },
        { first: 34, second: 7, expected: 41 },
        { first: 100, second: 5, expected: 105 },
        { first: -10, second: 5, expected: -5 },
    ]

    for (const item of dataset) {
        const resultado = suma(item.first, item.second)
        expect(resultado).toBe(item.expected)
    }

})

it("should return number when arguments are invalid",()=>{
    const resultado = suma("Hola")
    /* const resultado = suma(1,"Hola")
    const resultado = suma("Hola",1)
    const resultado = suma(true) */
    expect(resultado).toBe(0)
})
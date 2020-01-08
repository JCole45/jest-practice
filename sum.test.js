import {add, greet, isGreaterThan7, getCompany, getRange, addFloats, asyncFunction} from './functionsToTest';

const sum = require('./functionsToTest')

test('Adds two integers', ()=> {
    expect(add(1,2)).toBe(3)
})

test('Adds two invalid characters', ()=> {
    expect(() => {add('d',1)}).toThrow("Invalid input. Please pass 2 integers as parameters")
})


test('Displays welcome message', () => {
    expect(greet('John'))
})

test('Returns null when non-string value passes', () => {
    expect(greet(24)).toBeNull()
})


test('Checks if greater than 7', () => {
    expect(isGreaterThan7(2)).toBe(false)
})

test('Checks if greater than 7', () => {
    expect(isGreaterThan7(8)).toBe(true)
})

test('Checks for invalid parameter in isGreaterThan7 function', () => {
    expect(isGreaterThan7('seven')).toBeUndefined()
})


test('Returns company info', () => {
    expect(getCompany()).toMatchObject(
        {
            name: "Accertix",
            "date-established": 2010,
            CEO: "Theo",
        }
    )
})

test('Shows the range of numbes between two integers', () => {
    expect(getRange(2,4)).toMatchObject([2,3])
})

test('Introducing invalid params in number range function', () => {
    expect(()=>{getRange('ts','td')}).toThrow("the 2nd parameter should be greater than the first")
})

test('Adds floats', () => {
    expect(addFloats()).toBe(0.1 + 0.2)
})

test('Async function which returns true', () => {
    return asyncFunction().then(data=> {
        expect(data).toBe(true)
    })

})

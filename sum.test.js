import {add, greet, isGreaterThan7, getCompany, getRange, addFloats, asyncFunction} from './functionsToTest';

const sum = require('./functionsToTest')

//Summation test for two valid parameters
test('Adds two integers', ()=> {
    expect(add(1,2)).toBe(3)
})

//Summation test for invalid parameters
test('Adds two invalid characters', ()=> {
    expect(() => {add('d',1)}).toThrow("Invalid input. Please pass 2 integers as parameters")
})


//Greeting test for string name
test('Displays welcome message', () => {
    expect(greet('John')).toBe('Hello John')
})

//Greeting test for invalid name 
test('Returns null when non-string value passes', () => {
    expect(greet(24)).toBeNull()
})

//Number check for number less than 7
test('Checks if greater than 7', () => {
    expect(isGreaterThan7(2)).toBe(false)
})

//Number check for number greater than 7
test('Checks if greater than 7', () => {
    expect(isGreaterThan7(8)).toBe(true)
})

//Number check for invalid number
test('Checks for invalid parameter in isGreaterThan7 function', () => {
    expect(isGreaterThan7('seven')).toBeUndefined()
})

//Company info function test
test('Returns company info', () => {
    expect(getCompany()).toMatchObject(
        {
            name: "Accertix",
            "date-established": 2010,
            CEO: "Theo",
        }
    )
})

//Number range test for valid parameters
test('Shows the range of numbes between two integers', () => {
    expect(getRange(2,4)).toMatchObject([2,3])
})

//Number range test for invalid parameters
test('Introducing invalid params in number range function', () => {
    expect(()=>{getRange('ts','td')}).toThrow("the 2nd parameter should be greater than the first")
})

//Test for adding floats
test('Adds floats', () => {
    expect(addFloats()).toBe(0.1 + 0.2)
})

//Test for async function 
test('Async function which returns true', () => {
    return asyncFunction().then(data=> {
        expect(data).toBe(true)
    })

})

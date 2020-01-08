/**
 * function that adds 2 numbers
 *
 * * test for the following cases
 * * passing 2 numbers returns the sum of thsoe 2 numbers
 * * passing invalid input throws the exception
 *
 * @param {number} x
 * @param {number} y
 */
export function add(x, y) {
	if (typeof x !== 'number' || typeof y !== 'number'){
    throw "Invalid input. Please pass 2 integers as parameters"}
    else{
	return x + y}
}

/**
 * function that says hello, so the name passed
 *
 * * test for the following cases
 * * when passed a string, it returns the correct output
 * * when passed invalid input, it returns null. don't use 'toBe()' or 'toEqual()'
 *
 * @param {string} name
 */
export function greet(name) {
	if (typeof name !== String) return null

	return `Hello ${name}`
}

/**
 * function that checks if a number is greater than 7
 *
 * * test for the following cases
 * * when passed a number greater than 7, it returns true
 * * when passing a number less than 7, returns false
 * * when passing invalid input, returns undefined. (don't use 'toBe()' or 'toEqual()')
 * @param {int} number
 */
export function isGreaterThan7(number) {
	if (typeof number !== 'number') return undefined

	return number > 7
}

/**
 * function returning a mock company
 * 
 * * test for the following cases
 * * the function returns the expected object.
 */
export function getCompany() {
	return {
		name: "Accertix",
		"date-established": 2010,
		CEO: "Theo",
	}
}

/**
 * function that returns an array representing the range of the input integers
 * 
 * * test the following cases
 * * given valid input, the correct outpt is returned
 * * given invalid input, an exception is thrown
 * @param {int} num1 
 * @param {int} num2 
 */
export function getRange(num1, num2){
  if(num2 < num1) 
    throw 'the 2nd parameter should be greater than the first'

  let result = []

  for(let i = num1; i<num2; i++){
    result.push(i)
  }

  return result
}

/**
 * function that returns the sum of 0.1 and 0.2.
 * 
 * * test the following cases
 * * calling the function produces the expected result
 */
export function addFloats(){
  return 0.1 + 0.2
}


/**
 * function that waits for a while, and then returns true
 * 
 * * test the following cases
 * * calling the functino produces the expected result
 */
export function asyncFunction(){
  return new Promise((resolve, reject) => {
    const time = Math.random() * 5000

    setTimeout(() => {}, time)

    resolve(true)
  })
}
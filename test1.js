// CODE 1
/*
Given a list of numbers, the "mode" is the value that occurs most often.
If no number in the list is repeated, then there is no mode for the list.

For example:
List1  = [1, 5, 2, 6, 2, 3, 3, 2, 8, 2]   
In List1,  mode is value 2 which occurs 4 times.
List2 = [500, -100, 200, 50, -100, 300, 50, 700, 50, -100, 500] .
In List2, there are 2 modes i.e., 50 and -100 both of which occur 3 times.

Write a function that takes a list A as input argument and returns a list of mode values.
*/

function getTheModeValues(listA) {
    let result = [],
        maxValue = -Infinity,
        modesMapList = {}

    for (let i = 0; i < listA.length; i++) {
        let number = listA[i]

        if (modesMapList[number]) {
            // if the number already exist in the modesMapList we simply increase the count
            modesMapList[number]++
        } else {
            // if the number does not exist in the modesMapList then we push it with a count of 1
            modesMapList[number] = 1
        }
    }

    for (let number in modesMapList) {
        let currentValue = modesMapList[number]
        let mode = parseInt(number)

        if (currentValue > maxValue && currentValue >= 2) {
            // if the current number.count is the highest and repeated(greater than 2), we set the maxValue to our current number
            // and [set OR reset] the result array to this number as the mode
            maxValue = currentValue
            result = [mode]
        } else if (currentValue === maxValue) {
            // if the current number.count is equal to the highest then there is another mode
            // and we push it to the result array
            result.push(mode)
        }
    }

    return result
}

/*
  Time_Complexity: O(2n),
  Space_Complexity: O(n)
*/

let testSamples = [
    [1, 2, 3, 4, 5, 6, 7],
    [1, 1, 2, 2, 3, 3, 4, 4],
    [1, 2, 3, 4, 7, 7, 7, 6, 9],
    [1, 5, 2, 6, 2, 3, 3, 2, 8, 2],
    [500, -100, 200, 50, -100, 300, 50, 700, 50, -100, 500]
]

testSamples.forEach((test, index) => {
    const testResult = getTheModeValues(test)
    console.log(`test case number ${index + 1}:`, testResult)
})

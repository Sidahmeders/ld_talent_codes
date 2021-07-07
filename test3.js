// CODE 3
/*
You are in a shopping game and each table contains interesting gift items that you can pick.
Tables are numbered 1 through N and the tables are placed far apart. Your job is to start 
at any table and move in a sequence to pick up all possible items.Gift items may be repeated.
Your goal is to grab maximum distinct gifts with minimum possible moves.  
Note: Once you choose a starting table, you are allowed to move to the next table 
in a sequential manner i.e. If you start at table 5, you can move from table 5 to table 6,
then to table 7, table 8 and so on without skipping until you decide to stop.

We will represent the gifts in an array. 

Example 1:
A[1] = “Gift1”
A[2] = “Gift3”
A[3] = “Gift1”
A[4] = “Gift2”
A[5] = “Gift1”
A[6] = “Gift4”
A[7] = “Gift3”
A[8] = “Gift1”
In the above example, if you started from table 4,
you can grab all the 4 gifts in 4 steps A[4], A[5], A[6], A[7]
Therefore, the answer is 4

Example 2:
A[1] = “Gift3”
A[2] = “Gift5”
A[3] = “Gift3”
A[4] = “Gift2”
A[5] = “Gift1”
A[6] = “Gift3”
A[7] = “Gift4”
A[8] = “Gift2”

In this example, the answer is 6 starting from A[2] through A[7].

Write a function which takes an input array of N items and returns the smallest number 
of tables that you would visit in sequence to grab the most number of distinct gifts.
*/

/*
table-1:
        1        2        3        4        5        6        7        8
    ["Gift1", "Gift3", "Gift1", "Gift2", "Gift1", "Gift4", "Gift3", "Gift1"] => 4
table-2:
        1        2        3        4        5        6        7        8
    ["Gift3", "Gift5", "Gift3", "Gift2", "Gift1", "Gift3", "Gift4", "Gift2"] => 6
*/

function grabMaximumDistinctGifts(giftsTable) {
    let tableLength = giftsTable.length,
        memoGifts = {},
        smallestIndex = +Infinity,
        smallestNumberOfVisit

    for (let i = 0; i < tableLength; i++) {
        const gift = giftsTable[i]
        memoGifts[gift] = i
    }

    for (let item in memoGifts) {
        let giftIndex = memoGifts[item]
        if (giftIndex < smallestIndex) {
            smallestIndex = giftIndex
        }
    }

    smallestNumberOfVisit = tableLength - (smallestIndex + 1)

    return smallestNumberOfVisit
}

let testTables = [
    ['Gift1', 'Gift3', 'Gift1', 'Gift2', 'Gift1', 'Gift4', 'Gift3', 'Gift1'],
    ['Gift3', 'Gift5', 'Gift3', 'Gift2', 'Gift1', 'Gift3', 'Gift4', 'Gift2']
]

/*
  Time_Complexity: O(2n),
  Space_Complexity: O(n)
*/

testTables.forEach((table, index) => {
    const testResult = grabMaximumDistinctGifts(table)
    console.log(`test case number ${index + 1}:`, testResult)
})

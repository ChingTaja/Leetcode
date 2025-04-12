//  陣列裡面任意兩個 ITEM 相加 小於　target, 符合以上條件的有幾個

// -- Naive solution --
let nums = [-6, 2, 5, -2, -7, -1, 3]
let target = -2


const array1 = ["a", "b", "c"];

// Naive solution 
let output = 0

var countPairs = function (nums, target) {
    for (let i = 0; i < nums.length; i++) {
        console.log(nums[i])
        for (let j = (i + 1); j < nums.length; j++) {
            if ((nums[i] + nums[j]) < target) {
                output = output + 1
            }
        }
    }
};

countPairs(nums, target)
console.log('output', output)

// -- Optimized solution --
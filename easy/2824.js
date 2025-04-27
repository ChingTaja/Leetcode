//  陣列裡面任意兩個 ITEM 相加 小於　target, 符合以上條件的有幾個

// My solution - O(n²)
let nums = [-6, 2, 5, -2, -7, -1, 3]
let target = -2


const array1 = ["a", "b", "c"];

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

// Optimized solution - O(n log n)
// 排序 nums  [最小......最大]
// 從最左邊開始 想減 最右邊  if (小於 target), 其他都符合條件 , if (沒有小於 target) 換成最左邊倒數第二個 依序....

nums.sort((a, b) => a - b);

// index
let left = 0
let right = nums.length - 1
let count = 0

var countPairs = function (nums, target) {
    while (left < right) {
        if (nums[right] + nums[left] < target) {
            count = count + (right - left)
            left++  // left 變大一點的數字, 看還符不符合
        } else {
            right--  // right 變小一點的數字,　試試看有沒有符合
        }
    }

    return count
};

countPairs(nums, target)
console.log('output', output)

// Given an array of integers nums and an
// integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution,
// and you may not use the same element twice.
// You can return the answer in any order.
// Example 1:
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:
// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:
// Input: nums = [3,3], target = 6
// Output: [0,1]
// Time complexity 0
var twoSum = function (nums, target) {
	var arr = [];
	var loopCounter = 0;
	var startTime = performance.now();
	firstLoop: for (var i = 0; i < nums.length; i++) {
		loopCounter += 1;
		for (var j = 0; j < nums.length; j++) {
			if (i === j) continue;
			if (nums[i] + nums[j] === target) {
				arr.push(i, j);
				break firstLoop;
			}
		}
	}
	var endTIme = performance.now();
	console.log(arr);
	console.log(loopCounter);
	console.log(nums[arr[0]] + nums[arr[1]] === target, "Time");
	console.log("Elapsed Time = ".concat(endTIme - startTime, " milliseconds. "));
	return arr;
};
twoSum([1, 1, 2], 3);
twoSum([1, 1, 2, 3], 5);
twoSum([1, 1, 2, 3, 4], 7);
twoSum([1, 1, 2, 3, 4, 5], 9);
twoSum([1, 1, 2, 3, 4, 5, 6], 11);
twoSum([1, 1, 2, 3, 4, 5, 6, 7], 13);
twoSum([1, 1, 2, 3, 4, 5, 6, 7, 8], 15);
twoSum([1, 1, 2, 3, 4, 5, 6, 7, 8, 9], 17);
twoSum([1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 19);
twoSum([1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 21);
twoSum([1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], 23);
twoSum([1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], 25);
twoSum([1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14], 27);
//-----[2, 7, 11, 15]

let x = 10;
function foo() {
	console.log(x);
}
function bar() {
	let x = 20;
	foo();
}
bar();

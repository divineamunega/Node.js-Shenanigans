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

// Nested Loop Method
const twoSum = function (nums: number[], target: number): number[] {
	const arr: number[] = [];
	let loopCounter = 0;

	const startTime = performance.now();
	firstLoop: for (let i = 0; i < nums.length; i++) {
		loopCounter += 1;
		for (let j = 0; j < nums.length; j++) {
			if (i === j) continue;
			if (nums[i] + nums[j] === target) {
				arr.push(i, j);
				break firstLoop;
			}
		}
	}

	const endTIme = performance.now();
	console.log(arr);
	console.log(loopCounter);
	console.log(nums[arr[0]] + nums[arr[1]] === target, "Time");

	console.log(`Elapsed Time = ${endTIme - startTime} milliseconds. `);

	return arr;
};
// twoSum([1, 1, 2], 3);
// twoSum([1, 1, 2, 3], 5);
// twoSum([1, 1, 2, 3, 4], 7);
// twoSum([1, 1, 2, 3, 4, 5], 9);
// twoSum([1, 1, 2, 3, 4, 5, 6], 11);
// twoSum([1, 1, 2, 3, 4, 5, 6, 7], 13);
// twoSum([1, 1, 2, 3, 4, 5, 6, 7, 8, 9], 17);
// twoSum([1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 19);
// twoSum([1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 21);
// twoSum([1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], 23);
// twoSum([1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], 25);
// twoSum([1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14], 27);

// HashMap Method
// Time Complexity 0(n)
const twoSumHash = function (nums: number[], target: number): number[] {
	const map: Map<number, number> = new Map();
	for (let i = 0; i < nums.length; i++) {
		console.log(i);

		const complement = target - nums[i];
		if (map.has(complement)) {
			console.log([map.get(complement), i]);
			return [map.get(complement)!, i];
		}

		map.set(nums[i], i);
	}
	return [0];
};

twoSumHash([-5, 1, 2, 3, 4, 5, 6, 7, 8], 15);

//-----[2, 7, 11, 15]

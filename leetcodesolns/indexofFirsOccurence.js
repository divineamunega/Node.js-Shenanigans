// var strStr = function (haystack, needle) {
// 	if (needle === "") return 0;

// 	if (!haystack.includes(needle)) return -1;

// 	for (let i = 0; i < haystack.length - needle.length; i++) {
// 		for (let j = 0; j < needle.length; j++) {
// 			// console.log(j, needle.length);

// 			// if (haystack[i + j] !== needle[j]) break;
// 			console.log(i, j);
// 			if (j === needle.length) {
// 				// console.log(i);
// 				return i;
// 			}
// 		}
// 	}
// };

const strStr = (haystack, needle) => {
	if (needle === "") return 0;
	if (!haystack.includes(needle)) return -1;
	const res = haystack.replace(needle, ",");
	console.log(res);

	return [...res].findIndex((val) => val === ",");
};
// strStr("babbbbbabb", "bbab");
console.log(strStr("hello", "ll"));

// console.log("hello".includes("ll"));
// console.log("hello".split("ll"));

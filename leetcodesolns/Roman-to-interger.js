// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000

const romanMap = new Map();
romanMap.set("I", 1);
romanMap.set("V", 5);
romanMap.set("X", 10);
romanMap.set("L", 50);
romanMap.set("C", 100);
romanMap.set("D", 500);
romanMap.set("M", 1000);

const romanToInt = function (str) {
	const arr = str.split("");

	const roman = arr.reduce((p, c, i, array) => {
		if (c === "I") {
			return p + romanMap.get("I");
		}

		if (c === "X") {
			if (array[i + 1] === "C") {
			}
		}
	}, 0);

	console.log(roman);
};

// console.log(romanMap);

romanToInt("III");

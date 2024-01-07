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
			if (array[i + 1] === "V") {
				return p + 4;
			}

			if (array[i + 1] === "X") {
				return p + 9;
			}

			return p + 1;
		}
		if (c === "V") {
			if (array[i - 1] === "I") return p + 0;
			return p + 5;
		}

		if (c === "X") {
			if (array[i + 1] === "C") {
				return p + 90;
			}

			if (array[i + 1] === "L") {
				return p + 40;
			}

			if (array[i - 1] === "I") {
				return p + 0;
			}

			return p + 10;
		}

		if (c === "L") {
			if (arr[i - 1] === "X") {
				return p + 0;
			}
			return p + 50;
		}

		if (c === "C") {
			if (array[i - 1] === "X") {
				return p + 0;
			}

			if (array[i + 1] === "D") {
				return p + 400;
			}

			if (array[i + 1] === "M") {
				return p + 900;
			}

			return p + 100;
		}

		if (c === "D") {
			if (array[i - 1] === "C") {
				return p + 0;
			}

			return p + 500;
		}

		if (c === "M") {
			if (array[i - 1] === "C") {
				return p + 0;
			} else {
				return p + 1000;
			}
		}
	}, 0);

	return roman;
};

// console.log(romanMap);

romanToInt("III");
romanToInt("CMXLVIII");

const isPalindrom = (num: number): boolean => {
	// Convert number to reverse
	const quotient = Math.trunc(num / 10);
	const remainder = num % 10;

	const reversedNum = 10 * remainder + quotient;

	console.log(num, reversedNum);

	return true;
};

isPalindrom(35);
isPalindrom(3564);
isPalindrom(64);
console.log(3564 % 1000);

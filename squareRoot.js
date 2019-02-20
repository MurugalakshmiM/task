function squareroot(number) {
    let t;
	let squareRoot = Math.floor(number / 2);
	do {
		t = squareRoot;
		squareRoot = (t + (number / t)) / 2;
	} while ((t - squareRoot) != 0);
	return squareRoot;
}
console.log(squareroot(9));
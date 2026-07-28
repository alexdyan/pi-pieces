// 1024 digits of pi
const pi =
	'3141592653589793238462643383279502884197169399375105820974944592307816406286208998628034825342117067982148086513282306647093844609550582231725359408128481117450284102701938521105559644622948954930381964428810975665933446128475648233786783165271201909145648566923460348610454326648213393607260249141273724587006606315588174881520920962829254091715364367892590360011330530548820466521384146951941511609433057270365759591953092186117381932611793105118548074462379962749567351885752724891227938183011949129833673362440656643086021394946395224737190702179860943702770539217176293176752384674818467669405132000568127145263560827785771342757789609173637178721468440901224953430146549585371050792279689258923542019956112129021960864034181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632788';

export function load() {
	let evenOdd: number[] = [];
	let primeNumbers: number[] = [];
	let nextDigit: number[] = [];
	let perfectSquares: number[] = [];
	let repeats: number[] = [];
	let birthday: number[] = [];
	let piArray: number[] = [];

	for (let i = 0; i < pi.length; i++) {
		const num = parseInt(pi.charAt(i));

		// even or odd
		num % 2 === 0 ? evenOdd.push(1) : evenOdd.push(0);

		// prime
		isPrime(num) ? primeNumbers.push(1) : primeNumbers.push(0);

		// next digit
		let next = 6;
		if (i + 1 < pi.length) {
			next = parseInt(pi.charAt(i + 1));
		}
		next > num ? nextDigit.push(1) : nextDigit.push(0);

		// perfect squares
		num === 1 || num === 4 || num === 9 ? perfectSquares.push(1) : perfectSquares.push(0);

		// repeats
		if (i === 0) {
			repeats.push(0);
		} else {
			let prev = parseInt(pi.charAt(i - 1));
			prev === num || num === next ? repeats.push(1) : repeats.push(0);
		}

		// birthday
		num === 0 || num === 1 || num === 2 || num === 3 || num === 7 || num === 9
			? birthday.push(1)
			: birthday.push(0);

		piArray.push(num);
	}

	return { evenOdd, primeNumbers, nextDigit, perfectSquares, repeats, birthday, piArray };
}

function isPrime(num: number) {
	for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
		if (num % i === 0) return false;
	}
	return num > 1;
}

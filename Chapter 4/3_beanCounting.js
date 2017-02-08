function countBs(string) {
	var count = 0;
	for (var charPos = 0, len = string.length; charPos < len; charPos++) {
		if (string[charPos] == 'B')
			count++;
	}
	return count;
}

function countChar(string, char) {
	var count = 0;
	for (var charPos = 0, len = string.length; charPos < len; charPos++) {
		if (string[charPos] == char)
			count++;
	}
	return count;
}

console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4
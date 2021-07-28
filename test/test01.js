function tiers(index) {
	triangle = ""
	for(let i=1; i<=index; i++){
		triangle += ' '.repeat(index-i)
		triangle += '*'.repeat(i)
		triangle += '\n'
		console.log(triangle)
	}
	return triangle;
}
console.log(tiers(0));
module.exports = tiers;

import Module from './Module'

export default class Wires extends Module {
	solve(query) {
		const wires = query.split('')

		if (wires.length === 3) return this.solveForThree(wires)
		if (wires.length === 4) return this.solveForFour(wires)
		if (wires.length === 5) return this.solveForFive(wires)
		if (wires.length === 6) return this.solveForSix(wires)

		this.log('wires: invalid count')
	}

	nOrMore(color, times, wires) {
		let count = 0

		for (const wire of wires) {
			if (wire === color) count++
			if (count >= times) return true
		}

		return false
	}

	solveForThree(wires) {
		if (wires.indexOf('r') === -1) return this.log('cut 2nd')
		if (wires[2] === 'w') return this.log('cut 3rd')
		if (this.nOrMore('b', 2, wires)) return this.log('cut last blue')

		return this.log('cut 3rd')
	}

	solveForFour(wires) {
		//
	}
}

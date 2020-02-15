export default class Module {
	constructor(query, solver) {
		this.query = query
		this.solver = solver
		this.log = this.solver.log
		this.feed = this.log

		const segments = query.split(' ')
		segments.splice(0, 1)

		this.solve(segments.join(' '))
	}
}

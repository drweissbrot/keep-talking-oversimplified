import Wires from './Wires'

class Solver {
	constructor() {
		this.query = document.querySelector('#query')
		this.feed = document.querySelector('#feed')

		this.log = this.log.bind(this)

		this.addEventListeners()
	}

	addEventListeners() {
		this.query.addEventListener('keydown', this.onKeydown.bind(this))
	}

	onKeydown(e) {
		if (e.key !== 'Enter') return

		e.preventDefault()

		new Promise(() => this.solve(this.query.value))

		this.query.value = ''
	}

	log(string) {
		this.feed.insertAdjacentHTML('beforeend', `<p>${string}</p>`)
	}

	solve(query) {
		const type = query.split(' ', 2)[0]

		switch (type) {
		case 'wire':
		case 'wires':
		case 'wi':
			new Wires(query, this)
			break

		case 'button':
		case 'buttons':
		case 'b':
			new Buttons(query, this)
			break

		case 'symbol':
		case 'symbols':
		case 'sy':
		case 'keypad':
		case 'k':
			new Symbols(query, this)
			break

		case 'simon':
		case 'simonsays':
		case 'si':
		case 'says':
			new Simon(query, this)
			break

		case 'whosonfirst':
		case 'who':
		case 'words':
		case 'word':
		case 'ws':
			new WhosOnFirst(query, this)
			break

		case 'memory':
		case 'mem':
		case 'me':
			new Memory(query, this)
			break

		case 'morse':
		case 'mo':
			new Morse(query, this)
			break

		case 'complicatedwires':
		case 'complexwires':
		case 'complicated':
		case 'complex':
		case 'c':
			new ComplicatedWires(query, this)
			break

		case 'sequence':
		case 'se':
			new Sequence(query, this)
			break

		case 'maze':
		case 'ma':
			new Maze(query, this)
			break

		case 'password':
		case 'p':
		case 'pw':
			new Password(query, this)
			break

		case 'knobs':
		case 'k':
		case 'needy':
			new Knobs(query, this)
			break

		default:
			this.log(`invalid: ${query}`)
		}
	}
}

new Solver()

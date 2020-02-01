const sections = [
	'intro',
	'wires',
	'buttons',
	'symbols',
	'simon',
	'whos-on-first',
	'memory',
	'morse',
	'complicated-wires',
	'sequence',
	'maze',
	'password',
	'knobs',
]

const showTab = () => {
	const section = window.location.hash.substr(1)

	document.body.classList.remove(...sections)

	;(sections.indexOf(section) !== -1)
		? document.body.classList.add(section)
		: document.body.classList.add('intro')
}

window.addEventListener('load', showTab)
window.addEventListener('hashchange', showTab)

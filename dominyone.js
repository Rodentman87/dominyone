const nameReplacements = [
	[
		"Masquerade",
		{
			many: "",
			noun: "a Pass Estates in a Circle",
			plural: "Pass Estates in Circles",
			singular: "Pass Estates in a Circle",
		},
	],
	[
		"Hammer",
		{
			many: "",
			noun: "a Mediocre Loot",
			plural: "Mediocre Loots",
			singular: "Mediocre Loot",
		},
	],
	[
		"Pirate",
		{
			many: "",
			noun: "a Free Gold",
			plural: "Free Golds",
			singular: "Free Gold",
		},
	],
	[
		"Siren",
		{
			many: "",
			noun: "a Mistake",
			plural: "Mistakes",
			singular: "Mistake",
		},
	],
	[
		"Spell Scroll",
		{
			many: "",
			noun: "a Different Mediocre Loot",
			plural: "Different Mediocre Loots",
			singular: "Different Mediocre Loot",
		},
	],
];

const phraseReplacements = {
	"USERNAME has requested an undo": "USERNAME has requested to pull a Yoni",
	"5c814688-6861-4d16-bcdc-bdfbfab19d0b": "Pull a Yoni request was cancelled",
	"Request to undo 1 step": "Request to pull a Yoni for 1 step",
	"Request to undo NUMBER steps": "Request to pull a Yoni for NUMBER steps",
	"Undo request was denied.": "Pull a Yoni request was denied.",
	"Undo 1": "Pull a Yoni 1",
	Undo: "Pull a Yoni",
};

function inject(nameReplacements, phraseReplacements) {
	nameReplacements.forEach(([cardName, replacement]) => {
		window.LANGUAGE.getCardName[cardName] = replacement;
	});
	Object.keys(window.LANGUAGE.getPhrase).forEach((phraseKey) => {
		const phrase = window.LANGUAGE.getPhrase[phraseKey];
		if (phrase in phraseReplacements) {
			window.LANGUAGE.getPhrase[phraseKey] = phraseReplacements[phrase];
		}
	});
}

function tryInject() {
	console.log("Injecting card replacements");
	const script = document.createElement("script");
	script.textContent = `(${inject.toString()})(${JSON.stringify(
		nameReplacements
	)}, ${JSON.stringify(phraseReplacements)});`;
	document.documentElement.appendChild(script);
	script.remove();
	console.log("Injected card replacements, happy memeing!");
}

setTimeout(tryInject, 1000);

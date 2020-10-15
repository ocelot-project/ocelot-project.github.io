export const fortuneStrings = [
    "Text is powerful.",
    "Commune with the machine.",
    "Mouse optional.",
    "Everything Lisp.",
    "Roll your own.",
    "Your new lisp machine.",
    "Modify fearlessly.",
];

export const fortune: () => string = () =>
    fortuneStrings[Math.floor(Math.random() * fortuneStrings.length)];

export const lispify: (s: string) => string = (s) => s.toLowerCase()
    .replace(/\s/g, "-")
    .replace(/(\.|,)/g, "");

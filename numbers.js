function convertDigitsToWords(input) {
    const digitWords = {
        0: "zero",
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine"
    };
    let text = input.replace(".", "").split(" ");
    for (let i = 0; i < text.length; i++) {
        if (text[i].length === 1 && text[i] in digitWords) {
            if (i === 0) {
                text[i] = digitWords[text[i]].charAt(0).toUpperCase() + digitWords[text[i]].slice(1);
            }
            else {
                text[i] = digitWords[text[i]];
            }
        }
    }
    return text.join(" ").concat(".");
};

btnNum.addEventListener("click", () => inputNum.value = convertDigitsToWords(inputNum.value));
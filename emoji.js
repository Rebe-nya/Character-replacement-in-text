function emoji(input) {
    const emojiMap = {
        ":)": "😊",
        ":(": "☹️",
        ";)": "😉",
        ":D": "😃",
        "<3": "❤️",
        "XD": "😆"
    };
    let text = input.replace(".", "").split(" ");
    for (let i = 0; i < text.length; i++) {
        if (text[i].length === 2 && text[i] in emojiMap) {
            text[i] = emojiMap[text[i]]
        }
    }
    return text.join(" ").concat(".");
};

// Output
btnEmoji.addEventListener("click", () => inputEmoji.value = emoji(inputEmoji.value));
function emoji() {
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
        if (text[i].length === 2) {
            text[i] = emojiMap[text[i]]
        }
    }
}
function characterCount(string) {
    let count = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i] !== " " && string[i] !== "\n") {
            count++;
        }
    }
    console.log(count);
    return count;
}

module.exports = {
    characterCount: characterCount
};
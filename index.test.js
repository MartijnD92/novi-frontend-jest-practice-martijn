const characterCount = require("./index").characterCount;

test("characterCount() should return the number of characters in a string, including punctuation but excluding whitespace", () => {
    // ARRANGE
    const string1 = "Jest is a JavaScript testing framework\nmaintained by Facebook, Inc."

    // ACT
    const result = characterCount(string1);

    // ASSERT
    expect(result).toBe(58);
}) 
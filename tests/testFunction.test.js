import { testFunction } from "../src/index";

describe("Test function", () => {
    it("should return 5", () => {
        const firstNumber = 2;
        const secondNumber = 3;

        const output = 5;

        expect(testFunction(firstNumber, secondNumber)).toEqual(output);
    });
});

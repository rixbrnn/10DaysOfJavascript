import { getArea, getPerimeter } from "../../../src/day1/ArithmeticOperators.js";

let length = 3;
let width = 4.5;

describe("getArea", () => {   
    
    it("should return the area of a rectangle with sides 3 and 4.5", () => {
        const result = getArea(length, width);
        expect(result).to.equal(13.5);
    });
});

describe("getPerimeter", () => {  
    
    it("should return the perimeter of a rectangle with sides 3 and 4.5", () => {
        const result = getPerimeter(length, width);
        expect(result).to.equal(15);
    });
});
import {describe, expect, test} from '@jest/globals';
import { add, mul } from "../src/dummy";

describe("test add function", () => {
    test("should return 15 for add(10,5)", () => {
        expect(add(10, 5)).toBe(15);
    });

    test("should return 5 for add(2,3)", () => {
        expect(add(2, 3)).toBe(5);
    });
});

describe("test mul function", () => {
    test("should return 15 for mul(3,5)", () => {
        expect(mul(3, 5)).toBe(15);
    });
});
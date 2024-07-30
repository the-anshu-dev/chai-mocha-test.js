import { expect } from "chai";
import { minus } from "../code2.js";

describe('Code Test : Minus', function(){
    it('Test case 2', function(){
        let actualValue= minus(10,2)
        let expectedValue = 2
        expect(actualValue).to.equals(expectedValue)
    })
})
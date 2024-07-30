import { expect } from "chai";
import {add} from "../code1.js";
import { TestCase } from "../testcase.js";


TestCase.forEach((testCase, index)=>{
    let status= testCase.status=='passed'? `\x1B[32m${testCase.status}\x1B[0m`:`\x1B[31m${testCase.status}\x1B[0m`

    describe(`${testCase.title} ADD  ${index} : => ${status}`, function(){
        it(`${testCase.title}`, function(){
            let actualValue= add(testCase.args[0],testCase.args[1])
            let expectedValue = testCase.result
            expect(actualValue).to.equals(expectedValue)
        })
    })


})



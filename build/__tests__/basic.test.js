"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const inheritance_1 = require("../inheritance");
describe('This should work smoothly', () => {
    const params = {
        name: 'Jhon',
        action: 'eat'
    };
    it('constructors must work', () => {
        const child = new inheritance_1.Child(params);
        chai_1.expect(child.name).to.be.eq(params.name);
    });
    it('static build must work', () => {
        const child = new inheritance_1.Child(params);
        const buildedChild = inheritance_1.Child.build(params);
        chai_1.expect(child).to.be.eq(buildedChild);
    });
});
//# sourceMappingURL=basic.test.js.map
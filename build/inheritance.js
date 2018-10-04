"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Parent {
    constructor(params) {
        this.name = params.name;
    }
    static build(params) {
        throw new Error('Not implemented');
    }
}
exports.Parent = Parent;
class Child extends Parent {
    constructor(params) {
        super(params);
        this.action = params.action;
    }
    static build(params) {
        return new Child(params);
    }
}
exports.Child = Child;
//# sourceMappingURL=inheritance.js.map
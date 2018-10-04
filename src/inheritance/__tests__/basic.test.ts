import { expect } from 'chai';
import { Parent, Child, ParentParams, ChildParams } from '../inheritance';

describe('This should work smoothly', () => {
  const params: ChildParams = {
    name: 'Jhon',
    action: 'eat'
  };
  it('constructors must work', () => {
    const child = new Child(params);
    expect(child.name).to.be.eq(params.name);
  });

  it('static build must work', () => {
    const child = new Child(params);
    const buildedChild = Child.build(params);
    expect(child).to.be.eq(buildedChild);
  });
});

export interface ParentParams {
  name: string;
}

export interface ChildParams extends ParentParams {
  action: string;
}

export abstract class Parent {
  name:string;
  constructor(params: ParentParams){
    this.name = params.name;
  }

  public static build <T1 extends ParentParams, T2 extends Parent>(params: T1): T2 {
    throw new Error('Not implemented');
  }
}

export class Child extends Parent {
  action: string;
  constructor(params:ChildParams) {
    super(params);
    this.action = params.action;
  }
  public static build(params: ChildParams): Child {
    return new Child(<ChildParams> params);
  }
}

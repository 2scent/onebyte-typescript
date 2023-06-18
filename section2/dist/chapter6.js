// any
// 특정 변수의 타입을 우리가 확실히 모를 때
let anyVar = 10;
anyVar = 'hello';
let num = 10;
num = anyVar;
// unknown
let unknownVar;
unknownVar = '';
unknownVar = 1;
unknownVar = () => { };
// num = unknownVar;
// unknownVar.toUpperCase();
if (typeof unknownVar === 'number') {
    num = unknownVar;
}
export {};

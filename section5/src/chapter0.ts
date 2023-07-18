/**
 * 인터페이스
 */

interface Person {
  readonly name: string;
  age?: number;
  sayHi(): void;
  sayHi(a: number, b: number): void;
}

const person: Person = {
  name: '이향기',
  // age: 27,
  sayHi: function () {
    console.log('Hi');
  },
};

// person.name = '홍길동';

person.sayHi();
person.sayHi(1, 2);

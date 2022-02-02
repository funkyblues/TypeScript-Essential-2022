console.log(Symbol("foo") === Symbol("foo"));

const sym: symbol = Symbol(); // 아무것도 입력하지 않아도 생성됩니다.

const obj = {
  [sym]: "value",
};

obj[sym];

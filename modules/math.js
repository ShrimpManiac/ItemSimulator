export function add(a, b) {
  return a + b;
}

// 모듈을 호출했을 때, addArrowFunction 키 값에는 addArrowFunction 변수 함수가 가지고 있는 값이 할당된다.
export const addArrowFunction = (a, b) => {
  return a + b;
};

// 모듈을 호출했을 때, addAnonymousFunction 키 값에는 (a,b){return a + b;} 익명 함수가 할당된다.
export const addAnonymousFunction = function (a, b) {
  return a + b;
};

// 모듈을 호출했을 때, add 키 값에는 add 함수가 들어가는 방법이다.
const defaultObject = {
  add: add,
};
export default defaultObject;
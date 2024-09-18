import { add } from './math.js';
import { addArrowFunction } from './math.js';
import { addAnonymousFunction } from './math.js';
import * as math from './math.js' /** import default Object, 모듈 전체 가져오기 **/
import { default as defaultObject } from './math.js'

console.log(add(3, 4));
console.log(addArrowFunction(5, 3)); // 화살표 함수
console.log(addAnonymousFunction(9, 3)); // 익명 함수
console.log(math.default.add(13, 8));
console.log(defaultObject.add(17, 2));
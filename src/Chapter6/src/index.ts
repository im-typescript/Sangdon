//배열에 담긴 값을 차례로 얻는데 사용합니다.
const numArr: number[] = [1,2,3]
for(let value of numArr)
console.log(value);
// {}중괄호가 없이도 구문이 작동을하나요?

// 1. next라는 이름의 메서드를 제공합니다.
// 2. next메서드는 value와 done이라는 두개의 속성을 가진 객체를 반환한다.
import { createRangeIterable } from "./createRangeIteralbe";
const iterator = createRangeIterable(1, 3+1)
while(true){
    const {value, done} = iterator.next()
    if(done) break
    console.log(value);
}

// generator
 function* generator() {
    console.log('testing...');
    let value =1 ;
    while(value<4)
        yield value++
        console.log('testend...')

 }
 for(let value of generator())
    console.log(value);

// KEY Words : 반복기 제공자, 

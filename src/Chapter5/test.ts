import { split } from "./study1";

console.log(
    split('hello'),
    split('h_e_l_l_o','_')
)

let array: number[] = [1,2,3,4,5]
let [first, second, third, ...rest] = array
console.log(`first : ${first}`)
console.log(`second : ${second}`)
console.log(`third : ${third}`)
console.log(`rest : ${rest}`)

export const arrayLength = <T>(array: T[]):number=> array.length

let original = 1;
let copied = original;
copied += 2;
console.log(original, copied); // 1, 3
let arr1 : number[] = [1,2,3,4,5,6]; 
let arr2 = arr1;
arr2.push(5,12);
console.log(arr1);// 
console.log(arr2);// 
// 배열은 참조 복사를 하면 깊은 복사가 되어 버린다.?
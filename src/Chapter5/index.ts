// import {i} from './generic'
// import { mergeArray } from "./spread-operator";
// import { range } from "./range";
// import {fold} from './fold';

// let numbers : number[] = range(1,100+1);
// let result = fold(numbers, (result,value)=> result + value,0)
// console.log(result);


function forcePure (array:readonly number[]){
	array.push(1);
}

//console.log(range(2,4));

// console.log(mergeArray);

// console.log(
// 	i<boolean>(true),
// 	i(true)
// )
//-----------------------------------------------

// const normal = (cb:(number)=>number):void => {}
// const error = (cb:(number, number?)=>number):void => {}
// const fixed = (cb:(a:number, number?)=>number):void => {}
// //                           number는 식별자로 취급합니다.
// const another = <T>(cb:(a:T, i?:number)=>number):void => {}

//-----------------------------------------------

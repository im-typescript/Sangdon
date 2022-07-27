function* foo() {
    if (Math.random() < 0.5) yield 100;
    return "Finished!";
  }
  const test = function (){
    let iter = foo();
    let curr = iter.next();
    if (curr.done) {
      // TypeScript 3.5 and prior thought this was a 'string | number'.
      // It should know it's 'string' since 'done' was 'true'!
      curr.value;
    }
  }
  


  interface Generator<T = unknown, TReturn = any, TNext = unknown>

  extends Iterator<T, TReturn, TNext> {
  next(...args: [] | [TNext]): IteratorResult<T, TReturn>;
  return(value: TReturn): IteratorResult<T, TReturn>;
  throw(e: any): IteratorResult<T, TReturn>;
  [Symbol.iterator](): Generator<T, TReturn, TNext>;
} 

type IteratorResult<T, TReturn = any> =
  | IteratorYieldResult<T>
  | IteratorReturnResult<TReturn>;

interface IteratorYieldResult<TYield> {
  done?: false;
  value: TYield;
}
interface IteratorReturnResult<TReturn> {
  done: true;
  value: TReturn;
}
  
// --------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------

export const buller = function () {

  function * Generator() {
      console.log('a');
      yield 1
      console.log('a');
      yield 2
      console.log('a');
      yield 3
      console.log('a');
      yield
  }
  let test = Generator();
  // const a = test.next().value;
  // yield value 로 이루어 져있으므로 value 값 접근법은 위와 같습니다.
  //console.log(a);
  
  
  // ------------------ While문 ----------------------
  
  
  while(test.next().done == false){
      console.log(test.next());    
  }
  //Generator method 확인해보기
  console.log(Generator);
  
  function * While (){
      let i:number = 1;
      while(true){
          yield i;
          i ++;
      }
  }
  
  const loop = While();
  console.log(loop.next());
  console.log(loop.next());
  console.log(loop.next());
  console.log(loop.next());
  //console.log(loop.return(10)); //해결하고 싶어요...
  
  // ------------------ 배열 ----------------------
  
  function* byArray (array:(number)[]) {
                     //배열에 숫자가 들어오는지 type지정
      for(let i=0; i< array.length; i++){
          yield array[i];
      }
  }
  const withArray = byArray([1,2,3,5]);
  console.log(withArray.next());
  console.log(withArray.next());
  console.log(withArray.next(5));
  // 원하는 단계로 넘어가기
  console.log(withArray.next());
  
  };





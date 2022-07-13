// const makePerson = (a:string, b: number = 10 ) : Person => { a,b } 
type Person10 = {a :string , b: number}
const makePerson = (a:string, b: number = 10 ) : Person10 => ( { a,b } )
console.log(makePerson('test',10));
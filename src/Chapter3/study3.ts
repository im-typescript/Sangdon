let u:undefined = undefined;

interface TEST {
    name : string;
    age : number;
}

let test1: TEST = {name:'test', age: 32}


interface Imweb {
	name: string;
	age: number;
	etc?: any;
}
let ImwebTest : Imweb = {name: 'sangdon', age: 1, etc: 'text'}

class Person {
	name : string
	age : number
}

let jack : Person = new Person()
jack.name = 'Jack'; jack.age = 30
console.log(jack);
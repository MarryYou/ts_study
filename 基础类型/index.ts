// bool

let isDone: boolean = false;

// number

let decLiteral: number = 6
let hexLiteral: number = 0xf00d;
let binaryLiteral: number = 0b1010
let octalLiteral: number = 0o744;

// string 

let _name: string = "bobo";
_name = "smith"

// template

let _name_1: string = `Gene`
let age: number = 37
let sentence: string = `Hello my name is ${_name_1}`
console.log(`I will be ${age + 1} years old next month. `)


// array

let list: number[] = [1, 2, 3, 4]
let list_1: Array<number> = [2, 3, 4]


//tuple

let x: [string, number]

x = ['hello', 10]

// x = [10, 'hello'] Error
console.log(x)
console.log(x[0])
console.log(x[1])
console.log(x[0].substring(1))
// console.log(x[1].substring(1)) Error


// enum

enum Color { Red = 1, Green, Blue }
let c: Color = Color.Blue
console.log(Color[2])


// any 有时候，我们会想要为那些在编程阶段还不清楚类型的变量指定一个类型。 这些值可能来自于动态的内容，比如来自用户输入或第三方代码库。 这种情况下，我们不希望类型检查器对这些值进行检查而是直接让它们通过编译阶段的检查。 那么我们可以使用 any类型来标记这些变量：

let notSure: any = 4

notSure = "maybe a string instead";

notSure = false


// void 

function warnUser(): void {
    console.log("This is my warning message");
}

warnUser()

let unuseable: void = undefined

// null undefined 

let u: undefined = undefined

let n: null = null


// never 

function error(message: string): never {
    throw new Error(message)
}

function fail() {
    return error("Something failed")
}

function infiniteLoop(): never {
    while (true) {

    }
}


// object
// declare function create(o: object | null): void

// create({prop: 0})
// create({ac: [1,2,3]})


// 类型断言

let someValue: any = "this is a string"
someValue = 1

let strLength: number = (someValue as string).length

console.log(strLength)
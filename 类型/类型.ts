import { message } from 'antd';
let str: string = "jimmy";
let num: number = 24;
let bool: boolean = false;
let u: undefined = undefined;
let n: null = null;
let obj: object = { x: 1 };
let sym: symbol = Symbol("me");

/**
 * 默认情况下 null 和 undefined 是所有类型的子类型。 就是说你可以把 null 和 undefined 赋值给其他类型。
 * 如果你在tsconfig.json指定了"strictNullChecks":true ，null 和 undefined 只能赋值给 void 和它们各自的类型。
 * 虽然number和bigint都表示数字，但是这两个类型不兼容。
 */

// null和undefined赋值给string
let str1: string = "666";
str1 = null
str1 = undefined

// null和undefined赋值给number
let num1: number = 666;
num1 = null
num1 = undefined


// let big: bigint =  100n;
// let num2: number = 6;
// big = num2;
// num2 = big;



// Array 

let arr: string[] = ['1', '2']
let arr2: Array<string> = ['3', '4']
//联合类型
let arr3: (number | string)[]
arr3 = [1, '2', '3', 4]

// 指定对象成员

interface Arrobj {
    name: string,
    age: number
}

let arr4: Arrobj[] = [{ name: 'aaa', age: 21 }]


// 函数

//声明式

function sum(x: number, y: number): number {
    return x + y;
}

// 函数表达式

let mySum: (x: number, y: number) => number = function (x: number, y: number): number {
    return x + y;
}


// 接口形式

interface SearchFunc {
    (source: string, subString: string): boolean
}

let Search: SearchFunc = (source, subString) => {
    return false
}

// 可选参数

function buildName(firstName: string, lastName?: string) {
    return lastName ? `${firstName} ${lastName}` : firstName
}

let tomcat = buildName('Tom', 'Cat')

let tom = buildName('Tom')

console.log(tomcat, tom)

// 参数默认值

function buildName2(firstName: string, lastName: string = 'Cat') {
    return `${firstName} ${lastName}`
}


let tomcat2 = buildName2('Tom', 'Cot')

let tom2 = buildName2('Tom')

console.log(tomcat2, tom2)

// 剩余参数

function push(array: any[], ...items: any[]) {
    items.forEach((item) => array.push(item))
}

let a = [];
push(a, 1, 4, 3, 2, '111')
console.log(a)

// 函数重载

type Combinable = string | number

function add(x: Combinable, y: Combinable) {
    return typeof x === "string" || typeof y === "string" ? x.toString() + y.toString() : x + y
}
add(1, 2)
add('1', '2')
const addRes = add('Hello', 'world')
// console.log(addRes.split(' '))

// 函数重载或方法重载是使用相同名称和不同参数数量或类型创建多个方法的一种能力。 要解决前面遇到的问题，方法就是为同一个函数提供多个函数类型定义来进行函数重载，编译器会根据这个列表去处理函数的调用。

type Params = string | number

function add2(x: number, y: number): number;
function add2(x: string, y: string): string;
function add2(x: string, y: number): string;
function add2(x: number, y: string): string;
function add2(x: Params, y: Params) {
    return typeof x === "string" || typeof y === "string" ? x.toString() + y.toString() : x + y
}

const addRes2 = add2('Hello', 'world')
console.log(addRes2.split(' '))


// 元组 Tuple

let x: [string, number]
x = ['hello', 1]

let y: [number, string] = [1, 'world']

let [id, title] = y

console.log(`id: ${id}, title: ${title}`)

// 三维坐标轴

type Point = [number, number?, number?]

const p: Point = [10]

const pp: Point = [10, 20]

const ppp: Point = [10, 20, 30]

// 剩余元素

type RestTupleType = [number, ...string[]]

const rest: RestTupleType = [1, '2', '3', '4']

// read only

const xy: readonly [number, number] = [1, 2]


// void 表示没有任何类型，和其他类型是平等关系，不能直接赋值

let ac: void;
// ac = 1  不能将类型“number”分配给类型“void”
/**
 * 你只能为它赋予null和undefined（在strictNullChecks未指定为true时）。声明一个void类型的变量没有什么大用，我们一般也只有在函数没有返回值时去声明。
    值得注意的是，方法没有返回值将得到undefined，但是我们需要定义成void类型，而不是undefined类型。否则将报错:
 */

function fun(): void {
    console.log('this is a void func.')
}
fun()


// never 
/**
 * 如果一个函数执行时抛出了异常，那么这个函数永远不存在返回值（因为抛出异常会直接中断程序运行，这使得程序运行不到返回值那一步，即具有不可达的终点，也就永不存在返回了）；
函数中执行无限循环的代码（死循环），使得程序永远无法运行到函数返回值那一步，永不存在返回。
 */

// error

function err(message: string): never {
    throw new Error(message)
}

// 死循环

function loop(): never {
    while (true) { }
}

//never类型同null和undefined一样，也是任何类型的子类型，也可以赋值给任何类型。
//但是没有类型是never的子类型或可以赋值给never类型（除了never本身之外），即使any也不可以赋值给never
// let ne: never
// let nev: never
// let an: any
// ne = 123  Error
// ne = nev ok 
// ne = an  Error

// 利用 never 类型的特性来实现全面性检查
type Foo = string | number

function checkFunc(f: Foo) {
    if (typeof f === 'string') {

    } else if (typeof f === 'number') {

    } else {
        const check: never = f
    }
}

// 但是假如后来有一天你的同事修改了 Foo 的类型
/**
 * 然而他忘记同时修改 controlFlowAnalysisWithNever 方法中的控制流程，
 * 这时候 else 分支的 foo 类型会被收窄为 boolean 类型，导致无法赋值给 never 类型，
 * 这时就会产生一个编译错误。通过这个方式，
 * 我们可以确保controlFlowAnalysisWithNever 方法总是穷尽了 Foo 的所有可能类型。
 * 通过这个示例，我们可以得出一个结论：
 * 使用 never 避免出现新增了联合类型没有对应的实现，目的就是写出类型绝对安全的代码。
 */

// any 任何类型都可以被归为 any 类型。这让 any 类型成为了类型系统的顶级类型.

let xn: any = 66
xn = true
xn = undefined
xn = null
xn = 'xxx'

// unknown unknown与any一样，所有类型都可以分配给unknown
/**
 * unknown与any的最大区别是： 任何类型的值可以赋值给any，同时any类型的值也可以赋值给任何类型。unknown 任何类型的值都可以赋值给它，但它只能赋值给unknown和any
 */

//  let notSure1: unknown = 4;
//  let uncertain1: any = notSure1; // OK
 
//  let notSure2: any = 4;
//  let uncertain2: unknown = notSure2; // OK
 
//  let notSure3: unknown = 4;
//  let uncertain3: number = notSure3; // Error


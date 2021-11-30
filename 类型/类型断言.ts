// 有时候你会遇到这样的情况，你会比 TypeScript 更了解某个值的详细信息。通常这会发生在你清楚地知道一个实体具有比它现有类型更确切的类型。

const arrayNumber: number[] = [1, 2, 3, 4]
const greaterThan2: number = arrayNumber.find(num => num > 2) as number

// 非空断言 
//在上下文中当类型检查器无法断定类型时，一个新的后缀表达式操作符 ! 可以用于断言操作对象是非 null 和非 undefined 类型。具体而言，x! 将从 x 值域中排除 null 和 undefined 。

// let mayNullOrUndefinedOrString: null | undefined | string
// mayNullOrUndefinedOrString!.toString()

// 确定赋值断言

// let x: number; // Variable 'x' is used before being assigned.(2454)
let x!: number
initialize();
console.log(2 * x)
function initialize() {
    x = 10;
}


// 联合类型

let myFavoriteNumber: string | number;
myFavoriteNumber = 'seven'; // OK
myFavoriteNumber = 7; // OK
const sayHello = (name: string | undefined) => {
    /* ... */
  };

// 类型别名 类型别名用来给一个类型起个新名字。类型别名常用于联合类型。

type Message = string | string[];
let greet = (message: Message) => {
  // ...
};


// 交叉类型 交叉类型是将多个类型合并为一个类型。 这让我们可以把现有的多种类型叠加到一起成为一种类型，它包含了所需的所有类型的特性，使用&定义交叉类型。

type Useless = string & number

type IntersectionType = { id: number; name: string; } & { age: number };
const mixed: IntersectionType = {
  id: 1,
  name: 'name',
  age: 18
}
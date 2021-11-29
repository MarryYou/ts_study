// interface

function printLabel(labelObj: { label: string }) {
    console.log(labelObj.label)
}

let myObj = { size: 10, label: 'Size 10 Object.' }
printLabel(myObj)


interface labelValue {
    label: string
}

function printLabel2(labelObj: labelValue) {
    console.log(labelObj.label)
}

let myObj2 = { size: 20, label: 'size 20 Object' }

printLabel2(myObj2)


// 可选参数 可选属性的好处之一是可以对可能存在的属性进行预定义，好处之二是可以捕获引用了不存在的属性时的错误
interface SquareConfig {
    color?: string,
    width?: number
}

function createSquare(config: SquareConfig): { color: string; area: number } {
    let newSquare = { color: 'white', area: 100 }
    if (config.color) {
        newSquare.color = config.color
    }

    if (config.width) {
        newSquare.area = config.width * config.width
    }

    return newSquare
}

let mySquare = createSquare({ color: "black", width: 200 })

console.log(mySquare)


// read only

interface Point {
    readonly x: number,
    readonly y: number
}

let p1: Point = { x: 10, y: 20 }

// read only array

let arr1: number[] = [1, 2, 3, 4]

let arr2: ReadonlyArray<number> = arr1


// 字符串索引签名


interface SquareConfig2 {
    color?: string,
    width?: number,
    [propName: string]: any
}


// 函数类型


interface SearchFunc {
    (source: string, substring: string): boolean
}

let mySearch: SearchFunc

mySearch = function (source: string, substring: string) {
    let res = source.search(substring);
    return res > -1;
}


// 可索引类型

interface StringArray {
    [index: number]: string
}

let myarr: StringArray
myarr = ['Bob', 'Fred']

let myStr: string = myarr[1]


// 类类型

interface ClockInterFace {
    currentTime: Date;
    setTime(d: Date): void;
}
// 当你操作类和接口的时候，你要知道类是具有两个类型的：静态部分的类型和实例的类型。 你会注意到，当你用构造器签名去定义一个接口并试图定义一个类去实现这个接口时会得到一个错误：

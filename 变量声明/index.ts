// var 声明

var a = 10;

// 函数内部定义变量

function f1() {
    var message = "Hello, world!"
    return message;
}

function f2(){
    var a = 10;
    return function g(){
        var b = a + 1;
        return b;
    }
}

var g = f2();

console.log(g())
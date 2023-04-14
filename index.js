let nums = []
var op

let data = [
    [8,6,2,2],
    [4,5,2,2],
    [8,4,4,2],
    [7,8,8,1],
    [4,4,8,5],
    [6,7,2,2],
    [6,6,3,1],
    [2,2,4,7],
    [8,6,5,4],
    [5,4,3,3],
    [9,8,6,2],
    [8,8,3,1],
    [2,5,9,7],
    [6,6,5,2],
    [6,8,2,3]
    ]

function ready() {
        let i = Math.floor(Math.random() * 16);
        console.log(i)
        nums = data[i]
        console.log(nums)

        document.querySelector("#num0").innerHTML = nums[0];
        document.querySelector("#num1").innerHTML = nums[1];
        document.querySelector("#num2").innerHTML = nums[2];
        document.querySelector("#num3").innerHTML = nums[3];
}

function getOp(operator) {
    if(operator === '+'){
        op = '+'
        console.log(op)
    }
    if(operator === '-'){
        op = '-'
        console.log(op)
    }
    if(operator === '/'){
        op = '/'
        console.log(op)
    }
    if(operator === '*'){
        op = '*'
        console.log(op)
    }
}

function calc(num1, num2, op){
    
}
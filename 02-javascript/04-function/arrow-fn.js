// function キーワードによる関数式
const plusOne = function(n){
    return n + 1;
}

// アロー関数式
const addOne = (n) => {
    return n + 1;
};

const increment = n => n + 1;

console.log(plusOne(4));  //5
console.log(addOne(4));   //5
console.log(increment(4));//5
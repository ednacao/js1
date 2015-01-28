// var sum = 0;
// for(var i=0; i<1000; i++){
//     if(i%3 === 0 || i%5 === 0){
//         sum = sum + 1;
//     }
// }
// console.log(sum);



/* By considering the terms in the Fibonacci sequence whose values do not exceed four
 million, find the sum of the even-valued terms.

function fibbonnaci_set(max) {
    // get fib nums up to max in an array
    if(max > 1){

        var fib_list = [1];
        var current_fib = 1;

        while(current_fib < max){
            fib_list.push(current_fib);
            current_fib = fib_list[fib_list.length - 1] + fib_list[fib_list.length - 2];
        }
        return fib_list;

    }
    else {
        return [1, 1];
    }
}

function is_even(n){
    // is number even?
    if(n % 2 === 0){
        return true;
    }
    return false;
}

function filter(is_even, fibbonnaci_set){
    var sum = 0;

    for(var num in fibbonnaci_set){
        if(is_even(fibbonnaci_set[num])){
            sum = sum + fibbonnaci_set[num];
        }
    }
    return sum;
}

console.log(filter(is_even, fibbonnaci_set(4000000)));
*/

// Given an array in Javascript, write a function in Javacsript that returns any items that 
// have duplicates. 
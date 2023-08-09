// Problem 1
function cubenumberber(number) {
    if (typeof (number) == "number") {
        let cube = Math.pow(number, 3);
        return cube;
    }
    else {
        return "Please Enter A Valid number";
    }

}
// Problem 2
function matchFinder(string1, string2) {
    if (typeof (string1) == "string" && typeof (string2) == "string") {
        let matchString = string1.includes(string2);
        return matchString;
    }
    else {
        return "Variable Types Not Match... Please Enter string"
    }
}
// Problem-3

function sortMaker(arr) {
    let num1 = arr[0];
    let num2 = arr[1];
    if (typeof(num1) == "number" && typeof(num2) == "number" && arr.length == 2){
        if (num1>0 && num2>0){
            if (num1 == num2){
                return "Equal"
            }
            else{
                let maxNumber = Math.max(num1, num2);
                let minNumber = Math.min(num1, num2);
                return [maxNumber, minNumber];
            }
        }
        else{
            return "Invalid Input"
        }
    }
    else {
        return "You have to enter an array of number and which have only two elements"
    }
}
// Problem-4


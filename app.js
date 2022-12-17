var add = function (n1, n2, showResult, phrase) {
    var result = n1 + n2;
    if (showResult) {
        console.log(phrase + result);
    }
    else
        return result;
};
var numb1 = 5;
var numb2 = 2.8;
var printResult = true;
var resultPhrase = "Result is:";
var result = add(numb1, numb2, printResult, resultPhrase);

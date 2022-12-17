const add = (n1: number, n2: number, showResult: boolean, phrase: string) => {
  const result = n1 + n2;
  if (showResult) {
    console.log(phrase + result);
  } else return result;
};

const numb1 = 5;
const numb2 = 2.8;
const printResult = true;
const resultPhrase = "Result is:";

const result = add(numb1, numb2, printResult, resultPhrase);

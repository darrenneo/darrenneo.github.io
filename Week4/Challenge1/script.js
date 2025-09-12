function calculate() {

    // YOUR CODE GOES HERE
    let x = Number(document.getElementById("number1").value);
    let y = Number(document.getElementById("number2").value);

    let sum = 0;
    for (i = x; i < y; i++) {
        sum += i;
        console.log(sum);
    }

    sum += y;

    let result = document.getElementById("result");
    result.innerHTML = sum;

}
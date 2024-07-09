// calculator create :

function calculator(){
    var num1 = +prompt("Enter your first number");
    var num2 = +prompt("Enter your second number");
    var operators = prompt("+,-,*,/");

    if(operators === "+"){
        result = num1+num2
    }
    if(operators === "-"){
        result = num1-num2
    }
    if(operators === "*"){
        result = num1*num2
    }
    if(operators === "/"){
        result = num1/num2
    }
      alert(num1+num2)

}
calculator()
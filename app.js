  function calc() {
	    
	    var num1 = Number(document.getElementById("num1").value);
	    var num2 = Number(document.getElementById("num2").value);
	    
	    switch (operation) {
	      case '+':
	        result = num1 + num2;
	        break;
	      case '-':
	        result = num1 - num2;
	        break;
	      case '*':
	        result = num1 * num2;
	        break;
	      case '/':
	        result = num1 / num2;
	        break;
	    }

	    
	    document.getElementById("result").innerHTML = result;
	  }
    


    function askName(){

    let name = prompt("Введите имя")

   
    str = `Привет ${name}! Вот тебе калькулятор в 4 действия!`

    
    alert (str)
    }






function insert(num) {
  document.calculator.textview.value = document.calculator.textview.value + num;
}

function equal() {
  const exp = document.calculator.textview.value;
  if (exp) {
    document.calculator.textview.value = eval(exp);
  }
}

function clean() {
  document.calculator.textview.value = "";
}

// javascrip funtion for addition

function myResult() {
  var num1 = document.getElementById("num1").value;
  var num2 = document.getElementById("num2").value;

  let result = parseFloat(num1) + parseFloat(num2);

  document.getElementById("ansSum").innerHTML = result;
}

// javascrip funtion for mutilipication

function timeS() {
  var num3 = document.getElementById("num3").value;
  var num4 = document.getElementById("num4").value;

  let result = parseFloat(num3) * parseFloat(num4);

  document.getElementById("ansMultiply").innerHTML = result;
}

// javascrip funtion for mod
function modMe() {
  var num5 = document.getElementById("num5").value;
  var num6 = document.getElementById("num6").value;

  let answer = parseFloat(num5) % parseFloat(num6);

  document.getElementById("ansMod").innerHTML = answer;
}

function subtraction() {
  var sub1 = document.getElementById("sub1").value;
  var sub2 = document.getElementById("sub2").value;

  let answer = parseFloat(sub1) - parseFloat(sub2);

  document.getElementById("SubAns").innerHTML = answer;
}

function division() {
  var div1 = document.getElementById("div1").value;
  var div2 = document.getElementById("div2").value;

  let answer = parseFloat(div1) / parseFloat(div2);

  document.getElementById("divAns").innerHTML = answer;
}

function increment() {
  var inc1 = document.getElementById("inc1").value;
  var g = inc1++;
  let answer = g++;
  answer = g;

  document.getElementById("increments").innerHTML = g;
}

function decrement() {
  var dec1 = document.getElementById("dec1").value;
  var ans = dec1--;
  let answer = ans--;
  answer = ans;
  console.log(ans);

  document.getElementById("decrements").innerHTML = ans;
}


/* Rewrite this if using the conditional operator '?':

let result;

if (a + b < 4) {
  result = 'Below';
} else {
  result = 'Over';
} */

  let result;
  let a = 2;
  let b = 1;

  (a + b < 4) ? result = "Below" : result = "Over"
  
  console.log(result)

  /* Rewrite if..else using multiple ternary operators '?'.

For readability, it’s recommended to split the code into multiple lines.

let message;

if (login == 'Employee') {
  message = 'Hello';
} else if (login == 'Director') {
  message = 'Greetings';
} else if (login == '') {
  message = 'No login';
} else {
  message = '';
} */

  let message;
  let login = '';

  (login == 'Employee') ? message = 'Hello' :
  (login == 'Director') ? message = 'Greetings' :
  (login == '') ? message = 'No login' :
   message = ''

  console.log(message)

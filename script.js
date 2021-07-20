// program to generate fibonacci series up to a certain number

// take input from the user

// function getInputValue(){
//     // Selecting the input element and get its value
//     var inputVal = document.getElementById("myInput").value;

//     // Displaying the value
//     alert(inputVal);
// }

// $(document).ready(function getInputValue() {
function getInputValue() {
  const number = document.getElementById("myInput").value;

  let n1 = 0,
    n2 = 1,
    nextTerm;

  console.log("Fibonacci Series:");
  console.log(n1); // print 0
  console.log(n2); // print 1

  nextTerm = n1 + n2;

  while (nextTerm <= number) {
    // print the next term
    console.log(nextTerm);

    // for (let index = 0; index < 20; index++) {
    //         $("#output").append(`<p>${nextTerm}</p>`);
    //       }

    document.write(nextTerm);

    n1 = n2;
    n2 = nextTerm;
    nextTerm = n1 + n2;    
  }
}
// });
// ddsf
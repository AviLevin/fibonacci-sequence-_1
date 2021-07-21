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

    document.getElementById("output").innerHTML += `<p class="p">${
      nextTerm + "&nbsp"
    }</p>`;

    n1 = n2;
    n2 = nextTerm;
    nextTerm = n1 + n2;
  }
  document.getElementById(
    "title"
  ).innerHTML = `<h3 > The requested Fibonacci Sequence is:</h3>`;
}

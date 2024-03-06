// TODO: this file! :)
document.addEventListener("DOMContentLoaded", function() {
  const addButton = document.querySelector("button");
  const sortOneButton = document.getElementById("sortOne");
  const sortAllButton = document.getElementById("sortAll");
  const numberBankOutput = document.querySelector("#numberBank output");
  const oddsOutput = document.getElementById("odds").querySelector("output");
  const evensOutput = document.getElementById("evens").querySelector("output");

  let numbers = []; // Array to store the entered numbers
  let odds = [];
  let evens = [];

  addButton.addEventListener("click", function(event) {
    event.preventDefault();

    const inputField = document.querySelector("input[name='number']");
    const number = parseInt(inputField.value);

    if (!isNaN(number)) {
      numbers.push(number); // Add the number to the array

      // Clear the number bank output before repopulating
      numberBankOutput.innerHTML = "";

      // Populate the number bank with all the numbers
      numbers.forEach(function(num) {
        const listItem = document.createElement("li");
        listItem.textContent = num;
        numberBankOutput.appendChild(listItem);
      });

      // Clear the input field after adding the number
      inputField.value = "";
    } else {
      alert("Please enter a valid number.");
    }
  });

  sortOneButton.addEventListener("click", function(event) {
    event.preventDefault();
    if (numbers.length > 0) {
      const number = numbers.shift();
      if (number % 2 === 0) {
        evens.push(number);
      } else {
        odds.push(number);
      }

      updateOutput();
    }
  });

  sortAllButton.addEventListener("click", function(event) {
    event.preventDefault();
    while (numbers.length > 0) {
      const number = numbers.shift();
      if (number % 2 === 0) {
        evens.push(number);
      } else {
        odds.push(number);
      }
    }

    updateOutput();
  });

  function updateOutput() {
    oddsOutput.innerHTML = "";
    evensOutput.innerHTML = "";

    odds.forEach(function(odd) {
      const listItem = document.createElement("li");
      listItem.textContent = odd;
      oddsOutput.appendChild(listItem);
    });

    evens.forEach(function(even) {
      const listItem = document.createElement("li");
      listItem.textContent = even;
      evensOutput.appendChild(listItem);
    });
  }
});

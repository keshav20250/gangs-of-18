let balance = 0;

function addIncome() {
  let income = document.getElementById("income").value;
  balance += Number(income);
  document.getElementById("balance").innerText = balance;
}

function addExpense() {
  let expense = document.getElementById("expense").value;
  balance -= Number(expense);
  document.getElementById("balance").innerText = balance;
}

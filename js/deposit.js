// step1: add eventListener to the deposit button
document.getElementById("btn-deposit").addEventListener("click", function () {
  //step 2 get the deposit amount from the user-deposit input field
  // for input field, use .value to the value inside the input field.
  const userDeposit = document.getElementById("user-deposit");
  // console.log(typeof newDepositAmount)
  const newDepositAmountString = userDeposit.value;
  const newDepositAmount = parseFloat(newDepositAmountString);

  // step3: get the current deposit total
  //for non-input (element other than input, textArea) use innerText to get the text
  const depositTotalElement = document.getElementById("deposit-total");
  // console.log(typeof previousDepositTotal)
  const previousDepositTotalString = depositTotalElement.innerText;
  const previousDepositTotal = parseFloat(previousDepositTotalString);

  // step4: add numbers to set the total deposit
  const currentDepositTotal = previousDepositTotal + newDepositAmount;
  //set the deposit total
  depositTotalElement.innerText = currentDepositTotal;

  // step 5: get balance current total
  const balanceTotalElement = document.getElementById("balance-total");
  const previousBalanceTotalString = balanceTotalElement.innerText;
  const previousBalanceTotal = parseFloat(previousBalanceTotalString);

  // step6: calc current balance total
  const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
  //set the balance total
  balanceTotalElement.innerText = currentBalanceTotal;

  //optional step: clear the deposit field
  userDeposit.value = "";
});

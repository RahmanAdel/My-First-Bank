document.getElementById("btn-deposit").addEventListener("click", function () {
  const newDepositAmount = getInputfieldValueById("deposit-field");

  //get previous deposit total by id
  const prevDepositTotal = getTextElementValueById("deposit-total");

  // calculate new deposit total
  const newDepositTotal = prevDepositTotal + newDepositAmount;

  //set deposit total value
  setTextElementValueById("deposit-total", newDepositTotal);

  //get previous balance by using function
  const previousBalanceTotal = getTextElementValueById("balance-total");
  const newBalanceTotal = previousBalanceTotal + newDepositAmount;

  setTextElementValueById("balance-total", newBalanceTotal);
});

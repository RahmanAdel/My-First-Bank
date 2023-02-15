document.getElementById("btn-withdraw").addEventListener("click", function () {
  // get withdraw amount by using getInputFieldValueById function
  const newWithdrawAmount = getInputfieldValueById("withdraw-field");
  console.log(newWithdrawAmount);

  // get previous withdraw amount by using getTextElementValueById
  const previousWithdrawTotal = getTextElementValueById("withdraw-total");

  //calculate new withdraw total and set the value
  const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
  // set new withdraw total by using setTextElementValueById
  setTextElementValueById("withdraw-total", newWithdrawTotal);

  // get previous balance total by using getTextElementValueById
  const previousBalanceTotal = getTextElementValueById("balance-total");
  const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;

  //set balance total by using setTextElementValueById
  setTextElementValueById("balance-total", newBalanceTotal);
});

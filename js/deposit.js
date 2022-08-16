// Add event listener to deposit button
document.getElementById('btn-deposit').addEventListener('click', function(){
    //Get deposit amount value
    const depositField = document.getElementById('user-deposit')
    const newDepositAmount = depositField.value;
    
    // Get deposit Inner text
    const depositTotalElement = document.getElementById('deposit-total')
    const previousDepositTotal = depositTotalElement.innerText
    
    // Update deposit
    const currentDepositTotal = parseFloat(previousDepositTotal) + parseFloat (newDepositAmount)
    depositTotalElement.innerText = currentDepositTotal;

    // Get Current Balance
    const balanceTotalElement = document.getElementById('user-balance')
    const previousBalanceString = balanceTotalElement.innerText;
    const previousBalance = parseFloat(previousBalanceString);

    // Update Total Balance
    const currentBalance = previousBalance + parseFloat(newDepositAmount);

    // Set the Balance Total
    balanceTotalElement.innerText = currentBalance

    // Clear Value field
    depositField.value = '';
})
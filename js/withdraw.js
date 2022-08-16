// Add event listener to deposit button
document.getElementById('btn-withdraw').addEventListener('click', function(){

    //Get deposit amount value
    const withdrawField = document.getElementById('user-withdraw')
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString)

    // Check if value a number
    if(isNaN(newWithdrawAmount)){
        alert('Please provide a valid Number')
        // Clear Value field
        withdrawField.value = '';
        return;
    }

    // Get Withdraw Inner text
    const withdrawTotalElement = document.getElementById('withdraw-total')
    const previousWithdrawTotalString = withdrawTotalElement.innerText
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString)



    // Get Current Balance
    const balanceTotalElement = document.getElementById('user-balance')
    const previousBalanceString = balanceTotalElement.innerText;
    const previousBalance = parseFloat(previousBalanceString);

    // Clear Value field
    withdrawField.value = '';

    if(newWithdrawAmount > previousBalance){
        alert('Eto taka nai bhai')
        return;
    }

    // Update Withdraw
    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount
    withdrawTotalElement.innerText = currentWithdrawTotal;

    // Update Total Balance
    const currentBalance = previousBalance - newWithdrawAmount;

    // Set the Balance Total
    balanceTotalElement.innerText = currentBalance

    
})   
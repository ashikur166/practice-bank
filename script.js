


// inside the bank project

let btnDeposit = document.getElementById('btn-deposit')
btnDeposit.addEventListener('click', function(){
   let inputField = document.getElementById('amount-deposite')
   let newInputAmount = inputField.value
    let newInputAmountNumber = parseInt(newInputAmount)
   
  
   
   let depositeInitial = document.getElementById('deposit-default-value')
   let previousDepositeValue = depositeInitial.innerText
   previousDepositeValueNumber = parseInt(previousDepositeValue)
 
      const currentDepositeAmount = previousDepositeValueNumber + newInputAmountNumber
     depositeInitial.innerText = currentDepositeAmount
      inputField.value = ''
      
//    Balance Section
   let defaultBalance = document.getElementById('default-balance')
    defaultBalanceValue = parseInt(defaultBalance.innerText)
    
    currentBalance = defaultBalanceValue + newInputAmountNumber
    defaultBalance.innerText = currentBalance   

 
    

})



   // withdraw
   let withdrawBtn = document.getElementById('withdraw-btn');
withdrawBtn.addEventListener('click' , function(){
    let withdrawInput = document.getElementById('withdraw-field')
    let newWithdrawInputValue = parseInt(withdrawInput.value)
  
    let defaultWithdraw = document.getElementById('default-withdraw')
    let PreviousDefaultWithdrawValue = parseInt(defaultWithdraw.innerText)
     let currentWithDraw = PreviousDefaultWithdrawValue + newWithdrawInputValue;

     let defaultBalance = document.getElementById('default-balance')
     let  defaultBalanceValue = parseInt(defaultBalance.innerText)

     withdrawInput.value =''
     if(defaultBalanceValue < newWithdrawInputValue) {
       alert('tumake eto taka diya jabe na')
        return ;
       }
      
    defaultWithdraw.innerText = currentWithDraw
   

//     blance withdraw 
    
      
        let currentBalance = defaultBalanceValue-newWithdrawInputValue
        defaultBalance.innerText = currentBalance
       
       
})
 

// Logout Section

document.getElementById('logout-btn').addEventListener('click', function(){
    window.location.href = "index.html"
})


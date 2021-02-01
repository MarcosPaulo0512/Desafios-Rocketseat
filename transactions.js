const user = {
  name: 'Marcos',
  transactions: [],
  balance: 0
};

function createTransaction(transaction){
    if (transaction.type == 'credit'){ 
        user.balance = user.balance + transaction.value
        user.transactions.push(transaction)
    } else {
      user.balance = user.balance - transaction.value
      user.transactions.push(transaction)
    }
}

function getHigherTransactionByType(type){
  let creditArray = []
  let debitArray = []
  for (var i = 0; i < user.transactions.length; i++){
      if(user.transactions[i].type == 'credit'){
          creditArray.push(user.transactions[i].value)
      } else {
          debitArray.push(user.transactions[i].value)
      }
  }
  if(type == 'credit')console.log(Math.max.apply(null, creditArray));
  else console.log(Math.max.apply(null, debitArray));
}

function getAverageTransactionValue(){
    let count = 0
    for (var transaction of user.transactions){
        count = count + transaction.value
    } 
    console.log(count / user.transactions.length)
}

function getTransactionsCount(){
    let creditCounter = 0
    let debitCounter = 0
    for (var transaction of user.transactions){
        if (transaction.type == 'credit'){
            creditCounter = creditCounter + 1
        } else {
          debitCounter = debitCounter + 1
        }
    }
    console.log('Credit: ' + creditCounter)
    console.log('Debit: ' + debitCounter)
}

createTransaction({ type: "credit", value: 50 });
createTransaction({ type: "credit", value: 120 });
createTransaction({ type: "debit", value: 80 });
createTransaction({ type: "debit", value: 30 });

console.log(user.balance); // 60

getHigherTransactionByType('credit'); // { type: 'credit', value: 120 }
getHigherTransactionByType('debit'); // { type: 'debit', value: 80 }

getAverageTransactionValue(); // 70

getTransactionsCount(); // { credit: 2, debit: 2 }
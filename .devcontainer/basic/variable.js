const accountId = 123456
let accountEmail ="Kunal@gmail.com"
var accountPassword ="123153"
accountState = "Maharashtra"
console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountState])

// prefer not to use var because it can affect the value inside the functional scope

 accountEmail="Kun@gmail.com"
accountPassword="147"
 accountState;
 console.table([accountEmail,accountPassword,accountState])
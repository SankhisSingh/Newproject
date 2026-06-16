console.log("Sankhi singh")
const accountId= 125
let accountEmail= "sankhisingh@gmail.com";
var accountPassword= "sankhi@123";
/* prefer not to use var as it can be redeclared and updated, let is block scoped and can be updated but not redeclared, const is block scoped and cannot be updated or redeclared. 
*/
accountCity= "Bangalore";
 var accountState;
 console.log(accountId);
 console.log([accountEmail,accountPassword,accountCity,accountState])
 console.log(typeof accountId);
 console.table([accountId,accountEmail,accountPassword,accountCity,accountState]    )
#! /usr/bin/env node

import inquirer  from "inquirer" 

let myBalance  = 10000; // Dollar
let mypin = 12346;

console.log("WELCOM TO MY ATM MACHINE");

    let pinAnswer = await  inquirer.prompt(

[
      {  
          name: "pin",
          message: "enter your pin code",
          type: "number",
      }
]

);


if (pinAnswer.pin === mypin){
    console.log("correct pin code login succesfully!!");

    let operationAns = await  inquirer.prompt(
        [
            {
              name:"operation",
              message: "plaese select option",
              type: "list",
              choices: ["withdraw", "check balance" , "fast cash"]

              }
        ]
    );



    if(operationAns.operation ==="withdraw"){
        let amountAns = await inquirer.prompt(
        [
            
            {
               name:"amount",
               message: "enter your amount",
               type: "number",


            }
        
        ]
    
    ); 
    
 if(amountAns.amount > myBalance){
    console.log("insufficient balance")
 } 

 else  {  myBalance -= amountAns.amount;
    console.log("your remaining balance is; " + myBalance);
     }  
    
    } 
    
    
 if(operationAns.operation === "fast cash"){
    let amounts = await inquirer.prompt(
        [
            {
                name : "cash",
                message : "select the amount you with draw",
                type : "list",
                choices : [1000 , 2000 , 5000 ,10000]
            }
        ]
    );
     
   
    myBalance -= amounts.cash;
    console.log("your remaining balance is; " + myBalance);  
}


if(operationAns.operation === "check balance"){
    console.log(`this is yor remaning balance is: ${myBalance}`);
}

}
else  {
    console.log("incorrect pin number");
}

   


/* Assignment 05
JavaScript 
Author: Efthaqur Alam */




// Heart count 
let heartAmount = document.getElementById("heart_number");

let heartIco =  document.getElementsByClassName("heart_ico");
//console.log(heartIco);
for(let count of heartIco){
    count.addEventListener("click", function(){
        let heartCurrent = parseInt(heartAmount.innerText);
        heartCurrent++;
        document.getElementById('heart_number').innerText = heartCurrent;
        //console.log(heartCurrent);
       
    });
}

// Copy count 




// Call Functionality

let dialCalls = document.getElementsByClassName("call_btn");

for( let dialCall of dialCalls){
            dialCall.addEventListener('click', function(){
                let serviceNumber = dialCall.parentElement.previousElementSibling.previousElementSibling;
                let serviceName = serviceNumber.previousElementSibling;
                console.log(serviceName.innerText, serviceNumber.innerText);
               let coinAmount = parseInt(document.getElementById("coin_number").innerText);
                if(coinAmount >= 20 ){
                    alert("Calling to: "+serviceName.innerText+", Service Number: "+serviceNumber.innerText);
                    coinAmount = coinAmount - 20;
                    document.getElementById("coin_number").innerText = coinAmount;
                    
                     let callLog = new Date().toLocaleDateString();
                     let li = document.createElement("li")
                     li.classList.add("list-row");
                     li.innerHTML = `
                     <p>${serviceName.innerText} - ${serviceNumber.innerText} - T: ${callLog}</p>
                     `
                     document.getElementById("call_logs").prepend(li);


                }
                else{
                    alert("You don't have sufficient balance!");
                }
            })

        }
    
    let callLogs = document.getElementById('call_logs');
    let clearLogs = document.getElementById('clear_logs');
    clearLogs.addEventListener('click', function(){
        callLogs.innerHTML ="History Cleared";
    })




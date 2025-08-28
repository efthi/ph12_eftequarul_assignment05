/* Assignment 05
JavaScript 
Author: Efthaqur Alam */




// Heart count 
let heartAmount = document.getElementById("heart_number");

let heartIco =  document.getElementsByClassName("heart_ico");
let heartAni = document.querySelector('.heart_ani');
//console.log(heartIco);
for(let count of heartIco){
    count.addEventListener("click", function(){
        let heartCurrent = parseInt(heartAmount.innerText);
        heartCurrent++;
        document.getElementById('heart_number').innerText = heartCurrent;
        heartAni.classList.add('fa-beat');
        
        //console.log(heartCurrent);
       
    });
}

// Copy count 

let copyAmount = document.getElementById('copy_counter');
let copyBtn = document.getElementsByClassName('copy_btn');
    for( let count of copyBtn){
        count.addEventListener('click', ()=>{
            let copyCounter = parseInt(copyAmount.innerText);
            copyCounter++;
            document.getElementById('copy_counter').innerText = copyCounter;
        })

    }


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
                     let time = new Date().toLocaleTimeString();
                     let li = document.createElement("li")
                     li.classList.add("list-row");
                     li.innerHTML = `
                     <div class="p-1">${serviceName.innerText}</div>
                    <div class="text-md text-center uppercase font-semibold opacity-80">Number: ${serviceNumber.innerText}</div>
                    <div class="p-1 text-right">Date: ${callLog} Time: ${time}</div>
                    <div class="divider divider-accent">**</div>
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




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

            let hotLine = count.parentElement.previousElementSibling.previousElementSibling; //এক এলিমেন্ট থেকে অন্য এলিমেন্টে এক্সেস সেট করা হচ্ছে
            //console.log(hotLine.innerText);
            navigator.clipboard.writeText(hotLine.innerText); //এই মেথড নেট থেকে সার্চ করে বের করা, আরও বিস্তারিত জানতে হবে
            alert("Hotline Number: "+hotLine.innerText+ " Copied! ✅");
        })

    }


// Call Functionality

let dialCalls = document.getElementsByClassName("call_btn");

for( let dialCall of dialCalls){
            dialCall.addEventListener('click', function(){
                let serviceNumber = dialCall.parentElement.previousElementSibling.previousElementSibling; //এলিমেন্ট এক্সেস করা হচ্ছে
                let serviceName = serviceNumber.previousElementSibling; //এলিমেন্ট এক্সেস করা হচ্ছে
                console.log(serviceName.innerText, serviceNumber.innerText);
               let coinAmount = parseInt(document.getElementById("coin_number").innerText);
                if(coinAmount >= 20 ){
                    alert("Calling to: "+serviceName.innerText+", Service Number: 📞 "+serviceNumber.innerText);
                    coinAmount = coinAmount - 20;
                    document.getElementById("coin_number").innerText = coinAmount;
                    
                     let callLog = new Date().toLocaleDateString(); //Date জেনারেট করা, নেট থেকে সার্চ করে নেওয়া
                     let time = new Date().toLocaleTimeString(); // Date অবজেক্ট এর সময় এক্সেস করা
                     let li = document.createElement("li")
                     li.classList.add("list-row", "marker:font-semibold");
                     li.innerHTML = `
                     <div class="p-1">${serviceName.innerText}</div>
                    <div class="text-md text-center font-semibold opacity-80">Number: 📞 ${serviceNumber.innerText}</div>
                    <div class="p-1 text-center">
                    <i class="fa-regular fa-calendar-days"></i> ${callLog} <i class="fa-regular fa-clock"></i>${time}</div>
                    <div class="divider divider-accent">**</div>
                     `
                     let logsCheck = document.getElementById('cleared_msg');
                     logsCheck ? logsCheck.remove() : null;
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
        callLogs.innerHTML = `<div id="cleared_msg" class="text-md text-center uppercase font-semibold opacity-80"><i class="fa-regular fa-circle-check"></i> History Cleared ✅ </div>`;
        
    })





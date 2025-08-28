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
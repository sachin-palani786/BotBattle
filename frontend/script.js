let score = 0;

let time = 10;

let timer;

let gameRunning = false;



const bot = document.getElementById("bot");




function startGame(){


score = 0;

time = 10;

gameRunning = true;


bot.style.display="block";


document.getElementById("score").innerHTML = score;

document.getElementById("time").innerHTML = time;


document.getElementById("result").innerHTML="";



timer = setInterval(()=>{


time--;


document.getElementById("time").innerHTML=time;



if(time <=0){


clearInterval(timer);


gameRunning=false;


bot.style.display="none";


checkResult();



}



},1000);



moveBot();


}





bot.onclick=function(){


if(!gameRunning){

return;

}


score++;


document.getElementById("score").innerHTML=score;


moveBot();


}





function moveBot(){


let x=Math.random()*420;

let y=Math.random()*180;


bot.style.left=x+"px";

bot.style.top=y+"px";


}




function checkResult(){


console.log("Sending to backend");



fetch("https://botbattle-1u4w.onrender.com/verify",{


method:"POST",


headers:{


"Content-Type":"application/json"


},


body:JSON.stringify({


score:score,

time:time


})


})


.then(response=>response.json())


.then(data=>{


console.log(data);



document.getElementById("result").innerHTML =
data.message;



})


.catch(error=>{


console.log(error);


document.getElementById("result").innerHTML =
"Backend Error";


});



}
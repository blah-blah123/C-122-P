screen_width= 0; 
screen_height= 0;
apples= "";

// Define a variable speak_data to hold the speech which we want the system to speak and set it to empty.
// Then define a variable to_number to hold the number said by the user and set it to empty.

speak_data = "";
to_number="";
to_number= Number(content);

if(Number.isInteger(to_number)){
    document.getElementById("status").innerHTML= "Started drawing an apple!";
    draw_apple= "set";
    screen_width= window.innerWidth;
}



x=0;
y=0;
  i=1;


var SpeechRecognition = window.webkitSpeechRecognition;
var recognition= new SpeechRecognition();

function setup(){
    canvas= createCanvas(150,150);
    canvas.position(Math.floor(Math.random(0 , 150)));
}

function start(){
    document.getElementById("status").innerHTML= "System is listening, please speak.";
    recognition.start();
}

recognition.onresult= function(event)
{
    console.log(event);
    var content= event.results[0][0].transcipt;
    document.getElementById("status").innerHTML= "The speech has been recognised as: " + content;
    if(content == "draw "){
        x= Math.floor(Math.random() * 900);
        y= Math.floor(Math.random() * 600);
       
    }
}

function draw(){
    if (draw_circle == "set"){
        radius= Math.floor(Math.random() * 100);
        circle(x , y, radius);
        document.getElementById("status").innerHTML= "Circle is drawn! kya roti hai!!!";
        draw_circle= "";
    }

    if (draw_rect == "set"){
        rect(x,y, 70,50);
        document.getElementById("status").innerHTML= "Rectangle is drawn! kya table hai khaane ka!!!";
        draw_rect= "";
    }
}

for(var i=1; i <= to_number; i++){
    x= Math.floor(Math.random() * 700);
    y= Math.floor(Math.random() * 600);
    image(apples , x , y , 50 , 50);
}

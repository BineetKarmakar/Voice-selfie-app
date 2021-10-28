var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function start_btn(){
    document.getElementById("textbox").innerHTML="";
    recognition.start();
}

recognition.onresult=function(event){
    console.log(event);
    var content = event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML=content;
    console.log(content);

    if(content == "take my selfie"){
        speak();
    }
}

function speak(){
    var synth =window.speechSynthesis;
    text = "Taking your selfie in 5 seconds";
    var utterthis = new SpeechSynthesisUtterance(text);
    synth.speak(utterthis);
    Webcam.attach(camera);

    setTimeout(function (){
        take_snapshot();
        save();
    },5000);
}

camera=document.getElementById("webcam");

Webcam.set({
    width:360,
    height:250,
    image_format:"jpeg",
    jpeg_quality:100
});

function take_snapshot(){
    Webcam.snap(function (data_uri) {
       document.getElementById("result").innerHTML="<img id='taken_img' src='"+data_uri+"'>";
    })
}

function save(){
    link = document.getElementById("link");
    image = document.getElementById("taken_img").src;
    link.href = image;
    link.click();
}
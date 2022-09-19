var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function start()
{
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}


recognition.onresult = function(event) {

    console.log(event);

    var Content = event.results[0][0].transcript;
    console.log(Content);

    document.getElementById("textbox").innerHTML = Content;


}

if(Content == "take my selifie"){
   console.log("take my seifie ---");
   speak();
}




function speak()
{
 var synth = window.speechSynthesis;

 speak_data = "Taking your Selifie in 5 ";

 var uttterThis = new SpeechSynthesisUtterance(speak_data);

 synth.speak(uttterThis);
  Webcam.attach(camera);

}
var SpeechRecognition  = window.webkitSpeechRecognition; 
var recognition = new SpeechRecognition();

function start(){
document.getElementById("text_box").innerHTML=" ";
recognition.start();
}
recognition.onresult=function(event){
    console.log(event);
    
var content= event.results[0][0].transcript;
document.getElementById("text_box").innerHTML=content;
if(content == "selfie"){
console.log("selfie");
speak(); 
setTimeout(function()
{
    img_id="selfie1";
 take_snapshot();
 speak_data="Taking your selfie. Please wait for five seconds";
 var utterThis = new SpeechSynthesisUtterance(speak_data);
 synth.speak(utterThis);
 
},5000);
setTimeout(function()
{
    img_id="selfie2";
 take_snapshot();
 speak_data="Taking your selfie. Please wait for ten seconds";
 var utterThis = new SpeechSynthesisUtterance(speak_data);
 synth.speak(utterThis);
 
},10000);
setTimeout(function()
{
    img_id="selfie3";
 take_snapshot();
 speak_data="Taking your selfie. Please wait for fifteen seconds";
 var utterThis = new SpeechSynthesisUtterance(speak_data);
 synth.speak(utterThis);
 
},15000);
}  
   }      
   function speak(){
    var synth = window.speechSynthesis;
    speak_data = "Taking your selfie. Please wait for five seconds.";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    Webcam.attach(camera);
   }
   Webcam.set(
       {
           width: 360 ,
           height: 250,
           image_format: 'png',
           png_quality: 90
       }
   );
   var camera = document.getElementById("camera");

   function take_snapshot(){
    Webcam.snap(function(data_uri){
        if(img_id=="selfie1"){
             document.getElementById("result_1").innerHTML='<img id="selfie1" src="'+data_uri+'"/>';
            }
            if(img_id=="selfie2"){
                document.getElementById("result_2").innerHTML='<img id="selfie2" src="'+data_uri+'"/>';
               }
               if(img_id=="selfie3"){
                document.getElementById("result_3").innerHTML='<img id="selfie3" src="'+data_uri+'"/>';
               }
       
    });
}

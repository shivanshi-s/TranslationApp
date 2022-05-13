let btnTranslate = document.querySelector("#translate-button");
let txtInput = document.querySelector("#translate-input");
let outputDiv = document.querySelector('#translate-output');


var serverURL = 'https://api.funtranslations.com/translate/yoda.json'

function getTranslationURL(text) {
   return serverURL + "?" + "text="+ text
}

function clickEventHandler() {
var inputText = txtInput.value ;  //input 

// calling the server for processing 
fetch(getTranslationURL(inputText))
   .then(function responseHandler(response) {
      return response.json();
   })
   .then(function logJSON(json) {
      var translatedText = json.contents.translated;
      outputDiv.innerText = translatedText; // our output
   
   })
}
btnTranslate.addEventListener("click", clickEventHandler)
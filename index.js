let btn = document.querySelector("#translate-button");
let input = document.querySelector("#translate-input");
let output = document.querySelector('#translate-output');

let serverURL = " https://api.funtranslations.com/translate/yoda.json"

function getTranslationURL(text) {
   return serverURL + "?" + "text=" + text;
}

btn.addEventListener("click", clickEventHandler);

function clickEventHandler() {

   let textInput = input.value; //input

// process the information on the server
   fetch(getTranslationURL(textInput))
      .then(function responseHandler(response){
         return response.json();
      })
      .then(function log(json){
         output.innerText = json.contents.translated; //output
         console.log(json);
      })

}


// fetch(url)
// .then(function responseHandler(response){
//    return response.json();
// })
// .then( function log(json) {
//    console.log(json);
// })
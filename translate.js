
function translater()
  {
  var sourceText = document.getElementById("sourceText").value;
  var sourceLang = document.getElementById("sourceLang").value;
  var targetLang = document.getElementById("resultLang").value;
  
  var url = "https://translate.googleapis.com/translate_a/single?client=gtx&sl="+ sourceLang + "&tl=" + targetLang + "&dt=t&q=" + encodeURI(sourceText);
  console.log(url);
  
   fetch(url)
     .then((response) => response.json())
     .then((data) => {
        document.getElementById("resultText").value = data[0][0][0];
     });
}
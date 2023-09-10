var data = []
var number = 0
var prediction = 0
var x = 0
var y = 0
function getData(){
  var foodUsed = document.getElementById("foodUsed").value
  var foodWasted = document.getElementById("foodWasted").value
  data.push(foodWasted)
  number += 1

  if (number == 2){
    number = 0
    for(var a = 0; a < data.length; a++){
      prediction += data[0]
    }
    prediction /= data.length
    document.getElementById('predictionOutput').innerHTML = "Prediction: " + prediction
    console.log(prediction)
  }
}

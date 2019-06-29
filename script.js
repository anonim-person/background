function button(){
  var xa = Math.floor(Math.random() * 256);
   var ya = Math.floor(Math.random() * 256);
   var za = Math.floor(Math.random() * 256);
   var bgColora = "rgb(" + xa + "," + ya + "," + za + ")";
   var xb = Math.floor(Math.random() * 256);
    var yb = Math.floor(Math.random() * 256);
    var zb = Math.floor(Math.random() * 256);
    var bgColorb = "rgb(" + xb + "," + yb + "," + zb + ")";
    var x = Math.floor(Math.random() * 256);
     var y = Math.floor(Math.random() * 256);
     var z = Math.floor(Math.random() * 256);
     var bgColor = "rgb(" + x + "," + y + "," + z + ")";
  document.body.style.background = "radial-gradient(" + bgColora + "," + bgColorb + "," + bgColor + ")";
}

function buttons(){
  var xa = Math.floor(Math.random() * 256);
   var ya = Math.floor(Math.random() * 256);
   var za = Math.floor(Math.random() * 256);
   var bgColora = "rgb(" + xa + "," + ya + "," + za + ")";
   var xb = Math.floor(Math.random() * 256);
    var yb = Math.floor(Math.random() * 256);
    var zb = Math.floor(Math.random() * 256);
    var bgColorb = "rgb(" + xb + "," + yb + "," + zb + ")";
    var x = Math.floor(Math.random() * 256);
     var y = Math.floor(Math.random() * 256);
     var z = Math.floor(Math.random() * 256);
     var bgColor = "rgb(" + x + "," + y + "," + z + ")";
  document.body.style.background = "linear-gradient(to right," + bgColora + "," + bgColorb + "," + bgColor + ")";
}

function buttonsa(){
  var xa = Math.floor(Math.random() * 256);
   var ya = Math.floor(Math.random() * 256);
   var za = Math.floor(Math.random() * 256);
   var bgColor = "rgb(" + xa + "," + ya + "," + za + ")";
   document.body.style.background = bgColor;
   var para = document.createElement("p");
    var node = document.createTextNode(bgColor);
    para.appendChild(node);
    var element = document.body;
    element.appendChild(para);
}
function buttonsar(){
  var xa = Math.floor(Math.random() * 256);
   var ya = Math.floor(Math.random() * 256);
   var za = Math.floor(Math.random() * 256);
   var bgColora = "rgb(" + xa + "," + ya + "," + za + ")";
   var xb = Math.floor(Math.random() * 256);
    var yb = Math.floor(Math.random() * 256);
    var zb = Math.floor(Math.random() * 256);
    var bgColorb = "rgb(" + xb + "," + yb + "," + zb + ")";
    var x = Math.floor(Math.random() * 256);
     var y = Math.floor(Math.random() * 256);
     var z = Math.floor(Math.random() * 256);
     var bgColor = "rgb(" + x + "," + y + "," + z + ")";
     document.body.style.backgroundImage = "repeating-linear-gradient(190deg" + "," + bgColor+ "," + bgColora + " 7%," + bgColorb + " 10%)";
}

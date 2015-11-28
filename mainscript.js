var data = [
    {
        value: 300,
        color: "#ee4044",
        label: "Red"
    },
    {
        value: 50,
        color: "#46BFBD",
        label: "Green"
    },
    {
        value: 100,
        color: "#FDB45C",
        label: "Yellow"
    }
];

var pies = [
  ["pizza", "indian", "chinese", "pub"],
  ["spicy", "refreshing", "modern", "traditional"],
];

var ctx;

var totalImages = 1;
var loadedImages = 0;
var myPieChart;

function createChart() {
  myPieChart = new Chart(ctx).Pie(data,{});
}


$(function(){
  console.log("hello world");
  ctx = $("#myChart")[0].getContext("2d");
  console.log(ctx);

  var imageObj = new Image();
  imageObj.src = "images/pie.jpg";
  imageObj.onload = function() {
      var pattern = ctx.createPattern(imageObj, 'repeat');
      data[loadedImages].color = pattern;

      loadedImages++;

      if(loadedImages >= totalImages) {
        createChart();
      }
  };

  console.log("boom");


  $("#myChart").click(function(e){
    var activePoints = myPieChart.getSegmentsAtEvent(e);
    console.log(activePoints);
    for(var a in activePoints) {
      console.log(activePoints[a].label + " was clicked");
    }
  });

});

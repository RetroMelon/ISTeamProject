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

var restaurantAttributes = [
  "spicy",
  "cool",
  "formal",
  ""
];

// This is set to include all restaurants initially.
var currentOptions = [];

// Note: try and use the same keywords for multiple restaurants!
var restaurantData = {
  "Ubiquitous Chip": { "location": "12 Ashton Ln", "description": "Artistic brasserie dishes that display their provenance, served in a leafy space with fairy lights.", "price": 3, "stars": 4, "keywords": ["British", "chips", "Scottish", "family"] },
  "Mother India": { "location": "28 Westminster Terrace", "description": "Cosy ground floor with bar, intimate cellar and Dickensian 1st floor dining rooms for Indian dishes.", "price": 2, "stars": 4, "keywords": ["Indian", "spicy", "family", "curry", "korma"] },
  "Stravaigin": { "location": "28 Gibson St", "description": "Gourmet concoctions from wild ingredients like grey squirrel, hedgerow herbs and sea urchins.", "price": 3, "stars": 4, "keywords": ["gourmet", "contemporary", "British", "Scottish", "herbs"] },
  "Rogano": { "location": "11 Exchange Pl", "description": "Classical fish recipes dishes in unusual Queen Mary ocean-liner-inspired room and basement cafe.", "price": 3, "stars": 4, "keywords": ["fish", "ocean", "cafe", "seafood", "elegant"] },
  "The Sisters Kelvingrove": { "location": "36 Kelvingrove St", "description": "Contemporary conversion of old tenement building with high ceilings and a seasonal Scottish menu.", "price": 3, "stars": 5, "keywords": ["contemporary", "Scottish", "British", "gourmet"] },
  "Two Fat Ladies": { "location": "118A Blythswood St", "description": "Underwater styled room with fish moving through waves and wavy line architecture for elegant menu.", "price": 3, "stars": 4, "keywords": ["fish", "ocean", "west end", "seafood", "elegant"] },
  "Browns Glasgow": { "location": "1 George Square", "description": "All-day British chain brasserie and bar with lobster nights and afternoon tea in grand cafe setting.", "price": 2, "stars": 4, "keywords": ["British", "bar", "seafood", "afternoon", "cafe"] },
  "La Lanterna": { "location": "35 Hope St", "description": "Timeless family run Italian restaurant set in basement with intricate ceiling and dark wood beams.", "price": 3, "stars": 5, "keywords": ["Italian", "family", "basement"] },
  "Gamba": { "location": "225A W George St", "description": "Basement venue with refined decor concentrating on the simple cooking of Scots-sourced produce.", "price": 3, "stars": 4, "keywords": ["Scottish", "British", "gourmet", "seafood"] },
  "Koolba": { "location": "109 Candleriggs", "description": "Richly coloured and textured food in a cosy interior with canopied ceiling and carpets on the walls.", "price": 3, "stars": 4, "keywords": ["Scottish", "African", "bar"] },
  "Sarti": { "location": "121 Bath St", "description": "Italian food exalting Mediterranean seafood dishes with a patio on red hexagonal stone slabs.", "price": 3, "stars": 5, "keywords": ["Italian", "seafood", "bar"] },
  "Bothy Glasgow": { "location": "11 Ruthven Ln", "description": "Comfortable, relaxed Scottish restaurant serving modern classics with a twist and private rooms.", "price": 2, "stars": 3, "keywords": ["Scottish", "modern", "bar", "gourmet"] },
  "Brian Maule at Chardon d'Or": { "location": "176 W Regent St", "description": "Sophisticated restaurant with secluded dining suites, for French food with a modern Scottish twist.", "price": 3, "stars": 4, "keywords": ["French", "Scottish", "sophisticated", "gourmet", "elegant"] },
  "Nanakusa": { "location": "441 Sauchiehall St", "description": "Japanese cuisine using edible wild herbs to promote wellbeing, longevity, nourishment and vitality.", "price": 1, "stars": 4, "keywords": ["Japanese", "herbs", "vitality", "inexpensive"] },
  "Wee Lochan": { "location": "340 Crow Rd", "description": "An evolving Scottish menu served in a modern tiled room with large windows with special lunch deals.", "price": 2, "stars": 5, "keywords": ["Scottish", "modern", "lunch", "seafood"] },
  "The Grill on the Corner": { "location": "21-25 Bothwell St", "description": "Bustling grill kitchen serving elegant room with dark wood floorboards and thick leather seats.", "price": 1, "stars": 4, "keywords": ["seafood", "elegant", "British", "Scottish"] },
  "Mussel Inn": { "location": "157 Hope St", "description": "", "price": 2, "stars": 4, "keywords": ["seafood", "British", "gourmet", "elegant"] },
  "Celino's": { "location": "620- 624 Alexandra Parade", "description": "Delicious Italian restaurant, speciailsing in herby dishes from the north of Italy.", "price": 2, "stars": 3, "keywords": ["Italian", "inexpensive", "family", "herbs"] },
  "The Butchershop Bar & Grill": { "location": "1055 Sauchiehall St", "description": "Manhattan-style space of exposed bricks and round booths of sumptuous leather serving a meaty menu.", "price": 2, "stars": 3, "keywords": ["meat", "spicy", "British", "Scottish", "family", "inexpensive"] },
  "Cail Bruich": { "location": "725 Great Western Rd", "description": "Inventive French-inflected food from Scotland's natural larder in a relaxed, family-run atmosphere.", "price": 2, "stars": 3, "keywords": ["French", "Scottish", "family", "inexpensive"] },
  "Charcoals": { "location": "26A Renfield St", "description": "Gold framed Indian paintings adorn the walls of this Indian dining room filled with small tables.", "price": 2, "stars": 3, "keywords": ["Indian", "small", "cosy", "inexpensive", "family"] },
  "The Red Onion": { "location": "257 W Campbell St", "description": "Astute modern interpretations of classic Scottish cookery in a comfortable, contemporary setting.", "price": 2, "stars": 3, "keywords": ["onion", "modern", "Scottish", "modern"] },
  "Opium": { "location": "191 Hope St", "description": "Sleek, low-lit spot with old-school chef infusing flavors from China, Malaysia and Thailand.", "price": 2, "stars": 3, "keywords": ["Chinese", "Malaysian", "Thai", "modern", "gourmet"] },
  "Barolo Grill": { "location": "92-94 Mitchell St", "description": "Elegant modern eatery with booths serving pastas, pizzas and focaccia from a traditional oven.", "price": 2, "stars": 3, "keywords": ["elegant", "modern", "Italian", "traditional"] },
  "Tropeiro Restaurant Glasgow": { "location": "363 Argyle St", "description": "Continuous table service of succulent meats slow cooked over an open fire with a buffet for sides.", "price": 2, "stars": 3, "keywords": ["Brazilian", "meat", "spicy", "gourmet", "family", "Latin-American"] },
  "Battlefield Rest": { "location": "55 Battlefield Rd", "description": "Eye-catching building for a continental bistro with a balance of Italian and Scottish flavours.", "price": 2, "stars": 3, "keywords": ["Italian", "Scottish", "continental", "inexpensive", "family"] },
  "Arisaig": { "location": "1 Merchant Square, Candleriggs", "description": "Smart space with a balcony and cobbled terrace for Scottish food and a choice of 100 malt whiskies.", "price": 2, "stars": 3, "keywords": ["modern", "Scottish", "British", "bar", "whiskey", "meat"] },
  "Guy's Restaurant & Bar": { "location": "24 Candleriggs", "description": "Simple European menu of grass-fed veal and homemade ice-cream in a decor of chandeliers and mirrors.", "price": 2, "stars": 3, "keywords": ["continental", "European", "ice-cream", "British", "meat", "modern", "family"] },
  "Number Sixteen West End Ltd": { "location": "16 Byres Rd", "description": "Simple floor and mezzanine of white exposed brick and red walls for an ever changing Scottish menu.", "price": 2, "stars": 3, "keywords": ["west end", "British", "Scottish", "modern", "family"] },
  "The Restaurant Bar & Grill": { "location": "Buchanan St", "description": "A private lift takes you to a sophisticated room and balcony with rotisserie and wood burning oven.", "price": 2, "stars": 3, "keywords": ["meat", "British", "classic", "traditional"] },

  // (got halfway down Google "restaurants near glasgow").
};

var pies = [
  ["pizza", "indian", "chinese", "pub"],
  ["spicy", "refreshing", "modern", "traditional"],
];

var ctx;

var totalImages = 1;
var loadedImages = 0;
var myPieChart;

function createChart() {
  myPieChart = new Chart(ctx).Pie(data, {});
}

// General Idea for the algorithm
//
// Maintain a list of "current options", restaurants the user may want to go to. Initially all restaurants.
//
// 1. Make a giant table of keywords that contains all keywords from current options, with how many times they appear.
// 2. Every iteration, show the 3-5 most common keywords in the pizza chart.
// 3. If the user chooses a keyword, currentOptions = [option in currentOptions where keywords includes <chosen_keywords>].
// 4. Goto 1

function getTableOfCommonKeywords(options, data) {
  var table = {};
  var optionsLength = options.length;
  for (var i = 0; i < optionsLength; ++i) {
    // If there is restaurant data for this restaurant...
    var restaurantName = options[i];
    if (data.hasOwnProperty(restaurantName)) {
      // Now loop through the keywords for this restaurant.
      var keywordsLength = data[restaurantName].keywords.length;
      for (var j = 0; j < keywordsLength; ++j) {
        var keyword = data[restaurantName].keywords[j];
        // Count keyword.
        if (table.hasOwnProperty(keyword)) {
          table[keyword] = table[keyword] + 1;
        } else {
          table[keyword] = 1;
        }
      }
    } else {
      // No restaurant data found for this restaurant. ??
    }
  }

  return table;
}

$(function () {
  console.log("hello world");
  // Initially, set up currentOptions to include all restaurants.
  for (var key in restaurantData) {
    if (restaurantData.hasOwnProperty(key)) {
      currentOptions.push(key);
    }
  }

  tableOfKeywords = getTableOfCommonKeywords(currentOptions, restaurantData);
  
  ctx = $("#pizzaChart")[0].getContext("2d");
  console.log(ctx);

  var imageObj = new Image();
  imageObj.src = "images/pie.jpg";
  imageObj.onload = function () {
    var pattern = ctx.createPattern(imageObj, 'repeat');
    data[loadedImages].color = pattern;

    loadedImages++;

    if (loadedImages >= totalImages) {
      createChart();
    }
  };

  console.log("boom");


  $("#myChart").click(function (e) {
    var activePoints = myPieChart.getSegmentsAtEvent(e);
    console.log(activePoints);

    // The user has clicked some pies. We are only really interested in
    // the first one they click. I'm not sure how they could click two
    // at once.
    pointClick = activePoints[0];

    console.log(pointClick.label + " was clicked");

    // Re
  });

});

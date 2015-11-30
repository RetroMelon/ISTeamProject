// Note: try and use the same keywords for multiple restaurants!
var globalRestaurantData = {
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
  "Brian Maule at Chardon d'Or": { "location": "176 W Regent St", "description": "Sophisticated restaurant with secluded dining suites, for French food with a modern Scottish twist.", "price": 3, "stars": 4, "keywords": ["French", "Scottish", "modern", "gourmet", "elegant"] },
  "Nanakusa": { "location": "441 Sauchiehall St", "description": "Japanese cuisine using edible wild herbs to promote wellbeing, longevity, nourishment and vitality.", "price": 1, "stars": 4, "keywords": ["Japanese", "herbs", "vitality", "inexpensive"] },
  "Wee Lochan": { "location": "340 Crow Rd", "description": "An evolving Scottish menu served in a modern tiled room with large windows with special lunch deals.", "price": 2, "stars": 5, "keywords": ["Scottish", "modern", "lunch", "seafood"] },
  "The Grill on the Corner": { "location": "21-25 Bothwell St", "description": "Bustling grill kitchen serving elegant room with dark wood floorboards and thick leather seats.", "price": 1, "stars": 4, "keywords": ["seafood", "elegant", "British", "Scottish"] },
  "Mussel Inn": { "location": "157 Hope St", "description": "Mussels 'n' stuff", "price": 2, "stars": 4, "keywords": ["seafood", "British", "gourmet", "elegant"] },
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
  "Guy's Restaurant & Bar": { "location": "24 Candleriggs", "description": "Simple European menu of grass-fed veal and homemade ice-cream in a decor of chandeliers and mirrors.", "price": 2, "stars": 3, "keywords": ["continental", "European", "ice cream", "British", "meat", "modern", "family"] },
  "Number Sixteen West End Ltd": { "location": "16 Byres Rd", "description": "Simple floor and mezzanine of white exposed brick and red walls for an ever changing Scottish menu.", "price": 2, "stars": 3, "keywords": ["west end", "British", "Scottish", "modern", "family"] },
  "The Restaurant Bar & Grill": { "location": "Buchanan St", "description": "A private lift takes you to a sophisticated room and balcony with rotisserie and wood burning oven.", "price": 2, "stars": 3, "keywords": ["meat", "British", "gourmet", "traditional"] },

  "Asia Style": { "location": "185-189 St George's Rd", "description": "Unusual menu of Malaysian pancakes and soft shell crab with courtesy jasmine tea. Cash only.", "price": 2, "stars": 4, "keywords": ["Asian", "seafood", "inexpensive"] },
  "Mono": { "location": "12 King's Court", "description": "Versatile bar with an airy and open feel, music at its heart and a menu of veggie/vegan food.", "price": 2, "stars": 4, "keywords": ["vegetarian", "music", "pub", "inexpensive"] },
  "Ristorante Piccolo Mondo": { "location": "344 Argyle St", "description": "Traditional dishes show innovative touches in a relaxed dining room hung with chandeliers.", "price": 2, "stars": 4, "keywords": ["traditional", "Italian", "modern", "cosy"] },
  "Thai Siam": { "location": "1191 Argyle St", "description": "Unassumingly simple dining room for tangy curries and crisp Thai salads.", "price": 2, "stars": 4, "keywords": ["Thai", "modern", "inexpensive"] },
  "The Bistro": { "location": "23 Hamilton Rd", "description": "Bright and colourful modern restaurant for steaks, Scottish and Italian dishes, including pizzas.", "price": 3, "stars": 5, "keywords": ["modern", "meat", "Scottish", "Italian"] },
  "China Blue": { "location": "96 Renfield St", "description": "Tasty Chinese restaurant with a vibrant atmosphere and a wide range of Cantonese dishes.", "price": 2, "stars": 3, "keywords": ["Chinese", "inexpensive", "spicy", "Asian"] },
  "Khublai Khan Mongolian Barbecue": { "location": "26 Candleriggs", "description": "Customer picked ingredients or tried and tested dish combos in atmospheric deep red and gold room.", "price": 2, "stars": 4, "keywords": ["Asian", "Mongolian", "cosy", "atmospheric", "vitality"] },
  "Sloans": { "location": "62, 108 Argyle St", "description": "Decadent venue over 3 floors with Grand Ballroom, stunning central staircase and outside courtyard.", "price": 2, "stars": 5, "keywords": ["British", "Scottish", "traditional", "formal", "gourmet", "elegant"] },
  "Roastit Bubbly Jocks": { "location": "450 Dumbarton Rd", "description": "Smart restaurant with contemporary decor and an easygoing vibe, offering Modern Scottish cuisine.", "price": 2, "stars": 4, "keywords": ["modern", "Scottish", "cosy", "gourmet"] },
  "111 by Nico": { "location": "111 Cleveden Rd", "description": "Shetland oysters, Scottish lobster and traditional fish and chips served in an earthy bistro cafe.", "price": 3, "stars": 5, "keywords": ["seafood", "chips", "cafe", "Scottish"] },

  "Assams": { "location": "57 W Regent St", "description": "Comfortable Indian restaurant with simple, sophisticated decor, online deals and weekly live singer.", "price": 3, "stars": 3, "keywords": ["Indian", "bar", "cosy", "British", "curry", "spicy"] },
  "The Shenaz": { "location": "17 Granville St", "description": "Traditional curries and innovative house specialities in a bright, modern setting with wood floors.", "price": 3, "stars": 4, "keywords": ["curry", "Indian", "modern"] },
  "India Quay": { "location": "181 Finnieston St", "description": "Stylish, modern dining room spread over 2 floors for an inventive menu of creative Indian cooking.", "price": 3, "stars": 5, "keywords": ["modern", "Indian", "curry", "spicy"] },
  "Amore Restaurant": { "location": "Ingram street, Merchant City", "description": "Stylish, modern dining room spread over 2 floors for an inventive menu of creative Indian cooking.", "price": 4, "stars": 5, "keywords": ["cosy", "Italian", "gourmet", "elegant"] },
  "Viva Brazil Glasgow": { "location": "87-91 Bothwell St", "description": "Slow roasted meats expertly carved at table with a selection of buffet-style sides and salads.", "price": 3, "stars": 3, "keywords": ["Brazilian", "Latin American", "meat", "spicy", "inexpensive"] },
  "Cafe Antipasti": { "location": "305 Sauchiehall St", "description": "Italian dishes in relaxed room with mezzanine, intricate ironwork and individually crafted tables.", "price": 3, "stars": 3, "keywords": ["Italian", "relaxed", "cosy", "elegant"] },
  "Las Iguanas": { "location": "10-14 W Nile St", "description": "Flame-grilled Latin American dishes and shared plates served in a contemporary chain dining room.", "price": 3, "stars": 3, "keywords": ["Latin American", "Mexican", "meat", "contemporary", "modern"] },
  "Wudon": { "location": "535 Great Western Rd", "description": "Contemporary dining room with dim lighting for a mix of Chinese,Japanese and Thai cuisines.", "price": 3, "stars": 4, "keywords": ["Japanese", "Asian", "Thai", "Chinese", "contemporary"] },
  "The Pelican Cafe": { "location": "1377 Argyle St", "description": "Simply prepared fresh oysters and creel caught langoustines from the west coast in serene rooms.", "price": 4, "stars": 5, "keywords": ["cafe", "seafood", "oysters", "fish", "British", "Scottish", "contemporary"] },
  "The Cabin": { "location": "998 Dumbarton Rd", "description": "Intimate venue with wood floors, serving venison meatballs and chicken with haggis, plus live music.", "price": 3, "stars": 3, "keywords": ["live music", "intimate", "meat", "Scottish"] }
};

// Global variable defenitions
var imagesStillToLoad = 0;

var numberOfRestaurantsToFinishPieChoices = 5;

var pizzaChartContext;
var thePieChart;

var tableOfKeywords = {};
var keywordsChosenSoFar = [];

// This is set to include all restaurants initially.
var currentOptions = [];

var pizzaPieChartOptions = {
  animationSteps: 25,
  animationEasing: "easeInOutCubic"
};

// This function should reset the entire page.
function resetChoicesAndPizzaPicker() {
  imagesStillToLoad = 0;
  keywordsChosenSoFar = [];

  $("#pizza-chart").show();
  $("#pizza-chart-container").show();

  // Now set up currentOptions to include all restaurants.
  currentOptions = [];
  for (var key in globalRestaurantData) {
    if (globalRestaurantData.hasOwnProperty(key)) {
      currentOptions.push(key);
    }
  }

  // Initially generate the table of keyword occurrences, and then
  // generate pie data for the initial set.
  tableOfKeywords = getTableOfCommonKeywords(currentOptions, keywordsChosenSoFar);
  pieData = makePizzaPieChartData(tableOfKeywords);
  updatePizzaChart(pieData);
  updateResultsList();
}

// This function updates the results list.
function updateResultsList() {
  $("#results-area-title").text("Matching Restaurants / Takeaways (" + currentOptions.length + "):");

  //emptying the body of the table
  $("#simpleTableBody").html("");

  console.log(currentOptions);

  //iterating over the current options that have been chosen and appending them
  //to the table html.
  for ( var o in currentOptions) {
    var currentRestaurant = currentOptions[o];

    var restaurantData = globalRestaurantData[currentRestaurant];

    $("#simpleTableBody").append("<tr><td>" + "T" + "</td><td>" + restaurantData.price + "</td><td>" + restaurantData.stars + "</td><td>" + currentRestaurant + "</td></tr>");
  }
}
function updateBreadcrumbs() {
  $("#breadcrumbs-area").text("Choices : " + keywordsChosenSoFar);
}
// This function creates or updates the
// pie chart in the global variable "thePieChart"
// with data in pieData.
function updatePizzaChart(pieData) {
  // For each segment, try and load an image that will
  // match the label of that segment.
  var numberOfSegments = pieData.length;
  imagesStillToLoad = numberOfSegments;

  for (var segmentIndex = 0; segmentIndex < numberOfSegments; ++segmentIndex) {
    var segmentName = pieData[segmentIndex].label;

    // This creates a function which loads an image, then puts it
    // into the pie chart, then updates the pie chart if this is the last image
    // to be drawn (uses global variable imagesStillToLoad).
    makeImageLoaderFunction = function (imageObject, data, index) {
      return function () {
        --imagesStillToLoad;

        // Create a pattern with this image.
        var pattern = pizzaChartContext.createPattern(imageObject, 'repeat');
        data[index].color = pattern;

        if (imagesStillToLoad < 1) {
          // This was the last image to load- now we can draw the chart!
          if (thePieChart !== undefined) {
            // We only destroy the chart when we can immediately
            // re-draw it, no point destroying it, waiting for all the images
            // to load (while the user stares at a blank canvas), then re-drawing.
            thePieChart.destroy();
          }

          thePieChart = new Chart(pizzaChartContext).Pie(data, pizzaPieChartOptions);
        }
      }
    };

    var imageObject = new Image();

    imageObject.onerror = function () {
      alert("Error: couldn't load image " + this.src + ".");
      return;
    }

    imageObject.onload = makeImageLoaderFunction(imageObject, pieData, segmentIndex);
    imageObject.src = "images/segments/" + segmentName + ".jpg";
  }
}

// This function takes in a list of restaurant names (optionsList),
// and uses globalRestaurantData to generate a table of occurrences
// of keywords for those restaurants. It won't include keywords in the table
// which are in "keywordsToExclude".
function getTableOfCommonKeywords(optionsList, keywordsToExclude) {
  var table = {};
  var optionsListLength = optionsList.length;
  for (var i = 0; i < optionsListLength; ++i) {
    // If there is restaurant data for this restaurant...
    var restaurantName = optionsList[i];
    if (globalRestaurantData.hasOwnProperty(restaurantName)) {
      // Now loop through the keywords for this restaurant.
      var keywordsLength = globalRestaurantData[restaurantName].keywords.length;
      for (var j = 0; j < keywordsLength; ++j) {
        var keyword = globalRestaurantData[restaurantName].keywords[j];

        // Skip this keyword if it's one we should exclude.
        if (keywordsToExclude.indexOf(keyword) > -1) {
          continue;
        }

        // Count keyword.
        if (table.hasOwnProperty(keyword)) {
          table[keyword] = table[keyword] + 1;
        } else {
          table[keyword] = 1;
        }
      }
    } else {
      // No restaurant data found for this restaurant.
      alert("Error: no restaurant data found for option \"" + i + "\" in optionsList" +
        "in getTableofCommonKeywords().");
      continue;
    }
  }

  return table;
}

// This function looks at the list of restaurants in optionsList,
// and then removes any which *don't* contain a keyword "keyword".
function removeAllRestaurantsNotContainingKeyword(optionsList, keyword) {
  var optionsListLength = optionsList.length;

  // Loop goes backwards through list as we are deleting elements.
  for (var i = optionsListLength - 1; i >= 0; --i) {
    var restaurantName = optionsList[i];
    var thisRestaurantData = globalRestaurantData[restaurantName];
    var restaurantContainsKeyword = (thisRestaurantData.keywords.indexOf(keyword) > -1);

    if (!restaurantContainsKeyword) {
      optionsList.splice(i, 1);
    }
  }
}

// This function takes a keyword occurrences table and chooses
// the top few items, to then create some pie segments for,
// ready to be displayed in a pie chart.
function makePizzaPieChartData(keywordTable) {
  var pieData = [];

  // First, find out the top 3-5 keywords.
  // Or do we want just 8 segments of the pie?
  var maxPieSegments = 8;
  var minPieSegments = 2;
  var pieSegments = Math.floor(Math.random() * (maxPieSegments - minPieSegments) + minPieSegments);

  // Choose the top "pieSegments" keywords.
  // First, create a list from the keyword table.
  var sortableList = [];
  for (var keyword in keywordTable) {
    sortableList.push([keyword, keywordTable[keyword]]);
  }
  sortableList.sort(function (a, b) { return b[1] - a[1] });

  // Now we have a sorted list of keywords, choose the first "pieSegments".
  var topKeywords = sortableList.slice(0, pieSegments);

  for (var i = 0; i < pieSegments; ++i) {
    var newPieSegment = { "value": topKeywords[i][1], "label": topKeywords[i][0] };
    pieData.push(newPieSegment);
  }

  return pieData;
}

// General Idea for the algorithm
//
// Maintain a list of "current options", restaurants the user may want to go to. Initially all restaurants.
//
// 1. Make a giant table of keywords that contains all keywords from current options, with how many times they appear.
// 2. Every iteration, show the 3-5 most common keywords in the pizza chart.
// 3. If the user chooses a keyword, currentOptions = [option in currentOptions where keywords includes <chosen_keywords>].
// 4. Goto 1

$(function () {
  pizzaChartContext = $("#pizza-chart")[0].getContext("2d");

  resetChoicesAndPizzaPicker();

  $("#logo-image-link").on("click", "a,img", function (e) {
    resetChoicesAndPizzaPicker();
  });

  $("#pizza-chart").click(function (e) {
    var activePoints = thePieChart.getSegmentsAtEvent(e);

    console.log(activePoints);

    // The user has clicked some pies. We are only really interested in
    // the first one they click. I'm not sure how they could click two
    // at once.
    pointClick = activePoints[0];

    var choiceKeyword = pointClick.label;
    keywordsChosenSoFar.push(choiceKeyword);

    // Per the algorithm, shrink currentOptions by removing all
    // restaurant names where those restaurants DO NOT contain the keyword we want.
    removeAllRestaurantsNotContainingKeyword(currentOptions, choiceKeyword);
    tableOfKeywords = getTableOfCommonKeywords(currentOptions, keywordsChosenSoFar);

    // If there are only less than a few remaining options, or no keywords, hide the pizza chart
    // and maximise the list of results.
    if (currentOptions.length < numberOfRestaurantsToFinishPieChoices || Object.keys(tableOfKeywords).length < 1) {
      // Use jQuery to fade out and slide the pizza picker section so it dissapears.

      $("#pizza-chart").fadeOut(400);
      $("#pizza-chart-container").slideUp("slow");

    } else {
      // There are enough restaurants in the current list of options
      // to allow the user to keep using the pizza pie to choose keywords.
      pieData = makePizzaPieChartData(tableOfKeywords);
      console.log(JSON.stringify(pieData));
    }

    updateResultsList();
    updatePizzaChart(pieData);
    updateBreadcrumbs();

  });

  $("#simpleTable").stupidtable();
});

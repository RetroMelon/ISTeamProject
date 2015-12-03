var getURLParameter = function getURLParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
}
var globalRestaurantData;

function getGlobalRestaurantDataFromFileThenUpdate() {
   $.get('restaurants_new.csv', function (data) {
    // Set globalRestaurantData to be the objects read in from the CSV file.
     globalRestaurantData = $.csv.toObjects(data);

		 var newRestaurantData = {};
		for (var i in globalRestaurantData) {
		 var restName = globalRestaurantData[i].name;
			newRestaurantData[restName] = globalRestaurantData[i];
		}
		
		globalRestaurantData = newRestaurantData;

		processGlobalData();

		/*
    // Now go through each restaurant and split the keywords from a
    // string of words seperated by spaces into an array of word strings.
				var numberOfRestaurants = globalRestaurantData.length;
				for (var restaurantIndex = 0; restaurantIndex < numberOfRestaurants;
					++restaurantIndex) {
					var thisRestaurantData = globalRestaurantData[restaurantIndex];

					// If there is no keyword data then there is nothing we can do.
					if (thisRestaurantData.keywordData !== undefined) {
						var keywordArray = thisRestaurantData.keywordData.split(" ");

						// Remove any empty keywords.
						var numberOfKeywords = keywordArray.length;
						for (var keywordIndex = 0; keywordIndex < numberOfKeywords; ++keywordIndex) {
							var keywordName = keywordArray[keywordIndex];
							if (keywordName == "") {
								keywordArray.splice(keywordIndex, 1);
							}
						}

						thisRestaurantData.keywords = keywordArray;
						delete thisRestaurantData.keywordData;
					}
				} */

  }, 'text');
}

function initialize() {
	getGlobalRestaurantDataFromFileThenUpdate();
	
} 

function processGlobalData() {
	var thisRestaurantData = globalRestaurantData[getURLParameter('restaurant_name').replace(/\+/g, " ")];	
	var mapCanvas = document.getElementById('map');
 	var mapOptions = {
    center: new google.maps.LatLng(thisRestaurantData.lat,thisRestaurantData.lon),
    zoom: 17,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  }
  var map = new google.maps.Map(mapCanvas, mapOptions);
  
	document.getElementById('restaurant-name').innerHTML = getURLParameter('restaurant_name').replace(/\+/g, " ");

	document.getElementById('description-box').innerHTML = "Type: " +	 thisRestaurantData.type;
	var priceString = "";
  for (var i = 0; i < thisRestaurantData.price; i++) {
 		priceString = priceString.concat("\u00A3");
 	}
	document.getElementById('price').innerHTML = "Price (of 3): " + priceString;

	var starString = "";
  for (var i = 0; i < thisRestaurantData.rating; i++) {
     starString = starString.concat("\u2605");
  }
	document.getElementById('stars').innerHTML = "Rating (of 5): " + starString;

	var tagsString = "tags: ".concat(thisRestaurantData.keywordData.join(", "));
	document.getElementById('tags').innerHTML = tagsString;    
}


google.maps.event.addDomListener(window, 'load', initialize);



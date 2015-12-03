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

function initialize() {
	var thisRestaurantData = globalRestaurantData[getURLParameter('restaurant_name').replace(/\+/g, " ")]; 

	var mapCanvas = document.getElementById('map');
   	var mapOptions = {
		center: new google.maps.LatLng(55.87483,-4.29305),
        center: new google.maps.LatLng(thisRestaurantData.lat,thisRestaurantData.lon),

        zoom: 22,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    var map = new google.maps.Map(mapCanvas, mapOptions);
	var imageName = getURLParameter('image_name');
	if (imageName === undefined) {
		imageName = "family.jpg";	
	}
	$('#image').css("background-image", "url('images/segments/" + imageName + "')"); 

	document.getElementById('restaurant-name').innerHTML = getURLParameter('restaurant_name').replace(/\+/g, " ");

	document.getElementById('description-box').innerHTML = thisRestaurantData["description"];
	var priceString = "";
    for (var i = 0; i < thisRestaurantData.price; i++)
         priceString = priceString.concat("\u00A3");
	document.getElementById('price').innerHTML = "Price " + priceString;

	var starString = "";
    for (var i = 0; i < thisRestaurantData.stars; i++)
         starString = starString.concat("\u2605");
	document.getElementById('stars').innerHTML = "Rating " + starString;

	//var tagsString = "People liked this restaurant for: ";
   // for (String string:thisRestaurantData.keywords)
     //    tagsString = tagsString.concat(string);
	//document.getElementById('tags').innerHTML = tagsString;
} 


google.maps.event.addDomListener(window, 'load', initialize);

var globalRestaurantData = {
  "Ubiquitous Chip": {"lat" : 55.874830,"lon":-4.293050, "location": "12 Ashton Ln", "description": "Artistic brasserie dishes that display their provenance, served in a leafy space with fairy lights.", "price": 3, "stars": 4, "keywords": ["British", "chips", "Scottish", "family"] },
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

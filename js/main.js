var BRCCenter = new google.maps.LatLng(39.25684, -76.58758);

//Positions for all the markers and buoys
var DayMarkFerry = new google.maps.LatLng(39.255443, -76.610253);
var BridgeSpanMarker = new google.maps.LatLng(39.256728, -76.613240);
var GreenDay = new google.maps.LatLng(39.255187, -76.611116);
var Boathouse = new google.maps.LatLng(39.255393, -76.622314);
var GreenBldgTurn = new google.maps.LatLng(39.261408, -76.620082);
var GlassBeach1 = new google.maps.LatLng(39.263966, -76.626970);
var GlassBeach2 = new google.maps.LatLng(39.260046, -76.628665);
var Barge = new google.maps.LatLng(39.25006, -76.60073);


//Positions for all the polylines
//basin polylines
var x = new google.maps.LatLng(39.255393, -76.622314);
var boathouse = new google.maps.LatLng(39.255383, -76.622314);
var greenroof = new google.maps.LatLng(39.261408, -76.620082);
var glassone = new google.maps.LatLng(39.263966, -76.626970);
var glasstwo = new google.maps.LatLng(39.260046, -76.628665);
var marina = new google.maps.LatLng(39.257919, -76.621369);
var piers = new google.maps.LatLng(39.255792, -76.614267);
var harborhosp = new google.maps.LatLng(39.252839, -76.611630);
var ferrybar = new google.maps.LatLng(39.254629, -76.609525);
var insidebridge = new google.maps.LatLng(39.259796, -76.616584);
//barge polylines
var bargeone = new google.maps.LatLng(39.24847, -76.60101);
var bargetwo = new google.maps.LatLng(39.24923, -76.59908);
var bargethree = new google.maps.LatLng(39.25079, -76.59882);

//inner harbor polylines
var harborone = new google.maps.LatLng(39.2596, -76.57397);
var harbortwo = new google.maps.LatLng(39.27306, -76.5744);
var harborthree = new google.maps.LatLng(39.27954, -76.5917);
var harborfour = new google.maps.LatLng(39.27797, -76.59951);
var harborfive = new google.maps.LatLng(39.28485, -76.61084);

//way back polylines
var harborsix = new google.maps.LatLng(39.28309, -76.61105);
var harborseven = new google.maps.LatLng(39.28256, -76.60706);
var harboreight = new google.maps.LatLng(39.27718, -76.60191);
var harbornine = new google.maps.LatLng(39.27595, -76.60028);
var harborten = new google.maps.LatLng(39.27488, -76.59719);
var harboreleven = new google.maps.LatLng(39.27671, -76.59273);
var harbortwelve = new google.maps.LatLng(39.27658, -76.5908);
var harborthirteen = new google.maps.LatLng(39.27478, -76.58603);
var harborfourteen = new google.maps.LatLng(39.27203, -76.5811);
var harborfifteen = new google.maps.LatLng(39.27017, -76.57856);
var harborsixteen = new google.maps.LatLng(39.26259, -76.57668);
var harborseventeen = new google.maps.LatLng(39.26023, -76.57856);
var harboreighteen = new google.maps.LatLng(39.2604, -76.59848);



//icons for markers


//initialize map
function initialize() {

    var options = {
        mapTypeControlOptions: {
            mapTypeIds: ['Styled']
        },
        center: BRCCenter,
        zoom: 14,
        disableDefaultUI: false,
        mapTypeId: 'Styled'
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), options);

    StyleMap(map);

    //call the path with the polylines
    //basin polylines
    var myTrip = [boathouse, greenroof, glassone, glasstwo, marina, piers, harborhosp, ferrybar, insidebridge, greenroof];
    var flightPath = new google.maps.Polyline({
        path: myTrip,
        strokeColor: "#9658B1",
        strokeOpacity: 0.8,
        strokeWeight: 2
    });


    //barge polylines
    var BargePath = [harborhosp, bargeone, bargetwo, bargethree, ferrybar];
    var BargePath = new google.maps.Polyline({
        path: BargePath,
        strokeColor: "#AD52A0",
        strokeOpacity: 0.8,
        strokeWeight: 2
    });


    //harbor polylines
    var harbortrip = [harborhosp, harborone, harbortwo, harborthree, harborfour, harborfive];
    var HarborPath = new google.maps.Polyline({
        path: harbortrip,
        strokeColor: "#EF9A61",
        strokeOpacity: 0.8,
        strokeWeight: 2
    });

    //harbor return polylines
    var returntrip = [harborfive, harborsix, harborseven, harboreight, harbornine, harborten, harboreleven, harbortwelve, harborthirteen, harborfourteen, harborfifteen, harborsixteen, harborseventeen, harboreighteen, ferrybar];
    var ReturnPath = new google.maps.Polyline({
        path: returntrip,
        strokeColor: "#EF9A61",
        strokeOpacity: 0.8,
        strokeWeight: 2
    });


    //create image variables and load them with markers
    var barge = new google.maps.MarkerImage('img/barge.svg',
        null, null, null,
        new google.maps.Size(35, 35)
    );
    var marker = new google.maps.Marker({
        position: Barge,
        icon: barge,
    });
    marker.setMap(map);

    var caution = new google.maps.MarkerImage('img/caution.svg',
        null, null, null,
        new google.maps.Size(20, 20)
    );
    var marker = new google.maps.Marker({
        position: DayMarkFerry,
        icon: caution,
    });
    marker.setMap(map);

    var info = new google.maps.MarkerImage('img/brcinfo.svg',
        null, null, null,
        new google.maps.Size(20, 20)
    );

    var marker = new google.maps.Marker({
        position: BridgeSpanMarker,
        icon: caution
    });
    marker.setMap(map);

    var greenday = new google.maps.MarkerImage('img/cautiongreen.svg',
        null, null, null,
        new google.maps.Size(20, 20)
    );

    var marker = new google.maps.Marker({
        position: GreenDay,
        icon: greenday
    });
    marker.setMap(map);

    var marker = new google.maps.Marker({
        position: Boathouse,
        icon: info
    });
    marker.setMap(map);

    var marker = new google.maps.Marker({
        position: GreenBldgTurn,
        icon: info,
    });
    marker.setMap(map);

    var marker = new google.maps.Marker({
        position: GlassBeach1,
        icon: info,
    });
    marker.setMap(map);

    var marker = new google.maps.Marker({
        position: GlassBeach2,
        icon: info,
    });
    marker.setMap(map);

    //display polyline paths
    flightPath.setMap(map);
    BargePath.setMap(map);
    HarborPath.setMap(map);
    ReturnPath.setMap(map);

//set up Info Window for Glass Beach One
    var contentStringgbt = '<div id="infowindow">' +
        '<h1>Stop at the Yellow Diamonds</h1>' +
        '<p>Continue towards glass beach until you see these diamonds on the north shore. This is where you stop and turn.  <img src="http://fuckingdataviz.com/BRC/img/DoubleDiamonds.png" class=large>' +
        '</div>';
    var infowindow = new google.maps.InfoWindow({
        content: contentStringgbt,
        maxWidth: 400
    });
    var marker = new google.maps.Marker({
        position: GlassBeach1,
        map: map,
        icon: info,
        info: contentStringgbt,
        title: 'The Double Diamonds'
    });

    google.maps.event.addListener(marker, 'click', function() {
        infowindow.setContent(this.info);
        infowindow.open(map, this);
    })
    
    //set up Info Window for Green Building Turn
    var contentStringgbt = '<div id="infowindow">' +
        '<h1>Allied Building to Glass Beach</h1>' +
        '<p>This is what you should see heading towards glass beach after you make it across the basin.  <img src="http://fuckingdataviz.com/BRC/img/HanoverSpan.jpg" class=large>' +
        '</div>';
    var infowindow = new google.maps.InfoWindow({
        content: contentStringgbt,
        maxWidth: 400
    });
    var marker = new google.maps.Marker({
        position: GreenBldgTurn,
        map: map,
        icon: info,
        info: contentStringgbt,
        title: 'Boathouse to Allied Building'
    });

    google.maps.event.addListener(marker, 'click', function() {
        infowindow.setContent(this.info);
        infowindow.open(map, this);
    })

    //set up Info Window for Boathouse
    var contentStringbh = '<div id="infowindow">' +
        '<h1>Boathouse to Allied Building</h1>' +
        '<p>When you leave the docks at the boathouse, point your bow towards the Allied building, it is the one with the green roof. <img src="http://fuckingdataviz.com/BRC/img/greenroof.jpeg" class=large>' +
        '</div>';
    var infowindow = new google.maps.InfoWindow({
        content: contentStringbh,
        maxWidth: 400
    });
    var marker = new google.maps.Marker({
        position: Boathouse,
        map: map,
        icon: info,
        info: contentStringbh,
        title: 'The Boathouse'
    });

    google.maps.event.addListener(marker, 'click', function() {
        infowindow.setContent(this.info);
        infowindow.open(map, this);
    })

    //set up Info Window for Glass Beach 2
    var contentStringgb2 = '<div id="infowindow">' +
        '<h1>Beach to Bridge</h1>' +
        '<p>This is what you should see heading towards the bridge from glass beach. <img src="http://fuckingdataviz.com/BRC/img/rightarches.jpeg" class=large>' +
        '</div>';
    var infowindow = new google.maps.InfoWindow({
        content: contentStringgb2,
        maxWidth: 400
    });
    var marker = new google.maps.Marker({
        position: GlassBeach2,
        map: map,
        icon: info,
        info: contentStringgb2,
        title: 'Glass Beach to the Bridge'
    });

    google.maps.event.addListener(marker, 'click', function() {
        infowindow.setContent(this.info);
        infowindow.open(map, this);
    })

    //set up Info Window for Green Day Marker
    var contentStringgd = '<div id="infowindow">' +
        '<h1>The Green Day Marker</h1>' +
        '<p>On your way back towards the basin, you should go between this green marker, and the red ferry bar day marker. This marker should be on your port side when returning.  <img src="http://fuckingdataviz.com/BRC/img/GreenDay.jpg" class=large>' +
        '</div>';
    var infowindow = new google.maps.InfoWindow({
        content: contentStringgd,
        maxWidth: 400
    });
    var marker = new google.maps.Marker({
        position: GreenDay,
        map: map,
        icon: greenday,
        info: contentStringgd,
        title: 'Green Day Marker'
    });

    google.maps.event.addListener(marker, 'click', function() {
        infowindow.setContent(this.info);
        infowindow.open(map, this);
    })

    //set up Info Window for Ferry Day Marker
    var contentStringfd = '<div id="infowindow">' +
        '<h1>The Day Marker by the Ferry Bar</h1>' +
        '<p>This one, also a red triangle, keeps you from getting stuck on the Ferry Bar, because it&rsquo;s shallow here, so stay on the other side of it.' +
        '</div>';
    var infowindow = new google.maps.InfoWindow({
        content: contentStringfd,
        maxWidth: 400
    });
    var marker = new google.maps.Marker({
        position: DayMarkFerry,
        map: map,
        icon: caution,
        info: contentStringfd,
        title: 'Day Marker by the Ferry Bar'
    });

    google.maps.event.addListener(marker, 'click', function() {
        infowindow.setContent(this.info);
        infowindow.open(map, this);
    })

    //set up Info Window for Bridge Span Marker
    var contentStringbsm = '<div id="infowindow">' +
        '<h1>The Bridge Span Marker</h1>' +
        '<p>This marker, also a red triangle, keeps you from going through the center span on the way back into the basin. Keep it on your port side. >' +
        '</div>';
    var infowindow = new google.maps.InfoWindow({
        content: contentStringbsm,
        maxWidth: 400
    });
    var marker = new google.maps.Marker({
        position: BridgeSpanMarker,
        map: map,
        icon: caution,
        info: contentStringbsm,
        title: 'Bridge Span Marker'
    });

    google.maps.event.addListener(marker, 'click', function() {
        infowindow.setContent(this.info);
        infowindow.open(map, this);
    })

    //set up Info Window for LeHigh View
    var contentStringgd = '<div id="infowindow">' +
        '<h1>Lehigh Cement</h1>' +
        '<p>This is what you should see leaving the ferry bar and heading to the Fort. <img src="http://fuckingdataviz.com/BRC/img/LehighFort.png" class=large>' +
        '</div>';
    var infowindow = new google.maps.InfoWindow({
        content: contentStringgd,
        maxWidth: 400
    });
    var marker = new google.maps.Marker({
        position: harborhosp,
        map: map,
        icon: info,
        info: contentStringgd,
        title: 'On Your Way to the Fort'
    });

    google.maps.event.addListener(marker, 'click', function() {
        infowindow.setContent(this.info);
        infowindow.open(map, this);
    })
    
        //set up Info Window for First Mariner on Return
    var contentStringgd = '<div id="infowindow">' +
        '<h1>Around Tide Point</h1>' +
        '<p>This is what you should see heading back from the Harbor as you make the turn around Tide Point. <img src="http://fuckingdataviz.com/BRC/img/FirstMariner.png" class=large>' +
        '</div>';
    var infowindow = new google.maps.InfoWindow({
        content: contentStringgd,
        maxWidth: 400
    });
    var marker = new google.maps.Marker({
        position: harboreleven,
        map: map,
        icon: info,
        info: contentStringgd,
        title: 'Around Tide Point'
    });

    google.maps.event.addListener(marker, 'click', function() {
        infowindow.setContent(this.info);
        infowindow.open(map, this);
    })
    
        //set up Info Window for Legg Mason on Return
    var contentStringgd = '<div id="infowindow">' +
        '<h1>Leaving the Harbor</h1>' +
        '<p>After you leave the Harbor, set your bow on the Legg Mason Building, seen here. <img src="http://fuckingdataviz.com/BRC/img/LeggMason.png" class=large>' +
        '</div>';
    var infowindow = new google.maps.InfoWindow({
        content: contentStringgd,
        maxWidth: 400
    });
    var marker = new google.maps.Marker({
        position: harboreight,
        map: map,
        icon: info,
        info: contentStringgd,
        title: 'Coming back from the Harbor'
    });

    google.maps.event.addListener(marker, 'click', function() {
        infowindow.setContent(this.info);
        infowindow.open(map, this);
    })
    
        //set up Info Window for Harbor Place West
    var contentStringgd = '<div id="infowindow">' +
        '<h1>This is how you know you have arrived! The Harbor Place West Pavilion!</h1>' +
        '<p>This is what you should see heading towards the bridge from glass beach, <img src="http://fuckingdataviz.com/BRC/img/WestPavilion.png" class=large>' +
        '</div>';
    var infowindow = new google.maps.InfoWindow({
        content: contentStringgd,
        maxWidth: 400
    });
    var marker = new google.maps.Marker({
        position: harborfive,
        map: map,
        icon: info,
        info: contentStringgd,
        title: 'The Inner Harbor-End of Route'
    });

    google.maps.event.addListener(marker, 'click', function() {
        infowindow.setContent(this.info);
        infowindow.open(map, this);
    })
    
            //set up Info Window for Turn after Lehigh
    var contentStringgd = '<div id="infowindow">' +
        '<h1>After Lehigh</h1>' +
        '<p>After you get to the Lehigh Building, turn so that you are pointed at Canton. Look for the First Mariner Building as seen here. <img src="http://fuckingdataviz.com/BRC/img/MarinerCanton.png" class=large>' +
        '</div>';
    var infowindow = new google.maps.InfoWindow({
        content: contentStringgd,
        maxWidth: 400
    });
    var marker = new google.maps.Marker({
        position: harborone,
        map: map,
        icon: info,
        info: contentStringgd,
        title: 'Heading towards Canton'
    });

    google.maps.event.addListener(marker, 'click', function() {
        infowindow.setContent(this.info);
        infowindow.open(map, this);
    })
}

google.maps.event.addDomListener(window, 'load', initialize);


function StyleMap(map) {
    var styles = [{
        "featureType": "administrative",
        "elementType": "labels.text.fill",
        "stylers": [{
            "color": "#444444"
        }]
    }, {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [{
            "color": "#f2f2f2"
        }]
    }, {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [{
            "visibility": "off"
        }]
    }, {
        "featureType": "road",
        "elementType": "all",
        "stylers": [{
            "saturation": -100
        }, {
            "lightness": 45
        }]
    }, {
        "featureType": "road.highway",
        "elementType": "all",
        "stylers": [{
            "visibility": "simplified"
        }]
    }, {
        "featureType": "road.arterial",
        "elementType": "labels.icon",
        "stylers": [{
            "visibility": "off"
        }]
    }, {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [{
            "visibility": "off"
        }]
    }, {
        "featureType": "water",
        "elementType": "all",
        "stylers": [{
            "color": "#7FBEC7"
        }, {
            "visibility": "on"
        }]
    }]

    ;


    //    var div = document.getElementById('googleMap');
    //    var map = new google.maps.Map(div, options);
    var styledMapType = new google.maps.StyledMapType(styles, {
        name: 'Styled'
    });
    map.mapTypes.set('Styled', styledMapType);
}
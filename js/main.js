var BRCCenter = new google.maps.LatLng(39.255393, -76.622314);

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
//barge polylines
var harborone = new google.maps.LatLng(39.27332, -76.57869);
var harbortwo = new google.maps.LatLng(39.27954, -76.5917);
var harborthree = new google.maps.LatLng(39.27797, -76.59951);
var harborfour = new google.maps.LatLng(39.28485, -76.61084);

//inner harbor polylines
var harborone = new google.maps.LatLng(39.27332, -76.57869);
var harbortwo = new google.maps.LatLng(39.27954, -76.5917);
var harborthree = new google.maps.LatLng(39.27797, -76.59951);
var harborfour = new google.maps.LatLng(39.28485, -76.61084);

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
        strokeColor: "#FFECB3",
        strokeOpacity: 0.8,
        strokeWeight: 2
    });
    
    
//barge polylines
        var BargePath = [harborhosp, bargeone, bargetwo, bargethree, ferrybar];
    var BargePath = new google.maps.Polyline({
        path: BargePath,
        strokeColor: "#FFECB3",
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
    flightPath.setMap(map);
    BargePath.setMap(map);

    //set up Info Window for Green Building Turn
    var contentStringgbt = '<div id="infowindow">' +
        '<h1>Allied Building to Glass Beach</h1>' +
        '<p>This is what you should see heading towards the bridge from glass beach, <img src="http://fuckingdataviz.com/BRC/img/HanoverSpan.jpg" class=large>' +
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
        '<p>This is what you should see heading towards the bridge from glass beach, <img src="http://fuckingdataviz.com/BRC/img/greenroof.jpeg" class=large>' +
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
        title: 'Boathouse to Allied Building'
    });

    google.maps.event.addListener(marker, 'click', function() {
        infowindow.setContent(this.info);
        infowindow.open(map, this);
    })

    //set up Info Window for Glass Beach 2
    var contentStringgb2 = '<div id="infowindow">' +
        '<h1>Beach to Bridge</h1>' +
        '<p>This is what you should see heading towards the bridge from glass beach, <img src="http://fuckingdataviz.com/BRC/img/HanoverSpan.jpg" class=large>' +
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
        '<p>This is what you should see heading towards the bridge from glass beach, <img src="http://fuckingdataviz.com/BRC/img/greenroof.jpeg" class=large>' +
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
        title: 'Boathouse to Allied Building'
    });

    google.maps.event.addListener(marker, 'click', function() {
        infowindow.setContent(this.info);
        infowindow.open(map, this);
    })

    //set up Info Window for Ferry Day Marker
    var contentStringfd = '<div id="infowindow">' +
        '<h1>The Day Marker by the Ferry Bar</h1>' +
        '<p>This is what you should see heading towards the bridge from glass beach, <img src="http://fuckingdataviz.com/BRC/img/greenroof.jpeg" class=large>' +
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
        title: 'Boathouse to Allied Building'
    });

    google.maps.event.addListener(marker, 'click', function() {
        infowindow.setContent(this.info);
        infowindow.open(map, this);
    })

    //set up Info Window for Bridge Span Marker
    var contentStringbsm = '<div id="infowindow">' +
        '<h1>The Bridge Span Marker</h1>' +
        '<p>This is what you should see heading towards the bridge from glass beach, <img src="http://fuckingdataviz.com/BRC/img/greenroof.jpeg" class=large>' +
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
        title: 'Glass Beach to the Bridge'
    });

    google.maps.event.addListener(marker, 'click', function() {
        infowindow.setContent(this.info);
        infowindow.open(map, this);
    })


}

google.maps.event.addDomListener(window, 'load', initialize);


function StyleMap(map) {
    var styles = [
    {
        "featureType": "administrative",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#444444"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
            {
                "color": "#f2f2f2"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "all",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "lightness": 45
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "color": "#03A9F4"
            },
            {
                "visibility": "on"
            }
        ]
    }
]

;


//    var div = document.getElementById('googleMap');
//    var map = new google.maps.Map(div, options);
    var styledMapType = new google.maps.StyledMapType(styles, {
        name: 'Styled'
    });
    map.mapTypes.set('Styled', styledMapType);
}
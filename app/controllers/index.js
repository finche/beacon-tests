// sample Titanium app.js app to test that things are working,
// this assumes your hardware supports BLE and it's switched on.
// you can use checkAvailability() to see if it's supported, but
// we don't do that here just because we're lazy.

var TiBeacons = null;

if (Ti.Platform.name == "android") {
	TiBeacons = require('com.liferay.beacons');
} else if (Ti.Platform.name == "iPhone OS") {
	TiBeacons = require('org.beuckman.tibeacons');
} else {
	console.log("beacons not supported on " + Ti.Platform.name);
}
// make a window with buttons to start and stop monitoring
var window = Titanium.UI.createWindow({
    title:'iBeacon Test',
    backgroundColor:'#fff'
});

var b1 = Titanium.UI.createButton({
    title: "Start Ranging GeLo 1903"
});

var b2 = Titanium.UI.createButton({
    title: "Start Ranging GeLo 1904"
});

var b3 = Titanium.UI.createButton({
	title: "Start Ranging Estimote purple"
});

var b4 = Titanium.UI.createButton({
	title: "Start Ranging Estimote blue"
});

var b5 = Titanium.UI.createButton({
	title: "Start Ranging Estimote green"
});

var b6 = Titanium.UI.createButton({
	title: "Start Ranging Kontakt V69S"
});

var b7 = Titanium.UI.createButton({
	title: "Start Ranging Kontakt Hf8r"
});

var b8 = Titanium.UI.createButton({
	title: "Start Ranging Kontakt tDdn"
});

var b9 = Titanium.UI.createButton({
	title: "Start Ranging Kontakt aVEf"
});

var b10 = Titanium.UI.createButton({
	title: "Start Ranging Kontakt Hnj8"
});

var stop = Titanium.UI.createButton({
    title: "Stop Ranging"
});

var beaconProximityCallback = function(e) {
	    l1.setText("identifer: " + e.identifier);
	    l2.setText("minor: " + e.minor);
	    l3.setText("proximity: " + e.proximity);
	    l4.setText("accuracy: " + e.accuracy + " rssi: " + e.rssi + " power: " + e.power);
};

var setup = function(){
	
    // add the listeners for beacon region monitoring
    TiBeacons.addEventListener("beaconProximity", beaconProximityCallback);
    
    // stop ranging
    TiBeacons.stopRangingForAllBeacons();
};

b1.addEventListener('click', function(e) {
	setup();

    // start ranging in the button click callback
    TiBeacons.startRangingForBeacons({
      identifier: 'ranging for GeLo beacon 1',
      uuid: '11E44F09-4EC4-407E-9203-CF57A50FBCE0',
      minor: '1903'
    });
});

 b2.addEventListener('click', function(e) {
    setup();
   // start ranging in the button click callback
    TiBeacons.startRangingForBeacons({
      identifier: 'ranging for GeLo beacon 2',
      uuid: '11e44f09-4ec4-407e-9203-cf57a50fbce0',
      minor: '1904'
    });
});

 b3.addEventListener('click', function(e) {
    setup();
   // start ranging in the button click callback
    TiBeacons.startRangingForBeacons({
      identifier: 'ranging for Estimote beacon 1',
      uuid: ' B9407F30-F5F8-466E-AFF9-25556B57FE6D',
      minor: '27484'
    });
});   

b4.addEventListener('click', function(e) {
    setup();
   // start ranging in the button click callback
    TiBeacons.startRangingForBeacons({
      identifier: 'ranging for Estimote beacon 2',
      uuid: ' B9407F30-F5F8-466E-AFF9-25556B57FE6D',
      minor: '57920'
    });
});   

b5.addEventListener('click', function(e) {
    setup();
   // start ranging in the button click callback
    TiBeacons.startRangingForBeacons({
      identifier: 'ranging for Estimote beacon 3',
      uuid: ' B9407F30-F5F8-466E-AFF9-25556B57FE6D',
      minor: '37863'
    });
});   

b6.addEventListener('click', function(e) {
    setup();
   // start ranging in the button click callback
    TiBeacons.startRangingForBeacons({
      identifier: 'ranging for Kontakt beacon 1',
      uuid: 'f7826da6-4fa2-4e98-8024-bc5b71e0893e',
      minor: '41895'
    });
}); 

b7.addEventListener('click', function(e) {
    setup();
   // start ranging in the button click callback
    TiBeacons.startRangingForBeacons({
      identifier: 'ranging for Kontakt beacon 2',
      uuid: 'f7826da6-4fa2-4e98-8024-bc5b71e0893e',
      minor: '19526'
    });
}); 

b8.addEventListener('click', function(e) {
    setup();
   // start ranging in the button click callback
    TiBeacons.startRangingForBeacons({
      identifier: 'ranging for Kontakt beacon 3',
      uuid: 'f7826da6-4fa2-4e98-8024-bc5b71e0893e',
      minor: '65158'
    });
}); 

b9.addEventListener('click', function(e) {
    setup();
   // start ranging in the button click callback
    TiBeacons.startRangingForBeacons({
      identifier: 'ranging for Kontakt beacon 4',
      uuid: 'f7826da6-4fa2-4e98-8024-bc5b71e0893e',
      minor: '47732'
    });
}); 

b10.addEventListener('click', function(e) {
    setup();
   // start ranging in the button click callback
    TiBeacons.startRangingForBeacons({
      identifier: 'ranging for Kontakt beacon 5',
      uuid: 'f7826da6-4fa2-4e98-8024-bc5b71e0893e',
      minor: '34361'
    });
}); 
    
stop.addEventListener('click', function(e) {

    // stop everything
    TiBeacons.stopRangingForAllBeacons();
    TiBeacons.removeEventListener("beaconProximity", beaconProximityCallback);


});

var l1 = Ti.UI.createLabel({});
var l2 = Ti.UI.createLabel({});
var l3 = Ti.UI.createLabel({});
var l4 = Ti.UI.createLabel({});

var win = Ti.UI.createScrollView();

win.setLayout('vertical');
win.add(b1);
win.add(b2);
win.add(b3);
win.add(b4);
win.add(b5);
win.add(b6);
win.add(b7);
win.add(b8);
win.add(b9);
win.add(b10);
win.add(stop);

win.add(l1);
win.add(l2);
win.add(l3);
win.add(l4);

window.add(win);

window.open();

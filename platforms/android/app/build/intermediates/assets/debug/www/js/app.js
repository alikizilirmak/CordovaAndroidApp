var app = angular.module('CordovaApp', []).controller("mainController", function($scope, $interval){
	var vm = this;
	var promise;

    vm.getLocation = function(){
		vm.message = "Location will be seen here!..";
    	promise = $interval(onSuccess, 5000)};

    vm.stopGettingLocation = function(){
    	$interval.cancel(promise);
    	vm.message = "Getting location is stopped!.."
    }

    var onSuccess = function() {
    	navigator.geolocation.getCurrentPosition(function(pos){
    		vm.message = "Time: " + getCurrentTime() + "\nLatitude: " + pos.coords.latitude + "\nLongitude: " + pos.coords.longitude;
    		console.log("Time: " + getCurrentTime() + "\nLatitude: " + pos.coords.latitude + "\nLongitude: " + pos.coords.longitude);
    	});
    }

});

function getCurrentTime(){
    var currentdate = new Date();
    var time = currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " @ "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();
    return time;
}


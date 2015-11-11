// **Angular Device Manager** 
// An Angular directive which can be implemented as a widget. 
// Allows for reserving mobile devices with your name
//
// Example shows devices having personal names instead of
// IDs to be more easily distinguishable
//
// Created by Robert Blaauboer 2015

angular.module('deviceMgr', []).directive('whoHas', function() {
        return {
            restrict: 'AE',
            replace: 'true',
            scope: {},
            templateUrl: 'who-has.html',
            controller: function($scope){
                    $scope.devices = [
                        {
                            id: 0,
                            name: 'Jack',
                            model: 'iPhone 5',
                            owner: "Available"
                        },
                        {
                            id: 1,
                            name: 'Mary',
                            model: 'iPhone 5',
                            owner: "Available"
                        },
                        {
                            id: 2,
                            name: 'Jo',
                            model: 'iPhone 4s',
                            owner: "Available"
                        },
                        {
                            id: 3,
                            name: 'Flo',
                            model: 'iPhone 4s',
                            owner: "Available"
                        },
                        {
                            id: 4,
                            name: 'Dirk',
                            model: 'iPhone 5c',
                            owner: "Available"
                        },
                        {
                            id: 5,
                            name: 'Jan',
                            model: 'iPhone 5c',
                            owner: "Available"
                        },
                        {
                            id: 6,
                            name: 'Joe',
                            model: 'iPad Mini',
                            owner: "Available"
                        }

                    ];
            },
            link: function postlink(scope, elem, attrs) {
                scope.selectedIndex = -1;
                scope.itemClicked = function (index, elem) {
                    scope.selectedIndex = index;
                };
                scope.changeOwner = function() {
                    if(scope.ownerInput){
                        scope.devices[scope.selectedIndex].owner = scope.ownerInput;
                        scope.ownerInput = null;
                        scope.selectedIndex = -1;
                    } else {
                        scope.devices[scope.selectedIndex].owner = "Available";
                        scope.ownerInput = null;
                        scope.selectedIndex = -1;                  
                    }
                };
                scope.getColor = function(index) {
                    if(index == scope.selectedIndex){
                        return '#C8FDFF';
                    }
                    else {
                        return 'white';
                    }
                };
            }
        };
    });

angular.module('deviceMgr', [])

    .directive('whoHas',[ function() {
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
                            name: 'Jill', 
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
                            name: 'Adam', 
                            model: 'iPhone 5c',
                            owner: "Available"
                        },
                        {
                            id: 5,
                            name: 'Eve', 
                            model: 'iPhone 5c',
                            owner: "Available"
                        },
                        {
                            id: 6,
                            name: 'Dirk', 
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
                    if(scope.owner){
                        scope.devices[scope.selectedIndex].owner = scope.owner;
                        scope.owner = null;
                        scope.selectedIndex = -1; 
                    } else {
                        scope.devices[scope.selectedIndex].owner = "Available";
                        scope.owner = null;
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
    }]);

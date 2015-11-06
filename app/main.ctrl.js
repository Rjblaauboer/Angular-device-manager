
angular.module('app').controller("MainController", function($scope){
	$scope.title = 'AngularJS Tutorial Example';
	$scope.searchInput = '';
	$scope.shows = [
		{
			title: 'Game of Thrones',
			year: 2011,
			favorite: true
		},
		{
            title: 'Walking Dead',
            year: 2010,
            favorite: false
        },
        {
            title: 'Firefly',
            year: 2002,
            favorite: true
        },
        {
            title: 'Banshee',
            year: 2013,
            favorite: true
        },
        {
            title: 'Greys Anatomy',
            year: 2005,
            favorite: false
        }
    ];
$scope.orders = [
    {
        id: 1,
        title: 'Year Ascending',
        key: 'year',
        reverse: false
    },
    {
        id: 2,
        title: 'Year Descending',
        key: 'year',
        reverse: true
    },
    {
        id: 3,
        title: 'Title Ascending',
        key: 'title',
        reverse: false
    },
    {
        id: 4,
        title: 'Title Descending',
        key: 'title',
        reverse: true
    }
];


$scope.order = $scope.orders[0];

$scope.new = {};
$scope.addShow = function() {
	$scope.shows.push($scope.new);
	$scope.new = {};
};
});

app.directive('showList', function() {
    return {
        restrict: 'AE',
        replace: 'true',
        //template: '<h1>foo barrrr</h1>'
        templateUrl: 'show-list.html',
        link: function(scope, elem, attrs){
            scope.shows[0].title = "It worked this time";
        }
    };
});

app.directive('showAdd', function() {
    return {
        restrict: 'AE',
        replace: 'true',
        templateUrl: 'show-add.html'
    };
});

app.directive('searchBox', function() {
    return {
        restrict: 'AE',
        replace: 'true',
        templateUrl: 'search-box.html'
    };
});

app.directive('whoHas', function() {
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
});

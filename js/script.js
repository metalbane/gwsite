var gwSite = angular.module('gwSite', ['ui.router']);

gwSite.config(function($stateProvider, $urlRouterProvider){
	
	$urlRouterProvider.otherwise('/');

	$stateProvider
	.state('home', {
		url: '/',
		views: {
			"header": {
				templateUrl: "templates/header.html"
			},
			"container": {
				templateUrl: "templates/news-list.html",
				controller: "NewsListCtrl"
			},
			"bottom": {
				templateUrl: "templates/bottom.html"
			},
			"footer": {
				templateUrl: "templates/footer.html"
			}
		}
	})
	.state('comicarchive', {
		url: '/comics/:comic',
		views: {
			"header": {
				templateUrl: "templates/header.html"
			},
			"container": {
				templateUrl: "templates/comic-detail.html",
				controller: "ComicDetailCtrl"
			},
			"bottom": {
				templateUrl: "templates/bottom.html"
			},
			"footer": {
				templateUrl: "templates/footer.html"
			}
		}
	})
	.state('comicpage', {
		url: '/comics/:comic/:page',
		views: {
			"header": {
				templateUrl: "templates/header.html"
			},
			"container": {
				templateUrl: "templates/comic-view.html",
				controller: "ComicViewCtrl"
			},
			"bottom": {
				templateUrl: "templates/bottom.html"
			},
			"footer": {
				templateUrl: "templates/footer.html"
			}
		}
	})
	.state('about', {
		url: '/about',
		views: {
			"header": {
				templateUrl: "templates/header.html"
			},
			"container": {
				templateUrl: "templates/about.html"
			},
			"bottom": {
				templateUrl: "templates/bottom.html"
			},
			"footer": {
				templateUrl: "templates/footer.html"
			}
		}
	})
	.state('cast', {
		url: '/cast',
		views: {
			"header": {
				templateUrl: "templates/header.html"
			},
			"container": {
				templateUrl: "templates/cast.html"
			},
			"bottom": {
				templateUrl: "templates/bottom.html"
			},
			"footer": {
				templateUrl: "templates/footer.html"
			}
		}
	})
	.state('contact', {
		url: '/contact',
		views: {
			"header": {
				templateUrl: "templates/header.html"
			},
			"container": {
				templateUrl: "templates/contact.html"
			},
			"bottom": {
				templateUrl: "templates/bottom.html"
			},
			"footer": {
				templateUrl: "templates/footer.html"
			}
		}
	});
});

// Retrieves the list of news stories and displays them in reverse order (latest to newest)
gwSite.controller('NewsListCtrl', function ($scope, $http){
	var urlStr = 'json/news.json';

	$http.get(urlStr).success(function(data) {

		$scope.posts = data.reverse();

	});
});

// Retrieves the appropriate json comic chapter list based on state parameters
gwSite.controller('ComicDetailCtrl', function ($scope, $stateParams, $http){
	$scope.comic = $stateParams.comic;

	var urlStr = 'json/' + $scope.comic + 'Chapters.json';

	$http.get(urlStr).success(function(data) {
		$scope.chapters = data;
	});
});

gwSite.controller('ComicViewCtrl', function ($scope, $stateParams, $http){
	$scope.comic = $stateParams.comic;
	$scope.page = $stateParams.page;

	var urlStr = 'json/' + $scope.comic + '.json';

	$http.get(urlStr).success(function(data) {

		var pageInt = parseInt($scope.page);

		//console.log(data);
		//console.log(data[pageInt]);
		//console.log(data[pageInt].authors);

		// Unless the current page is the first, the previous page will be the current page-1
		if (pageInt == 1) {
			$scope.prevPage = 1;
		} else {
			$scope.prevPage = pageInt - 1;
		}

		// The last page should be equal to the number of objects in the data array
		$scope.lastPage = data.length;

		// Unless the current page is the last, the next page will be the current page+1
		if (pageInt == parseInt($scope.lastPage)) {
			$scope.nextPage = $scope.lastPage;
		} else {
			$scope.nextPage = pageInt + 1;
		}

		var authors = data[pageInt].authors;
		//console.log(authors);

	});
});
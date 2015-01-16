var gwSite = angular.module('gwSite', ['ui.router']);

gwSite.config(function($stateProvider, $urlRouterProvider){
	
	$urlRouterProvider.otherwise("/");

	$stateProvider
	.state('home', {
		url: "/",
		views: {
			"header": {
				templateUrl: "templates/header.html"
			},
			"container": {
				templateUrl: "templates/news-list.html"
			},
			"ads": {
				templateUrl: "templates/ads.html"
			},
			"footer": {
				templateUrl: "templates/footer.html"
			}
		}
	})
	.state('archive', {
		url: "/archive",
		views: {
			"header": {
				templateUrl: "templates/header.html"
			},
			"container": {
				templateUrl: "templates/comic-detail.html"
			},
			"ads": {
				templateUrl: "templates/ads.html"
			},
			"footer": {
				templateUrl: "templates/footer.html"
			}
		}
	})
	.state('about', {
		url: "/about",
		views: {
			"header": {
				templateUrl: "templates/header.html"
			},
			"container": {
				templateUrl: "templates/about.html"
			},
			"ads": {
				templateUrl: "templates/ads.html"
			},
			"footer": {
				templateUrl: "templates/footer.html"
			}
		}
	})
	.state('cast', {
		url: "/cast",
		views: {
			"header": {
				templateUrl: "templates/header.html"
			},
			"container": {
				templateUrl: "templates/cast.html"
			},
			"ads": {
				templateUrl: "templates/ads.html"
			},
			"footer": {
				templateUrl: "templates/footer.html"
			}
		}
	})
	.state('contact', {
		url: "/contact",
		views: {
			"header": {
				templateUrl: "templates/header.html"
			},
			"container": {
				templateUrl: "templates/contact.html"
			},
			"ads": {
				templateUrl: "templates/ads.html"
			},
			"footer": {
				templateUrl: "templates/footer.html"
			}
		}
	});
});
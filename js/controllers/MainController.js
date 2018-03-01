app.controller('MainController', ['$scope', function($scope){
  $scope.events = [
  	{
  		title: "Sip with Stephen",
  		host: "Stephen",
  		price: 30
  		icon: "img/Stephen.jpg"
  	},
  	{
  		title: "Sushi Knife Skills",
  		host: "Cafe Sushi",
  		price: 65
  		icon: "img/Sushi.jpg"
  	}
  ];
}]);
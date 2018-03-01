app.directive('appEvent', function(){
  return {
    restrict: 'E',
    scope: {
      event: '='
    },
    templateUrl: 'js/directives/appEvent.html'
  };
})
(function(){
	var app = angular.module('mytodoApp')
	app.controller('AboutCtrl', function ($scope,localStorageService) {
     var todosInStore = localStorageService.get('todos');
     $scope.todos = todosInStore || [];
     $scope.$watch('todos', function () {
      localStorageService.set('todos', $scope.todos);
    }, true);

      $scope.addTodo = function () {
      $scope.todos.push($scope.todo);
      $scope.todo = '';
    };
    $scope.removeTodo = function (index) {
      $scope.todos.splice(index, 1);
    };
  });
})();


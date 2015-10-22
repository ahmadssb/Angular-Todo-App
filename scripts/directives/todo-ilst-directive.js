angular.module('todo-list-directive', [])
	.directive('todoList', function () {
		return {
			restrict: 'E',
			templateUrl: 'templates/todo-list/todo-list-template.html'
		};
	}
);

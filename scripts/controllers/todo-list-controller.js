angular.module('todo-list-controller', [])
	.controller('TodoListController', function ($scope, $http) {
		var self = this;
		self.todoList = [];
		$http.get("data/todos.json")
			.success(function (response) {
				self.todoList = response;
			});
		$scope.addTodo = function () {
			self.todoList.push({
				"text": $scope.text,
				"done": false
			});
			console.log("addTodo Clicked - new data:" + $scope.text);
			$scope.text = '';
			console.log(self.todoList);
			console.log($scope.remaining());
		};
		$scope.remaining = function () {
			var count = 0;
			angular.forEach(self.todoList, function (todo) {
				count += todo.done ? 0 : 1;
			});
			//			console.log(count);
			return count;
		};
		$scope.numberOfdeletedNotes = function () {
			var count = 0;
			angular.forEach(self.todoList, function (todo) {
				count += todo.done ? 1 : 0;
			});
			console.log(count);
			return count;
		};
		$scope.delete = function () {
			var currentTodoList = self.todoList;
			self.todoList = [];
			angular.forEach(currentTodoList, function (todo) {
				if (!todo.done) self.todoList.push(todo);
			});
		};
	});

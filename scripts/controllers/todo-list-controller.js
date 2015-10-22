angular.module('todo-list-controller', [])
	.controller('TodoListController', function ($http) {
		var self = this;
		self.todoList = [];
		$http.get("data/todos.json")
		.success(function(response) {
			self.todoList = response;
		})
		self.addTodo = function () {
			self.todoList.push({"text": self.text, "done": false});
			console.log("addTodo Clicked - new data:" + self.text);
			self.text = '';
			console.log(self.todoList);
			console.log(self.remaining());
		};
		self.remaining = function () {
			var count = 0;
			angular.forEach(self.todoList, function(todo) {
				count += todo.done ? 0 : 1 ;
			});
			return count;
			console.log(count);
		};
		self.delete = function () {
			var currentTodoList = self.todoList;
			self.todoList = [];
			angular.forEach(currentTodoList, function(todo) {
				if (!todo.done) self.todoList.push(todo);
			});
		}
	});
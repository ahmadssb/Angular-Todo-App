todos = [
	{
		"text": "task 1",
		"done": false,
	},
	{
		"text": "task 2",
		"done": true,
	}
];
angular.module('todoApp', [])
	.controller('TodoListController', function () {
		var self = this;
		self.todoList = todos;
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
		
	});
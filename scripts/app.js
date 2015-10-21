todos = [
	{
		"text": "task 1",
		"done": false,
	},
	{
		"text": "task 2",
		"done": false,
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
		};
		self.remaining = function () {
			
		};
		
	});
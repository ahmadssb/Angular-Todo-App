angular.module('modal-instance-controller', [])
	.controller('ModalInstanceController', function ($scope, $modalInstance) {
		$scope.ok = function () {
			// I would like to call delete() from todo-list-controller.js
			$modalInstance.close($scope.$parent.delete());
		};

		$scope.cancel = function () {
			$modalInstance.dismiss('cancel');
		};
	});

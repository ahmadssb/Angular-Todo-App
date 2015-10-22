angular.module('modal-controller', [])
	.controller('ModalController', function ($scope, $uibModal, $log) {

		$scope.animationsEnabled = true;

		$scope.open = function (size) {
			var modalInstance = $uibModal.open({
				animation: $scope.animationsEnabled,
				templateUrl: 'templates/modals/delete-modal.html',
				controller: 'ModalInstanceController',
				size: size,
			});
			console.log('open()');
		};
	});

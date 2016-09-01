(function() {
  'use strict';

  angular
    .module('anyLoader')
    .controller('DemoCtrl', DemoCtrl);

  /* @ngInject */
  function DemoCtrl($timeout) {
    /*jshint validthis: true */
    var vm = this;

    // Assign all bindable models:
    vm.isLoading = false;
    vm.toggleLoading = toggleLoading;
    vm.toggleDisabled = toggleDisabled;
    vm.resetButtonConfig = resetButtonConfig;
    vm.loadWithoutMsgs = loadWithoutMsgs;
    vm.loadWithMsgs = loadWithMsgs;
    vm.loadWithDisabled = loadWithDisabled;
    vm.loaderConfig = {
      isLoading: false,
      size: '3em',
      iconClass: 'fa-refresh',
    };
    vm.buttonConfig = {
      label: 'Load Something',
      isLoading: false,
      isSuccess: false,
      isFail: false,
      successMsg: 'Success!',
      failMsg: 'Failed :(',
      btnClass: 'special-btn',
    };
    vm.buttonNoMsgConfig = {
      label: 'Load Something',
      isLoading: false,
    };
    vm.buttonWithDisabledConfig = {
      label: 'Load Something',
      isLoading: false,
    };
    vm.disabled = true;

    //////////

    function loadWithMsgs () {
      /**
       * Fake loading something for some time
       */
      vm.buttonConfig.isLoading = true;
      vm.buttonConfig.isSuccess = false;
      vm.buttonConfig.isFail = false;

      $timeout(function() {
        vm.buttonConfig.isLoading = false;
        if ((Math.floor(Math.random() * (3 - 1)) + 1) % 2) {
          vm.buttonConfig.isSuccess = true;
        } else {
          vm.buttonConfig.isFail = true;
        }
      }, 1000);
    }

    function loadWithoutMsgs () {
      vm.buttonNoMsgConfig.isLoading = true;
      $timeout(function() {
        vm.buttonNoMsgConfig.isLoading = false;
      }, 1000);
    }

    function loadWithDisabled () {
      vm.buttonWithDisabledConfig.isLoading = true;
      $timeout(function() {
        vm.buttonWithDisabledConfig.isLoading = false;
      }, 1000);
    }

    function resetButtonConfig () {
      vm.buttonConfig.isSuccess = false;
      vm.buttonConfig.isFail = false;
    }

    function toggleLoading () {
      vm.loaderConfig.isLoading = !vm.loaderConfig.isLoading;
    }

    function toggleDisabled () {
      vm.disabled = !vm.disabled;
    }
  }
})();
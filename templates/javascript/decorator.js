'use strict';

angular.module('<%= moduleName %>')
  .config(function ($provide) {
    $provide.decorator('<%= _.camelize(name) %>', function ($delegate) {
      // decorate the $delegate
      return $delegate;
    });
  });

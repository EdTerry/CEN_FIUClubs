var app = angular.module('app', ['ionic'])

app.controller('testController', function($scope) {
  var db = openDatabase('fiuclubs', '1.0', 'FIU Clubs DB', 2 * 1024 * 1024);
  $scope.categories = [];

  db.transaction(function(tx) {
    tx.executeSql('SELECT * FROM clubs', [], function (tx, results) {
      var len = results.rows.length;

      console.log("Returned rows = " + len);

      for (var i = 0; i < len; i++) {
        $scope.categories.push({
          cid: results.rows.item(i).cid,
          c_name: results.rows.item(i).c_name
        });

        // Make sure to apply scope change so that ng-repeat updates
        $scope.$apply();
      }
    });
  }, function(error) {
    console.log(error)
  });
});

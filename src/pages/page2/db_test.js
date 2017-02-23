.controller('testController', function($scope) {
  var db = openDatabase('mydb', '1.0', 'fiuclubs', 2 * 1024 * 1024);
  $scope.categories = [];

  db.transaction(function(tx) {
    tx.executeSql('DROP TABLE CLUBS');
    tx.executeSql('CREATE TABLE CLUBS ( cid int(7), c_name VARCHAR(100), club_desc VARCHAR(100), admin_pid int(7), category VARCHAR(100), PRIMARY KEY(cid))');
    tx.executeSql('INSERT INTO CLUBS (cid, c_name, club_desc, admin_pid, category) VALUES (?, ?, ?, ?, ?)', [1, 'Band Club', 'We play instruments', '1234567', 'Music']);
    tx.executeSql('SELECT c_name FROM CLUBS', [], function (tx, results) {
      var len = results.rows.length;
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

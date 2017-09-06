angular.module('listings').controller('ListingsController', ['$scope', 'Listings',
  function($scope, Listings) {
    $scope.listings = Listings;
    $scope.detailedInfo = undefined;

    /*
      Implement these functions in the controller to make your application function
      as described in the assignment spec.
     */
    $scope.addListing = function() {
      $scope.listings.push({
        "code": $scope.code,
        "name": $scope.name,
        "coordinates": {
          "latitude": $scope.latitude,
          "longitude": $scope.longitude
        },
        'address': $scope.address
      });
      $scope.code = "";
      $scope.name = "";
      $scope.latitude = "";
      $scope.longitude = "";
      $scope.address = "";
    };
    $scope.deleteListing = function(listing) {
      var index = -1;
      var listArray = eval($scope.listings);
      for (var i = 0; i < listArray.length; i++) {
        if (listArray[i].name == listing.name) {
          index = i;
          break;
        }
      }

      $scope.listings.splice(index, 1);
      console.log(index);
      console.log('delete listing');
    };
    $scope.showDetails = function(listing) {
      var index = -1;
      var listArray = eval($scope.listings);
      for (var i = 0; i < listArray.length; i++) {
        if (listArray[i].name == listing.name) {
          index = i;
          break;
        }
      }
      $scope.detailedInfo = $scope.listings[index];
    };
  }
]);

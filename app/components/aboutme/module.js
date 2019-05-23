let myapp = angular.module("myApp");



let JSONController = function ($scope) {

    $scope.Student = {
        FirstName: "Sandeep",
        LastName: "Katrevula",
        Email: "s534965@nwmissouri.edu"
    }

  //  $scope.Student = Student;
}

myapp.controller("Student", JSONController);
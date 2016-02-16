'use strict';

angular.module("appModule")
    .controller('gpaCtrl', function($http){
        console.log("gpa controller loaded!");

        var self = this;

        self.textField = "";
        self.textField1 = "";
        self.textField2 = "";

        // Normally, data like this would be stored in a database, and this controller would issue an http:get request for it.
        self.data = [];

        self.getGPA = function(){
            $http.get('api/gpa').success(function(gpa) {
                self.data = gpa;
            });
        };

        self.getGPA();

        self.addData = function() {
            if (self.textField.length >= 1, self.textField1 == 1, self.textField2.length == 1) {
                $http.post('api/gpa', {text: self.textField, credits: self.textField1, grade: self.textField2}).success(function () {
                    self.getGPA();
                });
                self.textField = "";
                self.textField1 = "";
                self.textField2 = "";
            }
        };



            self.removeData = function(index){
                $http.delete('/api/gpa' + self.data[index]._id).success(function(){
                    self.getGPA();
                });
            };

            self.cat = function(str1, str2){
                return str1 + str2;
            };

            self.itemsInList = function(){
                return self.data.length;
            };

            });
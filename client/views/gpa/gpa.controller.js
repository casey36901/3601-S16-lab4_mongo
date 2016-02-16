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
                $http.delete('/api/gpa/' + self.data[index]._id).success(function(){
                    self.getGPA();
                });
            };

             self.itemsInList = function(){
                return self.data.length;
            };

        self.calculateGPA = function(data){
            var value = 0;
            var totalCredits = 0;
            for(var i=0; i < data.length; i++){
                if(data[i].grade == "A"){
                    value += (data[i].credits * 4.0);
                }
                if(data[i].grade == "B"){
                    value += (data[i].credits * 3.0);
                }
                if(data[i].grade == "C"){
                    value += (data[i].credits * 2.0);
                }
                if(data[i].grade == "D"){
                    value += (data[i].credits * 1.0);
                }
                if(data[i].grade == "F"){
                    value += (data[i].credits * 0.0);
                }
                totalCredits += data[i].credits;
             };
            return  (value* (1/totalCredits));
        };


            });
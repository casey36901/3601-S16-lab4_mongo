'use strict';

angular.module("appModule")
    .controller('mainCtrl', function($http){
        console.log("main controller loaded!");

        var self = this;

        self.textField = "";
        self.textField1 = "";

        // Normally, data like this would be stored in a database, and this controller would issue an http:get request for it.
        self.data = [];

        self.getPets = function(){
            $http.get('api/pets').success(function(pets) {
                self.data = pets;
            });
        };

        self.getPets();

        self.addData = function(){
            if(self.textField.length >= 1, self.textField1 >= 1) {
                $http.post('api/pets', {text: self.textField, weight: self.textField1}).success(function(){
                    self.getPets();
                });
                self.textField = "";
                self.textField1 = "";
            }
        };

        self.removeData = function(index){
            $http.delete('/api/pets/' + self.data[index]._id).success(function(){
                self.getPets();
            });
        };

        self.itemsInList = function(){
            return self.data.length;
        };

        self.getHeaviestPet = function(data){
            var heaviestPet = data[0].weight;
            console.log(data);
            for(var i=1; i < data.length; i++){
                if(data[i].weight > heaviestPet){
                    heaviestPet = data[i].weight;

                    console.log(heaviestPet);
                } else {
                    console.log(heaviestPet);
                }
            };
            return heaviestPet;
        };

    });
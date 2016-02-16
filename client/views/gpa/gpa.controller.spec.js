'use strict';

//=== Testing mainCtrl =============================================
describe('Testing controller: gpaCtrl', function(){

    // load the controller's module
    beforeEach(module('appModule'));

    var gpaCtrl, scope;

    // Initialize the controller and mock scope.
    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        gpaCtrl = $controller('gpaCtrl', {
            $scope: scope
        });
    }));

    it('dummy test should pass', function(){
        expect(true).toEqual(true);
    });

    it('test length', function(){
        gpaCtrl.data = [{"_id":"56c278fa8e18de1e651ac222","text":"Quantum","credits":4,"grade":"A","__v":0},{"_id":"56c27c329ae07d376699d5e8","text":"Cats 101","credits":4,"grade":"C","__v":0},{"_id":"56c27c459ae07d376699d5e9","text":"Not Schroedinger","credits":4,"grade":"B","__v":0}];
        expect(gpaCtrl.itemsInList()).toEqual(3);
    });

    it('test calculateGPA', function(){
        gpaCtrl.data = [{"_id":"56c278fa8e18de1e651ac222","text":"Quantum","credits":4,"grade":"A","__v":0},{"_id":"56c27c329ae07d376699d5e8","text":"Cats 101","credits":4,"grade":"C","__v":0},{"_id":"56c27c459ae07d376699d5e9","text":"Not Schroedinger","credits":4,"grade":"B","__v":0}];
        expect(gpaCtrl.calculateGPA(gpaCtrl.data)).toEqual(3.0);
    });

    it('test calculateGPA2', function(){
        gpaCtrl.data = [{"_id":"56c278fa8e18de1e651ac222","text":"Quantum","credits":4,"grade":"F","__v":0},{"_id":"56c27c329ae07d376699d5e8","text":"Cats 101","credits":4,"grade":"D","__v":0},{"_id":"56c27c459ae07d376699d5e9","text":"Not Schroedinger","credits":4,"grade":"C","__v":0}];
        expect(gpaCtrl.calculateGPA(gpaCtrl.data)).toEqual(1.0);
    });
});


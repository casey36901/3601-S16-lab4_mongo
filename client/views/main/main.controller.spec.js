'use strict';

//=== Testing mainCtrl =============================================
describe('Testing controller: mainCtrl', function(){

    // load the controller's module
    beforeEach(module('appModule'));

    var mainCtrl, scope;

    // Initialize the controller and mock scope.
    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        mainCtrl = $controller('mainCtrl', {
            $scope: scope
        });
    }));

    it('dummy test should pass', function(){
        expect(true).toEqual(true);
    });

    it('test getHeaviestPet', function(){
       mainCtrl.data = [{"_id":"56ba410beb1a019b3aa7d3d4","text":"Kitty","weight":666,"__v":0},{"_id":"56bcd2d0f19509264e0613b5","text":"Elephant","weight":2780,"__v":0},{"_id":"56bcd2dcf19509264e0613b6","text":"Puppy","weight":2,"__v":0},{"_id":"56bcd2e2f19509264e0613b7","text":"Dog","weight":7,"__v":0},{"_id":"56bcd2edf19509264e0613b8","text":"Pig","weight":4,"__v":0}];
        expect(mainCtrl.getHeaviestPet(mainCtrl.data)).toEqual(2780);
    });
});

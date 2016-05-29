describe('removeAllVowels Filter', function () {
	var $controller;

	beforeEach(module('app'));

	beforeEach(inject(function ($injector) {
		$filter = $injector.get('$filter');
	}));

	beforeEach(inject(function($filter){
		removeAllVowels = $filter('removeAllVowels');
	}));

	it('should remove all the vowels from a string', function(){
		expect(removeAllVowels('hello')).toEqual('hll');
	});

});

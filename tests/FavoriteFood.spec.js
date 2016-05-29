describe('Favorite Food Filter', function () {
	var $controller;
	var people = [
		{
			name: "Cernan",
			favoriteFood: "lasagna"
		},
		{
			name: "Ashley",
			favoriteFood: "pizza"
		},
		{
			name: "Amy",
			favoriteFood: "cheeseburger"
		}
	]

	beforeEach(module('app'));

	beforeEach(inject(function ($injector) {
		$filter = $injector.get('$filter');
	}));

	beforeEach(inject(function($filter){
		favoriteFood = $filter('favoriteFood');
	}));

	it('should filter the list by the favorite food passed in', function(){
		expect(favoriteFood(people,'lasagna').length).toBe(1);
	});

});

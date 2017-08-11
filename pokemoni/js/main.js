var app = angular.module("myApp", []);
app.controller("mainCtrl", function($scope, $http){

	$scope.findPoks = function(){

		var pok = $scope.pokemon;
		var pokemons = pok.toLowerCase();
		var linkURLPokNames = "https://pokeapi.co/api/v2/pokemon/" + pokemons;
		var linkURLPokColor = "https://pokeapi.co/api/v2/pokemon-color/" +pokemons;

		$http({
		method : "GET",
		url : linkURLPokNames
		}).then(function mySuccess1(response) {
			
			// console.log(response); 
		       
			var pokemonsName = {
			       name: response.data.name,
			       baseExperience: response.data.base_experience,
			       id: response.data.id,
			       order: response.data.order,
			       weight: response.data.weight,
			       height: response.data.height,
			       img1: response.data.sprites.back_default,
			       img2: response.data.sprites.back_shiny,
			       img3: response.data.sprites.front_default,
			       img4: response.data.sprites.front_shiny,
			};
			$scope.pokemonsName = pokemonsName;
			
		}, function myError(response) {
		       
		       $scope.pokByColor = true;
		       $scope.pokByName = false;
		});
		
		$http({
		method : "GET",
		url : linkURLPokColor
		}).then(function mySuccess2(response) {

			// console.log(response.data);
			
			var pokemonsColor = {
			       name: response.data.name,
			       species: getSpecies(response.data.pokemon_species)
			};
			$scope.pokemonsColor = pokemonsColor;

			// console.log(pokemonsColor.species);

			function getSpecies(species){
			       var allSpecies = [];
			       for ( var i=0; i<species.length; i++ ){
				      allSpecies.push(species[i].name);	
			       };
			       
			       return allSpecies;
			};

		}, function myError(response) {
		       
		       $scope.pokByName = true;
		       $scope.pokByColor = false;
		}); 
	};
});
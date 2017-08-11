var app = angular.module("myApp", []);
app.controller("mainCtrl", function($scope, $http){

	$scope.findPoks = function(){

		var pok = $scope.pokemon;
		var pokemons = pok.toLowerCase();
		var linkURLPokNames = "https://pokeapi.co/api/v2/pokemon/";
		var linkURLPokColor = "https://pokeapi.co/api/v2/pokemon-color/";

		var pokemonNameArr = [];

		$http({
		method : "GET",
		url : linkURLPokNames
		}).then(function mySuccess1(response) {
			
			// console.log(response.data.results); 

			var allPokemons = response.data.results;
			for ( var i=0; i<allPokemons.length; i++ ){
				console.log(allPokemons[i].name);
				pokemonNameArr.push(allPokemons[i].name);
			};
			console.log(pokemonNameArr);

			for ( var i=0; i<pokemonNameArr.length; i++ ){
				if ( pokemonNameArr[i] == pokemons ){
					console.log(pokemonNameArr[i]);
					var wantedPok = pokemonNameArr[i];
				};	
			};

			// var pokemonsName = {
			//        name: response.data.name,
			//        baseExperience: response.data.base_experience,
			//        id: response.data.id,
			//        order: response.data.order,
			//        weight: response.data.weight,
			//        height: response.data.height,
			//        img1: response.data.sprites.back_default,
			//        img2: response.data.sprites.back_shiny,
			//        img3: response.data.sprites.front_default,
			//        img4: response.data.sprites.front_shiny,
			// };
			// $scope.pokemonsName = pokemonsName;
			// }
			// }
			
		}, function myError(response) {
		       
		       $scope.pokByColor = true;
		       $scope.pokByName = false;
		});
		
		// $http({
		// method : "GET",
		// url : linkURLPokColor
		// }).then(function mySuccess2(response) {

		// 	// console.log(response.data);
			
		// 	var pokemonsColor = {
		// 	       name: response.data.name,
		// 	       // species: 
		// 	};
		// 	$scope.pokemonsColor = pokemonsColor;

		// 	// console.log(pokemonsColor.species);


		// }, function myError(response) {
		       
		//        $scope.pokByName = true;
		//        $scope.pokByColor = false;
		// }); 
	};
});
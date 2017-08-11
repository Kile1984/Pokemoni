# Pokemoni
Aplikaciju sam krenuo tako što sam u startu napravio funkciju za button „findPoks“ .
U toj funkciji je pokupljena vrednost iz input polja „var pokemons“u kojem se upisuje ime ili boja željenog pokemona.
Zatim sam dodao vrednost inputa na link za preuzimanje podataka pokemona.
Šaljem prvi http zahtev koji pronalazi ime željenog pokemona u funkciji „mySuccess“.
Ako je zatev korektan i i ime pokemona postoji pravim promenljivu „pokemonsName“ koja je objekat i u nju smeštam ptrebne podatke o pokemonu.
Zatim kačim na „$scope“ var pokemonsName da bib bila vidljiva na indexu.
Šaljem drugi zahtev koji pronalazi boju željenog pokemona.
Ako je zahtev korektan i boja pokemona postoji pravim promenljivu „var pokemonsColor“ koja je takođe objekat.
Da bih pokupio imena pokemona koji su željene boje u promenljivoj „specis“ pravim funkciju koja pronalazi pokemone po imenima. Prolaze kroz foor loop i vraćam željenu vrednost u funkciji „getSpecies“.
Ako je ukucana boja pokemona onda ce biti sakriven „<section id="pokByName" ng-show="pokByName">“
U koliko je ukucano ime pokemona biće sakriven „<section id="pokByColor" ng-show="pokByColor">“
  
Ono što nisam uspeo da napravim jeste da kada se ukuca pogresno ime ili boja pokemona izadje upozorenje da je pokemon ne postojeći. U planu mi je bilo da napravim da aplikacija bude responsive i da u slucaju traženja pokemona po boji kada se na ekranu pojave svi pokemoni željene boje klikom na nekom od njih na ekranu izađu podaci pokemona.
Za ovo sve nisam imao vremena jer radim po ceo gotovo ceo dan a mislim da proslo više od nedelju dana stoga Vam šaljem aplikaciju onakva kakva je trenutno.
Ako je ovo što sam do sada uradio prema vašim kriterijuma korekto mogu uz neki dodatni dan da rešim i ove probleme.
Hvala na razumevanju i veliki ppozdrav.


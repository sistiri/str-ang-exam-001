# 3. Részvizsga - Gyakorlat
### A vizsga a következő feladatok megoldását tartalmazza.

## Beállítások
1. Hozz létre egy új Github tárolót "str-ang-exam-001" néven. Ne készíts sem README.md sem más állományt a létrehozáskor. Ekkor ki fog adni egy segédletet, hogy hogyan tudod összekötni egy már meglévő mappával.
2. Hozz létre azonos néven egy új Angular projektet a saját gépeden. Legyen benne Routing és SCSS -t használj a stílusokhoz.
3. Kösd össze a kettőt az instrukciók alapján.

## Feladatok
### A következő pontok meglétét és működését fogjuk pontozni.

1. Kösd be a Bootstrap és Font-Awesome könyvtárakat a projektbe a tanult módon.
2. KészÍts egy navigation nevű komponenst, amiben egy alapértelmezett Bootstrap stílusú navbar jelenjen meg.
3. A navbar a következő linkeket tartalmazza: Home, Heroes. Kattintásra a kapcsolódó komponens jelenjen meg az alkalmazásban.
4. Hozd létre a home és a horeos komponenseket és állítsd be a routing -ban, hogy a '' és 'heroes' útvonalak esetén jelenjenek meg.
5. AppComponent: az oldal tetején a navigation jelnjen meg. Alatta legyen az a rész, ahol az oldalak töltődnek be, egy container oszályú divben.
6. HomeComponent: jelenjen meg benne egy Jumbotron Bootstrap elem, "Heroes" címmel. A nagy kék gomb, ha rákattintanak, akkor a "/heroes" url-re vigyen, fontos, hogy az Angular routing használatával.
7. Készíts egy Hero osztályt, az alábbi tulajdonságokkal (a típusok értelemszerűek legyenek): id, name, superPower, address.
8. HeroService: készíts egy service -t, a neve hero legyen. Legyen egy getAll metódusa, ami Hero[] típussal tér vissza, és legalább 5 Hero -t szolgáltat azoknak akik meghívják.
9. HeroesComponent: használja a HeroService -t a Hero példányok lekéréséhez. Jelenítse meg a Hero[] elemeit, egy táblázatban egymás alatt.
10. Extra pont: legyen egy pipe -al készített szűrő, ami szöveg beírására szűri a táblázatot a name tulajdonság szerint.
11. Extra pont: a fejléc sorokra kattintva lehessen a táblázat adatait növekvő sorrendbe rendezni szintén egy pipe használatával.
## Beadás
### Határidő: 2021-02-16 12:00

[A feladatot beadni ide kattintva lehet egy űrlapon.](https://forms.office.com/Pages/ResponsePage.aspx?id=uo8WgI7Wd0uJJxcOS3B8gS4sxex9TpFNs4DtYO_uSaZUNlNFSUQwNU1SRUxSS0tPNk1JRVE1WEI5Ui4u)


## 
# 
## 
# 
## 
# 
## 
# 








# StrAngExam001

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.7.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

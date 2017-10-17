$(function() {
//This JavaScript document is for a Dungeons and Dragons application.  In this application you choose possible choices in two forms and from that data you will find out the perfect character for D&D.  This application incorporates HTML, CSS, jQuery, JavaScript and Git.  I also tried to implement WCAG 2.0 guidelines for web accessibility.  
    var raceChoice = "";
    var characterChoices = {
        //These are the arrays of objects containing the keys and values necessary to display the correct race and class (stats) at the end of the application.  These objects will be pulled into the JS code to produce var, let and const needed. 
        races: [
            {
                title: 'Dwarf',
                height: 'small',
                age: 'immortal',
                terrain: 'mountain',
                //A problem I ran into in this application is that not all combinations of values will result in the data necessary to complete the application.  To solve this I added an 'idealClass' array that will assist the stats form in finding a suitable result.
                idealClass: [
                    'Paladin',
                    'Fighter'
                ],
                //I also wanted to visually show the race chosen and added corresponding images to each race.  These images were provided by the Noun Project and all artists names are credited in the HTML document.
                picture: "./images/Images/race_dwarf.svg"
            },
            {
                title: 'Elf',
                height: 'tall',
                age: 'immortal',
                terrain: 'heaven',
                idealClass: [
                    'Wizard',
                    'Ranger'
                ],
                picture: "./images/Images/race_elf.svg"
            },
            {
                title: 'Halfling',
                height: 'small',
                age: 'mortal',
                terrain: 'hometown',
                idealClass: [
                    'Rogue',
                    'Fighter'
                ],
                picture: "./images/Images/race_halfling.svg"
            },
            {
                title: 'Human',
                height: 'tall',
                age: 'mortal',
                terrain: 'city',
                idealClass: [
                    'Bard',
                    'Wizard'
                ],
                picture: "./images/Images/race_human.svg"
            },
            {
                title: 'Dragonborn',
                height: 'tall',
                age: 'immortal',
                terrain: 'city',
                idealClass: [
                    'Paladin'
                ],
                picture: "./images/Images/race_dragonborn.svg"
            },
            {
                title: 'Gnome',
                height: 'small',
                age: 'immortal',
                terrain: 'hometown',
                idealClass: [
                    'Wizard',
                    'Monk'
                ],
                picture: "./images/Images/race_gnome.svg"
            },
            {
                title: 'Half-Elf',
                height: 'tall',
                age: 'mortal',
                terrain: 'heaven',
                idealClass: [
                    'Bard',
                    'Paladin'
                ],
                picture: "./images/Images/race_halfelf.svg"
            },
            {
                title: 'Half-Orc',
                height: 'tall',
                age: 'mortal',
                terrain: 'hell',
                idealClass: [
                    'Barbarian',
                    'Fighter'
                ],
                picture: "./images/Images/race_orc.svg"
            },
            {
                title: 'Tiefling',
                height: 'tall',
                age: 'immortal',
                terrain: 'hell', 
                idealClass: [
                    'Warlock',
                    'Sorcerer'
                ],
                picture: "./images/Images/race_tiefling.svg"
            },
        ],
        stats: [
            {
                title: 'barbarian',
                ability: 'strength', 
                combatType: 'melee',
                hitDie: 'd12',
                picture: "./images/Images/class_barbarian.svg"
            },
            {
                title: 'bard',
                ability: 'charisma',
                combatType: 'magic',
                hitDie: 'd8',
                picture: "./images/Images/class_bard.svg"
            },
            {
                title: 'cleric',
                ability: 'wisdom', 
                combatType: 'magic',
                hitDie: 'd8',
                picture: "./images/Images/class_cleric.svg"
            },
            {
                title: 'druid',
                ability: 'wisdom',
                combatType: 'magic',
                hitDie: 'd8',
                picture: "./images/Images/class_druid.svg"
            },
            {
                title: 'fighter',
                ability: 'strength', 
                combatType: 'melee',
                hitDie: 'd10',
                picture: "./images/Images/class_fighter.svg"
            },
            {
                title: 'monk',
                ability: 'dex',
                combatType: 'melee',
                hitDie: 'd8',
                picture: "./images/Images/class_monk.svg"
            },
            {
                title: 'paladin',
                ability: 'charisma',
                combatType: 'melee',
                hitDie: 'd10',
                picture: "./images/Images/class_paladin.svg"
            },
            {
                title: 'ranger',
                ability: 'dex',
                combatType: 'melee',
                hitDie: 'd10',
                picture: "./images/Images/class_ranger.svg"
            },
            {
                title: 'rogue',
                ability: 'dex',
                combatType: 'melee',
                hitDie: 'd8',
                picture: "./images/Images/class_rogue.svg"
            },
            {
                title: 'sorcerer',
                ability: 'charisma',
                combatType: 'ranged',
                hitDie: 'd6',
                picture: "./images/Images/class_sorcerer.svg"
            },
            {
                title: 'warlock',
                ability: 'charisma',
                combatType: 'ranged',
                hitDie: 'd8',
                picture: "./images/Images/class_warlock.svg"
            },
            {
                title: 'wizard',
                ability: 'intelligence',
                combatType: 'magic',
                hitDie: 'd6',
                picture: "./images/Images/class_wizard.svg"
            },
        ]

    };
    $('a').smoothScroll();
    //This function controls the toggleClass of the hidden check boxes.  By using this I was able to successfully keep the hover state active when an option is selected in the application.
    $('.toggle').on('click', function(e) {
        $(this).toggleClass('labelTwo')
    });
    //The code to determine the race of the character begins here.
    $('form.race a').on('click', function(e) {
        //These variables gather the data from the users selections for the races and stores it for later use.  
        var height = $('input[name=height]:checked').val(); 
        var age = $('input[name=age]:checked').val();
        var terrain = $('input[name=vacation]:checked').val();
        var raceChoices = [];
        var ultimateRaceChoice = [];
        var choiceObject = finalRaceChoice(age, height, terrain, raceChoices, ultimateRaceChoice);
        raceChoices = choiceObject.raceChoices;
        ultimateRaceChoice = choiceObject.ultimateRaceChoice;
        ultimateChoiceRace(ultimateRaceChoice, raceChoices);
    });
    //This function collects the data provided by the user to find a matching race.
    function finalRaceChoice(age, height, terrain, raceChoices, ultimateRaceChoice){
        for (i = 0; i < characterChoices['races'].length; i++){
            var ageOfCharacter = characterChoices['races'][i]['age'];
            var heightOfCharacter = characterChoices['races'][i]['height'];
            var terrainOfCharacter = characterChoices['races'][i]['terrain'];
            var raceOfCharacter = characterChoices['races'][i]['title']; 
            if (ageOfCharacter === age && heightOfCharacter === height && terrainOfCharacter === terrain){
                ultimateRaceChoice.push(raceOfCharacter);
            } else if (ageOfCharacter === age && heightOfCharacter === height){
                raceChoices.push(raceOfCharacter);
            } else if(ageOfCharacter === age && terrainOfCharacter === terrain){
                raceChoices.push(raceOfCharacter);
            } else if (heightOfCharacter === height && terrainOfCharacter === terrain){
                raceChoices.push(raceOfCharacter);
            }
        };
        console.log(ultimateRaceChoice, raceChoices);
        return {raceChoices: raceChoices, ultimateRaceChoice: ultimateRaceChoice};
    };
    //This function will take the data collected in the finalRaceChoice function and produce the results on screen.
    function ultimateChoiceRace(ultimateRaceChoice, raceChoices){
        if (ultimateRaceChoice.length === 1){
            raceChoice = ultimateRaceChoice[0];
            var urlPicture = pictureTitleFind(raceChoice, 'race');
            $('div.raceResult').html(`<img src="${urlPicture}" class='racePicture'><h2 class='race'>${raceChoice}</h2>`).addClass('result');
        } else {  
            raceChoice = getRandomResult(raceChoices);
            var urlPicture = pictureTitleFind(raceChoice, 'race');
            $('div.raceResult').html(`<img src="${urlPicture}" class='racePicture'><h2 class='race'>${raceChoice}</h2>`).addClass('result');
        };
    };
    //A problem I ran into with the previous function is sometimes the data will not produce any possible races based on user input.  Since I did not want to happen I added in a failsafe function that will randomly select a race based on partial data available. 
    function getRandomResult(array){
        var randomIndex = Math.floor(Math.random() * array.length);
        return array[randomIndex];
    };
    //After the race is determined it will then display the title and picture of the race in the results section.
    function pictureTitleFind(title, category){
        if (category === 'race'){    
            for(i = 0; i < characterChoices['races'].length; i++){
                var raceObject = characterChoices['races'][i];
                if (title === characterChoices['races'][i]['title']){
                    return characterChoices['races'][i]['picture'];
                }
            }
            //This is also the case for the users stats choice.
        } else {
            for(i = 0; i < characterChoices['stats'].length; i++){
                    var statsObject = characterChoices['stats'][i];
                    if (title === characterChoices['stats'][i]['title']){
                        return characterChoices['stats'][i]['picture'];
                }
            }
        }
    };
    //The code to determine the stats of the character begins here.
    $('form.stats a').on('click', function(e){
        //These variables gather the data from the users selections for the stats and stores it for later use.
        var ability = $('input[name=ability]:checked').val();
        var combatType = $('input[name=combatType]:checked').val();
        var hitDie = $('input[name=hitDie]:checked').val();
        var statsChoices = [];
        var finalStatSelection = finalStatsChoices(ability, combatType, hitDie, statsChoices);
        statsChoices = finalStatSelection;
        raceClassResults(statsChoices);
    });
    //This function will take the data and find the best stats option based on the users inputs.
    function finalStatsChoices(ability, combatType, hitDie, statsChoices){
        for (i = 0; i < characterChoices['stats'].length; i++){
            var abilityOfCharacter = characterChoices['stats'][i]['ability'];
            var hitDieOfCharacter = characterChoices['stats'][i]['hitDie'];
            var combatTypeOfCharacter = characterChoices['stats'][i]['combatType'];
            var statsOfCharacter = characterChoices['stats'][i]['title'];

            if (abilityOfCharacter === ability && combatTypeOfCharacter === combatType){
                statsChoices.push(statsOfCharacter);
            } else if(combatTypeOfCharacter === combatType && hitDieOfCharacter === hitDie){
                statsChoices.push(statsOfCharacter);
            } else if (hitDieOfCharacter === hitDie && abilityOfCharacter === ability){
                statsChoices.push(statsOfCharacter);
            };
        };
        return statsChoices;
    };
    //If no perfect stats is found this function will then pull the 'idealClass' based on the race to find a possible stats.
    function raceClassResults(statsChoices){
        if (statsChoices.length < 1){  
            
            var idealArray = characterChoices.races.filter(function(value){
                return value.title === raceChoice;
            });
            console.log(idealArray);
            //All of the results will be displayed in the results section.
            var statsChoice = getRandomResult(idealArray[0].idealClass);
            var urlPicture = pictureTitleFind(statsChoice, 'stats');
            $('.statsResult').html(`<img src="${urlPicture}" class='racePicture'><h2>${statsChoice}</h2><a class="twitter-share-button" href="https://twitter.com/intent/tweet?text=I%20got%20${raceChoice}%20${statsChoice}%20on%20Dungeons%20and%20Dragons%20Character%20Picker" data-size="large"><i class="fa fa-twitter"></i></a>`).addClass('result');
        } else {
            //A twitter button was added for fun.
            var statsChoice = getRandomResult(statsChoices);
            var urlPicture = pictureTitleFind(statsChoice, 'stats');
            $('.statsResult').html(`<img src="${urlPicture}" class='racePicture'><h2>${statsChoice}</h2><a class="twitter-share-button" href="https://twitter.com/intent/tweet?text=I%20got%20${raceChoice}%20${statsChoice}%20on%20Dungeons%20and%20Dragons%20Character%20Picker" data-size="large"><i class="fa fa-twitter"></i></a>`).addClass('result');
        }
    }
});

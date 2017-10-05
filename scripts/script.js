$(function() {

    var raceChoice = "";
    var characterChoices = {
        races: [
            {
                title: 'Dwarf',
                height: 'small',
                age: 'immortal',
                terrain: 'mountain',
                idealClass: [
                    'Paladin',
                    'Fighter'
                ],
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
    $('a').smoothScroll({
    
    });
    $("input").click(function(){
        $("label").toggleClass("labelTwo");
    });
    $('form.race a').on('click', function(e) {
        e.preventDefault();
        var height = $('input[name=height]:checked').val();	
        var age = $('input[name=age]:checked').val();
        var terrain = $('input[name=vacation]:checked').val();
        var raceChoices = [];
        var ultimateRaceChoice = [];

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
        };
    };
    function getRandomResult(array){
        var randomIndex = Math.floor(Math.random() * array.length);
        return array[randomIndex];
    };
    function pictureTitleFind(title){
        
        for(i = 0; i < characterChoices['races'].length; i++){
            var raceObject = characterChoices['races'][i];
            if (title === characterChoices['races'][i]['title']){
                return characterChoices['races'][i]['picture'];
            }
        }
    };
    if (ultimateRaceChoice.length === 1){
        raceChoice = ultimateRaceChoice[0];
        var urlPicture = pictureTitleFind(raceChoice);
        $('div.raceResult').html(`<img src="${urlPicture}" class='racePicture'><h2 class='race'>${raceChoice}</h2>`).addClass('result');
    } else {  
        raceChoice = getRandomResult(raceChoices);
        var urlPicture = pictureTitleFind(raceChoice);
        $('div.raceResult').html(`<img src="${urlPicture}" class='racePicture'><h2 class='race'>${raceChoice}</h2>`).addClass('result');
    };

    });
    $('form.stats a').on('click', function(e){
        e.preventDefault();
        var ability = $('input[name=ability]:checked').val();
        var combatType = $('input[name=combatType]:checked').val();
        var hitDie = $('input[name=hitDie]:checked').val();
        var statsChoices = [];

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
        function getRandomResult(array){
            var randomIndex = Math.floor(Math.random() * array.length);
            return array[randomIndex];
        };
        function pictureTitleFind(title){
            title = title.toLowerCase();
            for(i = 0; i < characterChoices['stats'].length; i++){
                    var statsObject = characterChoices['stats'][i];
                    if (title === characterChoices['stats'][i]['title']){
                        return characterChoices['stats'][i]['picture'];
                    }
            }
        };
        if (statsChoices.length < 1){  
            
            var idealArray = characterChoices.races.filter(function(value){
                return value.title === raceChoice;
            });
            console.log(idealArray);

            var statsChoice = getRandomResult(idealArray[0].idealClass);
            var urlPicture = pictureTitleFind(statsChoice);
            $('.statsResult').html(`<img src="${urlPicture}" class='racePicture'><h2>${statsChoice}</h2><a class="twitter-share-button" href="https://twitter.com/intent/tweet?text=I%20got%20${raceChoice}%20${statsChoice}%20on%20Dungeons%20and%20Dragons%20Character%20Picker" data-size="large"><i class="fa fa-twitter"></i></a>`).addClass('result');
        } else {
            var statsChoice = getRandomResult(statsChoices);
            var urlPicture = pictureTitleFind(statsChoice);
            $('.statsResult').html(`<img src="${urlPicture}" class='racePicture'><h2>${statsChoice}</h2><a class="twitter-share-button" href="https://twitter.com/intent/tweet?text=I%20got%20${raceChoice}%20${statsChoice}%20on%20Dungeons%20and%20Dragons%20Character%20Picker" data-size="large"><i class="fa fa-twitter"></i></a>`).addClass('result');
        }
    });
});

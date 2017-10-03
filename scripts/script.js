var raceChoice = "";
var characterChoices = {
    choices: [
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
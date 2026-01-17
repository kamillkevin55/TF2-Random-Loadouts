export const CLASSES = [
    "Scout",
    "Soldier",
    "Pyro",
    "Demoman",
    "Heavy",
    "Engineer",
    "Medic",
    "Sniper",
    "Spy",
];

export const SLOTS = {
    PRIMARY: "Primary",
    SECONDARY: "Secondary",
    MELEE: "Melee",
    PDA: "PDA", // Engineer Construction/Destruction, Spy Disguise Kit
    PDA2: "PDA2", // Spy Sapper
};

// Simplified list of weapons. 
// id: unique identifier
// name: Display name
// classes: array of classes that can use it
// slot: "Primary", "Secondary", "Melee", "PDA", "PDA2"
// type: Optional subtype (e.g. "Boots", "Shield", "Banner")

export const WEAPONS = [
    // --- SCOUT ---
    // Primary
    { id: "scattergun", name: "Scattergun", classes: ["Scout"], slot: SLOTS.PRIMARY },
    { id: "force_a_nature", name: "Force-A-Nature", classes: ["Scout"], slot: SLOTS.PRIMARY },
    { id: "shortstop", name: "Shortstop", classes: ["Scout"], slot: SLOTS.PRIMARY },
    { id: "soda_popper", name: "Soda Popper", classes: ["Scout"], slot: SLOTS.PRIMARY },
    { id: "baby_faces_blaster", name: "Baby Face's Blaster", classes: ["Scout"], slot: SLOTS.PRIMARY },
    { id: "back_scatter", name: "Back Scatter", classes: ["Scout"], slot: SLOTS.PRIMARY },
    // Secondary
    { id: "pistol", name: "Pistol", classes: ["Scout", "Engineer"], slot: SLOTS.SECONDARY },
    { id: "winger", name: "Winger", classes: ["Scout"], slot: SLOTS.SECONDARY },
    { id: "pretty_boys_pocket_pistol", name: "Pretty Boy's Pocket Pistol", classes: ["Scout"], slot: SLOTS.SECONDARY },
    { id: "flying_guillotine", name: "Flying Guillotine", classes: ["Scout"], slot: SLOTS.SECONDARY },
    { id: "bonk_atomic_punch", name: "Bonk! Atomic Punch", classes: ["Scout"], slot: SLOTS.SECONDARY },
    { id: "crit_a_cola", name: "Crit-a-Cola", classes: ["Scout"], slot: SLOTS.SECONDARY },
    { id: "mad_milk", name: "Mad Milk", classes: ["Scout"], slot: SLOTS.SECONDARY },
    // Melee
    { id: "bat", name: "Bat", classes: ["Scout"], slot: SLOTS.MELEE },
    { id: "sandman", name: "Sandman", classes: ["Scout"], slot: SLOTS.MELEE },
    { id: "candy_cane", name: "Candy Cane", classes: ["Scout"], slot: SLOTS.MELEE },
    { id: "boston_basher", name: "Boston Basher", classes: ["Scout"], slot: SLOTS.MELEE },
    { id: "sun_on_a_stick", name: "Sun-on-a-Stick", classes: ["Scout"], slot: SLOTS.MELEE },
    { id: "fan_o_war", name: "Fan O'War", classes: ["Scout"], slot: SLOTS.MELEE },
    { id: "atomizer", name: "Atomizer", classes: ["Scout"], slot: SLOTS.MELEE },
    { id: "wrap_assassin", name: "Wrap Assassin", classes: ["Scout"], slot: SLOTS.MELEE },
    { id: "frying_pan", name: "Frying Pan", classes: ["Scout", "Soldier", "Pyro", "Demoman", "Heavy", "Engineer", "Medic", "Sniper", "Spy"], slot: SLOTS.MELEE }, // Multiclass examples

    // --- SOLDIER ---
    // Primary
    { id: "rocket_launcher", name: "Rocket Launcher", classes: ["Soldier"], slot: SLOTS.PRIMARY },
    { id: "direct_hit", name: "Direct Hit", classes: ["Soldier"], slot: SLOTS.PRIMARY },
    { id: "black_box", name: "Black Box", classes: ["Soldier"], slot: SLOTS.PRIMARY },
    { id: "rocket_jumper", name: "Rocket Jumper", classes: ["Soldier"], slot: SLOTS.PRIMARY },
    { id: "liberty_launcher", name: "Liberty Launcher", classes: ["Soldier"], slot: SLOTS.PRIMARY },
    { id: "cow_mangler_5000", name: "Cow Mangler 5000", classes: ["Soldier"], slot: SLOTS.PRIMARY },
    { id: "beggars_bazooka", name: "Beggar's Bazooka", classes: ["Soldier"], slot: SLOTS.PRIMARY },
    { id: "air_strike", name: "Air Strike", classes: ["Soldier"], slot: SLOTS.PRIMARY },
    // Secondary
    { id: "shotgun", name: "Shotgun", classes: ["Soldier", "Pyro", "Heavy", "Engineer"], slot: SLOTS.SECONDARY },
    { id: "reserve_shooter", name: "Reserve Shooter", classes: ["Soldier", "Pyro"], slot: SLOTS.SECONDARY },
    { id: "buff_banner", name: "Buff Banner", classes: ["Soldier"], slot: SLOTS.SECONDARY },
    { id: "gunboats", name: "Gunboats", classes: ["Soldier"], slot: SLOTS.SECONDARY },
    { id: "battalions_backup", name: "Battalion's Backup", classes: ["Soldier"], slot: SLOTS.SECONDARY },
    { id: "concheror", name: "Concheror", classes: ["Soldier"], slot: SLOTS.SECONDARY },
    { id: "mantreads", name: "Mantreads", classes: ["Soldier"], slot: SLOTS.SECONDARY },
    { id: "righteous_bison", name: "Righteous Bison", classes: ["Soldier"], slot: SLOTS.SECONDARY },
    { id: "base_jumper", name: "B.A.S.E. Jumper", classes: ["Soldier", "Demoman"], slot: SLOTS.PRIMARY }, // Wait, slot varies? Soldier: Secondary?? No, Soldier it's Primary replacement? No no. Soldier: Secondary. Demoman: Primary.
    // Special handling for BASE Jumper: It's Secondary for Soldier, Primary for Demoman. 
    // We'll add two entries or handle logically. Two entries is easier for simple filtering.
    { id: "base_jumper_soldier", name: "B.A.S.E. Jumper", classes: ["Soldier"], slot: SLOTS.SECONDARY },
    { id: "base_jumper_demo", name: "B.A.S.E. Jumper", classes: ["Demoman"], slot: SLOTS.PRIMARY },

    // Melee
    { id: "shovel", name: "Shovel", classes: ["Soldier"], slot: SLOTS.MELEE },
    { id: "equalizer", name: "Equalizer", classes: ["Soldier"], slot: SLOTS.MELEE },
    { id: "pain_train", name: "Pain Train", classes: ["Soldier", "Demoman"], slot: SLOTS.MELEE },
    { id: "half_zatoichi", name: "Half-Zatoichi", classes: ["Soldier", "Demoman"], slot: SLOTS.MELEE },
    { id: "market_gardener", name: "Market Gardener", classes: ["Soldier"], slot: SLOTS.MELEE },
    { id: "disciplinary_action", name: "Disciplinary Action", classes: ["Soldier"], slot: SLOTS.MELEE },
    { id: "escape_plan", name: "Escape Plan", classes: ["Soldier"], slot: SLOTS.MELEE },

    // --- PYRO ---
    // Primary
    { id: "flamethrower", name: "Flame Thrower", classes: ["Pyro"], slot: SLOTS.PRIMARY },
    { id: "backburner", name: "Backburner", classes: ["Pyro"], slot: SLOTS.PRIMARY },
    { id: "degreaser", name: "Degreaser", classes: ["Pyro"], slot: SLOTS.PRIMARY },
    { id: "phlogistinator", name: "Phlogistinator", classes: ["Pyro"], slot: SLOTS.PRIMARY },
    { id: "rainblower", name: "Rainblower", classes: ["Pyro"], slot: SLOTS.PRIMARY },
    { id: "dragons_fury", name: "Dragon's Fury", classes: ["Pyro"], slot: SLOTS.PRIMARY },
    // Secondary
    { id: "flare_gun", name: "Flare Gun", classes: ["Pyro"], slot: SLOTS.SECONDARY },
    { id: "detonator", name: "Detonator", classes: ["Pyro"], slot: SLOTS.SECONDARY },
    { id: "manmelter", name: "Manmelter", classes: ["Pyro"], slot: SLOTS.SECONDARY },
    { id: "scorch_shot", name: "Scorch Shot", classes: ["Pyro"], slot: SLOTS.SECONDARY },
    { id: "thermal_thruster", name: "Thermal Thruster", classes: ["Pyro"], slot: SLOTS.SECONDARY },
    { id: "gas_passer", name: "Gas Passer", classes: ["Pyro"], slot: SLOTS.SECONDARY },
    // Melee
    { id: "fire_axe", name: "Fire Axe", classes: ["Pyro"], slot: SLOTS.MELEE },
    { id: "axtinguisher", name: "Axtinguisher", classes: ["Pyro"], slot: SLOTS.MELEE },
    { id: "homewrecker", name: "Homewrecker", classes: ["Pyro"], slot: SLOTS.MELEE },
    { id: "powerjack", name: "Powerjack", classes: ["Pyro"], slot: SLOTS.MELEE },
    { id: "back_scratcher", name: "Back Scratcher", classes: ["Pyro"], slot: SLOTS.MELEE },
    { id: "sharpened_volcano_fragment", name: "Sharpened Volcano Fragment", classes: ["Pyro"], slot: SLOTS.MELEE },
    { id: "third_degree", name: "Third Degree", classes: ["Pyro"], slot: SLOTS.MELEE },
    { id: "neon_annihilator", name: "Neon Annihilator", classes: ["Pyro"], slot: SLOTS.MELEE },
    { id: "hot_hand", name: "Hot Hand", classes: ["Pyro"], slot: SLOTS.MELEE },

    // --- DEMOMAN ---
    // Primary
    { id: "grenade_launcher", name: "Grenade Launcher", classes: ["Demoman"], slot: SLOTS.PRIMARY },
    { id: "loch_n_load", name: "Loch-n-Load", classes: ["Demoman"], slot: SLOTS.PRIMARY },
    { id: "ali_babas_wee_booties", name: "Ali Baba's Wee Booties", classes: ["Demoman"], slot: SLOTS.PRIMARY },
    { id: "loose_cannon", name: "Loose Cannon", classes: ["Demoman"], slot: SLOTS.PRIMARY },
    { id: "bootlegger", name: "Bootlegger", classes: ["Demoman"], slot: SLOTS.PRIMARY },
    { id: "iron_bomber", name: "Iron Bomber", classes: ["Demoman"], slot: SLOTS.PRIMARY },
    // Secondary
    { id: "stickybum_launcher", name: "Stickybomb Launcher", classes: ["Demoman"], slot: SLOTS.SECONDARY },
    { id: "scottish_resistance", name: "Scottish Resistance", classes: ["Demoman"], slot: SLOTS.SECONDARY },
    { id: "chargin_targe", name: "Chargin' Targe", classes: ["Demoman"], slot: SLOTS.SECONDARY },
    { id: "sticky_jumper", name: "Sticky Jumper", classes: ["Demoman"], slot: SLOTS.SECONDARY },
    { id: "splendid_screen", name: "Splendid Screen", classes: ["Demoman"], slot: SLOTS.SECONDARY },
    { id: "tide_turner", name: "Tide Turner", classes: ["Demoman"], slot: SLOTS.SECONDARY },
    { id: "quickiebomb_launcher", name: "Quickiebomb Launcher", classes: ["Demoman"], slot: SLOTS.SECONDARY },
    // Melee
    { id: "bottle", name: "Bottle", classes: ["Demoman"], slot: SLOTS.MELEE },
    { id: "eyelander", name: "Eyelander", classes: ["Demoman"], slot: SLOTS.MELEE },
    { id: "scotsmans_skullcutter", name: "Scotsman's Skullcutter", classes: ["Demoman"], slot: SLOTS.MELEE },
    { id: "ullapool_caber", name: "Ullapool Caber", classes: ["Demoman"], slot: SLOTS.MELEE },
    { id: "claidheamh_mor", name: "Claidheamh Mòr", classes: ["Demoman"], slot: SLOTS.MELEE },
    { id: "persian_persuader", name: "Persian Persuader", classes: ["Demoman"], slot: SLOTS.MELEE },

    // --- HEAVY ---
    // Primary
    { id: "minigun", name: "Minigun", classes: ["Heavy"], slot: SLOTS.PRIMARY },
    { id: "natascha", name: "Natascha", classes: ["Heavy"], slot: SLOTS.PRIMARY },
    { id: "brass_beast", name: "Brass Beast", classes: ["Heavy"], slot: SLOTS.PRIMARY },
    { id: "tomislav", name: "Tomislav", classes: ["Heavy"], slot: SLOTS.PRIMARY },
    { id: "huo_long_heater", name: "Huo-Long Heater", classes: ["Heavy"], slot: SLOTS.PRIMARY },
    // Secondary
    { id: "sandvich", name: "Sandvich", classes: ["Heavy"], slot: SLOTS.SECONDARY },
    { id: "dalokohs_bar", name: "Dalokohs Bar", classes: ["Heavy"], slot: SLOTS.SECONDARY },
    { id: "buffalo_steak_sandvich", name: "Buffalo Steak Sandvich", classes: ["Heavy"], slot: SLOTS.SECONDARY },
    { id: "family_business", name: "Family Business", classes: ["Heavy"], slot: SLOTS.SECONDARY },
    { id: "second_banana", name: "Second Banana", classes: ["Heavy"], slot: SLOTS.SECONDARY },
    // Melee
    { id: "fists", name: "Fists", classes: ["Heavy"], slot: SLOTS.MELEE },
    { id: "killing_gloves_of_boxing", name: "Killing Gloves of Boxing", classes: ["Heavy"], slot: SLOTS.MELEE },
    { id: "gloves_of_running_urgently", name: "Gloves of Running Urgently", classes: ["Heavy"], slot: SLOTS.MELEE },
    { id: "warriors_spirit", name: "Warrior's Spirit", classes: ["Heavy"], slot: SLOTS.MELEE },
    { id: "fists_of_steel", name: "Fists of Steel", classes: ["Heavy"], slot: SLOTS.MELEE },
    { id: "eviction_notice", name: "Eviction Notice", classes: ["Heavy"], slot: SLOTS.MELEE },
    { id: "holiday_punch", name: "Holiday Punch", classes: ["Heavy"], slot: SLOTS.MELEE },

    // --- ENGINEER ---
    // Primary
    { id: "frontier_justice", name: "Frontier Justice", classes: ["Engineer"], slot: SLOTS.PRIMARY },
    { id: "widowmaker", name: "Widowmaker", classes: ["Engineer"], slot: SLOTS.PRIMARY },
    { id: "pomson_6000", name: "Pomson 6000", classes: ["Engineer"], slot: SLOTS.PRIMARY },
    { id: "rescue_ranger", name: "Rescue Ranger", classes: ["Engineer"], slot: SLOTS.PRIMARY },
    // Secondary
    { id: "wrangler", name: "Wrangler", classes: ["Engineer"], slot: SLOTS.SECONDARY },
    { id: "short_circuit", name: "Short Circuit", classes: ["Engineer"], slot: SLOTS.SECONDARY },
    // Melee
    { id: "wrench", name: "Wrench", classes: ["Engineer"], slot: SLOTS.MELEE },
    { id: "gunslinger", name: "Gunslinger", classes: ["Engineer"], slot: SLOTS.MELEE },
    { id: "southern_hospitality", name: "Southern Hospitality", classes: ["Engineer"], slot: SLOTS.MELEE },
    { id: "jag", name: "Jag", classes: ["Engineer"], slot: SLOTS.MELEE },
    { id: "eureka_effect", name: "Eureka Effect", classes: ["Engineer"], slot: SLOTS.MELEE },
    // PDA
    { id: "construction_pda", name: "Construction PDA", classes: ["Engineer"], slot: SLOTS.PDA },
    { id: "destruction_pda", name: "Destruction PDA", classes: ["Engineer"], slot: SLOTS.PDA },

    // --- MEDIC ---
    // Primary
    { id: "syringe_gun", name: "Syringe Gun", classes: ["Medic"], slot: SLOTS.PRIMARY },
    { id: "blutsauger", name: "Blutsauger", classes: ["Medic"], slot: SLOTS.PRIMARY },
    { id: "crusaders_crossbow", name: "Crusader's Crossbow", classes: ["Medic"], slot: SLOTS.PRIMARY },
    { id: "overdose", name: "Overdose", classes: ["Medic"], slot: SLOTS.PRIMARY },
    // Secondary
    { id: "medigun", name: "Medi Gun", classes: ["Medic"], slot: SLOTS.SECONDARY },
    { id: "kritzkrieg", name: "Kritzkrieg", classes: ["Medic"], slot: SLOTS.SECONDARY },
    { id: "quick_fix", name: "Quick-Fix", classes: ["Medic"], slot: SLOTS.SECONDARY },
    { id: "vaccinator", name: "Vaccinator", classes: ["Medic"], slot: SLOTS.SECONDARY },
    // Melee
    { id: "bonesaw", name: "Bonesaw", classes: ["Medic"], slot: SLOTS.MELEE },
    { id: "ubersaw", name: "Ubersaw", classes: ["Medic"], slot: SLOTS.MELEE },
    { id: "vita_saw", name: "Vita-Saw", classes: ["Medic"], slot: SLOTS.MELEE },
    { id: "amputator", name: "Amputator", classes: ["Medic"], slot: SLOTS.MELEE },
    { id: "solemn_vow", name: "Solemn Vow", classes: ["Medic"], slot: SLOTS.MELEE },

    // --- SNIPER ---
    // Primary
    { id: "sniper_rifle", name: "Sniper Rifle", classes: ["Sniper"], slot: SLOTS.PRIMARY },
    { id: "huntsman", name: "Huntsman", classes: ["Sniper"], slot: SLOTS.PRIMARY }, // And Fortified Compound
    { id: "sydney_sleeper", name: "Sydney Sleeper", classes: ["Sniper"], slot: SLOTS.PRIMARY },
    { id: "bazaar_bargain", name: "Bazaar Bargain", classes: ["Sniper"], slot: SLOTS.PRIMARY },
    { id: "machina", name: "Machina", classes: ["Sniper"], slot: SLOTS.PRIMARY },
    { id: "hitmans_heatmaker", name: "Hitman's Heatmaker", classes: ["Sniper"], slot: SLOTS.PRIMARY },
    { id: "classic", name: "Classic", classes: ["Sniper"], slot: SLOTS.PRIMARY },
    // Secondary
    { id: "smg", name: "SMG", classes: ["Sniper"], slot: SLOTS.SECONDARY },
    { id: "cleaners_carbine", name: "Cleaner's Carbine", classes: ["Sniper"], slot: SLOTS.SECONDARY },
    { id: "jarate", name: "Jarate", classes: ["Sniper"], slot: SLOTS.SECONDARY },
    { id: "razorback", name: "Razorback", classes: ["Sniper"], slot: SLOTS.SECONDARY },
    { id: "darwins_danger_shield", name: "Darwin's Danger Shield", classes: ["Sniper"], slot: SLOTS.SECONDARY },
    { id: "cozy_camper", name: "Cozy Camper", classes: ["Sniper"], slot: SLOTS.SECONDARY },
    // Melee
    { id: "kukri", name: "Kukri", classes: ["Sniper"], slot: SLOTS.MELEE },
    { id: "tribalmans_shiv", name: "Tribalman's Shiv", classes: ["Sniper"], slot: SLOTS.MELEE },
    { id: "bushwacka", name: "Bushwacka", classes: ["Sniper"], slot: SLOTS.MELEE },
    { id: "shahanshah", name: "Shahanshah", classes: ["Sniper"], slot: SLOTS.MELEE },

    // --- SPY ---
    // Secondary (Revolver)
    { id: "revolver", name: "Revolver", classes: ["Spy"], slot: SLOTS.SECONDARY }, // Spy primary is revolver
    { id: "ambassador", name: "Ambassador", classes: ["Spy"], slot: SLOTS.SECONDARY },
    { id: "letranger", name: "L'Etranger", classes: ["Spy"], slot: SLOTS.SECONDARY },
    { id: "enforcer", name: "Enforcer", classes: ["Spy"], slot: SLOTS.SECONDARY },
    { id: "diamondback", name: "Diamondback", classes: ["Spy"], slot: SLOTS.SECONDARY },
    // Melee (Knife)
    { id: "knife", name: "Knife", classes: ["Spy"], slot: SLOTS.MELEE },
    { id: "your_eternal_reward", name: "Your Eternal Reward", classes: ["Spy"], slot: SLOTS.MELEE },
    { id: "connivers_kunai", name: "Conniver's Kunai", classes: ["Spy"], slot: SLOTS.MELEE },
    { id: "big_earner", name: "Big Earner", classes: ["Spy"], slot: SLOTS.MELEE },
    { id: "spycicle", name: "Spy-cicle", classes: ["Spy"], slot: SLOTS.MELEE },
    // PDA (Disguise Kit)
    { id: "disguise_kit", name: "Disguise Kit", classes: ["Spy"], slot: SLOTS.PDA },
    // PDA2 (Sapper)
    { id: "sapper", name: "Sapper", classes: ["Spy"], slot: SLOTS.PDA2 },
    { id: "red_tape_recorder", name: "Red-Tape Recorder", classes: ["Spy"], slot: SLOTS.PDA2 },

    // -- RESKINS (Optional, but user said random weapons. Reskins act same but distinct items)
    // I will skip most visual reskins to keep list manageable, unless distinct enough.
];

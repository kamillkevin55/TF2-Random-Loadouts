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
    PDA: "PDA", // Engineer Construction PDA
    WATCH: "Watch", // Spy Watch
    SAPPER: "Sapper", // Spy Sapper
};

// Simplified list of weapons. 
// id: unique identifier
// name: Display name
// classes: array of classes that can use it
// slot: "Primary", "Secondary", "Melee", "PDA", "Watch", "Sapper"
// reskinOf: Optional ID of the original weapon if this is a reskin

export const WEAPONS = [
    // --- SCOUT ---
    // Primary
    { id: "baby_faces_blaster", name: "Baby Face's Blaster", classes: ["Scout"], slot: SLOTS.PRIMARY },
    { id: "back_scatter", name: "Back Scatter", classes: ["Scout"], slot: SLOTS.PRIMARY },
    { id: "force_a_nature", name: "Force-A-Nature", classes: ["Scout"], slot: SLOTS.PRIMARY },
    { id: "scattergun", name: "Scattergun", classes: ["Scout"], slot: SLOTS.PRIMARY },
    { id: "shortstop", name: "Shortstop", classes: ["Scout"], slot: SLOTS.PRIMARY },
    { id: "soda_popper", name: "Soda Popper", classes: ["Scout"], slot: SLOTS.PRIMARY },

    // Secondary
    { id: "bonk_atomic_punch", name: "Bonk! Atomic Punch", classes: ["Scout"], slot: SLOTS.SECONDARY },
    { id: "capper_scout", name: "C.A.P.P.E.R", classes: ["Scout"], slot: SLOTS.SECONDARY, reskinOf: "pistol" },
    { id: "crit_a_cola", name: "Crit-a-Cola", classes: ["Scout"], slot: SLOTS.SECONDARY },
    { id: "flying_guillotine", name: "Flying Guillotine", classes: ["Scout"], slot: SLOTS.SECONDARY },
    { id: "lugermorph_scout", name: "Lugermorph", classes: ["Scout"], slot: SLOTS.SECONDARY, reskinOf: "pistol" },
    { id: "mad_milk", name: "Mad Milk", classes: ["Scout"], slot: SLOTS.SECONDARY },
    { id: "mutated_milk", name: "Mutated Milk", classes: ["Scout"], slot: SLOTS.SECONDARY, reskinOf: "mad_milk" },
    { id: "pistol", name: "Pistol", classes: ["Scout"], slot: SLOTS.SECONDARY },
    { id: "pretty_boys_pocket_pistol", name: "Pretty Boy's Pocket Pistol", classes: ["Scout"], slot: SLOTS.SECONDARY },
    { id: "winger", name: "Winger", classes: ["Scout"], slot: SLOTS.SECONDARY },

    // Melee
    { id: "atomizer", name: "Atomizer", classes: ["Scout"], slot: SLOTS.MELEE },
    { id: "bat", name: "Bat", classes: ["Scout"], slot: SLOTS.MELEE },
    { id: "batsaber", name: "Batsaber", classes: ["Scout"], slot: SLOTS.MELEE, reskinOf: "bat" },
    { id: "boston_basher", name: "Boston Basher", classes: ["Scout"], slot: SLOTS.MELEE },
    { id: "candy_cane", name: "Candy Cane", classes: ["Scout"], slot: SLOTS.MELEE },
    { id: "fan_o_war", name: "Fan O'War", classes: ["Scout"], slot: SLOTS.MELEE },
    { id: "sandman", name: "Sandman", classes: ["Scout"], slot: SLOTS.MELEE },
    { id: "sun_on_a_stick", name: "Sun-on-a-Stick", classes: ["Scout"], slot: SLOTS.MELEE },
    { id: "three_rune_blade", name: "Three-Rune Blade", classes: ["Scout"], slot: SLOTS.MELEE, reskinOf: "boston_basher" },
    { id: "unarmed_combat", name: "Unarmed Combat", classes: ["Scout"], slot: SLOTS.MELEE, reskinOf: "holy_mackerel" }, // Actually Holy Mackerel reskin, but Mackerel is basically Bat reskin (with killfeed). Let's map to 'bat' or 'holy_mackerel' if we add it. Wait, I missed Holy Mackerel in the add list? It wasn't requested? 
    // User requested "Unarmed Combat", "Batsaber", "Three-Rune Blade". 
    // Mackerel wasn't explicitly requested as missing? Or maybe it was present?
    // Checking previous list... Mackerel wasn't in original list either.
    // I'll map Unarmed Combat to "Holy Mackerel" if I add Mackerel, or just leave it distinctive. 
    // Actually Unarmed Combat acts like the Holy Mackerel.
    { id: "holy_mackerel", name: "Holy Mackerel", classes: ["Scout"], slot: SLOTS.MELEE }, // Adding implicitly because Unarmed Combat is a reskin of it.

    { id: "wrap_assassin", name: "Wrap Assassin", classes: ["Scout"], slot: SLOTS.MELEE },

    // --- SOLDIER ---
    // Primary
    { id: "air_strike", name: "Air Strike", classes: ["Soldier"], slot: SLOTS.PRIMARY },
    { id: "beggars_bazooka", name: "Beggar's Bazooka", classes: ["Soldier"], slot: SLOTS.PRIMARY },
    { id: "black_box", name: "Black Box", classes: ["Soldier"], slot: SLOTS.PRIMARY },
    { id: "cow_mangler_5000", name: "Cow Mangler 5000", classes: ["Soldier"], slot: SLOTS.PRIMARY },
    { id: "direct_hit", name: "Direct Hit", classes: ["Soldier"], slot: SLOTS.PRIMARY },
    { id: "liberty_launcher", name: "Liberty Launcher", classes: ["Soldier"], slot: SLOTS.PRIMARY },
    { id: "original", name: "Original", classes: ["Soldier"], slot: SLOTS.PRIMARY }, // User excluded from reskin list, treating as unique
    // User request: "With reskins either make a check to enable reskins and list their actual weapons in parenthesis ()"
    // Original IS functionally different (center fire). So I will NOT mark it as a reskin of Rocket Launcher.

    { id: "rocket_jumper", name: "Rocket Jumper", classes: ["Soldier"], slot: SLOTS.PRIMARY },
    { id: "rocket_launcher", name: "Rocket Launcher", classes: ["Soldier"], slot: SLOTS.PRIMARY },

    // Secondary
    { id: "base_jumper_soldier", name: "B.A.S.E. Jumper", classes: ["Soldier"], slot: SLOTS.SECONDARY },
    { id: "battalions_backup", name: "Battalion's Backup", classes: ["Soldier"], slot: SLOTS.SECONDARY },
    { id: "buff_banner", name: "Buff Banner", classes: ["Soldier"], slot: SLOTS.SECONDARY },
    { id: "concheror", name: "Concheror", classes: ["Soldier"], slot: SLOTS.SECONDARY },
    { id: "gunboats", name: "Gunboats", classes: ["Soldier"], slot: SLOTS.SECONDARY },
    { id: "mantreads", name: "Mantreads", classes: ["Soldier"], slot: SLOTS.SECONDARY },
    { id: "panic_attack_soldier", name: "Panic Attack", classes: ["Soldier"], slot: SLOTS.SECONDARY },
    { id: "reserve_shooter_soldier", name: "Reserve Shooter", classes: ["Soldier"], slot: SLOTS.SECONDARY },
    { id: "righteous_bison", name: "Righteous Bison", classes: ["Soldier"], slot: SLOTS.SECONDARY },
    { id: "shotgun_soldier", name: "Shotgun", classes: ["Soldier"], slot: SLOTS.SECONDARY },

    // Melee
    { id: "disciplinary_action", name: "Disciplinary Action", classes: ["Soldier"], slot: SLOTS.MELEE },
    { id: "equalizer", name: "Equalizer", classes: ["Soldier"], slot: SLOTS.MELEE },
    { id: "escape_plan", name: "Escape Plan", classes: ["Soldier"], slot: SLOTS.MELEE },
    { id: "half_zatoichi_soldier", name: "Half-Zatoichi", classes: ["Soldier"], slot: SLOTS.MELEE },
    { id: "market_gardener", name: "Market Gardener", classes: ["Soldier"], slot: SLOTS.MELEE },
    { id: "pain_train_soldier", name: "Pain Train", classes: ["Soldier"], slot: SLOTS.MELEE },
    { id: "shovel", name: "Shovel", classes: ["Soldier"], slot: SLOTS.MELEE },

    // --- PYRO ---
    // Primary
    { id: "backburner", name: "Backburner", classes: ["Pyro"], slot: SLOTS.PRIMARY },
    { id: "degreaser", name: "Degreaser", classes: ["Pyro"], slot: SLOTS.PRIMARY },
    { id: "dragons_fury", name: "Dragon's Fury", classes: ["Pyro"], slot: SLOTS.PRIMARY },
    { id: "flamethrower", name: "Flame Thrower", classes: ["Pyro"], slot: SLOTS.PRIMARY },
    { id: "nostromo_napalmer", name: "Nostromo Napalmer", classes: ["Pyro"], slot: SLOTS.PRIMARY, reskinOf: "flamethrower" },
    { id: "phlogistinator", name: "Phlogistinator", classes: ["Pyro"], slot: SLOTS.PRIMARY },
    { id: "rainblower", name: "Rainblower", classes: ["Pyro"], slot: SLOTS.PRIMARY, reskinOf: "flamethrower" }, // Has taunt kill, but mostly reskin.

    // Secondary
    { id: "detonator", name: "Detonator", classes: ["Pyro"], slot: SLOTS.SECONDARY },
    { id: "flare_gun", name: "Flare Gun", classes: ["Pyro"], slot: SLOTS.SECONDARY },
    { id: "gas_passer", name: "Gas Passer", classes: ["Pyro"], slot: SLOTS.SECONDARY },
    { id: "manmelter", name: "Manmelter", classes: ["Pyro"], slot: SLOTS.SECONDARY },
    { id: "panic_attack_pyro", name: "Panic Attack", classes: ["Pyro"], slot: SLOTS.SECONDARY },
    { id: "reserve_shooter_pyro", name: "Reserve Shooter", classes: ["Pyro"], slot: SLOTS.SECONDARY },
    { id: "scorch_shot", name: "Scorch Shot", classes: ["Pyro"], slot: SLOTS.SECONDARY },
    { id: "shotgun_pyro", name: "Shotgun", classes: ["Pyro"], slot: SLOTS.SECONDARY },
    { id: "thermal_thruster", name: "Thermal Thruster", classes: ["Pyro"], slot: SLOTS.SECONDARY },

    // Melee
    { id: "axtinguisher", name: "Axtinguisher", classes: ["Pyro"], slot: SLOTS.MELEE },
    { id: "back_scratcher", name: "Back Scratcher", classes: ["Pyro"], slot: SLOTS.MELEE },
    { id: "fire_axe", name: "Fire Axe", classes: ["Pyro"], slot: SLOTS.MELEE },
    { id: "homewrecker", name: "Homewrecker", classes: ["Pyro"], slot: SLOTS.MELEE },
    { id: "hot_hand", name: "Hot Hand", classes: ["Pyro"], slot: SLOTS.MELEE },
    { id: "lollichop", name: "Lollichop", classes: ["Pyro"], slot: SLOTS.MELEE, reskinOf: "fire_axe" }, // It sees pyrovision, but otherwise Fire Axe.
    { id: "maul", name: "Maul", classes: ["Pyro"], slot: SLOTS.MELEE, reskinOf: "homewrecker" },
    { id: "neon_annihilator", name: "Neon Annihilator", classes: ["Pyro"], slot: SLOTS.MELEE },
    { id: "postal_pummeler", name: "Postal Pummeler", classes: ["Pyro"], slot: SLOTS.MELEE, reskinOf: "axtinguisher" },
    { id: "powerjack", name: "Powerjack", classes: ["Pyro"], slot: SLOTS.MELEE },
    { id: "sharpened_volcano_fragment", name: "Sharpened Volcano Fragment", classes: ["Pyro"], slot: SLOTS.MELEE },
    { id: "third_degree", name: "Third Degree", classes: ["Pyro"], slot: SLOTS.MELEE },

    // --- DEMOMAN ---
    // Primary
    { id: "ali_babas_wee_booties", name: "Ali Baba's Wee Booties", classes: ["Demoman"], slot: SLOTS.PRIMARY },
    { id: "base_jumper_demo", name: "B.A.S.E. Jumper", classes: ["Demoman"], slot: SLOTS.PRIMARY },
    { id: "bootlegger", name: "Bootlegger", classes: ["Demoman"], slot: SLOTS.PRIMARY, reskinOf: "ali_babas_wee_booties" },
    { id: "grenade_launcher", name: "Grenade Launcher", classes: ["Demoman"], slot: SLOTS.PRIMARY },
    { id: "iron_bomber", name: "Iron Bomber", classes: ["Demoman"], slot: SLOTS.PRIMARY },
    { id: "loch_n_load", name: "Loch-n-Load", classes: ["Demoman"], slot: SLOTS.PRIMARY },
    { id: "loose_cannon", name: "Loose Cannon", classes: ["Demoman"], slot: SLOTS.PRIMARY },

    // Secondary
    { id: "chargin_targe", name: "Chargin' Targe", classes: ["Demoman"], slot: SLOTS.SECONDARY },
    { id: "quickiebomb_launcher", name: "Quickiebomb Launcher", classes: ["Demoman"], slot: SLOTS.SECONDARY },
    { id: "scottish_resistance", name: "Scottish Resistance", classes: ["Demoman"], slot: SLOTS.SECONDARY },
    { id: "splendid_screen", name: "Splendid Screen", classes: ["Demoman"], slot: SLOTS.SECONDARY },
    { id: "sticky_jumper", name: "Sticky Jumper", classes: ["Demoman"], slot: SLOTS.SECONDARY },
    { id: "stickybum_launcher", name: "Stickybomb Launcher", classes: ["Demoman"], slot: SLOTS.SECONDARY },
    { id: "tide_turner", name: "Tide Turner", classes: ["Demoman"], slot: SLOTS.SECONDARY },

    // Melee
    { id: "bottle", name: "Bottle", classes: ["Demoman"], slot: SLOTS.MELEE },
    { id: "claidheamh_mor", name: "Claidheamh Mòr", classes: ["Demoman"], slot: SLOTS.MELEE },
    { id: "eyelander", name: "Eyelander", classes: ["Demoman"], slot: SLOTS.MELEE },
    { id: "half_zatoichi_demo", name: "Half-Zatoichi", classes: ["Demoman"], slot: SLOTS.MELEE },
    { id: "horseless_headless_horsemanns_headtaker", name: "Horseless Headless Horsemann's Headtaker", classes: ["Demoman"], slot: SLOTS.MELEE, reskinOf: "eyelander" },
    { id: "nessies_nine_iron", name: "Nessie's Nine Iron", classes: ["Demoman"], slot: SLOTS.MELEE, reskinOf: "eyelander" },
    { id: "pain_train_demo", name: "Pain Train", classes: ["Demoman"], slot: SLOTS.MELEE },
    { id: "persian_persuader", name: "Persian Persuader", classes: ["Demoman"], slot: SLOTS.MELEE },
    { id: "scotsmans_skullcutter", name: "Scotsman's Skullcutter", classes: ["Demoman"], slot: SLOTS.MELEE },
    { id: "scottish_handshake", name: "Scottish Handshake", classes: ["Demoman"], slot: SLOTS.MELEE, reskinOf: "bottle" },
    { id: "ullapool_caber", name: "Ullapool Caber", classes: ["Demoman"], slot: SLOTS.MELEE },

    // --- HEAVY ---
    // Primary
    { id: "brass_beast", name: "Brass Beast", classes: ["Heavy"], slot: SLOTS.PRIMARY },
    { id: "huo_long_heater", name: "Huo-Long Heater", classes: ["Heavy"], slot: SLOTS.PRIMARY },
    { id: "iron_curtain", name: "Iron Curtain", classes: ["Heavy"], slot: SLOTS.PRIMARY, reskinOf: "minigun" },
    { id: "minigun", name: "Minigun", classes: ["Heavy"], slot: SLOTS.PRIMARY },
    { id: "natascha", name: "Natascha", classes: ["Heavy"], slot: SLOTS.PRIMARY },
    { id: "tomislav", name: "Tomislav", classes: ["Heavy"], slot: SLOTS.PRIMARY },

    // Secondary
    { id: "buffalo_steak_sandvich", name: "Buffalo Steak Sandvich", classes: ["Heavy"], slot: SLOTS.SECONDARY },
    { id: "dalokohs_bar", name: "Dalokohs Bar", classes: ["Heavy"], slot: SLOTS.SECONDARY },
    { id: "family_business", name: "Family Business", classes: ["Heavy"], slot: SLOTS.SECONDARY },
    { id: "fishcake", name: "Fishcake", classes: ["Heavy"], slot: SLOTS.SECONDARY, reskinOf: "dalokohs_bar" },
    { id: "panic_attack_heavy", name: "Panic Attack", classes: ["Heavy"], slot: SLOTS.SECONDARY },
    { id: "robo_sandvich", name: "Robo-Sandvich", classes: ["Heavy"], slot: SLOTS.SECONDARY, reskinOf: "sandvich" },
    { id: "sandvich", name: "Sandvich", classes: ["Heavy"], slot: SLOTS.SECONDARY },
    { id: "second_banana", name: "Second Banana", classes: ["Heavy"], slot: SLOTS.SECONDARY },
    { id: "shotgun_heavy", name: "Shotgun", classes: ["Heavy"], slot: SLOTS.SECONDARY },

    // Melee
    { id: "apoco_fists", name: "Apoco-Fists", classes: ["Heavy"], slot: SLOTS.MELEE, reskinOf: "fists" }, // Kill gibs enemies, but technically reskin.
    { id: "bread_bite", name: "Bread Bite", classes: ["Heavy"], slot: SLOTS.MELEE, reskinOf: "gloves_of_running_urgently" },
    { id: "eviction_notice", name: "Eviction Notice", classes: ["Heavy"], slot: SLOTS.MELEE },
    { id: "fists", name: "Fists", classes: ["Heavy"], slot: SLOTS.MELEE },
    { id: "fists_of_steel", name: "Fists of Steel", classes: ["Heavy"], slot: SLOTS.MELEE },
    { id: "gloves_of_running_urgently", name: "Gloves of Running Urgently", classes: ["Heavy"], slot: SLOTS.MELEE },
    { id: "holiday_punch", name: "Holiday Punch", classes: ["Heavy"], slot: SLOTS.MELEE },
    { id: "killing_gloves_of_boxing", name: "Killing Gloves of Boxing", classes: ["Heavy"], slot: SLOTS.MELEE },
    { id: "warriors_spirit", name: "Warrior's Spirit", classes: ["Heavy"], slot: SLOTS.MELEE },

    // --- ENGINEER ---
    // Primary
    { id: "frontier_justice", name: "Frontier Justice", classes: ["Engineer"], slot: SLOTS.PRIMARY },
    { id: "panic_attack_engie", name: "Panic Attack", classes: ["Engineer"], slot: SLOTS.PRIMARY },
    { id: "pomson_6000", name: "Pomson 6000", classes: ["Engineer"], slot: SLOTS.PRIMARY },
    { id: "rescue_ranger", name: "Rescue Ranger", classes: ["Engineer"], slot: SLOTS.PRIMARY },
    { id: "shotgun_engie", name: "Shotgun", classes: ["Engineer"], slot: SLOTS.PRIMARY },
    { id: "widowmaker", name: "Widowmaker", classes: ["Engineer"], slot: SLOTS.PRIMARY },

    // Secondary
    { id: "capper_engie", name: "C.A.P.P.E.R", classes: ["Engineer"], slot: SLOTS.SECONDARY, reskinOf: "pistol" },
    { id: "giger_counter", name: "Giger Counter", classes: ["Engineer"], slot: SLOTS.SECONDARY, reskinOf: "wrangler" },
    { id: "lugermorph_engie", name: "Lugermorph", classes: ["Engineer"], slot: SLOTS.SECONDARY, reskinOf: "pistol" },
    { id: "pistol_engie", name: "Pistol", classes: ["Engineer"], slot: SLOTS.SECONDARY },
    { id: "short_circuit", name: "Short Circuit", classes: ["Engineer"], slot: SLOTS.SECONDARY },
    { id: "wrangler", name: "Wrangler", classes: ["Engineer"], slot: SLOTS.SECONDARY },

    // Melee
    { id: "eureka_effect", name: "Eureka Effect", classes: ["Engineer"], slot: SLOTS.MELEE },
    { id: "golden_wrench", name: "Golden Wrench", classes: ["Engineer"], slot: SLOTS.MELEE, reskinOf: "wrench" },
    { id: "gunslinger", name: "Gunslinger", classes: ["Engineer"], slot: SLOTS.MELEE },
    { id: "jag", name: "Jag", classes: ["Engineer"], slot: SLOTS.MELEE },
    { id: "southern_hospitality", name: "Southern Hospitality", classes: ["Engineer"], slot: SLOTS.MELEE },
    { id: "wrench", name: "Wrench", classes: ["Engineer"], slot: SLOTS.MELEE },

    // PDA
    { id: "construction_pda", name: "Construction PDA", classes: ["Engineer"], slot: SLOTS.PDA },

    // --- MEDIC ---
    // Primary
    { id: "blutsauger", name: "Blutsauger", classes: ["Medic"], slot: SLOTS.PRIMARY },
    { id: "crusaders_crossbow", name: "Crusader's Crossbow", classes: ["Medic"], slot: SLOTS.PRIMARY },
    { id: "overdose", name: "Overdose", classes: ["Medic"], slot: SLOTS.PRIMARY },
    { id: "syringe_gun", name: "Syringe Gun", classes: ["Medic"], slot: SLOTS.PRIMARY },

    // Secondary
    { id: "kritzkrieg", name: "Kritzkrieg", classes: ["Medic"], slot: SLOTS.SECONDARY },
    { id: "medigun", name: "Medi Gun", classes: ["Medic"], slot: SLOTS.SECONDARY },
    { id: "quick_fix", name: "Quick-Fix", classes: ["Medic"], slot: SLOTS.SECONDARY },
    { id: "vaccinator", name: "Vaccinator", classes: ["Medic"], slot: SLOTS.SECONDARY },

    // Melee
    { id: "amputator", name: "Amputator", classes: ["Medic"], slot: SLOTS.MELEE },
    { id: "bonesaw", name: "Bonesaw", classes: ["Medic"], slot: SLOTS.MELEE },
    { id: "solemn_vow", name: "Solemn Vow", classes: ["Medic"], slot: SLOTS.MELEE },
    { id: "ubersaw", name: "Ubersaw", classes: ["Medic"], slot: SLOTS.MELEE },
    { id: "vita_saw", name: "Vita-Saw", classes: ["Medic"], slot: SLOTS.MELEE },

    // --- SNIPER ---
    // Primary
    { id: "awper_hand", name: "AWPer Hand", classes: ["Sniper"], slot: SLOTS.PRIMARY, reskinOf: "sniper_rifle" },
    { id: "bazaar_bargain", name: "Bazaar Bargain", classes: ["Sniper"], slot: SLOTS.PRIMARY },
    { id: "classic", name: "Classic", classes: ["Sniper"], slot: SLOTS.PRIMARY },
    { id: "fortified_compound", name: "Fortified Compound", classes: ["Sniper"], slot: SLOTS.PRIMARY, reskinOf: "huntsman" },
    { id: "hitmans_heatmaker", name: "Hitman's Heatmaker", classes: ["Sniper"], slot: SLOTS.PRIMARY },
    { id: "huntsman", name: "Huntsman", classes: ["Sniper"], slot: SLOTS.PRIMARY },
    { id: "machina", name: "Machina", classes: ["Sniper"], slot: SLOTS.PRIMARY },
    { id: "shooting_star", name: "Shooting Star", classes: ["Sniper"], slot: SLOTS.PRIMARY, reskinOf: "machina" },
    { id: "sniper_rifle", name: "Sniper Rifle", classes: ["Sniper"], slot: SLOTS.PRIMARY },
    { id: "sydney_sleeper", name: "Sydney Sleeper", classes: ["Sniper"], slot: SLOTS.PRIMARY },

    // Secondary
    { id: "cleaners_carbine", name: "Cleaner's Carbine", classes: ["Sniper"], slot: SLOTS.SECONDARY },
    { id: "cozy_camper", name: "Cozy Camper", classes: ["Sniper"], slot: SLOTS.SECONDARY },
    { id: "darwins_danger_shield", name: "Darwin's Danger Shield", classes: ["Sniper"], slot: SLOTS.SECONDARY },
    { id: "jarate", name: "Jarate", classes: ["Sniper"], slot: SLOTS.SECONDARY },
    { id: "razorback", name: "Razorback", classes: ["Sniper"], slot: SLOTS.SECONDARY },
    { id: "self_aware_beauty_mark", name: "Self-Aware Beauty Mark", classes: ["Sniper"], slot: SLOTS.SECONDARY, reskinOf: "jarate" },
    { id: "smg", name: "SMG", classes: ["Sniper"], slot: SLOTS.SECONDARY },

    // Melee
    { id: "bushwacka", name: "Bushwacka", classes: ["Sniper"], slot: SLOTS.MELEE },
    { id: "kukri", name: "Kukri", classes: ["Sniper"], slot: SLOTS.MELEE },
    { id: "shahanshah", name: "Shahanshah", classes: ["Sniper"], slot: SLOTS.MELEE },
    { id: "tribalmans_shiv", name: "Tribalman's Shiv", classes: ["Sniper"], slot: SLOTS.MELEE },

    // --- SPY ---
    // Secondary (Revolvers)
    { id: "ambassador", name: "Ambassador", classes: ["Spy"], slot: SLOTS.SECONDARY },
    { id: "big_kill", name: "Big Kill", classes: ["Spy"], slot: SLOTS.SECONDARY, reskinOf: "revolver" },
    { id: "diamondback", name: "Diamondback", classes: ["Spy"], slot: SLOTS.SECONDARY },
    { id: "enforcer", name: "Enforcer", classes: ["Spy"], slot: SLOTS.SECONDARY },
    { id: "letranger", name: "L'Etranger", classes: ["Spy"], slot: SLOTS.SECONDARY },
    { id: "revolver", name: "Revolver", classes: ["Spy"], slot: SLOTS.SECONDARY },

    // Melee (Knives)
    { id: "big_earner", name: "Big Earner", classes: ["Spy"], slot: SLOTS.MELEE },
    { id: "black_rose", name: "Black Rose", classes: ["Spy"], slot: SLOTS.MELEE, reskinOf: "knife" },
    { id: "connivers_kunai", name: "Conniver's Kunai", classes: ["Spy"], slot: SLOTS.MELEE },
    { id: "knife", name: "Knife", classes: ["Spy"], slot: SLOTS.MELEE },
    { id: "sharp_dresser", name: "Sharp Dresser", classes: ["Spy"], slot: SLOTS.MELEE, reskinOf: "knife" },
    { id: "spycicle", name: "Spy-cicle", classes: ["Spy"], slot: SLOTS.MELEE },
    { id: "wanga_prick", name: "Wanga Prick", classes: ["Spy"], slot: SLOTS.MELEE, reskinOf: "your_eternal_reward" },
    { id: "your_eternal_reward", name: "Your Eternal Reward", classes: ["Spy"], slot: SLOTS.MELEE },

    // Watch (Watches)
    { id: "cloak_and_dagger", name: "Cloak and Dagger", classes: ["Spy"], slot: SLOTS.WATCH },
    { id: "dead_ringer", name: "Dead Ringer", classes: ["Spy"], slot: SLOTS.WATCH },
    { id: "enthusiasts_timepiece", name: "Enthusiast's Timepiece", classes: ["Spy"], slot: SLOTS.WATCH, reskinOf: "invis_watch" },
    { id: "invis_watch", name: "Invis Watch", classes: ["Spy"], slot: SLOTS.WATCH },
    { id: "quackenbirdt", name: "Quäckenbirdt", classes: ["Spy"], slot: SLOTS.WATCH, reskinOf: "invis_watch" },

    // Sapper (Sappers)
    { id: "ap_sap", name: "Ap-Sap", classes: ["Spy"], slot: SLOTS.SAPPER, reskinOf: "sapper" },
    { id: "red_tape_recorder", name: "Red-Tape Recorder", classes: ["Spy"], slot: SLOTS.SAPPER },
    { id: "sapper", name: "Sapper", classes: ["Spy"], slot: SLOTS.SAPPER },
    { id: "snack_attack", name: "Snack Attack", classes: ["Spy"], slot: SLOTS.SAPPER, reskinOf: "sapper" },

    // --- MULTI-CLASS MELEE ---
    // Saxxy (All classes) - Reskin of stock Melee usually
    ...["Scout", "Soldier", "Pyro", "Demoman", "Heavy", "Engineer", "Medic", "Sniper", "Spy"].map(c => ({ id: "saxxy", name: "Saxxy", classes: [c], slot: SLOTS.MELEE, reskinOf: "stock_melee" })),
    // "stock_melee" is vague, maybe should map to specific ID per class? 
    // Complicated. Let's just mark reskinOf: "Stock Melee" or similar string, and handle logic to show "Stock Melee" if we want, or map per class.
    // Simpler: Just rely on it being a reskinOf something to filter it out when reskins disabled. 
    // If I use a generic ID like "stock_melee", I need to ensure it's handled in display effectively if I want parenthesis.
    // Actually, Saxxy acts as Frying Pan? No. Saxxy is Stock reskin. 
    // I'll leave reskinOf: "Stock Melee" for now and if it shows "(Stock Melee)" that's acceptable.

    // Golden Frying Pan (All classes) - Reskin of Pan? Or Stock? It's Pan.
    ...["Scout", "Soldier", "Pyro", "Demoman", "Heavy", "Engineer", "Medic", "Sniper", "Spy"].map(c => ({ id: "golden_frying_pan", name: "Golden Frying Pan", classes: [c], slot: SLOTS.MELEE, reskinOf: "stock_melee" })),

    // Prinny Machete (All classes) - Distinct stats? No, stock reskin.
    ...["Scout", "Soldier", "Pyro", "Demoman", "Heavy", "Engineer", "Medic", "Sniper", "Spy"].map(c => ({ id: "prinny_machete", name: "Prinny Machete", classes: [c], slot: SLOTS.MELEE, reskinOf: "stock_melee" })),

    // Frying Pan (All classes except Spy) - Distinct (loud noise). 
    ...["Scout", "Soldier", "Pyro", "Demoman", "Heavy", "Medic", "Sniper"].map(c => ({ id: "frying_pan", name: "Frying Pan", classes: [c], slot: SLOTS.MELEE, reskinOf: "stock_melee" })), // Reskin of stock

    // Conscientious Objector (not for: Engineer, Spy) - Stock reskin.
    ...["Scout", "Soldier", "Pyro", "Demoman", "Heavy", "Medic", "Sniper"].map(c => ({ id: "conscientious_objector", name: "Conscientious Objector", classes: [c], slot: SLOTS.MELEE, reskinOf: "stock_melee" })),

    // Freedom Staff (not for: Engineer, Spy) - Stock reskin.
    ...["Scout", "Soldier", "Pyro", "Demoman", "Heavy", "Medic", "Sniper"].map(c => ({ id: "freedom_staff", name: "Freedom Staff", classes: [c], slot: SLOTS.MELEE, reskinOf: "stock_melee" })),

    // Bat Outta Hell (not for: Engineer, Spy) - Stock reskin.
    ...["Scout", "Soldier", "Pyro", "Demoman", "Heavy", "Medic", "Sniper"].map(c => ({ id: "bat_outta_hell", name: "Bat Outta Hell", classes: [c], slot: SLOTS.MELEE, reskinOf: "stock_melee" })),

    // Memory Maker (not for: Engineer, Spy) - Stock reskin.
    ...["Scout", "Soldier", "Pyro", "Demoman", "Heavy", "Medic", "Sniper"].map(c => ({ id: "memory_maker", name: "Memory Maker", classes: [c], slot: SLOTS.MELEE, reskinOf: "stock_melee" })),

    // Ham Shank (not for: Engineer, Spy) - Pan reskin? Or Stock? It's Pan reskin (Sound, etc).
    ...["Scout", "Soldier", "Pyro", "Demoman", "Heavy", "Medic", "Sniper"].map(c => ({ id: "ham_shank", name: "Ham Shank", classes: [c], slot: SLOTS.MELEE, reskinOf: "stock_melee" })),

    // Necro Smasher (not for: Spy) - Stock reskin.
    ...["Scout", "Soldier", "Pyro", "Demoman", "Heavy", "Engineer", "Medic", "Sniper"].map(c => ({ id: "necro_smasher", name: "Necro Smasher", classes: [c], slot: SLOTS.MELEE, reskinOf: "stock_melee" })),

    // Crossing Guard (not for: Engineer, Spy) - Stock reskin.
    ...["Scout", "Soldier", "Pyro", "Demoman", "Heavy", "Medic", "Sniper"].map(c => ({ id: "crossing_guard", name: "Crossing Guard", classes: [c], slot: SLOTS.MELEE, reskinOf: "stock_melee" })),

];

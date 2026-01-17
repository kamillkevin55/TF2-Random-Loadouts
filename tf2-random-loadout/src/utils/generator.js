import { WEAPONS, CLASSES, SLOTS } from "../data/tf2_data";

/**
 * Returns a random class name.
 * @returns {string}
 */
export function getRandomClass() {
    const randomIndex = Math.floor(Math.random() * CLASSES.length);
    return CLASSES[randomIndex];
}

/**
 * Generates a random loadout for a specific class, respecting exclusions.
 * @param {string} className 
 * @param {string[]} excludedIds - Array of weapon IDs to exclude
 * @returns {object} - { [slot]: weaponObject }
 */
export function generateLoadout(className, excludedIds = []) {
    const excludedSet = new Set(excludedIds);
    const classWeapons = WEAPONS.filter(w => w.classes.includes(className));

    // Group by slot
    const slots = {};

    // Determine slots for the class
    // Most have Primary, Secondary, Melee.
    // Engineer has PDA. Spy has PDA, PDA2.
    // We can just iterate over the weapons available for the class and find unique slots.
    // But strictly, we want to ensure every slot gets filled if possible.

    let requiredSlots = [SLOTS.PRIMARY, SLOTS.SECONDARY, SLOTS.MELEE];

    if (className === "Engineer") requiredSlots = [SLOTS.PRIMARY, SLOTS.SECONDARY, SLOTS.MELEE, SLOTS.PDA];
    if (className === "Spy") {
        // Spy: Secondary (Gun) -> Melee (Knife) -> Watch (Watch) -> Building (Sapper)
        requiredSlots = [SLOTS.SECONDARY, SLOTS.MELEE, SLOTS.WATCH, SLOTS.BUILDING];
    }

    const loadout = {};

    requiredSlots.forEach(slot => {
        // Filter weapons for this slot and class
        // Also filter out exclusions
        const available = classWeapons.filter(w =>
            w.slot === slot && !excludedSet.has(w.id)
        );

        if (available.length > 0) {
            const randomWeapon = available[Math.floor(Math.random() * available.length)];
            loadout[slot] = randomWeapon;
        } else {
            loadout[slot] = null; // No weapon available (e.g. all excluded)
        }
    });

    return loadout;
}

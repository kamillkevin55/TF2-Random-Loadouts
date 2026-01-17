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
 * @param {boolean} includeReskins - Whether to include reskin weapons
 * @returns {object} - { [slot]: weaponObject }
 */
export function generateLoadout(className, excludedIds = [], includeReskins = false) {
    const excludedSet = new Set(excludedIds);
    const classWeapons = WEAPONS.filter(w => w.classes.includes(className));

    // Group by slot
    const slots = {};

    let requiredSlots = [SLOTS.PRIMARY, SLOTS.SECONDARY, SLOTS.MELEE];

    if (className === "Engineer") requiredSlots = [SLOTS.PRIMARY, SLOTS.SECONDARY, SLOTS.MELEE, SLOTS.PDA];
    if (className === "Spy") {
        // Spy: Secondary (Gun) -> Melee (Knife) -> Watch (Watch) -> Sapper (Sapper)
        requiredSlots = [SLOTS.SECONDARY, SLOTS.MELEE, SLOTS.WATCH, SLOTS.SAPPER];
    }

    const loadout = {};

    requiredSlots.forEach(slot => {
        // Filter weapons for this slot and class
        // Also filter out exclusions
        const available = classWeapons.filter(w => {
            if (w.slot !== slot) return false;
            if (excludedSet.has(w.id)) return false;
            if (!includeReskins && w.reskinOf) return false;
            return true;
        });

        if (available.length > 0) {
            const randomWeapon = available[Math.floor(Math.random() * available.length)];
            loadout[slot] = randomWeapon;
        } else {
            loadout[slot] = null; // No weapon available (e.g. all excluded)
        }
    });

    return loadout;
}

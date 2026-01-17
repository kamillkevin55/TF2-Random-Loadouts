import React, { useState } from 'react';
import { WEAPONS, SLOTS, CLASSES } from '../data/tf2_data';
import { ChevronDown, ChevronRight, Search, CheckSquare, Square } from 'lucide-react';

export default function Sidebar({ excludedWeapons, toggleExclusion, resetExclusions }) {
    const [searchTerm, setSearchTerm] = useState('');
    const [expandedClasses, setExpandedClasses] = useState(
        CLASSES.reduce((acc, cls) => ({ ...acc, [cls]: false }), {})
    );

    const toggleClass = (cls) => {
        setExpandedClasses(prev => ({ ...prev, [cls]: !prev[cls] }));
    };

    // Group weapons by Class -> Slot
    const getGroupedWeapons = () => {
        const grouped = {};
        CLASSES.forEach(cls => {
            grouped[cls] = {};
        });

        WEAPONS.forEach(w => {
            // Filter by search
            if (searchTerm && !w.name.toLowerCase().includes(searchTerm.toLowerCase())) return;

            w.classes.forEach(cls => {
                if (!grouped[cls][w.slot]) grouped[cls][w.slot] = [];
                grouped[cls][w.slot].push(w);
            });
        });
        return grouped;
    };

    const groupedWeapons = getGroupedWeapons();

    return (
        <div className="w-80 bg-[#1e1e1e] border-r border-[#333] h-full flex flex-col text-gray-200">
            <div className="p-4 border-b border-[#333]">
                <h2 className="text-xl font-bold bg-gradient-to-r from-[#cf6a32] to-[#b85d2b] bg-clip-text text-transparent mb-4">
                    Weapon Pool
                </h2>

                <div className="relative">
                    <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-500" />
                    <input
                        type="text"
                        placeholder="Search weapons..."
                        className="w-full bg-[#141414] border border-[#333] rounded-md py-2 pl-9 pr-4 text-sm focus:outline-none focus:border-[#cf6a32] transition-colors"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>

                {excludedWeapons.length > 0 && (
                    <button
                        onClick={resetExclusions}
                        className="mt-4 text-xs text-[#cf6a32] hover:text-[#b85d2b] transition-colors"
                    >
                        Reset Exclusions ({excludedWeapons.length})
                    </button>
                )}
            </div>

            <div className="flex-1 overflow-y-auto p-2">
                {CLASSES.map(cls => {
                    const classHasWeapons = Object.keys(groupedWeapons[cls]).length > 0;
                    if (!classHasWeapons && searchTerm) return null;

                    return (
                        <div key={cls} className="mb-2">
                            <button
                                onClick={() => toggleClass(cls)}
                                className="w-full flex items-center justify-between p-2 hover:bg-[#2a2a2a] rounded-md transition-colors"
                            >
                                <div className="flex items-center gap-2">
                                    <span className="font-bold text-sm tracking-wide uppercase">{cls}</span>
                                </div>
                                {expandedClasses[cls] || searchTerm ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
                            </button>

                            {(expandedClasses[cls] || searchTerm) && (
                                <div className="ml-4 mt-1 space-y-4 border-l-2 border-[#333] pl-2">
                                    {Object.entries(groupedWeapons[cls]).map(([slot, weapons]) => (
                                        <div key={slot} className="mb-2">
                                            <h4 className="text-xs font-semibold text-gray-500 uppercase mb-2 mt-2">{slot}</h4>
                                            <div className="space-y-1">
                                                {weapons.map(w => {
                                                    const isExcluded = excludedWeapons.includes(w.id);
                                                    return (
                                                        <button
                                                            key={`${cls}-${w.id}`}
                                                            onClick={() => toggleExclusion(w.id)}
                                                            className={`
                                w-full flex items-center gap-3 p-2 rounded-md text-sm text-left transition-all
                                ${isExcluded ? 'bg-red-900/10 text-gray-500' : 'hover:bg-[#2a2a2a] text-gray-300'}
                              `}
                                                        >
                                                            {isExcluded ? (
                                                                <Square size={16} className="text-gray-600 shrink-0" />
                                                            ) : (
                                                                <CheckSquare size={16} className="text-[#cf6a32] shrink-0" />
                                                            )}
                                                            <span className={isExcluded ? 'line-through' : ''}>{w.name}</span>
                                                        </button>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

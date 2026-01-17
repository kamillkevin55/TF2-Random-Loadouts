import React from 'react';
import { CLASSES, SLOTS } from '../data/tf2_data';
import { RefreshCw, HelpCircle } from 'lucide-react';

export default function LoadoutDisplay({ currentClass, loadout, onGenerate, onClassSelect, onRandomClass }) {
    return (
        <div className="flex-1 flex flex-col h-full bg-[#121212] overflow-y-auto relative">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#2a2a2a] via-[#121212] to-[#000000] opacity-50 pointer-events-none" />

            {/* Header / Class Selector */}
            <div className="z-10 p-6 flex flex-col items-center gap-6">
                <h1 className="text-4xl font-extrabold text-white tracking-tighter uppercase drop-shadow-2xl">
                    TF2 <span className="text-[#cf6a32]">Randomizer</span>
                </h1>

                <div className="flex flex-wrap justify-center gap-2 p-2 bg-[#1e1e1e]/50 backdrop-blur-sm rounded-xl border border-[#333]">
                    {CLASSES.map((cls) => (
                        <button
                            key={cls}
                            onClick={() => onClassSelect(cls)}
                            className={`
                px-4 py-2 rounded-lg font-bold uppercase text-sm transition-all duration-200
                ${currentClass === cls
                                    ? 'bg-[#cf6a32] text-white shadow-lg shadow-orange-900/20 scale-105'
                                    : 'bg-transparent text-gray-400 hover:text-white hover:bg-[#2a2a2a]'}
              `}
                        >
                            {cls}
                        </button>
                    ))}
                    <div className="w-px h-8 bg-[#333] mx-2" />
                    <button
                        onClick={onRandomClass}
                        className="px-4 py-2 rounded-lg font-bold uppercase text-sm transition-all duration-200 bg-[#2a2a2a] text-[#cf6a32] hover:bg-[#333] border border-[#cf6a32]/20 hover:border-[#cf6a32]"
                        title="Random Class"
                    >
                        <HelpCircle size={18} className="inline-block mr-1" />
                        Random
                    </button>
                </div>
            </div>

            {/* Main Content Area */}
            <div className="z-10 flex-1 flex flex-col items-center justify-center p-8">
                {currentClass ? (
                    <div className="w-full max-w-4xl animate-in fade-in zoom-in duration-300">
                        <div className="flex items-center justify-between mb-8">
                            <h2 className="text-3xl font-bold text-white uppercase tracking-wider border-l-4 border-[#cf6a32] pl-4">
                                {currentClass} Loadout
                            </h2>
                            <button
                                onClick={onGenerate}
                                className="group flex items-center gap-2 px-6 py-3 bg-[#cf6a32] text-white font-bold rounded-full hover:bg-[#b85d2b] transition-all hover:scale-105 shadow-lg hover:shadow-orange-500/20 active:scale-95"
                            >
                                <RefreshCw size={20} className="group-hover:rotate-180 transition-transform duration-500" />
                                Generate
                            </button>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[SLOTS.PRIMARY, SLOTS.SECONDARY, SLOTS.MELEE, SLOTS.PDA, SLOTS.PDA2].map((slot) => {
                                const weapon = loadout[slot];
                                // Only render if slot is relevant for the class (weapon object exists or is explicitly null if exclusion blocked it)
                                // However, we need to know if the slot exists for the class at all.
                                // WE could rely on the `loadout` object having keys.

                                if (loadout[slot] === undefined) return null;

                                return (
                                    <div
                                        key={slot}
                                        className="group relative bg-[#1e1e1e] border border-[#333] rounded-xl p-6 hover:border-[#cf6a32] transition-colors duration-300 overflow-hidden"
                                    >
                                        <div className="absolute top-0 right-0 p-2 opacity-10 group-hover:opacity-20 transition-opacity">
                                            <span className="text-4xl font-black text-white uppercase">{slot[0]}</span>
                                        </div>

                                        <h3 className="text-xs font-bold text-[#cf6a32] uppercase tracking-widest mb-2">
                                            {slot === 'PDA2' ? 'Building' : slot}
                                        </h3>

                                        <div className="min-h-[60px] flex items-center">
                                            {weapon ? (
                                                <p className="text-xl font-medium text-white group-hover:text-[#cf6a32] transition-colors">
                                                    {weapon.name}
                                                </p>
                                            ) : (
                                                <p className="text-lg italic text-gray-600">
                                                    None Available
                                                </p>
                                            )}
                                        </div>

                                        {/* Visual decoration bar at bottom */}
                                        <div className="absolute bottom-0 left-0 w-full h-1 bg-[#2a2a2a] group-hover:bg-[#cf6a32] transition-colors" />
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                ) : (
                    <div className="text-center text-gray-500 animate-pulse">
                        <p className="text-2xl font-light">Select a class or choose Random to begin</p>
                    </div>
                )}
            </div>
        </div>
    );
}

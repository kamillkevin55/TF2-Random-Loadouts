import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import LoadoutDisplay from './components/LoadoutDisplay';
import { generateLoadout, getRandomClass } from './utils/generator';
import { WEAPONS } from './data/tf2_data';

function App() {
  const [currentClass, setCurrentClass] = useState(null);
  const [loadout, setLoadout] = useState({});
  const [excludedWeapons, setExcludedWeapons] = useState(() => {
    const saved = localStorage.getItem('excludedWeapons');
    return saved ? JSON.parse(saved) : [];
  });
  const [includeReskins, setIncludeReskins] = useState(() => {
    const saved = localStorage.getItem('includeReskins');
    return saved !== null ? JSON.parse(saved) : true;
  });

  useEffect(() => {
    localStorage.setItem('excludedWeapons', JSON.stringify(excludedWeapons));
  }, [excludedWeapons]);

  useEffect(() => {
    localStorage.setItem('includeReskins', JSON.stringify(includeReskins));
  }, [includeReskins]);

  const toggleExclusion = (id) => {
    setExcludedWeapons(prev => {
      // Find if this weapon is a parent to any reskins
      const children = WEAPONS.filter(w => w.reskinOf === id).map(w => w.id);

      const isCurrentlyExcluded = prev.includes(id);
      let newExcluded;

      if (isCurrentlyExcluded) {
        // We are including it back (removing from excluded list)
        // Also include all children
        newExcluded = prev.filter(x => x !== id && !children.includes(x));
      } else {
        // We are excluding it
        // Also exclude all children
        // Use Set to avoid duplicates
        const combined = new Set([...prev, id, ...children]);
        newExcluded = Array.from(combined);
      }
      return newExcluded;
    });
  };

  const resetExclusions = () => {
    setExcludedWeapons([]);
  };

  const toggleReskins = () => {
    setIncludeReskins(prev => !prev);
  };

  const handleClassSelect = (cls) => {
    setCurrentClass(cls);
    // Auto generate on select? Or wait for button?
    // Let's auto generate for better UX
    setLoadout(generateLoadout(cls, excludedWeapons, includeReskins));
  };

  const handleRandomClass = () => {
    const cls = getRandomClass();
    setCurrentClass(cls);
    setLoadout(generateLoadout(cls, excludedWeapons, includeReskins));
  };

  const handleGenerate = () => {
    if (currentClass) {
      setLoadout(generateLoadout(currentClass, excludedWeapons, includeReskins));
    }
  };

  return (
    <div className="flex h-screen w-screen bg-[#121212] overflow-hidden font-sans text-white">
      {/* Sidebar */}
      <div className="flex-shrink-0 z-20 shadow-xl">
        <Sidebar
          excludedWeapons={excludedWeapons}
          toggleExclusion={toggleExclusion}
          resetExclusions={resetExclusions}
          includeReskins={includeReskins}
          toggleReskins={toggleReskins}
        />
      </div>

      {/* Main Content */}
      <LoadoutDisplay
        currentClass={currentClass}
        loadout={loadout}
        onGenerate={handleGenerate}
        onClassSelect={handleClassSelect}
        onRandomClass={handleRandomClass}
      />
    </div>
  );
}

export default App;

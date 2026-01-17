import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import LoadoutDisplay from './components/LoadoutDisplay';
import { generateLoadout, getRandomClass } from './utils/generator';

function App() {
  const [currentClass, setCurrentClass] = useState(null);
  const [loadout, setLoadout] = useState({});
  const [excludedWeapons, setExcludedWeapons] = useState([]);

  // Load from localeStorage if needed, but simplest is memory for now.
  // Optional: Persist exclusions

  const toggleExclusion = (id) => {
    setExcludedWeapons(prev => {
      if (prev.includes(id)) {
        return prev.filter(x => x !== id);
      } else {
        return [...prev, id];
      }
    });
  };

  const resetExclusions = () => {
    setExcludedWeapons([]);
  };

  const handleClassSelect = (cls) => {
    setCurrentClass(cls);
    // Auto generate on select? Or wait for button?
    // Let's auto generate for better UX
    setLoadout(generateLoadout(cls, excludedWeapons));
  };

  const handleRandomClass = () => {
    const cls = getRandomClass();
    setCurrentClass(cls);
    setLoadout(generateLoadout(cls, excludedWeapons));
  };

  const handleGenerate = () => {
    if (currentClass) {
      setLoadout(generateLoadout(currentClass, excludedWeapons));
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

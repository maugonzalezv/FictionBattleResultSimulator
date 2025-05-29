import { useState } from 'react';
import { Sword, Crown, Trophy, Zap } from 'lucide-react';

// Datos temporales de personajes
const characters = [
  { id: 1, name: "Goku", universe: "Dragon Ball", strength: 95, speed: 90, intelligence: 70, resistance: 85, totalPower: 340 },
  { id: 2, name: "Superman", universe: "DC Comics", strength: 98, speed: 88, intelligence: 85, resistance: 95, totalPower: 366 },
  { id: 3, name: "Naruto", universe: "Naruto", strength: 80, speed: 85, intelligence: 75, resistance: 80, totalPower: 320 },
  { id: 4, name: "Batman", universe: "DC Comics", strength: 70, speed: 75, intelligence: 98, resistance: 75, totalPower: 318 },
  { id: 5, name: "Saitama", universe: "One Punch Man", strength: 100, speed: 95, intelligence: 60, resistance: 90, totalPower: 345 },
  { id: 6, name: "Flash", universe: "DC Comics", strength: 65, speed: 100, intelligence: 80, resistance: 70, totalPower: 315 },
  { id: 7, name: "Wonder Woman", universe: "DC Comics", strength: 90, speed: 85, intelligence: 85, resistance: 88, totalPower: 348 },
  { id: 8, name: "Iron Man", universe: "Marvel", strength: 75, speed: 80, intelligence: 95, resistance: 85, totalPower: 335 }
];

const Simulator = () => {
  const [character1, setCharacter1] = useState<typeof characters[0] | null>(null);
  const [character2, setCharacter2] = useState<typeof characters[0] | null>(null);
  const [battleResult, setBattleResult] = useState<{
    winner: typeof characters[0];
    fighter1Score: number;
    fighter2Score: number;
    description: string;
  } | null>(null);

  const handleCharacter1Change = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = characters.find(char => char.id === parseInt(e.target.value));
    setCharacter1(selected || null);
    setBattleResult(null);
  };

  const handleCharacter2Change = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = characters.find(char => char.id === parseInt(e.target.value));
    setCharacter2(selected || null);
    setBattleResult(null);
  };

  const simulateBattle = () => {
    if (!character1 || !character2) return;
    
    const winner = character1.totalPower > character2.totalPower ? character1 : character2;
    const loser = winner === character1 ? character2 : character1;
    
    const descriptions = [
      `${winner.name} completely dominated the battle with superior technique`,
      `A crushing victory for ${winner.name} demonstrating their true power`,
      `${winner.name} emerged victorious after an epic confrontation`,
      `The power of ${winner.name} was too much for ${loser.name} in this battle`,
      `${winner.name} proved why they are considered one of the most powerful`
    ];
    
    const randomDescription = descriptions[Math.floor(Math.random() * descriptions.length)];
    
    setBattleResult({
      winner: winner,
      fighter1Score: character1.totalPower,
      fighter2Score: character2.totalPower,
      description: randomDescription
    });
  };

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-4 tracking-tight">
            Battle Simulator
          </h1>
          <p className="text-xl text-white/80 font-light tracking-wide">
            Choose two characters and discover who would emerge victorious
          </p>
        </div>

        {/* Main Battle Layout - Three Columns */}
        <div className="flex justify-between gap-8 mb-12">
          
          {/* Fighter 1 - Left Column */}
          <div className="flex-1 max-w-sm">
            <div className="group bg-white/10 backdrop-blur-md rounded-2xl shadow-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-500 transform hover:scale-105">
              <h2 className="text-2xl font-bold text-white mb-6 text-center tracking-tight">
                Fighter 1
              </h2>
              
              <div className="mb-8">
                <label className="block text-sm font-medium text-white/80 mb-3 tracking-wide">
                  Select a character
                </label>
                <select 
                  onChange={handleCharacter1Change}
                  className="w-full p-4 bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-blue-400 text-white placeholder-white/50 transition-all duration-300"
                  defaultValue=""
                >
                  <option value="" className="bg-gray-800 text-white">-- Choose a character --</option>
                  {characters.map(char => (
                    <option key={char.id} value={char.id} className="bg-gray-800 text-white">{char.name}</option>
                  ))}
                </select>
              </div>
              
              {character1 && (
                <div className="space-y-6 animate-fade-in">
                  <div className="text-center border-b border-white/20 pb-6">
                    <h3 className="text-2xl font-semibold text-white tracking-tight">{character1.name}</h3>
                    <p className="text-white/70 font-light tracking-wide">{character1.universe}</p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-white/80 font-light">Strength:</span>
                      <span className="text-white font-semibold bg-white/20 px-3 py-1 rounded-full">{character1.strength}/100</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-white/80 font-light">Speed:</span>
                      <span className="text-white font-semibold bg-white/20 px-3 py-1 rounded-full">{character1.speed}/100</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-white/80 font-light">Intelligence:</span>
                      <span className="text-white font-semibold bg-white/20 px-3 py-1 rounded-full">{character1.intelligence}/100</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-white/80 font-light">Resistance:</span>
                      <span className="text-white font-semibold bg-white/20 px-3 py-1 rounded-full">{character1.resistance}/100</span>
                    </div>
                  </div>
                  
                  <div className="border-t border-white/20 pt-6">
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-medium text-white tracking-wide">Total Power:</span>
                      <span className="text-3xl font-bold text-blue-300 bg-blue-500/20 px-4 py-2 rounded-full">{character1.totalPower}</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Comparison - Center Column */}
          <div className="flex-1 max-w-md flex flex-col justify-center">
            <div className="group bg-white/10 backdrop-blur-md rounded-2xl shadow-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-500">
              <h2 className="text-2xl font-bold text-white mb-8 text-center tracking-tight">
                Attribute Comparison
              </h2>
              
              {character1 && character2 ? (
                <div className="space-y-6 animate-fade-in">
                  {[
                    { name: 'Strength', key: 'strength' as keyof typeof character1 },
                    { name: 'Speed', key: 'speed' as keyof typeof character1 },
                    { name: 'Intelligence', key: 'intelligence' as keyof typeof character1 },
                    { name: 'Resistance', key: 'resistance' as keyof typeof character1 },
                  ].map(({ name, key }) => {
                    const char1Value = character1[key] as number;
                    const char2Value = character2[key] as number;
                    // Calcular el ancho basado en el valor real sobre 100
                    const char1Width = (char1Value / 100) * 50; // 50% es el máximo hacia la izquierda
                    const char2Width = (char2Value / 100) * 50; // 50% es el máximo hacia la derecha
                    
                    return (
                      <div key={key} className="space-y-3">
                        <div className="flex justify-between text-white/80 font-light">
                          <span className="font-medium text-blue-300">{char1Value}</span>
                          <span className="font-semibold text-white tracking-wide">{name}</span>
                          <span className="font-medium text-red-300">{char2Value}</span>
                        </div>
                        <div className="relative h-6 bg-white/10 rounded-full overflow-hidden">
                          {/* Efecto de luz detrás del ganador */}
                          {char1Value >= char2Value && (
                            <div className="absolute inset-0 bg-blue-400/20 blur-sm rounded-full animate-pulse"></div>
                          )}
                          {char2Value >= char1Value && (
                            <div className="absolute inset-0 bg-red-400/20 blur-sm rounded-full animate-pulse"></div>
                          )}
                          
                          {/* Barra izquierda (Character 1) - se extiende desde el centro hacia la izquierda */}
                          <div 
                            className={`absolute top-0 right-1/2 h-full transition-all duration-700 ease-out rounded-l-full ${
                              char1Value >= char2Value 
                                ? 'bg-gradient-to-l from-blue-400 to-blue-500 shadow-lg shadow-blue-400/50 ring-2 ring-blue-400/60' 
                                : 'bg-gradient-to-l from-blue-300/40 to-blue-400/40'
                            }`}
                            style={{ width: `${char1Width}%` }}
                          ></div>
                          {/* Barra derecha (Character 2) - se extiende desde el centro hacia la derecha */}
                          <div 
                            className={`absolute top-0 left-1/2 h-full transition-all duration-700 ease-out rounded-r-full ${
                              char2Value >= char1Value 
                                ? 'bg-gradient-to-r from-red-400 to-red-500 shadow-lg shadow-red-400/50 ring-2 ring-red-400/60' 
                                : 'bg-gradient-to-r from-red-300/40 to-red-400/40'
                            }`}
                            style={{ width: `${char2Width}%` }}
                          ></div>
                          {/* Línea central blanca palpitante */}
                          <div className="absolute top-0 left-1/2 w-1 h-full bg-white transform -translate-x-0.5 animate-pulse opacity-80 shadow-lg shadow-white/30"></div>
                        </div>
                      </div>
                    );
                  })}
                  
                  <div className="border-t border-white/20 pt-6 mt-8">
                    <div className="flex justify-between text-lg font-bold">
                      <span className="text-blue-300 bg-blue-500/20 px-3 py-2 rounded-full">{character1.totalPower}</span>
                      <span className="text-white tracking-wide">TOTAL POWER</span>
                      <span className="text-red-300 bg-red-500/20 px-3 py-2 rounded-full">{character2.totalPower}</span>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-white/60 font-light tracking-wide">Select both characters to view the comparison</p>
                </div>
              )}
            </div>
          </div>

          {/* Fighter 2 - Right Column */}
          <div className="flex-1 max-w-sm">
            <div className="group bg-white/10 backdrop-blur-md rounded-2xl shadow-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-500 transform hover:scale-105">
              <h2 className="text-2xl font-bold text-white mb-6 text-center tracking-tight">
                Fighter 2
              </h2>
              
              <div className="mb-8">
                <label className="block text-sm font-medium text-white/80 mb-3 tracking-wide">
                  Select a character
                </label>
                <select 
                  onChange={handleCharacter2Change}
                  className="w-full p-4 bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl focus:ring-2 focus:ring-red-400 focus:border-red-400 text-white placeholder-white/50 transition-all duration-300"
                  defaultValue=""
                >
                  <option value="" className="bg-gray-800 text-white">-- Choose a character --</option>
                  {characters.map(char => (
                    <option key={char.id} value={char.id} className="bg-gray-800 text-white">{char.name}</option>
                  ))}
                </select>
              </div>
              
              {character2 && (
                <div className="space-y-6 animate-fade-in">
                  <div className="text-center border-b border-white/20 pb-6">
                    <h3 className="text-2xl font-semibold text-white tracking-tight">{character2.name}</h3>
                    <p className="text-white/70 font-light tracking-wide">{character2.universe}</p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-white/80 font-light">Strength:</span>
                      <span className="text-white font-semibold bg-white/20 px-3 py-1 rounded-full">{character2.strength}/100</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-white/80 font-light">Speed:</span>
                      <span className="text-white font-semibold bg-white/20 px-3 py-1 rounded-full">{character2.speed}/100</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-white/80 font-light">Intelligence:</span>
                      <span className="text-white font-semibold bg-white/20 px-3 py-1 rounded-full">{character2.intelligence}/100</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-white/80 font-light">Resistance:</span>
                      <span className="text-white font-semibold bg-white/20 px-3 py-1 rounded-full">{character2.resistance}/100</span>
                    </div>
                  </div>
                  
                  <div className="border-t border-white/20 pt-6">
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-medium text-white tracking-wide">Total Power:</span>
                      <span className="text-3xl font-bold text-red-300 bg-red-500/20 px-4 py-2 rounded-full">{character2.totalPower}</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Simulate Battle Button */}
        <div className="text-center mb-12">
          <button
            onClick={simulateBattle}
            disabled={!character1 || !character2}
            className={`group inline-flex items-center gap-4 px-12 py-5 text-xl font-bold rounded-full transition-all duration-300 transform hover:scale-105 ${
              character1 && character2
                ? 'bg-gradient-to-r from-blue-500/30 to-red-500/30 hover:from-blue-500/40 hover:to-red-500/40 text-white shadow-2xl backdrop-blur-md border border-white/30'
                : 'bg-white/10 text-white/50 cursor-not-allowed backdrop-blur-sm border border-white/20'
            }`}
          >
            <Sword size={24} className={character1 && character2 ? "group-hover:rotate-12 transition-transform duration-300" : ""} />
            {character1 && character2 ? 'SIMULATE BATTLE' : 'Select both characters'}
          </button>
        </div>

        {/* Battle Result */}
        {battleResult && (
          <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl p-10 border border-white/20 animate-fade-in">
            <div className="flex items-center justify-center gap-4 mb-8">
              <Trophy className="text-yellow-300 animate-pulse" size={40} />
              <h2 className="text-4xl font-bold text-white tracking-tight">
                BATTLE RESULT
              </h2>
              <Trophy className="text-yellow-300 animate-pulse" size={40} />
            </div>
            
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-10">
                <div className="flex items-center justify-center mb-6 animate-bounce">
                  <div className="bg-yellow-500/20 p-6 rounded-full">
                    <Crown className="text-yellow-300" size={60} />
                  </div>
                </div>
                <h3 className="text-3xl font-bold text-white mb-4 tracking-tight">
                  {battleResult.winner.name} WINS!
                </h3>
                <p className="text-xl text-white/80 font-light tracking-wide">
                  {battleResult.winner.universe}
                </p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 mb-8 border border-white/20">
                <div className="flex items-center justify-center gap-3 mb-6">
                  <Zap className="text-white" size={24} />
                  <h4 className="text-2xl font-semibold text-white tracking-tight">
                    Battle Analysis
                  </h4>
                </div>
                <div className="grid grid-cols-2 gap-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-300 bg-blue-500/20 px-6 py-3 rounded-full mb-3 inline-block">
                      {battleResult.fighter1Score}
                    </div>
                    <div className="text-white/80 font-light tracking-wide">{character1?.name}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-red-300 bg-red-500/20 px-6 py-3 rounded-full mb-3 inline-block">
                      {battleResult.fighter2Score}
                    </div>
                    <div className="text-white/80 font-light tracking-wide">{character2?.name}</div>
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <blockquote className="text-xl text-white/90 italic font-light leading-relaxed tracking-wide">
                  "{battleResult.description}"
                </blockquote>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Simulator; 
import { useState, useMemo } from 'react';
import { Star, Users, Calendar, Award, Filter } from 'lucide-react';

// Datos mock de personajes expandidos
const mockCharacters = [
  // Top tier
  { id: 1, name: "Saitama", universe: "One Punch Man", gender: "Male", age: 25, powerLevel: 999, rank: 1 },
  { id: 2, name: "Kaido", universe: "One Piece", gender: "Male", age: 59, powerLevel: 980, rank: 2 },
  { id: 3, name: "Shanks", universe: "One Piece", gender: "Male", age: 39, powerLevel: 970, rank: 3 },
  { id: 4, name: "Whitebeard", universe: "One Piece", gender: "Male", age: 72, powerLevel: 960, rank: 4 },
  { id: 5, name: "Goku", universe: "Dragon Ball", gender: "Male", age: 40, powerLevel: 950, rank: 5 },
  { id: 6, name: "Superman", universe: "DC Comics", gender: "Male", age: 35, powerLevel: 940, rank: 6 },
  { id: 7, name: "Vegeta", universe: "Dragon Ball", gender: "Male", age: 42, powerLevel: 930, rank: 7 },
  { id: 8, name: "Frieza", universe: "Dragon Ball", gender: "Male", age: 70, powerLevel: 920, rank: 8 },
  { id: 9, name: "Madara", universe: "Naruto", gender: "Male", age: 90, powerLevel: 920, rank: 9 },
  { id: 10, name: "Netero", universe: "Hunter x Hunter", gender: "Male", age: 110, powerLevel: 910, rank: 10 },
  
  // High tier
  { id: 11, name: "Hulk", universe: "Marvel", gender: "Male", age: 45, powerLevel: 900, rank: 11 },
  { id: 12, name: "Thor", universe: "Marvel", gender: "Male", age: 1500, powerLevel: 890, rank: 12 },
  { id: 13, name: "Yoda", universe: "Star Wars", gender: "Male", age: 900, powerLevel: 890, rank: 13 },
  { id: 14, name: "Wonder Woman", universe: "DC Comics", gender: "Female", age: 5000, powerLevel: 880, rank: 14 },
  { id: 15, name: "Hisoka", universe: "Hunter x Hunter", gender: "Male", age: 28, powerLevel: 880, rank: 15 },
  { id: 16, name: "Scarlet Witch", universe: "Marvel", gender: "Female", age: 30, powerLevel: 870, rank: 16 },
  { id: 17, name: "Darth Vader", universe: "Star Wars", gender: "Male", age: 45, powerLevel: 870, rank: 17 },
  { id: 18, name: "Flash", universe: "DC Comics", gender: "Male", age: 28, powerLevel: 860, rank: 18 },
  { id: 19, name: "Doctor Strange", universe: "Marvel", gender: "Male", age: 45, powerLevel: 850, rank: 19 },
  { id: 20, name: "Mace Windu", universe: "Star Wars", gender: "Male", age: 53, powerLevel: 850, rank: 20 },
  
  // Mid-high tier
  { id: 21, name: "Green Lantern", universe: "DC Comics", gender: "Male", age: 32, powerLevel: 840, rank: 21 },
  { id: 22, name: "Luffy", universe: "One Piece", gender: "Male", age: 19, powerLevel: 830, rank: 22 },
  { id: 23, name: "Obi-Wan Kenobi", universe: "Star Wars", gender: "Male", age: 57, powerLevel: 830, rank: 23 },
  { id: 24, name: "Aquaman", universe: "DC Comics", gender: "Male", age: 38, powerLevel: 820, rank: 24 },
  { id: 25, name: "Killua Zoldyck", universe: "Hunter x Hunter", gender: "Male", age: 14, powerLevel: 820, rank: 25 },
  { id: 26, name: "Levi Ackerman", universe: "Attack on Titan", gender: "Male", age: 30, powerLevel: 810, rank: 26 },
  { id: 27, name: "Sasuke", universe: "Naruto", gender: "Male", age: 17, powerLevel: 810, rank: 27 },
  { id: 28, name: "Luke Skywalker", universe: "Star Wars", gender: "Male", age: 23, powerLevel: 810, rank: 28 },
  { id: 29, name: "Iron Man", universe: "Marvel", gender: "Male", age: 48, powerLevel: 800, rank: 29 },
  { id: 30, name: "Eren Yeager", universe: "Attack on Titan", gender: "Male", age: 19, powerLevel: 800, rank: 30 },
  { id: 31, name: "Naruto", universe: "Naruto", gender: "Male", age: 17, powerLevel: 800, rank: 31 },
  { id: 32, name: "Gon Freecss", universe: "Hunter x Hunter", gender: "Male", age: 14, powerLevel: 800, rank: 32 },
  { id: 33, name: "Zoro", universe: "One Piece", gender: "Male", age: 21, powerLevel: 790, rank: 33 },
  { id: 34, name: "Batman", universe: "DC Comics", gender: "Male", age: 40, powerLevel: 780, rank: 34 },
  { id: 35, name: "Genos", universe: "One Punch Man", gender: "Male", age: 19, powerLevel: 780, rank: 35 },
  { id: 36, name: "Sanji", universe: "One Piece", gender: "Male", age: 21, powerLevel: 770, rank: 36 },
  { id: 37, name: "Mikasa Ackerman", universe: "Attack on Titan", gender: "Female", age: 19, powerLevel: 760, rank: 37 },
  { id: 38, name: "Captain America", universe: "Marvel", gender: "Male", age: 100, powerLevel: 750, rank: 38 },
  { id: 39, name: "Reiner Braun", universe: "Attack on Titan", gender: "Male", age: 21, powerLevel: 740, rank: 39 },
  { id: 40, name: "Spider-Man", universe: "Marvel", gender: "Male", age: 22, powerLevel: 720, rank: 40 }
];

const Ranking = () => {
  const [universeFilter, setUniverseFilter] = useState<string>("all");
  const [genderFilter, setGenderFilter] = useState<string>("all");
  const [ageFilter, setAgeFilter] = useState<string>("all");
  const [rankFilter, setRankFilter] = useState<string>("all");

  // Filtros en tiempo real usando useMemo
  const filteredCharacters = useMemo(() => {
    // Paso 1: Aplicar todos los filtros excepto el de rango
    let filtered = mockCharacters.filter(character => {
      // Filtro por universo
      if (universeFilter !== "all" && character.universe.toLowerCase().replace(/\s+/g, '') !== universeFilter) {
        return false;
      }

      // Filtro por género
      if (genderFilter !== "all") {
        if (genderFilter === "male" && character.gender !== "Male") return false;
        if (genderFilter === "female" && character.gender !== "Female") return false;
      }

      // Filtro por edad
      if (ageFilter !== "all") {
        if (ageFilter === "minor" && character.age >= 18) return false;
        if (ageFilter === "adult" && (character.age < 18 || character.age > 100)) return false;
        if (ageFilter === "ancient" && character.age <= 100) return false;
      }

      return true;
    });

    // Paso 2: Ordenar por poder y recalcular rankings dentro del grupo filtrado
    filtered = filtered.sort((a, b) => b.powerLevel - a.powerLevel);
    
    // Paso 3: Aplicar filtro de rango basado en la posición dentro del grupo filtrado
    if (rankFilter !== "all") {
      if (rankFilter === "top3") {
        filtered = filtered.slice(0, 3);
      } else if (rankFilter === "top10") {
        filtered = filtered.slice(0, 10);
      } else if (rankFilter === "top20") {
        filtered = filtered.slice(0, 20);
      }
    }

    return filtered;
  }, [universeFilter, genderFilter, ageFilter, rankFilter]);

  const getRankBadgeColor = (rank: number) => {
    if (rank <= 3) return "bg-yellow-500";
    if (rank <= 10) return "bg-purple-500";
    return "bg-gray-500";
  };

  const getPowerLevelColor = (power: number) => {
    if (power >= 900) return "text-red-600";
    if (power >= 700) return "text-orange-600";
    if (power >= 500) return "text-yellow-600";
    return "text-green-600";
  };

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-screen-lg mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-4 tracking-tight">
            Character Rankings
          </h1>
          <p className="text-xl text-white/80 font-light tracking-wide">
            The most powerful characters from all universes
          </p>
          <div className="mt-6 text-lg text-white/60 font-light">
            Showing {filteredCharacters.length} of {mockCharacters.length} characters
          </div>
        </div>

        {/* Filters Section */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-xl p-8 mb-12 border border-white/20 hover:bg-white/15 transition-all duration-500">
          <div className="flex items-center gap-3 mb-6">
            <Filter size={24} className="text-white" />
            <h2 className="text-2xl font-bold text-white tracking-tight">Filters</h2>
          </div>
          
          <div className="flex gap-6 flex-wrap">
            {/* Universe Filter */}
            <div className="flex-1 min-w-60">
              <label className="flex items-center gap-2 text-sm font-medium text-white/80 mb-3 tracking-wide">
                <Star size={16} className="text-blue-300" />
                Universe
              </label>
              <select 
                value={universeFilter}
                onChange={(e) => setUniverseFilter(e.target.value)}
                className="w-full p-4 bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl focus:ring-2 focus:ring-blue-400 focus:border-blue-400 text-white transition-all duration-300"
              >
                <option value="all" className="bg-gray-800 text-white">All universes</option>
                <option value="marvel" className="bg-gray-800 text-white">Marvel</option>
                <option value="dccomics" className="bg-gray-800 text-white">DC Comics</option>
                <option value="dragonball" className="bg-gray-800 text-white">Dragon Ball</option>
                <option value="onepiece" className="bg-gray-800 text-white">One Piece</option>
                <option value="attackontitan" className="bg-gray-800 text-white">Attack on Titan</option>
                <option value="hunterxhunter" className="bg-gray-800 text-white">Hunter x Hunter</option>
                <option value="naruto" className="bg-gray-800 text-white">Naruto</option>
                <option value="onepunchman" className="bg-gray-800 text-white">One Punch Man</option>
                <option value="starwars" className="bg-gray-800 text-white">Star Wars</option>
              </select>
            </div>

            {/* Gender Filter */}
            <div className="flex-1 min-w-60">
              <label className="flex items-center gap-2 text-sm font-medium text-white/80 mb-3 tracking-wide">
                <Users size={16} className="text-pink-300" />
                Gender
              </label>
              <select 
                value={genderFilter}
                onChange={(e) => setGenderFilter(e.target.value)}
                className="w-full p-4 bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl focus:ring-2 focus:ring-pink-400 focus:border-pink-400 text-white transition-all duration-300"
              >
                <option value="all" className="bg-gray-800 text-white">All</option>
                <option value="male" className="bg-gray-800 text-white">Male</option>
                <option value="female" className="bg-gray-800 text-white">Female</option>
                <option value="other" className="bg-gray-800 text-white">Other</option>
              </select>
            </div>

            {/* Age Filter */}
            <div className="flex-1 min-w-60">
              <label className="flex items-center gap-2 text-sm font-medium text-white/80 mb-3 tracking-wide">
                <Calendar size={16} className="text-green-300" />
                Age
              </label>
              <select 
                value={ageFilter}
                onChange={(e) => setAgeFilter(e.target.value)}
                className="w-full p-4 bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl focus:ring-2 focus:ring-green-400 focus:border-green-400 text-white transition-all duration-300"
              >
                <option value="all" className="bg-gray-800 text-white">All ages</option>
                <option value="minor" className="bg-gray-800 text-white">Under 18</option>
                <option value="adult" className="bg-gray-800 text-white">18-100 years</option>
                <option value="ancient" className="bg-gray-800 text-white">Over 100 years</option>
              </select>
            </div>

            {/* Rank Filter */}
            <div className="flex-1 min-w-60">
              <label className="flex items-center gap-2 text-sm font-medium text-white/80 mb-3 tracking-wide">
                <Award size={16} className="text-yellow-300" />
                Rank
              </label>
              <select 
                value={rankFilter}
                onChange={(e) => setRankFilter(e.target.value)}
                className="w-full p-4 bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 text-white transition-all duration-300"
              >
                <option value="all" className="bg-gray-800 text-white">All ranks</option>
                <option value="top3" className="bg-gray-800 text-white">Top 3</option>
                <option value="top10" className="bg-gray-800 text-white">Top 10</option>
                <option value="top20" className="bg-gray-800 text-white">Top 20</option>
              </select>
            </div>
          </div>
        </div>

        {/* Character List */}
        <div className="space-y-8">
          {filteredCharacters.length > 0 ? (
            filteredCharacters.map((character, index) => (
              <div 
                key={character.id}
                className="group bg-white/10 backdrop-blur-md shadow-xl p-6 rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-500 transform hover:scale-102 hover:-translate-y-1"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="flex items-center gap-6">
                  {/* Rank Badge */}
                  <div className="flex-shrink-0">
                    <div className={`w-16 h-16 rounded-full ${getRankBadgeColor(character.rank)} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <span className="text-lg font-bold text-white">
                        #{character.rank}
                      </span>
                    </div>
                  </div>

                  {/* Character Info */}
                  <div className="flex-grow">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                      {/* Name and details */}
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">
                          {character.name}
                        </h3>
                        <div className="flex flex-wrap gap-6">
                          <span className="flex items-center gap-2 text-white/80 font-light">
                            <Star size={16} className="text-blue-300" />
                            {character.universe}
                          </span>
                          <span className="flex items-center gap-2 text-white/80 font-light">
                            <Users size={16} className="text-pink-300" />
                            {character.gender}
                          </span>
                          <span className="flex items-center gap-2 text-white/80 font-light">
                            <Calendar size={16} className="text-green-300" />
                            {character.age} years old
                          </span>
                        </div>
                      </div>

                      {/* Power Level */}
                      <div className="flex-shrink-0 text-right">
                        <p className="text-white/60 mb-2 font-light tracking-wide">Total Power</p>
                        <div className={`text-4xl font-bold ${getPowerLevelColor(character.powerLevel)} bg-white/20 px-6 py-3 rounded-full backdrop-blur-sm`}>
                          {character.powerLevel}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-20">
              <div className="text-white/40 mb-6">
                <Filter size={60} className="mx-auto mb-6" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4 tracking-tight">
                No characters found
              </h3>
              <p className="text-white/70 font-light tracking-wide">
                Try adjusting the filters to find more results
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Ranking; 
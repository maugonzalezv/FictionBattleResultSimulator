import { useState, useMemo } from 'react';
import { Star, Users, Calendar, Award, Filter } from 'lucide-react';

// Datos mock de personajes expandidos
const mockCharacters = [
  { id: 1, name: "Saitama", universe: "Anime", gender: "Male", age: 25, powerLevel: 999, rank: 1 },
  { id: 2, name: "Superman", universe: "DC", gender: "Male", age: 35, powerLevel: 950, rank: 2 },
  { id: 3, name: "Goku", universe: "Anime", gender: "Male", age: 40, powerLevel: 940, rank: 3 },
  { id: 4, name: "Wonder Woman", universe: "DC", gender: "Female", age: 5000, powerLevel: 850, rank: 4 },
  { id: 5, name: "Thor", universe: "Marvel", gender: "Male", age: 1500, powerLevel: 840, rank: 5 },
  { id: 6, name: "Captain Marvel", universe: "Marvel", gender: "Female", age: 35, powerLevel: 830, rank: 6 },
  { id: 7, name: "Hulk", universe: "Marvel", gender: "Male", age: 45, powerLevel: 820, rank: 7 },
  { id: 8, name: "Flash", universe: "DC", gender: "Male", age: 28, powerLevel: 780, rank: 8 },
  { id: 9, name: "Naruto", universe: "Anime", gender: "Male", age: 17, powerLevel: 750, rank: 9 },
  { id: 10, name: "Scarlet Witch", universe: "Marvel", gender: "Female", age: 30, powerLevel: 740, rank: 10 },
  { id: 11, name: "Batman", universe: "DC", gender: "Male", age: 40, powerLevel: 720, rank: 11 },
  { id: 12, name: "Iron Man", universe: "Marvel", gender: "Male", age: 48, powerLevel: 700, rank: 12 },
  { id: 13, name: "Vegeta", universe: "Anime", gender: "Male", age: 42, powerLevel: 690, rank: 13 },
  { id: 14, name: "Black Widow", universe: "Marvel", gender: "Female", age: 35, powerLevel: 650, rank: 14 },
  { id: 15, name: "Aquaman", universe: "DC", gender: "Male", age: 38, powerLevel: 640, rank: 15 },
  { id: 16, name: "Sailor Moon", universe: "Anime", gender: "Female", age: 16, powerLevel: 620, rank: 16 },
  { id: 17, name: "Spider-Man", universe: "Marvel", gender: "Male", age: 22, powerLevel: 600, rank: 17 },
  { id: 18, name: "Sasuke", universe: "Anime", gender: "Male", age: 17, powerLevel: 580, rank: 18 },
  { id: 19, name: "Catwoman", universe: "DC", gender: "Female", age: 32, powerLevel: 550, rank: 19 },
  { id: 20, name: "Deku", universe: "Anime", gender: "Male", age: 16, powerLevel: 520, rank: 20 },
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
      if (universeFilter !== "all" && character.universe.toLowerCase() !== universeFilter) {
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
                <option value="dc" className="bg-gray-800 text-white">DC</option>
                <option value="anime" className="bg-gray-800 text-white">Anime</option>
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
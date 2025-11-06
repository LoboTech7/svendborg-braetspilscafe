import React, { useState } from 'react';
import { Search, Filter, Users, Clock, Star } from 'lucide-react';

const GameLibrary = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPlayers, setSelectedPlayers] = useState('all');

  const games = [
    {
      id: 1,
      name: 'Catan',
      category: 'strategy',
      players: '3-4',
      duration: '60-120',
      rating: 4.5,
      difficulty: 'Medium',
      image: 'https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?w=400&h=300&fit=crop',
      description: 'Byg bosættelser og byer mens du handler ressourcer'
    },
    {
      id: 2,
      name: 'Azul',
      category: 'family',
      players: '2-4',
      duration: '30-45',
      rating: 4.7,
      difficulty: 'Easy',
      image: 'https://images.unsplash.com/photo-1606167668584-78701c57f13d?w=400&h=300&fit=crop',
      description: 'Smuk flise-lægningsspil med portugisisk tema'
    },
    {
      id: 3,
      name: 'Pandemic',
      category: 'cooperative',
      players: '2-4',
      duration: '45-60',
      rating: 4.6,
      difficulty: 'Medium',
      image: 'https://images.unsplash.com/photo-1606167668584-78701c57f13d?w=400&h=300&fit=crop',
      description: 'Samarbejd om at redde verden fra dødelige sygdomme'
    },
    {
      id: 4,
      name: 'Ticket to Ride',
      category: 'family',
      players: '2-5',
      duration: '30-60',
      rating: 4.4,
      difficulty: 'Easy',
      image: 'https://images.unsplash.com/photo-1611891490922-dbb5a0a1e3e9?w=400&h=300&fit=crop',
      description: 'Byg togforbindelser på tværs af Europa'
    },
    {
      id: 5,
      name: 'Wingspan',
      category: 'strategy',
      players: '1-5',
      duration: '40-70',
      rating: 4.8,
      difficulty: 'Medium',
      image: 'https://images.unsplash.com/photo-1606167668584-78701c57f13d?w=400&h=300&fit=crop',
      description: 'Engine-building spil om fugle og naturbevarelse'
    },
    {
      id: 6,
      name: 'Codenames',
      category: 'party',
      players: '4-8',
      duration: '15-30',
      rating: 4.5,
      difficulty: 'Easy',
      image: 'https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?w=400&h=300&fit=crop',
      description: 'Social ordgættespil for teams'
    },
    {
      id: 7,
      name: 'Gloomhaven',
      category: 'adventure',
      players: '1-4',
      duration: '90-120',
      rating: 4.9,
      difficulty: 'Hard',
      image: 'https://images.unsplash.com/photo-1606167668584-78701c57f13d?w=400&h=300&fit=crop',
      description: 'Episk kampagne-drevet dungeon crawler'
    },
    {
      id: 8,
      name: '7 Wonders',
      category: 'strategy',
      players: '2-7',
      duration: '30-45',
      rating: 4.3,
      difficulty: 'Medium',
      image: 'https://images.unsplash.com/photo-1611891490922-dbb5a0a1e3e9?w=400&h=300&fit=crop',
      description: 'Byg den største civilisation gennem tre tidsaldre'
    },
    {
      id: 9,
      name: 'Kingdomino',
      category: 'family',
      players: '2-4',
      duration: '15-20',
      rating: 4.2,
      difficulty: 'Easy',
      image: 'https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?w=400&h=300&fit=crop',
      description: 'Byg det smukkeste kongerige med domino-fliser'
    },
    {
      id: 10,
      name: 'Splendor',
      category: 'strategy',
      players: '2-4',
      duration: '30',
      rating: 4.4,
      difficulty: 'Easy',
      image: 'https://images.unsplash.com/photo-1606167668584-78701c57f13d?w=400&h=300&fit=crop',
      description: 'Bliv en succesfuld ædelstenshandler i renæssancen'
    },
    {
      id: 11,
      name: 'Carcassonne',
      category: 'family',
      players: '2-5',
      duration: '30-45',
      rating: 4.5,
      difficulty: 'Easy',
      image: 'https://images.unsplash.com/photo-1611891490922-dbb5a0a1e3e9?w=400&h=300&fit=crop',
      description: 'Klassisk flise-lægningsspil i det middelalderlige Frankrig'
    },
    {
      id: 12,
      name: 'Dixit',
      category: 'party',
      players: '3-6',
      duration: '30',
      rating: 4.6,
      difficulty: 'Easy',
      image: 'https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?w=400&h=300&fit=crop',
      description: 'Kreativt historiefortællingsspil med smukke illustrationer'
    }
  ];

  const categories = [
    { id: 'all', name: 'Alle Spil' },
    { id: 'strategy', name: 'Strategi' },
    { id: 'family', name: 'Familie' },
    { id: 'party', name: 'Fest' },
    { id: 'cooperative', name: 'Samarbejde' },
    { id: 'adventure', name: 'Eventyr' }
  ];

  const playerOptions = [
    { id: 'all', name: 'Alle' },
    { id: '1-2', name: '1-2 spillere' },
    { id: '3-4', name: '3-4 spillere' },
    { id: '5+', name: '5+ spillere' }
  ];

  const filteredGames = games.filter(game => {
    const matchesSearch = game.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         game.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || game.category === selectedCategory;

    let matchesPlayers = true;
    if (selectedPlayers !== 'all') {
      const maxPlayers = parseInt(game.players.split('-')[1]);
      if (selectedPlayers === '1-2') {
        matchesPlayers = maxPlayers <= 2;
      } else if (selectedPlayers === '3-4') {
        matchesPlayers = maxPlayers >= 3 && maxPlayers <= 4;
      } else if (selectedPlayers === '5+') {
        matchesPlayers = maxPlayers >= 5;
      }
    }

    return matchesSearch && matchesCategory && matchesPlayers;
  });

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${i < Math.floor(rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
      />
    ));
  };

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Easy': return 'bg-green-100 text-green-800';
      case 'Medium': return 'bg-yellow-100 text-yellow-800';
      case 'Hard': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h2 className="text-5xl font-bold mb-4 gradient-text">Vores Spilbibliotek</h2>
        <p className="text-2xl text-bastard-700">Over 500 spil at vælge imellem</p>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl shadow-minimal-lg p-8 mb-10 border-t-4 border-primary">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-primary" />
            <input
              type="text"
              placeholder="Søg efter spil..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border-2 border-bastard-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-all bg-white font-medium"
            />
          </div>

          {/* Category Filter */}
          <div className="relative">
            <Filter className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-accent-orange" />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border-2 border-bastard-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-all appearance-none bg-white font-medium cursor-pointer"
            >
              {categories.map(cat => (
                <option key={cat.id} value={cat.id}>{cat.name}</option>
              ))}
            </select>
          </div>

          {/* Players Filter */}
          <div className="relative">
            <Users className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-accent-purple" />
            <select
              value={selectedPlayers}
              onChange={(e) => setSelectedPlayers(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border-2 border-bastard-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-all appearance-none bg-white font-medium cursor-pointer"
            >
              {playerOptions.map(opt => (
                <option key={opt.id} value={opt.id}>{opt.name}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Results count */}
      <div className="mb-8">
        <p className="text-bastard-700 text-lg">
          Viser <span className="font-bold text-primary text-2xl">{filteredGames.length}</span> spil
        </p>
      </div>

      {/* Game Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredGames.map(game => (
          <div
            key={game.id}
            className="card-hover bg-white rounded-xl shadow-minimal overflow-hidden"
          >
            <div className="relative h-48 bg-gradient-to-br from-accent-red via-accent-orange to-accent-purple overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-center justify-center">
                <div className="text-white text-center drop-shadow-lg">
                  <div className="text-6xl mb-2 animate-gentle-float">🎲</div>
                  <div className="text-sm font-bold bg-black/30 px-3 py-1 rounded-full backdrop-blur-sm">{game.name}</div>
                </div>
              </div>
              <div className={`absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-bold shadow-lg ${getDifficultyColor(game.difficulty)}`}>
                {game.difficulty}
              </div>
            </div>

            <div className="p-5">
              <h3 className="text-xl font-bold text-bastard-900 mb-2">{game.name}</h3>
              <p className="text-sm text-bastard-700 mb-4 line-clamp-2 leading-relaxed">{game.description}</p>

              {/* Rating */}
              <div className="flex items-center mb-3">
                <div className="flex">{renderStars(game.rating)}</div>
                <span className="ml-2 text-sm font-bold text-bastard-700">{game.rating}</span>
              </div>

              {/* Game Info */}
              <div className="space-y-2 border-t-2 border-bastard-200 pt-3">
                <div className="flex items-center text-sm text-bastard-700 font-medium">
                  <Users className="h-4 w-4 mr-2 text-primary" />
                  <span>{game.players} spillere</span>
                </div>
                <div className="flex items-center text-sm text-bastard-700 font-medium">
                  <Clock className="h-4 w-4 mr-2 text-accent-orange" />
                  <span>{game.duration} min</span>
                </div>
              </div>

              <button className="btn-primary w-full mt-4 bg-primary text-white py-3 rounded-lg font-bold hover:bg-primary-light hover:shadow-dark-lg transition-all transform hover:scale-105">
                Reservér Dette Spil
              </button>
            </div>
          </div>
        ))}
      </div>

      {filteredGames.length === 0 && (
        <div className="text-center py-16 bg-white rounded-xl shadow-minimal">
          <div className="text-7xl mb-4 animate-pulse">🔍</div>
          <h3 className="text-3xl font-bold text-bastard-900 mb-3">Ingen spil fundet</h3>
          <p className="text-bastard-700 text-lg">Prøv at justere dine filtre eller søgning</p>
        </div>
      )}

      {/* Info Box */}
      <div className="mt-12 bg-bastard-50 rounded-xl p-10 shadow-minimal-lg border-2 border-bastard-200">
        <h3 className="text-3xl font-bold text-bastard-900 mb-4">Kan ikke finde dit yndlingsspil?</h3>
        <p className="text-bastard-700 text-lg mb-6 leading-relaxed">
          Vi udvider konstant vores samling. Fortæl os, hvilket spil du gerne vil se hos os!
        </p>
        <button className="btn-primary bg-primary text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-primary-light hover:shadow-dark-lg transition-all transform hover:scale-105">
          Foreslå Et Spil
        </button>
      </div>
    </div>
  );
};

export default GameLibrary;

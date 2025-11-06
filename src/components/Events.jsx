import React, { useState } from 'react';
import { Calendar, Clock, Users, Trophy, Sparkles, MapPin } from 'lucide-react';

const Events = () => {
  const [selectedMonth, setSelectedMonth] = useState('all');

  const events = [
    {
      id: 1,
      title: 'Magic: The Gathering Turnering',
      date: '2025-11-08',
      time: '18:00',
      duration: '4 timer',
      participants: '16 spillere',
      price: '50 kr',
      category: 'tournament',
      description: 'Deltag i vores månedlige MTG turnering. Præmier til top 3!'
    },
    {
      id: 2,
      title: 'Familie Spil Aften',
      date: '2025-11-10',
      time: '16:00',
      duration: '3 timer',
      participants: 'Alle familier',
      price: 'Gratis',
      category: 'family',
      description: 'Hyggelig aften for hele familien med udvalgte familiespil'
    },
    {
      id: 3,
      title: 'Dungeons & Dragons Begynder Session',
      date: '2025-11-12',
      time: '19:00',
      duration: '3 timer',
      participants: '6 spillere',
      price: '75 kr',
      category: 'special',
      description: 'Aldrig prøvet D&D? Perfekt session for nybegyndere med erfaren DM'
    },
    {
      id: 4,
      title: 'Catan Mesterskab',
      date: '2025-11-15',
      time: '17:00',
      duration: '5 timer',
      participants: '24 spillere',
      price: '100 kr',
      category: 'tournament',
      description: 'Find ud af hvem der er den bedste Catan-spiller i Svendborg!'
    },
    {
      id: 5,
      title: 'Brætspil & Brunch',
      date: '2025-11-17',
      time: '11:00',
      duration: '3 timer',
      participants: 'Åben for alle',
      price: '150 kr (inkl. brunch)',
      category: 'social',
      description: 'Nyd en lækker brunch mens du spiller afslappede spil'
    },
    {
      id: 6,
      title: 'Codenames Turnering',
      date: '2025-11-20',
      time: '19:30',
      duration: '2.5 timer',
      participants: '8 teams',
      price: '200 kr per team',
      category: 'tournament',
      description: 'Team-baseret ordgættespil. Mød op med dit eget team eller find nye venner!'
    },
    {
      id: 7,
      title: 'Spil & Musik Aften',
      date: '2025-11-22',
      time: '20:00',
      duration: '4 timer',
      participants: 'Åben for alle',
      price: 'Gratis',
      category: 'special',
      description: 'Live musik og party-spil. Bring dine venner til en festlig aften!'
    },
    {
      id: 8,
      title: 'Junior Spilledag (7-14 år)',
      date: '2025-11-24',
      time: '14:00',
      duration: '3 timer',
      participants: 'Børn 7-14 år',
      price: '50 kr',
      category: 'family',
      description: 'Særlig dag for de unge spillere med alderspassende spil og konkurrencer'
    }
  ];

  const getCategoryColor = (category) => {
    switch (category) {
      case 'tournament': return 'from-accent-orange to-accent-red';
      case 'family': return 'from-accent-purple to-accent-pink';
      case 'special': return 'from-accent-cyan to-accent-purple';
      case 'social': return 'from-accent-pink to-accent-red';
      default: return 'from-primary to-primary-dark';
    }
  };

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'tournament': return <Trophy className="h-6 w-6" />;
      case 'family': return <Users className="h-6 w-6" />;
      case 'special': return <Sparkles className="h-6 w-6" />;
      case 'social': return <Calendar className="h-6 w-6" />;
      default: return <Calendar className="h-6 w-6" />;
    }
  };

  const getCategoryName = (category) => {
    switch (category) {
      case 'tournament': return 'Turnering';
      case 'family': return 'Familie';
      case 'special': return 'Særligt';
      case 'social': return 'Socialt';
      default: return '';
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { weekday: 'long', day: 'numeric', month: 'long' };
    return date.toLocaleDateString('da-DK', options);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h2 className="text-5xl font-bold mb-4 gradient-text">Events & Arrangementer</h2>
        <p className="text-2xl text-bastard-700">Deltag i vores spændende events og turneringer</p>
      </div>

      {/* Event Categories Info */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
        <div className="card-hover bg-bastard-50 p-5 rounded-xl text-center shadow-minimal border-2 border-accent-orange">
          <Trophy className="h-8 w-8 text-accent-orange mx-auto mb-2" />
          <div className="font-bold text-bastard-900">Turneringer</div>
          <div className="text-sm text-bastard-700">Konkurrér og vind!</div>
        </div>
        <div className="card-hover bg-bastard-50 p-5 rounded-xl text-center shadow-minimal border-2 border-accent-purple">
          <Users className="h-8 w-8 text-accent-purple mx-auto mb-2" />
          <div className="font-bold text-bastard-900">Familie</div>
          <div className="text-sm text-bastard-700">For hele familien</div>
        </div>
        <div className="card-hover bg-bastard-50 p-5 rounded-xl text-center shadow-minimal border-2 border-accent-cyan">
          <Sparkles className="h-8 w-8 text-accent-cyan mx-auto mb-2" />
          <div className="font-bold text-bastard-900">Særlige Events</div>
          <div className="text-sm text-bastard-700">Unikke oplevelser</div>
        </div>
        <div className="card-hover bg-bastard-50 p-5 rounded-xl text-center shadow-minimal border-2 border-accent-pink">
          <Calendar className="h-8 w-8 text-accent-pink mx-auto mb-2" />
          <div className="font-bold text-bastard-900">Sociale Events</div>
          <div className="text-sm text-bastard-700">Mød nye venner</div>
        </div>
      </div>

      {/* Events Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {events.map(event => (
          <div
            key={event.id}
            className="card-hover bg-white rounded-xl shadow-minimal overflow-hidden"
          >
            <div className={`h-4 bg-gradient-to-r ${getCategoryColor(event.category)}`}></div>

            <div className="p-6">
              {/* Category Badge */}
              <div className="flex items-center justify-between mb-4">
                <div className={`flex items-center space-x-2 px-4 py-2 rounded-full bg-gradient-to-r ${getCategoryColor(event.category)} text-white text-sm font-bold shadow-md`}>
                  {getCategoryIcon(event.category)}
                  <span>{getCategoryName(event.category)}</span>
                </div>
                <div className="text-2xl font-bold text-accent-orange bg-bastard-100 px-3 py-1 rounded-lg">{event.price}</div>
              </div>

              <h3 className="text-xl font-bold text-bastard-900 mb-3">{event.title}</h3>
              <p className="text-bastard-700 text-sm mb-4 leading-relaxed">{event.description}</p>

              {/* Event Details */}
              <div className="space-y-2 border-t-2 border-bastard-200 pt-4">
                <div className="flex items-center text-sm text-bastard-700 font-medium">
                  <Calendar className="h-4 w-4 mr-2 text-primary flex-shrink-0" />
                  <span className="font-bold">{formatDate(event.date)}</span>
                </div>
                <div className="flex items-center text-sm text-bastard-700">
                  <Clock className="h-4 w-4 mr-2 text-accent-orange flex-shrink-0" />
                  <span>{event.time} ({event.duration})</span>
                </div>
                <div className="flex items-center text-sm text-bastard-700">
                  <Users className="h-4 w-4 mr-2 text-accent-purple flex-shrink-0" />
                  <span>{event.participants}</span>
                </div>
              </div>

              <button className="btn-primary w-full mt-6 bg-primary text-white py-3 rounded-lg font-bold hover:bg-primary-light hover:shadow-dark-lg transition-all transform hover:scale-105">
                Tilmeld Event
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Custom Events Section */}
      <div className="bg-gradient-hero rounded-xl p-10 md:p-14 text-white shadow-minimal-xl">
        <div className="max-w-3xl mx-auto text-center">
          <Sparkles className="h-14 w-14 mx-auto mb-6 animate-gentle-float" />
          <h3 className="text-4xl font-bold mb-5 drop-shadow-lg">Planlæg Dit Eget Event</h3>
          <p className="text-xl mb-8 opacity-95 leading-relaxed drop-shadow-md">
            Har du en fødselsdag, firmaevent eller anden begivenhed? Vi kan hjælpe med at gøre det til en uforglemmelig oplevelse!
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <button className="btn-primary bg-white text-primary px-10 py-4 rounded-lg font-bold text-lg hover:bg-bastard-100 transition-all shadow-minimal-lg transform hover:scale-105">
              Kontakt Os
            </button>
            <button className="btn-primary bg-transparent border-2 border-white text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-primary transition-all transform hover:scale-105">
              Se Pakker
            </button>
          </div>
        </div>
      </div>

      {/* Weekly Schedule */}
      <div className="mt-12 bg-white rounded-xl shadow-minimal-lg p-10 border-l-8 border-primary">
        <h3 className="text-3xl font-bold text-bastard-900 mb-8 text-center">Ugentligt Program</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <div className="border-l-4 border-accent-red pl-5 py-3 bg-bastard-50 rounded-r-lg hover:bg-bastard-100 transition-colors">
            <div className="font-bold text-bastard-900 text-lg">Mandag</div>
            <div className="text-sm text-bastard-700 mt-1">Åben Spilaften - 18:00-22:00</div>
          </div>
          <div className="border-l-4 border-accent-orange pl-5 py-3 bg-bastard-50 rounded-r-lg hover:bg-bastard-100 transition-colors">
            <div className="font-bold text-bastard-900 text-lg">Onsdag</div>
            <div className="text-sm text-bastard-700 mt-1">Quiz Night - 19:00-21:00</div>
          </div>
          <div className="border-l-4 border-accent-purple pl-5 py-3 bg-bastard-50 rounded-r-lg hover:bg-bastard-100 transition-colors">
            <div className="font-bold text-bastard-900 text-lg">Fredag</div>
            <div className="text-sm text-bastard-700 mt-1">Party Games - 20:00-24:00</div>
          </div>
          <div className="border-l-4 border-accent-cyan pl-5 py-3 bg-bastard-50 rounded-r-lg hover:bg-bastard-100 transition-colors">
            <div className="font-bold text-bastard-900 text-lg">Lørdag</div>
            <div className="text-sm text-bastard-700 mt-1">Familie Formiddag - 11:00-15:00</div>
          </div>
          <div className="border-l-4 border-accent-pink pl-5 py-3 bg-bastard-50 rounded-r-lg hover:bg-bastard-100 transition-colors">
            <div className="font-bold text-bastard-900 text-lg">Lørdag Aften</div>
            <div className="text-sm text-bastard-700 mt-1">D&D Sessions - 18:00-23:00</div>
          </div>
          <div className="border-l-4 border-primary pl-5 py-3 bg-bastard-50 rounded-r-lg hover:bg-bastard-100 transition-colors">
            <div className="font-bold text-bastard-900 text-lg">Søndag</div>
            <div className="text-sm text-bastard-700 mt-1">Brunch & Brætspil - 12:00-16:00</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;

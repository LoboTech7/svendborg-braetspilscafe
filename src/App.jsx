import React, { useState, useEffect } from 'react';
import { Menu, X, Clock, Phone, Mail, MapPin, Calendar, Dices, Users, Coffee, Heart } from 'lucide-react';
import GameLibrary from './components/GameLibrary';
import Events from './components/Events';
import Gallery from './components/Gallery';

export default function BraetspilscafeWebsite() {
  const [currentPage, setCurrentPage] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [bookingForm, setBookingForm] = useState({
    name: '', email: '', phone: '', date: '', time: '', guests: '', boardGame: ''
  });
  const [contactForm, setContactForm] = useState({
    name: '', email: '', message: ''
  });

  const navigation = [
    { name: 'Hjem', id: 'home' },
    { name: 'Spilbibliotek', id: 'games' },
    { name: 'Events', id: 'events' },
    { name: 'Galleri', id: 'gallery' },
    { name: 'Menu', id: 'menu' },
    { name: 'Om Os', id: 'about' },
    { name: 'Kontakt', id: 'contact' },
    { name: 'Book Bord', id: 'booking' }
  ];

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll to top when changing pages
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const menuItems = [
    { name: 'Kaffe & Te', price: '25-35 kr', description: 'Specialty kaffe, te og varm chokolade' },
    { name: 'Hjemmelavet Kage', price: '35 kr', description: 'Friskbagt dagligt' },
    { name: 'Sandwich & Panini', price: '65-85 kr', description: 'Lavet med lokale ingredienser' },
    { name: 'Salater', price: '75 kr', description: 'Friske og sunde muligheder' },
    { name: 'Snacks & Tapas', price: '45-95 kr', description: 'Perfekt til at dele' },
    { name: 'Øl & Sodavand', price: '30-45 kr', description: 'Lokale og importerede' }
  ];

  const handleBookingSubmit = () => {
    if (bookingForm.name && bookingForm.email && bookingForm.phone && bookingForm.date && bookingForm.time && bookingForm.guests) {
      alert(`Bordreservation bekræftet for ${bookingForm.name} den ${bookingForm.date} kl. ${bookingForm.time} - ${bookingForm.guests} personer`);
      setBookingForm({ name: '', email: '', phone: '', date: '', time: '', guests: '', boardGame: '' });
    } else {
      alert('Udfyld venligst alle felter');
    }
  };

  const handleContactSubmit = () => {
    if (contactForm.name && contactForm.email && contactForm.message) {
      alert(`Tak ${contactForm.name}! Vi vender tilbage til dig hurtigst muligt.`);
      setContactForm({ name: '', email: '', message: '' });
    } else {
      alert('Udfyld venligst alle felter');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-bastard-50 to-white">
      {/* Navigation - Apple-Level Glassmorphism */}
      <nav className={`glass-premium sticky top-0 z-50 transition-all duration-300 gpu-accelerated ${scrolled ? 'shadow-depth-lg' : 'shadow-depth'}`}>
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center cursor-pointer group" onClick={() => setCurrentPage('home')}>
              <Dices className="h-10 w-10 text-primary animate-levitate group-hover:text-accent-orange transition-all duration-300" />
              <span className="ml-3 text-2xl font-bold text-bastard-900 group-hover:text-gradient-premium transition-all duration-300 tracking-tight">Svendborg Brætspilscafe</span>
            </div>

            {/* Desktop Navigation - Premium Buttons */}
            <div className="hidden lg:flex space-x-3">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setCurrentPage(item.id)}
                  className={`px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 gpu-accelerated ${
                    currentPage === item.id
                      ? 'btn-apple-primary text-white shadow-depth-lg'
                      : 'btn-apple-secondary text-bastard-700 hover:text-primary'
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>

            {/* Mobile menu button - Enhanced */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-3 rounded-xl text-primary btn-apple-secondary transition-all duration-300"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden glass border-t border-bastard-200 animate-fadeIn">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setCurrentPage(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`block w-full text-left px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 ${
                    currentPage === item.id
                      ? 'text-white bg-primary shadow-dark'
                      : 'text-bastard-700 hover:text-primary hover:bg-bastard-100'
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Home Page */}
      {currentPage === 'home' && (
        <div>
          {/* Hero Section - Apple-Level Premium */}
          <div className="relative bg-gradient-hero text-white overflow-hidden">
            {/* Gradient Mesh Background */}
            <div className="absolute inset-0 gradient-mesh-1 opacity-30"></div>

            {/* Floating Elements with Enhanced Animation */}
            <div className="absolute inset-0 opacity-15">
              <div className="absolute top-20 left-10 text-9xl animate-levitate">🎲</div>
              <div className="absolute top-60 right-20 text-7xl animate-float stagger-2">🎮</div>
              <div className="absolute bottom-32 left-1/4 text-8xl animate-levitate stagger-3">♠️</div>
              <div className="absolute bottom-20 right-1/3 text-6xl animate-float stagger-4">🃏</div>
            </div>

            {/* Hero Content with Apple Spacing */}
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-34 md:py-40 relative z-10">
              <div className="text-center">
                {/* Apple-Level Typography */}
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-black mb-8 animate-fade-up drop-shadow-2xl tracking-tight leading-none">
                  Velkommen til<br />Svendborg Brætspilscafe
                </h1>
                <p className="text-2xl md:text-3xl mb-14 animate-fade-up opacity-95 drop-shadow-lg font-light tracking-wide stagger-1">
                  Hvor spil, mad og hygge mødes
                </p>

                {/* Premium CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-up stagger-2">
                  <button
                    onClick={() => setCurrentPage('booking')}
                    className="btn-apple-accent text-white px-12 py-5 rounded-2xl font-bold text-lg shadow-glow-lg gpu-accelerated group"
                  >
                    <span className="flex items-center gap-3">
                      Book Bord Nu
                      <span className="transform group-hover:translate-x-1 transition-transform duration-300">→</span>
                    </span>
                  </button>
                  <button
                    onClick={() => setCurrentPage('games')}
                    className="btn-apple-secondary border-2 border-white/30 text-white px-12 py-5 rounded-2xl font-bold text-lg backdrop-blur-lg gpu-accelerated"
                  >
                    Se Vores Spil
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Features - Premium Cards with Apple Depth */}
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-26">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <div className="card-premium p-10 text-center border-t-4 border-accent-red reveal-bottom stagger-1 gpu-accelerated">
                <div className="mb-6 flex justify-center">
                  <div className="relative">
                    <Dices className="h-16 w-16 text-accent-red animate-levitate" />
                    <div className="absolute inset-0 bg-accent-red/20 rounded-full blur-xl"></div>
                  </div>
                </div>
                <h3 className="text-3xl font-black mb-4 text-bastard-900 tracking-tight">500+ Brætspil</h3>
                <p className="text-bastard-600 leading-relaxed text-lg">Stort udvalg af klassikere og nye spil</p>
              </div>
              <div className="card-premium p-10 text-center border-t-4 border-accent-orange reveal-bottom stagger-2 gpu-accelerated">
                <div className="mb-6 flex justify-center">
                  <div className="relative">
                    <Coffee className="h-16 w-16 text-accent-orange animate-levitate stagger-1" />
                    <div className="absolute inset-0 bg-accent-orange/20 rounded-full blur-xl"></div>
                  </div>
                </div>
                <h3 className="text-3xl font-black mb-4 text-bastard-900 tracking-tight">Lækker Mad & Drikke</h3>
                <p className="text-bastard-600 leading-relaxed text-lg">Hjemmelavet med lokale ingredienser</p>
              </div>
              <div className="card-premium p-10 text-center border-t-4 border-accent-purple reveal-bottom stagger-3 gpu-accelerated">
                <div className="mb-6 flex justify-center">
                  <div className="relative">
                    <Heart className="h-16 w-16 text-accent-purple animate-levitate stagger-2" />
                    <div className="absolute inset-0 bg-accent-purple/20 rounded-full blur-xl"></div>
                  </div>
                </div>
                <h3 className="text-3xl font-black mb-4 text-bastard-900 tracking-tight">Hyggelig Atmosfære</h3>
                <p className="text-bastard-600 leading-relaxed text-lg">Perfekt til venner, familie og nye bekendtskaber</p>
              </div>
            </div>

            {/* Additional Info Section */}
            <div className="mt-16 bg-white rounded-xl shadow-minimal-lg p-10 border-l-8 border-primary">
              <h2 className="text-4xl font-bold text-center mb-10 gradient-text">Hvorfor Besøge Os?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="p-4 rounded-lg hover:bg-bastard-50 transition-colors duration-200">
                  <h3 className="text-xl font-bold mb-3 text-primary flex items-center">
                    <Users className="h-5 w-5 mr-2" />
                    For Alle Aldre
                  </h3>
                  <p className="text-bastard-800 leading-relaxed">Fra børnefamilier til erfarne spillere - vi har noget for alle.</p>
                </div>
                <div className="p-4 rounded-lg hover:bg-bastard-50 transition-colors duration-200">
                  <h3 className="text-xl font-bold mb-3 text-accent-orange flex items-center">
                    <Calendar className="h-5 w-5 mr-2" />
                    Events & Turneringer
                  </h3>
                  <p className="text-bastard-800 leading-relaxed">Deltag i ugentlige turneringer og særlige events.</p>
                </div>
                <div className="p-4 rounded-lg hover:bg-bastard-50 transition-colors duration-200">
                  <h3 className="text-xl font-bold mb-3 text-accent-purple flex items-center">
                    <Dices className="h-5 w-5 mr-2" />
                    Spil-Vejledning
                  </h3>
                  <p className="text-bastard-800 leading-relaxed">Vores venlige personale hjælper med at lære nye spil.</p>
                </div>
                <div className="p-4 rounded-lg hover:bg-bastard-50 transition-colors duration-200">
                  <h3 className="text-xl font-bold mb-3 text-accent-cyan flex items-center">
                    <Coffee className="h-5 w-5 mr-2" />
                    Gratis WiFi
                  </h3>
                  <p className="text-bastard-800 leading-relaxed">Hold kontakten mens du spiller og hygger.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Menu Page */}
      {currentPage === 'menu' && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-5xl font-bold text-center mb-4 gradient-text">Vores Menu</h2>
          <p className="text-center text-bastard-700 text-xl mb-12">Alt lavet med kærlighed og kvalitet</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {menuItems.map((item, index) => (
              <div key={index} className="card-hover bg-white rounded-xl shadow-minimal p-6 border-t-4 border-primary">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-bastard-900">{item.name}</h3>
                  <span className="text-accent-orange font-bold text-lg bg-bastard-100 px-3 py-1 rounded-lg">{item.price}</span>
                </div>
                <p className="text-bastard-700 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 bg-bastard-50 rounded-xl p-10 text-center shadow-minimal-lg border-2 border-bastard-200">
            <p className="text-xl text-bastard-900 leading-relaxed">
              <strong className="text-primary text-2xl">Spil-leje:</strong> Gratis når du køber mad eller drikke!
              <br />
              <span className="text-base text-bastard-600 mt-3 block">Kun 50 kr/time hvis du ikke køber noget</span>
            </p>
          </div>
        </div>
      )}

      {/* About Page */}
      {currentPage === 'about' && (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-5xl font-bold text-center mb-10 gradient-text">Om Svendborg Brætspilscafe</h2>
          <div className="bg-white rounded-xl shadow-minimal-xl p-10 md:p-14 border-t-8 border-primary">
            <p className="text-lg text-bastard-800 mb-6 leading-relaxed">
              Velkommen til Svendborg Brætspilscafe, hvor passion for brætspil møder hyggeligt samvær og lækker mad.
              Vi åbnede vores døre med en simpel vision: at skabe et sted hvor mennesker kan mødes, have det sjovt og
              dele glæden ved brætspil.
            </p>
            <p className="text-lg text-bastard-800 mb-6 leading-relaxed">
              Med over 500 forskellige brætspil i vores samling har vi noget for enhver smag - fra klassiske familiespil
              til komplekse strategispil. Vores dedikerede personale er altid klar til at hjælpe dig med at finde det
              perfekte spil eller lære dig et nyt.
            </p>
            <p className="text-lg text-bastard-800 mb-8 leading-relaxed">
              Vi tror på kvalitet i alt, vi gør. Derfor laver vi alt vores mad fra bunden med friske, lokale ingredienser.
              Vores kaffe er specialty-kaffe fra lokale risteri, og vi har et omhyggeligt udvalg af drikkevarer til alle
              smagspræferencer.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="bg-bastard-50 p-7 rounded-xl shadow-minimal border-l-4 border-accent-red">
                <h3 className="font-bold text-2xl mb-3 text-bastard-900">Vores Mission</h3>
                <p className="text-bastard-700 leading-relaxed">At bringe mennesker sammen gennem glæden ved brætspil og skabe uforglemmelige øjeblikke.</p>
              </div>
              <div className="bg-bastard-50 p-7 rounded-xl shadow-minimal border-l-4 border-accent-purple">
                <h3 className="font-bold text-2xl mb-3 text-bastard-900">Vores Værdier</h3>
                <p className="text-bastard-700 leading-relaxed">Fællesskab, kvalitet, inklusion og sjov for alle aldersgrupper.</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Contact Page */}
      {currentPage === 'contact' && (
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Kontakt Os</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-semibold mb-6 text-gray-800">Send os en besked</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-bold text-bastard-900 mb-2">Navn</label>
                  <input
                    type="text"
                    value={contactForm.name}
                    onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
                    className="input-premium w-full"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-bastard-900 mb-2">Email</label>
                  <input
                    type="email"
                    value={contactForm.email}
                    onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
                    className="input-premium w-full"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-bastard-900 mb-2">Besked</label>
                  <textarea
                    rows="4"
                    value={contactForm.message}
                    onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
                    className="input-premium w-full resize-none"
                  ></textarea>
                </div>
                <button
                  onClick={handleContactSubmit}
                  className="btn-apple-primary w-full text-white py-5 rounded-xl font-bold text-lg gpu-accelerated group"
                >
                  <span className="flex items-center justify-center gap-2">
                    Send Besked
                    <span className="transform group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </span>
                </button>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-2xl font-semibold mb-6 text-gray-800">Find os her</h3>
                <div className="space-y-4">
                  <div className="flex items-start p-3 rounded-lg hover:bg-bastard-50 transition-colors">
                    <MapPin className="h-6 w-6 text-accent-red mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-bold text-bastard-900">Adresse</p>
                      <p className="text-bastard-700">Centrumgade 123, 5700 Svendborg</p>
                    </div>
                  </div>
                  <div className="flex items-start p-3 rounded-lg hover:bg-bastard-50 transition-colors">
                    <Phone className="h-6 w-6 text-accent-orange mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-bold text-bastard-900">Telefon</p>
                      <p className="text-bastard-700">+45 12 34 56 78</p>
                    </div>
                  </div>
                  <div className="flex items-start p-3 rounded-lg hover:bg-bastard-50 transition-colors">
                    <Mail className="h-6 w-6 text-accent-cyan mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-bold text-bastard-900">Email</p>
                      <p className="text-bastard-700">info@svendborgbraetspil.dk</p>
                    </div>
                  </div>
                  <div className="flex items-start p-3 rounded-lg hover:bg-bastard-50 transition-colors">
                    <Clock className="h-6 w-6 text-accent-purple mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-bold text-bastard-900">Åbningstider</p>
                      <p className="text-bastard-700">Man-Tor: 12:00 - 22:00</p>
                      <p className="text-bastard-700">Fre-Lør: 12:00 - 24:00</p>
                      <p className="text-bastard-700">Søndag: 12:00 - 20:00</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Game Library Page */}
      {currentPage === 'games' && <GameLibrary />}

      {/* Events Page */}
      {currentPage === 'events' && <Events />}

      {/* Gallery Page */}
      {currentPage === 'gallery' && <Gallery />}

      {/* Booking Page */}
      {currentPage === 'booking' && (
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-800">Book Dit Bord</h2>
          <p className="text-center text-gray-600 mb-12">Sikr dig en plads hos os</p>
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Fulde Navn</label>
                <input
                  type="text"
                  value={bookingForm.name}
                  onChange={(e) => setBookingForm({...bookingForm, name: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  value={bookingForm.email}
                  onChange={(e) => setBookingForm({...bookingForm, email: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Telefon</label>
                <input
                  type="tel"
                  value={bookingForm.phone}
                  onChange={(e) => setBookingForm({...bookingForm, phone: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="+45"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Antal Gæster</label>
                <select
                  value={bookingForm.guests}
                  onChange={(e) => setBookingForm({...bookingForm, guests: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                >
                  <option value="">Vælg antal</option>
                  <option value="1">1 person</option>
                  <option value="2">2 personer</option>
                  <option value="3">3 personer</option>
                  <option value="4">4 personer</option>
                  <option value="5">5 personer</option>
                  <option value="6">6 personer</option>
                  <option value="7+">7+ personer</option>
                </select>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Dato</label>
                  <input
                    type="date"
                    value={bookingForm.date}
                    onChange={(e) => setBookingForm({...bookingForm, date: e.target.value})}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Tidspunkt</label>
                  <input
                    type="time"
                    value={bookingForm.time}
                    onChange={(e) => setBookingForm({...bookingForm, time: e.target.value})}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Ønsker du et specifikt brætspil? (valgfrit)</label>
                <input
                  type="text"
                  value={bookingForm.boardGame}
                  onChange={(e) => setBookingForm({...bookingForm, boardGame: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="f.eks. Catan, Carcassonne..."
                />
              </div>
              <button
                onClick={handleBookingSubmit}
                className="btn-apple-accent w-full text-white py-5 rounded-xl font-bold text-lg gpu-accelerated group shadow-glow"
              >
                <span className="flex items-center justify-center gap-3">
                  <Calendar className="h-6 w-6 transform group-hover:rotate-12 transition-transform duration-300" />
                  Bekræft Reservation
                  <span className="transform group-hover:translate-x-1 transition-transform duration-300">→</span>
                </span>
              </button>
              <p className="text-sm text-gray-500 text-center mt-4">
                Vi sender en bekræftelse til din email inden for 24 timer
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-primary text-white mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <Dices className="h-8 w-8 text-accent-pink mr-2 animate-gentle-float" />
              <span className="text-2xl font-bold">Svendborg Brætspilscafe</span>
            </div>
            <p className="text-bastard-200 text-lg mb-2">&copy; 2025 Svendborg Brætspilscafe. Alle rettigheder forbeholdes.</p>
            <p className="text-bastard-300 text-sm flex items-center justify-center gap-1">
              Lavet med <Heart className="h-4 w-4 text-accent-pink fill-accent-pink animate-pulse" /> til brætspilsentusiaster
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
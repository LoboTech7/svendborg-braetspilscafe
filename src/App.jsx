import React, { useState } from 'react';
import { Menu, X, Clock, Phone, Mail, MapPin, Calendar, Dices, Users, Coffee, Heart } from 'lucide-react';

export default function BraetspilscafeWebsite() {
  const [currentPage, setCurrentPage] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [bookingForm, setBookingForm] = useState({
    name: '', email: '', phone: '', date: '', time: '', guests: '', boardGame: ''
  });
  const [contactForm, setContactForm] = useState({
    name: '', email: '', message: ''
  });

  const navigation = [
    { name: 'Hjem', id: 'home' },
    { name: 'Menu', id: 'menu' },
    { name: 'Om Os', id: 'about' },
    { name: 'Kontakt', id: 'contact' },
    { name: 'Book Bord', id: 'booking' }
  ];

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
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50">
      {/* Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Dices className="h-8 w-8 text-purple-600" />
              <span className="ml-2 text-2xl font-bold text-gray-800">Svendborg Brætspilscafe</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setCurrentPage(item.id)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    currentPage === item.id
                      ? 'text-purple-600 bg-purple-50'
                      : 'text-gray-700 hover:text-purple-600 hover:bg-purple-50'
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setCurrentPage(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium ${
                    currentPage === item.id
                      ? 'text-purple-600 bg-purple-50'
                      : 'text-gray-700 hover:text-purple-600 hover:bg-purple-50'
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
          {/* Hero Section */}
          <div className="relative bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
              <div className="text-center">
                <h1 className="text-5xl md:text-6xl font-bold mb-6">Velkommen til Svendborg Brætspilscafe</h1>
                <p className="text-xl md:text-2xl mb-8">Hvor spil, mad og hygge mødes</p>
                <button
                  onClick={() => setCurrentPage('booking')}
                  className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold text-lg hover:bg-purple-50 transition-colors shadow-lg"
                >
                  Book Bord Nu
                </button>
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-md text-center hover:shadow-xl transition-shadow">
                <Dices className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">500+ Brætspil</h3>
                <p className="text-gray-600">Stort udvalg af klassikere og nye spil</p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-md text-center hover:shadow-xl transition-shadow">
                <Coffee className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Lækker Mad & Drikke</h3>
                <p className="text-gray-600">Hjemmelavet med lokale ingredienser</p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-md text-center hover:shadow-xl transition-shadow">
                <Heart className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Hyggelig Atmosfære</h3>
                <p className="text-gray-600">Perfekt til venner, familie og nye bekendtskaber</p>
              </div>
            </div>

            {/* Additional Info Section */}
            <div className="mt-16 bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Hvorfor Besøge Os?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-purple-600">For Alle Aldre</h3>
                  <p className="text-gray-700">Fra børnefamilier til erfarne spillere - vi har noget for alle.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-purple-600">Events & Turneringer</h3>
                  <p className="text-gray-700">Deltag i ugentlige turneringer og særlige events.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-purple-600">Spil-Vejledning</h3>
                  <p className="text-gray-700">Vores venlige personale hjælper med at lære nye spil.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-purple-600">Gratis WiFi</h3>
                  <p className="text-gray-700">Hold kontakten mens du spiller og hygger.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Menu Page */}
      {currentPage === 'menu' && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-800">Vores Menu</h2>
          <p className="text-center text-gray-600 mb-12">Alt lavet med kærlighed og kvalitet</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {menuItems.map((item, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow border-t-4 border-purple-500">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-semibold text-gray-800">{item.name}</h3>
                  <span className="text-purple-600 font-bold text-lg">{item.price}</span>
                </div>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 bg-purple-50 rounded-xl p-8 text-center">
            <p className="text-lg text-gray-700">
              <strong>Spil-leje:</strong> Gratis når du køber mad eller drikke! 
              <br />
              <span className="text-sm text-gray-600 mt-2 block">Kun 50 kr/time hvis du ikke køber noget</span>
            </p>
          </div>
        </div>
      )}

      {/* About Page */}
      {currentPage === 'about' && (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Om Svendborg Brætspilscafe</h2>
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Velkommen til Svendborg Brætspilscafe, hvor passion for brætspil møder hyggeligt samvær og lækker mad. 
              Vi åbnede vores døre med en simpel vision: at skabe et sted hvor mennesker kan mødes, have det sjovt og 
              dele glæden ved brætspil.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Med over 500 forskellige brætspil i vores samling har vi noget for enhver smag - fra klassiske familiespil 
              til komplekse strategispil. Vores dedikerede personale er altid klar til at hjælpe dig med at finde det 
              perfekte spil eller lære dig et nyt.
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Vi tror på kvalitet i alt, vi gør. Derfor laver vi alt vores mad fra bunden med friske, lokale ingredienser. 
              Vores kaffe er specialty-kaffe fra lokale risteri, og vi har et omhyggeligt udvalg af drikkevarer til alle 
              smagspræferencer.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="font-semibold text-xl mb-2 text-gray-800">Vores Mission</h3>
                <p className="text-gray-700">At bringe mennesker sammen gennem glæden ved brætspil og skabe uforglemmelige øjeblikke.</p>
              </div>
              <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="font-semibold text-xl mb-2 text-gray-800">Vores Værdier</h3>
                <p className="text-gray-700">Fællesskab, kvalitet, inklusion og sjov for alle aldersgrupper.</p>
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
                  <label className="block text-sm font-medium text-gray-700 mb-1">Navn</label>
                  <input
                    type="text"
                    value={contactForm.name}
                    onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    value={contactForm.email}
                    onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Besked</label>
                  <textarea
                    rows="4"
                    value={contactForm.message}
                    onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  ></textarea>
                </div>
                <button
                  onClick={handleContactSubmit}
                  className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
                >
                  Send Besked
                </button>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-2xl font-semibold mb-6 text-gray-800">Find os her</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-purple-600 mr-3 mt-1" />
                    <div>
                      <p className="font-medium text-gray-800">Adresse</p>
                      <p className="text-gray-600">Centrumgade 123, 5700 Svendborg</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Phone className="h-6 w-6 text-purple-600 mr-3 mt-1" />
                    <div>
                      <p className="font-medium text-gray-800">Telefon</p>
                      <p className="text-gray-600">+45 12 34 56 78</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Mail className="h-6 w-6 text-purple-600 mr-3 mt-1" />
                    <div>
                      <p className="font-medium text-gray-800">Email</p>
                      <p className="text-gray-600">info@svendborgbraetspil.dk</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Clock className="h-6 w-6 text-purple-600 mr-3 mt-1" />
                    <div>
                      <p className="font-medium text-gray-800">Åbningstider</p>
                      <p className="text-gray-600">Man-Tor: 12:00 - 22:00</p>
                      <p className="text-gray-600">Fre-Lør: 12:00 - 24:00</p>
                      <p className="text-gray-600">Søndag: 12:00 - 20:00</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

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
                className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors flex items-center justify-center"
              >
                <Calendar className="h-5 w-5 mr-2" />
                Bekræft Reservation
              </button>
              <p className="text-sm text-gray-500 text-center mt-4">
                Vi sender en bekræftelse til din email inden for 24 timer
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-gray-800 text-white mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <p className="text-gray-400">&copy; 2025 Svendborg Brætspilscafe. Alle rettigheder forbeholdes.</p>
            <p className="text-gray-500 text-sm mt-2">Lavet med ❤️ til brætspilsentusiaster</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
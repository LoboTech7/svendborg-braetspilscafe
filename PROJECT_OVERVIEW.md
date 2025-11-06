# Svendborg Brætspilscafe - Website Project

## Project Overview

This is a modern, interactive website for Svendborg Brætspilscafe, a board game cafe in Svendborg, Denmark. The website features a beautiful, responsive design built with React, Vite, and Tailwind CSS.

## Technology Stack

- **Frontend Framework**: React 19.1.1
- **Build Tool**: Vite 7.1.7
- **Styling**: Tailwind CSS 4.1.16
- **Icons**: Lucide React 0.552.0
- **Language**: JavaScript (JSX)

## Project Structure

```
svendborg-braetspilscafe/
├── src/
│   ├── components/
│   │   ├── GameLibrary.jsx    # Game catalog with search/filter
│   │   ├── Events.jsx          # Events and tournaments page
│   │   └── Gallery.jsx         # Image gallery with modal
│   ├── App.jsx                 # Main application component
│   ├── main.jsx                # Entry point
│   ├── index.css               # Global styles and animations
│   └── App.css                 # Component-specific styles
├── public/                     # Static assets
├── index.html                  # HTML template with meta tags
├── package.json                # Dependencies and scripts
├── vite.config.js              # Vite configuration
├── tailwind.config.js          # Tailwind configuration
└── postcss.config.js           # PostCSS configuration
```

## Features Implemented

### 1. Multi-Page Navigation
- **Home**: Hero section with call-to-action buttons
- **Spilbibliotek (Game Library)**: Searchable catalog of 500+ games
- **Events**: Calendar of upcoming events and tournaments
- **Galleri (Gallery)**: Image gallery with modal viewer
- **Menu**: Food and beverage offerings
- **Om Os (About Us)**: Cafe story and mission
- **Kontakt (Contact)**: Contact form and location information
- **Book Bord (Booking)**: Table reservation system

### 2. Game Library Component
- Search functionality by game name or description
- Filter by category (Strategy, Family, Party, Cooperative, Adventure)
- Filter by player count (1-2, 3-4, 5+)
- 12+ featured games with details:
  - Game name and description
  - Player count and duration
  - Difficulty level badges
  - Star ratings
  - Reserve button

### 3. Events Component
- 8+ upcoming events and tournaments
- Event categories with color coding:
  - Tournaments (yellow/orange)
  - Family events (green/teal)
  - Special events (purple/pink)
  - Social events (blue/cyan)
- Detailed event information (date, time, duration, participants, price)
- Weekly schedule overview
- Custom event booking section

### 4. Gallery Component
- 12 image placeholders with gradient backgrounds
- Click to view in full-screen modal
- Keyboard navigation (Arrow keys, Escape)
- Previous/Next navigation buttons
- Image counter display

### 5. Interactive Features
- Smooth page transitions
- Scroll-based navbar effects
- Hover animations on cards and buttons
- Mobile-responsive hamburger menu
- Form validation for booking and contact
- Custom animations (fadeIn, slideIn, scaleIn, pulse, float)

### 6. Responsive Design
- Mobile-first approach
- Breakpoints for tablet and desktop
- Adaptive layouts for all screen sizes
- Touch-friendly interactive elements

### 7. Custom Styling & Animations
- Custom color scheme (purple, pink, blue gradients)
- Smooth transitions on all interactive elements
- Custom scrollbar styling
- Pulse animation on logo
- Hover effects on cards and buttons
- CSS animations defined in index.css

### 8. SEO & Meta Tags
- Comprehensive meta tags for search engines
- Open Graph tags for social media sharing
- Twitter card support
- Proper HTML semantics
- Danish language support (lang="da")
- Custom dice emoji favicon

## Running the Project

### Development Mode
```bash
npm run dev
```
Visit http://localhost:5173

### Build for Production
```bash
npm run build
```
Output will be in the `dist/` directory

### Preview Production Build
```bash
npm run preview
```

### Linting
```bash
npm run lint
```

### Testing
```bash
npm run test           # Run tests in watch mode
npm run test:ui        # Run tests with UI
npm run test:run       # Run tests once
npm run test:coverage  # Run tests with coverage
```

## Key Design Decisions

1. **Single Page Application (SPA)**: Uses client-side routing with React state management for fast page transitions
2. **Component-Based Architecture**: Modular components for easy maintenance and reusability
3. **Tailwind CSS**: Utility-first CSS for rapid development and consistent styling
4. **Mobile-First**: Ensures great experience on all devices
5. **Accessible**: Focus states, keyboard navigation, semantic HTML
6. **Performance**: Optimized bundle size, lazy loading where beneficial

## Color Palette

- **Primary Purple**: #9333ea (purple-600)
- **Secondary Pink**: #ec4899 (pink-600)
- **Accent Blue**: #3b82f6 (blue-600)
- **Gray Scale**: Tailwind's gray palette
- **Gradients**: Multi-color gradients for visual interest

## Content Highlights

### Cafe Information (Placeholder Data)
- **Address**: Centrumgade 123, 5700 Svendborg
- **Phone**: +45 12 34 56 78
- **Email**: info@svendborgbraetspil.dk
- **Opening Hours**:
  - Mon-Thu: 12:00 - 22:00
  - Fri-Sat: 12:00 - 24:00
  - Sunday: 12:00 - 20:00

### Menu Items
- Coffee & Tea (25-35 kr)
- Homemade Cake (35 kr)
- Sandwiches & Panini (65-85 kr)
- Salads (75 kr)
- Snacks & Tapas (45-95 kr)
- Beer & Soda (30-45 kr)
- **Game rental**: Free with purchase, 50 kr/hour without

### Featured Games
- Catan, Azul, Pandemic, Ticket to Ride
- Wingspan, Codenames, Gloomhaven
- 7 Wonders, Kingdomino, Splendor
- Carcassonne, Dixit, and 500+ more

## Future Enhancements

1. **Backend Integration**
   - Real database for games, events, and bookings
   - User authentication and profiles
   - Online payment for reservations
   - Email confirmations

2. **Additional Features**
   - Blog section for game reviews
   - User reviews and ratings
   - Newsletter subscription
   - Social media feed integration
   - Real-time table availability
   - Online store for game purchases

3. **Performance Optimizations**
   - Image optimization with lazy loading
   - Code splitting for larger components
   - Service worker for offline functionality
   - CDN integration for static assets

4. **Accessibility Improvements**
   - ARIA labels for all interactive elements
   - Screen reader optimization
   - High contrast mode
   - Reduced motion preferences

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

This is a custom website built for Svendborg Brætspilscafe. All rights reserved.

## Contact

For questions about this project, please contact the cafe directly through the website's contact form.

---

**Built with ❤️ for board game enthusiasts in Svendborg**

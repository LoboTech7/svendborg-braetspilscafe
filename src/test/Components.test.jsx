import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import BraetspilscafeWebsite from '../App';

describe('Component Rendering Tests', () => {
  it('renders the logo and site title', () => {
    render(<BraetspilscafeWebsite />);

    expect(screen.getByText('Svendborg Brætspilscafe')).toBeInTheDocument();
  });

  it('renders footer with copyright information', () => {
    render(<BraetspilscafeWebsite />);

    expect(screen.getByText(/2025 Svendborg Brætspilscafe/)).toBeInTheDocument();
    expect(screen.getByText(/Lavet med ❤️ til brætspilsentusiaster/)).toBeInTheDocument();
  });

  it('renders home page features section', () => {
    render(<BraetspilscafeWebsite />);

    expect(screen.getByText('500+ Brætspil')).toBeInTheDocument();
    expect(screen.getByText('Lækker Mad & Drikke')).toBeInTheDocument();
    expect(screen.getByText('Hyggelig Atmosfære')).toBeInTheDocument();
  });

  it('renders additional info section on home page', () => {
    render(<BraetspilscafeWebsite />);

    expect(screen.getByText('Hvorfor Besøge Os?')).toBeInTheDocument();
    expect(screen.getByText('For Alle Aldre')).toBeInTheDocument();
    expect(screen.getByText('Events & Turneringer')).toBeInTheDocument();
    expect(screen.getByText('Spil-Vejledning')).toBeInTheDocument();
    expect(screen.getByText('Gratis WiFi')).toBeInTheDocument();
  });

  it('renders all menu items on menu page', async () => {
    const user = userEvent.setup();
    render(<BraetspilscafeWebsite />);

    const menuButton = screen.getAllByText('Menu')[0];
    await user.click(menuButton);

    expect(screen.getByText('Kaffe & Te')).toBeInTheDocument();
    expect(screen.getByText('25-35 kr')).toBeInTheDocument();
    expect(screen.getByText('Hjemmelavet Kage')).toBeInTheDocument();
    expect(screen.getByText('35 kr')).toBeInTheDocument();
    expect(screen.getByText('Sandwich & Panini')).toBeInTheDocument();
    expect(screen.getByText('65-85 kr')).toBeInTheDocument();
    expect(screen.getByText('Salater')).toBeInTheDocument();
    expect(screen.getByText('75 kr')).toBeInTheDocument();
    expect(screen.getByText('Snacks & Tapas')).toBeInTheDocument();
    expect(screen.getByText('45-95 kr')).toBeInTheDocument();
    expect(screen.getByText('Øl & Sodavand')).toBeInTheDocument();
    expect(screen.getByText('30-45 kr')).toBeInTheDocument();
  });

  it('renders game rental information on menu page', async () => {
    const user = userEvent.setup();
    render(<BraetspilscafeWebsite />);

    const menuButton = screen.getAllByText('Menu')[0];
    await user.click(menuButton);

    expect(screen.getByText(/Spil-leje:/)).toBeInTheDocument();
    expect(screen.getByText(/Gratis når du køber mad eller drikke!/)).toBeInTheDocument();
    expect(screen.getByText(/Kun 50 kr\/time hvis du ikke køber noget/)).toBeInTheDocument();
  });

  it('renders about page content with mission and values', async () => {
    const user = userEvent.setup();
    render(<BraetspilscafeWebsite />);

    const aboutButton = screen.getByText('Om Os');
    await user.click(aboutButton);

    expect(screen.getByText('Om Svendborg Brætspilscafe')).toBeInTheDocument();
    expect(screen.getByText('Vores Mission')).toBeInTheDocument();
    expect(screen.getByText('Vores Værdier')).toBeInTheDocument();
    expect(screen.getByText(/Med over 500 forskellige brætspil/)).toBeInTheDocument();
  });

  it('renders contact information on contact page', async () => {
    const user = userEvent.setup();
    render(<BraetspilscafeWebsite />);

    const contactButton = screen.getByText('Kontakt');
    await user.click(contactButton);

    expect(screen.getByText('Find os her')).toBeInTheDocument();
    expect(screen.getByText('Centrumgade 123, 5700 Svendborg')).toBeInTheDocument();
    expect(screen.getByText('+45 12 34 56 78')).toBeInTheDocument();
    expect(screen.getByText('info@svendborgbraetspil.dk')).toBeInTheDocument();
  });

  it('renders opening hours on contact page', async () => {
    const user = userEvent.setup();
    render(<BraetspilscafeWebsite />);

    const contactButton = screen.getByText('Kontakt');
    await user.click(contactButton);

    expect(screen.getByText('Åbningstider')).toBeInTheDocument();
    expect(screen.getByText('Man-Tor: 12:00 - 22:00')).toBeInTheDocument();
    expect(screen.getByText('Fre-Lør: 12:00 - 24:00')).toBeInTheDocument();
    expect(screen.getByText('Søndag: 12:00 - 20:00')).toBeInTheDocument();
  });

  it('renders booking confirmation message', async () => {
    const user = userEvent.setup();
    render(<BraetspilscafeWebsite />);

    const bookingButton = screen.getAllByText('Book Bord')[0];
    await user.click(bookingButton);

    expect(screen.getByText(/Vi sender en bekræftelse til din email inden for 24 timer/)).toBeInTheDocument();
  });

  it('renders guest options in booking form', async () => {
    const user = userEvent.setup();
    render(<BraetspilscafeWebsite />);

    const bookingButton = screen.getAllByText('Book Bord')[0];
    await user.click(bookingButton);

    const guestSelect = screen.getByLabelText('Antal Gæster');
    expect(guestSelect).toBeInTheDocument();

    const options = Array.from(guestSelect.options).map(option => option.value);
    expect(options).toContain('1');
    expect(options).toContain('2');
    expect(options).toContain('3');
    expect(options).toContain('4');
    expect(options).toContain('5');
    expect(options).toContain('6');
    expect(options).toContain('7+');
  });
});

import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import BraetspilscafeWebsite from '../App';

describe('Navigation Tests', () => {
  it('renders navigation menu with all menu items', () => {
    render(<BraetspilscafeWebsite />);

    expect(screen.getByText('Hjem')).toBeInTheDocument();
    expect(screen.getByText('Menu')).toBeInTheDocument();
    expect(screen.getByText('Om Os')).toBeInTheDocument();
    expect(screen.getByText('Kontakt')).toBeInTheDocument();
    expect(screen.getByText('Book Bord')).toBeInTheDocument();
  });

  it('displays home page by default', () => {
    render(<BraetspilscafeWebsite />);

    expect(screen.getByText('Velkommen til Svendborg Brætspilscafe')).toBeInTheDocument();
    expect(screen.getByText('Hvor spil, mad og hygge mødes')).toBeInTheDocument();
  });

  it('navigates to menu page when menu button is clicked', async () => {
    const user = userEvent.setup();
    render(<BraetspilscafeWebsite />);

    const menuButton = screen.getAllByText('Menu')[0];
    await user.click(menuButton);

    expect(screen.getByText('Vores Menu')).toBeInTheDocument();
    expect(screen.getByText('Alt lavet med kærlighed og kvalitet')).toBeInTheDocument();
  });

  it('navigates to about page when Om Os button is clicked', async () => {
    const user = userEvent.setup();
    render(<BraetspilscafeWebsite />);

    const aboutButton = screen.getByText('Om Os');
    await user.click(aboutButton);

    expect(screen.getByText('Om Svendborg Brætspilscafe')).toBeInTheDocument();
  });

  it('navigates to contact page when Kontakt button is clicked', async () => {
    const user = userEvent.setup();
    render(<BraetspilscafeWebsite />);

    const contactButton = screen.getByText('Kontakt');
    await user.click(contactButton);

    expect(screen.getByText('Kontakt Os')).toBeInTheDocument();
  });

  it('navigates to booking page when Book Bord button is clicked', async () => {
    const user = userEvent.setup();
    render(<BraetspilscafeWebsite />);

    const bookingButton = screen.getAllByText('Book Bord')[0];
    await user.click(bookingButton);

    expect(screen.getByText('Book Dit Bord')).toBeInTheDocument();
    expect(screen.getByText('Sikr dig en plads hos os')).toBeInTheDocument();
  });

  it('highlights active navigation item', async () => {
    const user = userEvent.setup();
    render(<BraetspilscafeWebsite />);

    const menuButton = screen.getAllByText('Menu')[0];
    await user.click(menuButton);

    expect(menuButton).toHaveClass('text-purple-600', 'bg-purple-50');
  });

  it('navigates from hero "Book Bord Nu" button', async () => {
    const user = userEvent.setup();
    render(<BraetspilscafeWebsite />);

    const heroBookingButton = screen.getByText('Book Bord Nu');
    await user.click(heroBookingButton);

    expect(screen.getByText('Book Dit Bord')).toBeInTheDocument();
  });
});

import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import BraetspilscafeWebsite from '../App';

describe('Accessibility Tests', () => {
  it('form labels are properly associated with inputs on booking page', async () => {
    const user = userEvent.setup();
    render(<BraetspilscafeWebsite />);

    const bookingButton = screen.getAllByText('Book Bord')[0];
    await user.click(bookingButton);

    // Check that labels are associated with inputs
    const nameInput = screen.getByLabelText('Fulde Navn');
    const emailInput = screen.getByLabelText('Email');
    const phoneInput = screen.getByLabelText('Telefon');
    const guestsSelect = screen.getByLabelText('Antal Gæster');
    const dateInput = screen.getByLabelText('Dato');
    const timeInput = screen.getByLabelText('Tidspunkt');

    expect(nameInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(phoneInput).toBeInTheDocument();
    expect(guestsSelect).toBeInTheDocument();
    expect(dateInput).toBeInTheDocument();
    expect(timeInput).toBeInTheDocument();
  });

  it('form labels are properly associated with inputs on contact page', async () => {
    const user = userEvent.setup();
    render(<BraetspilscafeWebsite />);

    const contactButton = screen.getByText('Kontakt');
    await user.click(contactButton);

    // Check that labels are associated with inputs
    const nameInput = screen.getByLabelText('Navn');
    const emailInput = screen.getByLabelText('Email');
    const messageInput = screen.getByLabelText('Besked');

    expect(nameInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(messageInput).toBeInTheDocument();
  });

  it('navigation buttons have accessible text', () => {
    render(<BraetspilscafeWebsite />);

    const navButtons = ['Hjem', 'Menu', 'Om Os', 'Kontakt', 'Book Bord'];

    navButtons.forEach(buttonText => {
      expect(screen.getAllByText(buttonText).length).toBeGreaterThanOrEqual(1);
    });
  });

  it('form inputs have proper input types', async () => {
    const user = userEvent.setup();
    render(<BraetspilscafeWebsite />);

    const bookingButton = screen.getAllByText('Book Bord')[0];
    await user.click(bookingButton);

    const nameInput = screen.getByLabelText('Fulde Navn');
    const emailInput = screen.getByLabelText('Email');
    const phoneInput = screen.getByLabelText('Telefon');
    const dateInput = screen.getByLabelText('Dato');
    const timeInput = screen.getByLabelText('Tidspunkt');

    expect(nameInput).toHaveAttribute('type', 'text');
    expect(emailInput).toHaveAttribute('type', 'email');
    expect(phoneInput).toHaveAttribute('type', 'tel');
    expect(dateInput).toHaveAttribute('type', 'date');
    expect(timeInput).toHaveAttribute('type', 'time');
  });

  it('buttons have descriptive text content', async () => {
    const user = userEvent.setup();
    render(<BraetspilscafeWebsite />);

    expect(screen.getByText('Book Bord Nu')).toBeInTheDocument();

    const bookingButton = screen.getAllByText('Book Bord')[0];
    await user.click(bookingButton);

    expect(screen.getByText('Bekræft Reservation')).toBeInTheDocument();
  });

  it('contact form submit button has descriptive text', async () => {
    const user = userEvent.setup();
    render(<BraetspilscafeWebsite />);

    const contactButton = screen.getByText('Kontakt');
    await user.click(contactButton);

    expect(screen.getByText('Send Besked')).toBeInTheDocument();
  });

  it('images have alternative content via icons', () => {
    const { container } = render(<BraetspilscafeWebsite />);

    // Icons are used throughout - check that they are present
    const svgElements = container.querySelectorAll('svg');
    expect(svgElements.length).toBeGreaterThan(0);
  });

  it('form fields have focus states', async () => {
    const user = userEvent.setup();
    render(<BraetspilscafeWebsite />);

    const bookingButton = screen.getAllByText('Book Bord')[0];
    await user.click(bookingButton);

    const nameInput = screen.getByLabelText('Fulde Navn');

    // Check that input has focus-related classes
    expect(nameInput.className).toContain('focus:ring');
  });

  it('headings have proper hierarchy', async () => {
    render(<BraetspilscafeWebsite />);

    const mainHeading = screen.getByText('Velkommen til Svendborg Brætspilscafe');
    expect(mainHeading.tagName).toBe('H1');
  });

  it('semantic HTML is used for sections', async () => {
    const user = userEvent.setup();
    const { container } = render(<BraetspilscafeWebsite />);

    // Check for nav element
    const navElements = container.querySelectorAll('nav');
    expect(navElements.length).toBeGreaterThan(0);

    // Check for footer element
    const footerElements = container.querySelectorAll('footer');
    expect(footerElements.length).toBeGreaterThan(0);
  });

  it('phone input has proper placeholder', async () => {
    const user = userEvent.setup();
    render(<BraetspilscafeWebsite />);

    const bookingButton = screen.getAllByText('Book Bord')[0];
    await user.click(bookingButton);

    const phoneInput = screen.getByLabelText('Telefon');
    expect(phoneInput).toHaveAttribute('placeholder', '+45');
  });

  it('board game input has helpful placeholder', async () => {
    const user = userEvent.setup();
    render(<BraetspilscafeWebsite />);

    const bookingButton = screen.getAllByText('Book Bord')[0];
    await user.click(bookingButton);

    const boardGameInput = screen.getByLabelText(/Ønsker du et specifikt brætspil/i);
    expect(boardGameInput).toHaveAttribute('placeholder', 'f.eks. Catan, Carcassonne...');
  });

  it('guest selector has default option with instruction', async () => {
    const user = userEvent.setup();
    render(<BraetspilscafeWebsite />);

    const bookingButton = screen.getAllByText('Book Bord')[0];
    await user.click(bookingButton);

    const guestSelect = screen.getByLabelText('Antal Gæster');
    const firstOption = guestSelect.options[0];
    expect(firstOption.value).toBe('');
    expect(firstOption.text).toBe('Vælg antal');
  });

  it('textarea has proper rows attribute', async () => {
    const user = userEvent.setup();
    render(<BraetspilscafeWebsite />);

    const contactButton = screen.getByText('Kontakt');
    await user.click(contactButton);

    const messageInput = screen.getByLabelText('Besked');
    expect(messageInput).toHaveAttribute('rows', '4');
  });
});

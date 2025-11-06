import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import BraetspilscafeWebsite from '../App';

describe('Booking Form Tests', () => {
  it('renders all booking form fields', async () => {
    const user = userEvent.setup();
    render(<BraetspilscafeWebsite />);

    const bookingButton = screen.getAllByText('Book Bord')[0];
    await user.click(bookingButton);

    expect(screen.getByLabelText('Fulde Navn')).toBeInTheDocument();
    expect(screen.getByLabelText('Email')).toBeInTheDocument();
    expect(screen.getByLabelText('Telefon')).toBeInTheDocument();
    expect(screen.getByLabelText('Antal Gæster')).toBeInTheDocument();
    expect(screen.getByLabelText('Dato')).toBeInTheDocument();
    expect(screen.getByLabelText('Tidspunkt')).toBeInTheDocument();
    expect(screen.getByLabelText(/Ønsker du et specifikt brætspil/i)).toBeInTheDocument();
  });

  it('validates required booking form fields', async () => {
    const user = userEvent.setup();
    const alertMock = vi.spyOn(window, 'alert').mockImplementation(() => {});
    render(<BraetspilscafeWebsite />);

    const bookingButton = screen.getAllByText('Book Bord')[0];
    await user.click(bookingButton);

    const submitButton = screen.getByText('Bekræft Reservation');
    await user.click(submitButton);

    expect(alertMock).toHaveBeenCalledWith('Udfyld venligst alle felter');
    alertMock.mockRestore();
  });

  it('successfully submits booking form with valid data', async () => {
    const user = userEvent.setup();
    const alertMock = vi.spyOn(window, 'alert').mockImplementation(() => {});
    render(<BraetspilscafeWebsite />);

    const bookingButton = screen.getAllByText('Book Bord')[0];
    await user.click(bookingButton);

    await user.type(screen.getByLabelText('Fulde Navn'), 'Hans Nielsen');
    await user.type(screen.getByLabelText('Email'), 'hans@example.com');
    await user.type(screen.getByLabelText('Telefon'), '+4512345678');
    await user.selectOptions(screen.getByLabelText('Antal Gæster'), '4');
    await user.type(screen.getByLabelText('Dato'), '2025-12-25');
    await user.type(screen.getByLabelText('Tidspunkt'), '18:00');

    const submitButton = screen.getByText('Bekræft Reservation');
    await user.click(submitButton);

    expect(alertMock).toHaveBeenCalledWith(
      'Bordreservation bekræftet for Hans Nielsen den 2025-12-25 kl. 18:00 - 4 personer'
    );
    alertMock.mockRestore();
  });

  it('clears booking form after successful submission', async () => {
    const user = userEvent.setup();
    const alertMock = vi.spyOn(window, 'alert').mockImplementation(() => {});
    render(<BraetspilscafeWebsite />);

    const bookingButton = screen.getAllByText('Book Bord')[0];
    await user.click(bookingButton);

    const nameInput = screen.getByLabelText('Fulde Navn');
    const emailInput = screen.getByLabelText('Email');
    const phoneInput = screen.getByLabelText('Telefon');

    await user.type(nameInput, 'Hans Nielsen');
    await user.type(emailInput, 'hans@example.com');
    await user.type(phoneInput, '+4512345678');
    await user.selectOptions(screen.getByLabelText('Antal Gæster'), '4');
    await user.type(screen.getByLabelText('Dato'), '2025-12-25');
    await user.type(screen.getByLabelText('Tidspunkt'), '18:00');

    const submitButton = screen.getByText('Bekræft Reservation');
    await user.click(submitButton);

    expect(nameInput).toHaveValue('');
    expect(emailInput).toHaveValue('');
    expect(phoneInput).toHaveValue('');

    alertMock.mockRestore();
  });

  it('accepts optional board game field', async () => {
    const user = userEvent.setup();
    const alertMock = vi.spyOn(window, 'alert').mockImplementation(() => {});
    render(<BraetspilscafeWebsite />);

    const bookingButton = screen.getAllByText('Book Bord')[0];
    await user.click(bookingButton);

    await user.type(screen.getByLabelText('Fulde Navn'), 'Hans Nielsen');
    await user.type(screen.getByLabelText('Email'), 'hans@example.com');
    await user.type(screen.getByLabelText('Telefon'), '+4512345678');
    await user.selectOptions(screen.getByLabelText('Antal Gæster'), '4');
    await user.type(screen.getByLabelText('Dato'), '2025-12-25');
    await user.type(screen.getByLabelText('Tidspunkt'), '18:00');
    await user.type(screen.getByLabelText(/Ønsker du et specifikt brætspil/i), 'Catan');

    const submitButton = screen.getByText('Bekræft Reservation');
    await user.click(submitButton);

    expect(alertMock).toHaveBeenCalled();
    alertMock.mockRestore();
  });
});

describe('Contact Form Tests', () => {
  it('renders all contact form fields', async () => {
    const user = userEvent.setup();
    render(<BraetspilscafeWebsite />);

    const contactButton = screen.getByText('Kontakt');
    await user.click(contactButton);

    expect(screen.getByLabelText('Navn')).toBeInTheDocument();
    expect(screen.getByLabelText('Email')).toBeInTheDocument();
    expect(screen.getByLabelText('Besked')).toBeInTheDocument();
  });

  it('validates required contact form fields', async () => {
    const user = userEvent.setup();
    const alertMock = vi.spyOn(window, 'alert').mockImplementation(() => {});
    render(<BraetspilscafeWebsite />);

    const contactButton = screen.getByText('Kontakt');
    await user.click(contactButton);

    const submitButton = screen.getByText('Send Besked');
    await user.click(submitButton);

    expect(alertMock).toHaveBeenCalledWith('Udfyld venligst alle felter');
    alertMock.mockRestore();
  });

  it('successfully submits contact form with valid data', async () => {
    const user = userEvent.setup();
    const alertMock = vi.spyOn(window, 'alert').mockImplementation(() => {});
    render(<BraetspilscafeWebsite />);

    const contactButton = screen.getByText('Kontakt');
    await user.click(contactButton);

    await user.type(screen.getByLabelText('Navn'), 'Maria Larsen');
    await user.type(screen.getByLabelText('Email'), 'maria@example.com');
    await user.type(screen.getByLabelText('Besked'), 'Jeg vil gerne høre mere om jeres events');

    const submitButton = screen.getByText('Send Besked');
    await user.click(submitButton);

    expect(alertMock).toHaveBeenCalledWith(
      'Tak Maria Larsen! Vi vender tilbage til dig hurtigst muligt.'
    );
    alertMock.mockRestore();
  });

  it('clears contact form after successful submission', async () => {
    const user = userEvent.setup();
    const alertMock = vi.spyOn(window, 'alert').mockImplementation(() => {});
    render(<BraetspilscafeWebsite />);

    const contactButton = screen.getByText('Kontakt');
    await user.click(contactButton);

    const nameInput = screen.getByLabelText('Navn');
    const emailInput = screen.getByLabelText('Email');
    const messageInput = screen.getByLabelText('Besked');

    await user.type(nameInput, 'Maria Larsen');
    await user.type(emailInput, 'maria@example.com');
    await user.type(messageInput, 'Test message');

    const submitButton = screen.getByText('Send Besked');
    await user.click(submitButton);

    expect(nameInput).toHaveValue('');
    expect(emailInput).toHaveValue('');
    expect(messageInput).toHaveValue('');

    alertMock.mockRestore();
  });
});

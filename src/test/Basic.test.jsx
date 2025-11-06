import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import BraetspilscafeWebsite from '../App';

describe('Basic Rendering Tests', () => {
  it('renders the application without crashing', () => {
    render(<BraetspilscafeWebsite />);
    expect(screen.getByText('Svendborg Brætspilscafe')).toBeInTheDocument();
  });

  it('renders the main heading', () => {
    render(<BraetspilscafeWebsite />);
    expect(screen.getByText('Velkommen til Svendborg Brætspilscafe')).toBeInTheDocument();
  });

  it('renders the footer', () => {
    render(<BraetspilscafeWebsite />);
    expect(screen.getByText(/2025 Svendborg Brætspilscafe/)).toBeInTheDocument();
  });

  it('renders navigation with all pages', () => {
    render(<BraetspilscafeWebsite />);

    // Check for the new navigation items
    expect(screen.getByText('Hjem')).toBeInTheDocument();
    expect(screen.getByText('Spilbibliotek')).toBeInTheDocument();
    expect(screen.getByText('Events')).toBeInTheDocument();
    expect(screen.getByText('Galleri')).toBeInTheDocument();
    expect(screen.getByText('Menu')).toBeInTheDocument();
    expect(screen.getByText('Om Os')).toBeInTheDocument();
    expect(screen.getByText('Kontakt')).toBeInTheDocument();
    expect(screen.getAllByText('Book Bord').length).toBeGreaterThan(0);
  });
});

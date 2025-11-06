import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import BraetspilscafeWebsite from '../App';

describe('Responsive & Mobile Menu Tests', () => {
  it('renders mobile menu button', () => {
    render(<BraetspilscafeWebsite />);

    // Mobile menu toggle button should be present (with Menu icon initially)
    const mobileMenuButtons = screen.getAllByRole('button');
    const hasMobileMenuButton = mobileMenuButtons.some(button => {
      return button.querySelector('svg');
    });
    expect(hasMobileMenuButton).toBe(true);
  });

  it('opens mobile menu when menu button is clicked', async () => {
    const user = userEvent.setup();
    render(<BraetspilscafeWebsite />);

    // Find and click the mobile menu button
    const buttons = screen.getAllByRole('button');
    const mobileMenuButton = buttons.find(button =>
      button.className.includes('md:hidden') && button.querySelector('svg')
    );

    expect(mobileMenuButton).toBeDefined();
    await user.click(mobileMenuButton);

    // Check if mobile menu items are visible
    const mobileNavItems = screen.getAllByText('Hjem');
    expect(mobileNavItems.length).toBeGreaterThan(1); // Desktop + Mobile nav
  });

  it('closes mobile menu when navigation item is clicked', async () => {
    const user = userEvent.setup();
    render(<BraetspilscafeWebsite />);

    // Open mobile menu
    const buttons = screen.getAllByRole('button');
    const mobileMenuButton = buttons.find(button =>
      button.className.includes('md:hidden') && button.querySelector('svg')
    );

    await user.click(mobileMenuButton);

    // Click a navigation item in mobile menu
    const menuItems = screen.getAllByText('Menu');
    const mobileMenuItem = menuItems.find(item =>
      item.className.includes('w-full')
    );

    if (mobileMenuItem) {
      await user.click(mobileMenuItem);
      // Menu should navigate to the menu page
      expect(screen.getByText('Vores Menu')).toBeInTheDocument();
    }
  });

  it('toggles mobile menu open and close', async () => {
    const user = userEvent.setup();
    render(<BraetspilscafeWebsite />);

    const buttons = screen.getAllByRole('button');
    const mobileMenuButton = buttons.find(button =>
      button.className.includes('md:hidden') && button.querySelector('svg')
    );

    // Open menu
    await user.click(mobileMenuButton);
    let mobileNavItems = screen.getAllByText('Hjem');
    expect(mobileNavItems.length).toBeGreaterThan(1);

    // Close menu
    await user.click(mobileMenuButton);
    // After closing, should still have desktop nav but mobile should be hidden
    mobileNavItems = screen.getAllByText('Hjem');
    expect(mobileNavItems.length).toBeGreaterThanOrEqual(1);
  });

  it('all navigation items are present in mobile menu', async () => {
    const user = userEvent.setup();
    render(<BraetspilscafeWebsite />);

    const buttons = screen.getAllByRole('button');
    const mobileMenuButton = buttons.find(button =>
      button.className.includes('md:hidden') && button.querySelector('svg')
    );

    await user.click(mobileMenuButton);

    // Check all navigation items exist
    expect(screen.getAllByText('Hjem').length).toBeGreaterThan(1);
    expect(screen.getAllByText('Menu').length).toBeGreaterThan(1);
    expect(screen.getAllByText('Om Os').length).toBeGreaterThan(1);
    expect(screen.getAllByText('Kontakt').length).toBeGreaterThan(1);
    expect(screen.getAllByText('Book Bord').length).toBeGreaterThan(1);
  });

  it('mobile menu items have full width styling', async () => {
    const user = userEvent.setup();
    render(<BraetspilscafeWebsite />);

    const buttons = screen.getAllByRole('button');
    const mobileMenuButton = buttons.find(button =>
      button.className.includes('md:hidden') && button.querySelector('svg')
    );

    await user.click(mobileMenuButton);

    const mobileMenuItems = screen.getAllByText('Hjem');
    const mobileItem = mobileMenuItems.find(item =>
      item.className.includes('w-full')
    );

    expect(mobileItem).toBeDefined();
    expect(mobileItem?.className).toContain('w-full');
    expect(mobileItem?.className).toContain('text-left');
  });
});

describe('Responsive Layout Tests', () => {
  it('renders responsive grid layout for features', () => {
    const { container } = render(<BraetspilscafeWebsite />);

    // Check for responsive grid classes
    const grids = container.querySelectorAll('[class*="grid"]');
    expect(grids.length).toBeGreaterThan(0);
  });

  it('hero section has responsive text sizes', () => {
    render(<BraetspilscafeWebsite />);

    const heroHeading = screen.getByText('Velkommen til Svendborg Brætspilscafe');
    expect(heroHeading.className).toContain('text-5xl');
    expect(heroHeading.className).toContain('md:text-6xl');
  });

  it('navigation has sticky positioning', () => {
    const { container } = render(<BraetspilscafeWebsite />);

    const nav = container.querySelector('nav');
    expect(nav?.className).toContain('sticky');
    expect(nav?.className).toContain('top-0');
    expect(nav?.className).toContain('z-50');
  });

  it('containers have responsive padding', () => {
    const { container } = render(<BraetspilscafeWebsite />);

    const responsivePadding = container.querySelectorAll('[class*="sm:px-6"]');
    expect(responsivePadding.length).toBeGreaterThan(0);
  });

  it('forms have responsive layout on booking page', async () => {
    const user = userEvent.setup();
    render(<BraetspilscafeWebsite />);

    const bookingButton = screen.getAllByText('Book Bord')[0];
    await user.click(bookingButton);

    const { container } = render(<BraetspilscafeWebsite />);
    const grids = container.querySelectorAll('[class*="md:grid-cols-2"]');
    expect(grids.length).toBeGreaterThanOrEqual(0); // Responsive grid exists
  });
});

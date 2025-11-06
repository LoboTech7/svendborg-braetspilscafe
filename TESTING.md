# Testing Documentation - Svendborg Brætspilscafe

## Overview

This document provides comprehensive information about the testing infrastructure and test suites for the Svendborg Brætspilscafe website.

## Testing Stack

- **Test Framework**: [Vitest](https://vitest.dev/) - A blazing fast unit test framework powered by Vite
- **Testing Library**: [@testing-library/react](https://testing-library.com/react) - Simple and complete React DOM testing utilities
- **User Interactions**: [@testing-library/user-event](https://testing-library.com/docs/user-event/intro) - Advanced simulation of browser interactions
- **DOM Matchers**: [@testing-library/jest-dom](https://testing-library.com/docs/ecosystem-jest-dom/) - Custom DOM element matchers
- **Environment**: [jsdom](https://github.com/jsdom/jsdom) - JavaScript implementation of web standards

## Installation

All testing dependencies are already installed. If you need to reinstall them:

```bash
npm install --save-dev vitest @testing-library/react @testing-library/jest-dom @testing-library/user-event jsdom @vitest/ui
```

## Running Tests

### Run all tests in watch mode (recommended for development)
```bash
npm test
```

### Run all tests once (for CI/CD)
```bash
npm run test:run
```

### Run tests with UI (visual interface)
```bash
npm run test:ui
```

### Run tests with coverage report
```bash
npm run test:coverage
```

## Test Structure

All tests are located in the `/src/test/` directory:

```
src/test/
├── setup.js                 # Test configuration and global setup
├── Navigation.test.jsx      # Navigation and routing tests
├── Forms.test.jsx          # Form validation and submission tests
├── Components.test.jsx     # Component rendering tests
├── Responsive.test.jsx     # Responsive design and mobile menu tests
└── Accessibility.test.jsx  # Accessibility and a11y tests
```

## Test Coverage Areas

### 1. Navigation Tests (`Navigation.test.jsx`)
Tests the navigation system and page routing:
- ✅ All navigation menu items render correctly
- ✅ Home page displays by default
- ✅ Navigation between pages (Menu, About, Contact, Booking)
- ✅ Active navigation item highlighting
- ✅ Hero CTA button navigation

**8 tests total**

### 2. Form Tests (`Forms.test.jsx`)
Tests form validation, submission, and user interactions:

**Booking Form Tests:**
- ✅ All form fields render
- ✅ Required field validation
- ✅ Successful form submission
- ✅ Form clearing after submission
- ✅ Optional field handling

**Contact Form Tests:**
- ✅ All form fields render
- ✅ Required field validation
- ✅ Successful form submission
- ✅ Form clearing after submission

**9 tests total**

### 3. Component Rendering Tests (`Components.test.jsx`)
Tests that all components and content render correctly:
- ✅ Logo and site title
- ✅ Footer with copyright
- ✅ Home page features section
- ✅ Additional info section
- ✅ All menu items with prices
- ✅ Game rental information
- ✅ About page content (mission and values)
- ✅ Contact information (address, phone, email)
- ✅ Opening hours
- ✅ Booking confirmation message
- ✅ Guest options in booking form

**11 tests total**

### 4. Responsive Design Tests (`Responsive.test.jsx`)
Tests responsive behavior and mobile menu functionality:

**Mobile Menu Tests:**
- ✅ Mobile menu button renders
- ✅ Mobile menu opens on button click
- ✅ Mobile menu closes when navigation item clicked
- ✅ Mobile menu toggles open/close
- ✅ All navigation items in mobile menu
- ✅ Mobile menu items have full-width styling

**Layout Tests:**
- ✅ Responsive grid layouts
- ✅ Responsive text sizes
- ✅ Sticky navigation positioning
- ✅ Responsive padding
- ✅ Responsive form layouts

**11 tests total**

### 5. Accessibility Tests (`Accessibility.test.jsx`)
Tests accessibility features and WCAG compliance:
- ✅ Form labels properly associated with inputs (booking form)
- ✅ Form labels properly associated with inputs (contact form)
- ✅ Navigation buttons have accessible text
- ✅ Form inputs have proper input types (email, tel, date, time)
- ✅ Buttons have descriptive text content
- ✅ Icons used as alternative to images
- ✅ Form fields have focus states
- ✅ Proper heading hierarchy (H1, H2, etc.)
- ✅ Semantic HTML (nav, footer elements)
- ✅ Input placeholders for better UX
- ✅ Default select options with instructions
- ✅ Textarea has proper rows attribute

**14 tests total**

## Total Test Count

**53 comprehensive tests** covering all major functionality

## Writing New Tests

### Example Test Structure

```javascript
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import BraetspilscafeWebsite from '../App';

describe('Feature Name Tests', () => {
  it('should test specific behavior', async () => {
    // Setup user event
    const user = userEvent.setup();

    // Render component
    render(<BraetspilscafeWebsite />);

    // Find elements
    const button = screen.getByText('Button Text');

    // Interact with elements
    await user.click(button);

    // Assert expected behavior
    expect(screen.getByText('Expected Text')).toBeInTheDocument();
  });
});
```

### Best Practices

1. **Use descriptive test names**: Start with "it('should...')" or use clear descriptions
2. **Test user behavior**: Focus on what users see and do, not implementation details
3. **Use async/await**: For user interactions with `userEvent`
4. **Clean assertions**: Use jest-dom matchers like `toBeInTheDocument()`, `toHaveValue()`, etc.
5. **Avoid implementation details**: Don't test internal state or class names unless necessary
6. **Mock external dependencies**: Use `vi.spyOn()` for window.alert, fetch, etc.

## Common Testing Patterns

### Finding Elements
```javascript
// By text content
screen.getByText('Some Text');

// By label (for form inputs)
screen.getByLabelText('Email');

// By role
screen.getByRole('button');

// Get all matching elements
screen.getAllByText('Text');
```

### User Interactions
```javascript
const user = userEvent.setup();

// Click
await user.click(button);

// Type into input
await user.type(input, 'text to type');

// Select from dropdown
await user.selectOptions(select, 'option value');
```

### Assertions
```javascript
// Element exists
expect(element).toBeInTheDocument();

// Element has class
expect(element).toHaveClass('className');

// Input has value
expect(input).toHaveValue('value');

// Element has attribute
expect(input).toHaveAttribute('type', 'email');
```

## Troubleshooting

### Tests Fail Due to Missing Dependencies
```bash
npm install
```

### Tests Pass Locally but Fail in CI
Ensure your CI environment has all dependencies and runs:
```bash
npm run test:run
```

### Console Warnings About act()
These are usually handled automatically by Testing Library, but if you see them:
- Ensure you're using `async/await` with `userEvent`
- Use `waitFor()` for asynchronous state updates

### Tests Are Slow
- Use `test:run` for single execution
- Consider splitting large test files
- Mock heavy dependencies

## Coverage Goals

Target coverage metrics:
- **Statements**: 80%+
- **Branches**: 75%+
- **Functions**: 80%+
- **Lines**: 80%+

Current focus areas:
- All navigation flows
- Form validation logic
- User interactions
- Responsive behavior
- Accessibility compliance

## Continuous Integration

Add this to your CI/CD pipeline (e.g., GitHub Actions):

```yaml
- name: Install dependencies
  run: npm install

- name: Run tests
  run: npm run test:run

- name: Generate coverage
  run: npm run test:coverage
```

## Additional Resources

- [Vitest Documentation](https://vitest.dev/)
- [Testing Library Documentation](https://testing-library.com/)
- [React Testing Best Practices](https://kentcdodds.com/blog/common-mistakes-with-react-testing-library)
- [Accessibility Testing Guide](https://www.w3.org/WAI/test-evaluate/)

## Support

For questions or issues with tests:
1. Check this documentation
2. Review existing test examples in `/src/test/`
3. Consult Vitest and Testing Library documentation
4. Ensure all dependencies are up to date

---

Last Updated: November 2025

import { render, screen } from '@testing-library/react';
import App from '../App.js';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Wing Chun Workout Tracker/i);
  expect(linkElement).toBeInTheDocument();
});

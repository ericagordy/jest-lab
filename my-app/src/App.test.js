import { render, screen } from '@testing-library/react';
import App from './App';
import userEvent from "@testing-library/user-event";

//example test
test('checkbox test', () => {
  render(<App />);
  userEvent.click(screen.getByTestId('checkbox'));
  expect(screen.getByTestId('checkbox')).toBeChecked()
});

//my test
test('Enter text test', () => {
  render(<App />);
  expect(screen.getByText('Enter')).toBeInTheDocument();
});
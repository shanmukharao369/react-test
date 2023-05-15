import { render, screen } from '@testing-library/react';
import AddExpenseDetails from './AddExpenses';

test('renders Amount', () => {
  render(<AddExpenseDetails/>);
  const linkElement = screen.getByText("Amount:",{exact:false});
  expect(linkElement).toBeInTheDocument();

});

test('renders Description', () => {
  render(<AddExpenseDetails/>);
  const linkElement = screen.getByText("Description:",{exact:false});
  expect(linkElement).toBeInTheDocument();

});

test('renders Category', () => {
  render(<AddExpenseDetails/>);
  const linkElement = screen.getByText("Category:",{exact:false});
  expect(linkElement).toBeInTheDocument();

});

test('renders Amount', () => {
  render(<AddExpenseDetails/>);
  const linkElement = screen.getByText("Amount:",{exact:false});
  expect(linkElement).toBeInTheDocument();

});

test('renders Daily Expense Tracker', () => {
  render(<AddExpenseDetails/>);
  const linkElement = screen.getByText("Daily Expense Tracker:",{exact:false});
  expect(linkElement).toBeInTheDocument();

});
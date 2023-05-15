import { render, screen } from '@testing-library/react';
import FirstPageDetails from './FirstPage';

test('renders Login', () => {
  render(<FirstPageDetails/>);
  const linkElement = screen.getByText("Login",{exact:false});
  expect(linkElement).toBeInTheDocument();

});

test('renders Home', () => {
  render(<FirstPageDetails/>);
  const linkElement = screen.getByText("Home",{exact:false});
  expect(linkElement).toBeInTheDocument();

});

test('renders AddExpenseDetails', () => {
  render(<FirstPageDetails/>);
  const linkElement = screen.getByText("AddExpenseDetails",{exact:false});
  expect(linkElement).toBeInTheDocument();

});

test('renders Download Expenses', () => {
  render(<FirstPageDetails/>);
  const linkElement = screen.getByText("Download Expenses:",{exact:false});
  expect(linkElement).toBeInTheDocument();

});

test('renders Daily Expense Tracker', () => {
  render(<FirstPageDetails/>);
  const linkElement = screen.getByText("Daily Expense Tracker:",{exact:false});
  expect(linkElement).toBeInTheDocument();

});
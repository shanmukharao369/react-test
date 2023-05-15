import { render, screen } from '@testing-library/react';
import LoginPage from './LoginPage';

test('renders Login', () => {
  render(<LoginPage/>);
  const linkElement = screen.getByText("Login:",{exact:false});
  expect(linkElement).toBeInTheDocument();

});


test('renders Email', () => {
    render(<LoginPage/>);
    const linkElement = screen.getByText("Email:",{exact:false});
    expect(linkElement).toBeInTheDocument();

});

test('renders Password', () => {
    render(<LoginPage/>);
    const linkElement = screen.getByText("Password:",{exact:false});
    expect(linkElement).toBeInTheDocument();

});

test('renders Forgot Password', () => {
    render(<LoginPage/>);
    const linkElement = screen.getByText("Forgot Password:",{exact:false});
    expect(linkElement).toBeInTheDocument();

});
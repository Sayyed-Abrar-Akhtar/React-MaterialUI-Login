import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';

import App from './App';

test('renders login form', () => {
  render(<App />);
  const emailElement = screen.queryByTestId('email');
  const passwordElement = screen.queryByTestId('password');
  const loginBtn = screen.queryByTestId('login');
  expect(emailElement).toBeInTheDocument();
  expect(passwordElement).toBeInTheDocument();
  expect(loginBtn).toBeInTheDocument();
});

// this test should fail as there is no user credentials stored
// thus greeting text will not be in DOM.
test('enter login details', async () => {
  render(<App />);
  const loginRedirectBtn = screen.getByText(/Login/i);
  fireEvent.click(loginRedirectBtn);
  const emailElement = await screen.findByLabelText('Email');
  const passwordElement = await screen.findByLabelText('Password');
  fireEvent.change(emailElement, {
    target: { value: 'akhtars10@uni.coventry.ac.uk' },
  });
  fireEvent.change(passwordElement, {
    target: { value: '123456789z' },
  });
  const loginBtn = screen.getByText(/sign in/i);
  fireEvent.click(loginBtn);
  const greetingText = screen.getByText(/greeting from okhati/i);
  expect(greetingText).toBeInTheDocument();
});

test('renders sign up form', () => {
  render(<App />);
  const signUpElement = screen.getByText(/Create one/);

  fireEvent.click(signUpElement);

  const emailElement = screen.queryByTestId('email');
  const passwordElement = screen.queryByTestId('password');
  const confirmPasswordElement = screen.queryByTestId('confirm-password');
  const signUpBtn = screen.queryByTestId('sign-up');
  expect(emailElement).toBeInTheDocument();
  expect(passwordElement).toBeInTheDocument();
  expect(confirmPasswordElement).toBeInTheDocument();
  expect(signUpBtn).toBeInTheDocument();
});

test('enter sign up details', async () => {
  render(<App />);

  const emailElement = await screen.findByLabelText('Email');
  const passwordElement = await screen.findByLabelText('Password');
  const confirmPasswordElement = await screen.findByLabelText(
    'Confirm Password'
  );

  fireEvent.change(emailElement, {
    target: { value: 'akhtars10@uni.coventry.ac.uk' },
  });
  fireEvent.change(passwordElement, {
    target: { value: '123456789z' },
  });
  fireEvent.change(confirmPasswordElement, {
    target: { value: '123456789z' },
  });
  const signUpBtn = screen.getByText(/Sign Up/i);

  fireEvent.click(signUpBtn);

  const LoginHeadingElement = screen.getByText(/Login/i);
  expect(LoginHeadingElement).toBeInTheDocument();
});

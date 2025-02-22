import * as React from 'react';
import { render, screen, waitFor, act } from '@testing-library/react';
import { AuthProvider, useAuth } from 'components/AuthContext';

function TestComponent() {
  const { isLoggedIn, logIn, logOut } = useAuth();

  return (
    <>
      <div>Is logged in: {isLoggedIn.toString()}</div>
      <button onClick={logIn}>Log In</button>
      <button onClick={logOut}>Log Out</button>
    </>
  );
}

describe('AuthContext', () => {
  it('throws an error when useAuth is not used within an AuthProvider', () => {
    try {
      render(
        <AuthProvider>
          <TestComponent />
        </AuthProvider>
      );
    } catch (error) {
      expect((error as Error).message).toMatch(
        'useAuth must be used within an AuthProvider'
      );
    }
  });

  it('returns the correct values when useAuth is used within an AuthProvider', async () => {
    render(
      <AuthProvider>
        <TestComponent />
      </AuthProvider>
    );

    expect(screen.getByText(/Is logged in: false/i)).toBeInTheDocument();

    const loginButton = screen.getByText(/Log In/i);
    const logoutButton = screen.getByText(/Log Out/i);

    act(() => {
      loginButton.click();
    });
    await waitFor(() =>
      expect(screen.getByText(/Is logged in: true/i)).toBeInTheDocument()
    );

    act(() => {
      logoutButton.click();
    });
    await waitFor(() =>
      expect(screen.getByText(/Is logged in: false/i)).toBeInTheDocument()
    );
  });
});

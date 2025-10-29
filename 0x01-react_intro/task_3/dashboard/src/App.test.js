import { render, screen } from '@testing-library/react';
import App from './App';


describe('Testing the App component', () => {
  test('Render App component without crashing', () => {
    render(<App />);
    // const linkElement = screen.getByText(/Login to access the full dashboard/i);
    // expect(linkElement).toBeInTheDocument();
  });

  test('verify that App renders a div with the class App-header', () => {
    render(<App />);
    const appHeader = screen.getByTestId('App-header');
    expect(appHeader).toBeInTheDocument();
    expect(appHeader).toHaveClass('App-header');
  });

  test('verify that App renders a div with the class App-body', () => {
    render(<App />);
    const appBody = screen.getByTestId('App-body');
    expect(appBody).toBeInTheDocument();
    expect(appBody).toHaveClass('App-body');
  });
  
  test('verify that App renders a div with the class App-footer', () => {
    render(<App />);
    const appFooter = screen.getByTestId('App-footer');
    expect(appFooter).toBeInTheDocument();
    expect(appFooter).toHaveClass('App-footer');
  });
});

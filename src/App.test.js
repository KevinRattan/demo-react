import { render, screen } from '@testing-library/react';
import App from './App';

test('it renders without crashing', () => {
  const {debug } = render(<App />);
  debug();
});
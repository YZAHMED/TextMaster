import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('renders title and editor', () => {
    render(<App />);
    expect(screen.getByText('TextMaster')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Type or paste text here...')).toBeInTheDocument();
  });
});


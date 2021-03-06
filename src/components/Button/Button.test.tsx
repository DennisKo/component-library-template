import * as React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { Button } from './Button';

describe('Button', () => {
  test('renders a default button with text', async () => {
    render(<Button>Click me</Button>);

    expect(screen.getByText('Click me')).toBeInTheDocument();
    expect(screen.getByText('Click me')).toHaveStyle({
      backgroundColor: '#D1D5DB',
      color: '#1F2937',
    });
  });
  test('renders a primary button', async () => {
    render(<Button primary>Click me</Button>);

    expect(screen.getByText('Click me')).toHaveStyle({
      backgroundColor: '#2563EB',
      color: '#F3F4F6',
    });
  });
  test('renders a button with custom colors', async () => {
    render(
      <Button color="#1E40AF" backgroundColor="#A78BFA">
        Click me
      </Button>
    );

    expect(screen.getByText('Click me')).toHaveStyle({
      backgroundColor: '#A78BFA',
      color: '#1E40AF',
    });
  });
  test('handles onClick', async () => {
    const mockOnClick = jest.fn();
    render(<Button onClick={mockOnClick}>Click me</Button>);
    fireEvent.click(screen.getByText('Click me'));

    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
});

import * as React from 'react';

export interface ButtonProps {
  children: React.ReactNode;
  primary?: boolean;
  onClick?: () => void;
  backgroundColor?: string;
  color?: string;
}

export const Button = ({
  children,
  primary = false,
  onClick,
  backgroundColor = '#D1D5DB',
  color = '#1F2937',
}: ButtonProps): JSX.Element => {
  const buttonStyles = {
    fontWeight: 700,
    padding: '10px 20px',
    border: 0,
    cursor: 'pointer',
    display: 'inline-block',
    lineHeight: 1,
    backgroundColor: primary ? '#2563EB' : backgroundColor,
    color: primary ? '#F3F4F6' : color,
  };
  return (
    <button type="button" onClick={onClick} style={buttonStyles}>
      {children}
    </button>
  );
};

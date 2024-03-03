import { ReactNode } from 'react';

interface DefaultLayoutProps {
  children: ReactNode;
}

export const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <>
      <h1>Navigation</h1>
      {children}
      <h1>Footer</h1>
    </>
  );
};

import { ReactNode } from 'react';
import { Footer } from '@/Components/Blocks/Footer/Footer.tsx';

interface DefaultLayoutProps {
  children: ReactNode;
}

export const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <>
      <h1>Navigation</h1>
      {children}
      <Footer />
    </>
  );
};

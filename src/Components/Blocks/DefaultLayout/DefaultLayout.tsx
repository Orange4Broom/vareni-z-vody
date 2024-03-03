import { ReactNode } from 'react';
import { Footer } from '@/Components/Blocks/Footer/Footer.tsx';
import { Navigation } from '@/Components/Blocks/Navigation/Navigation.tsx';

interface DefaultLayoutProps {
  children: ReactNode;
}

export const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <>
      <Navigation />
      {children}
      <Footer />
    </>
  );
};

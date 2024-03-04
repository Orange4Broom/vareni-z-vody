import { ReactNode } from 'react';
import { Footer } from '@/Components/Blocks/Footer/Footer.tsx';
import { Navigation } from '@/Components/Blocks/Navigation/Navigation.tsx';

import './defaultLayout.scss';

interface DefaultLayoutProps {
  children: ReactNode;
}

export const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <div className="default-layout">
      <Navigation />
      {children}
      <Footer />
    </div>
  );
};

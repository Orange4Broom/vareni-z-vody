import { ReactNode } from 'react';
import { Footer } from '@/Components/Blocks/Footer/Footer';
import { Navigation } from '@/Components/Blocks/Navigation/Navigation';

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

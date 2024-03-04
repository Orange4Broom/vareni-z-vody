import { Routes, Route } from 'react-router-dom';
import { Menu } from '@/Pages/Menu';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Menu />} />
    </Routes>
  );
};

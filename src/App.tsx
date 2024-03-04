import { Routes, Route } from 'react-router-dom';
import { Menu } from '@/Pages/Menu';
import { Rate } from '@/Pages/Rate';
import { Order } from './Pages/Order';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Menu />} />
      <Route path="/rate" element={<Rate />} />
      <Route path="/order" element={<Order />} />
    </Routes>
  );
};

import { Link } from 'react-router-dom';

export const Navigation = () => {
  return (
    <nav className="navigation">
      <h1 className="navigation__logo">Navigation</h1>
      <div className="navigation__menu">
        <Link to="/">Menu</Link>
      </div>
    </nav>
  );
};

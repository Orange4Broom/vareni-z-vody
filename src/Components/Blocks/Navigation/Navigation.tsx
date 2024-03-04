import { Link } from 'react-router-dom';
import './navigation.scss';

export const Navigation = () => {
  return (
    <nav className="navigation">
      <h1 className="navigation__logo">VAŘENÍ Z VODY</h1>
      <div className="navigation__menu">
        <Link className="navigation__menu__link" to="/">
          MENU
        </Link>
        <Link className="navigation__menu__link" to="/rate">
          HODNOCENÍ
        </Link>
        <Link className="navigation__menu__link" to="/order">
          OBJEDNÁNÍ
        </Link>
      </div>
    </nav>
  );
};

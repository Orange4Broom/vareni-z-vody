import { Link, useLocation } from 'react-router-dom';
import './navigation.scss';
import { Icon } from '@Components/Elements/Icon/Icon';

export const Navigation = () => {
  const currentLocation = useLocation();
  return (
    <nav className="navigation">
      <h1 className="navigation__logo">Vaření z vody</h1>
      <div className="navigation__menu">
        <Link
          className={`navigation__menu__link${currentLocation.pathname === '/' ? '--active' : ''}`}
          to="/"
        >
          MENU
        </Link>
        <Link
          className={`navigation__menu__link${currentLocation.pathname === '/rate' ? '--active' : ''}`}
          to="/rate"
        >
          HODNOCENÍ
        </Link>
        <Link
          className={`navigation__menu__link${currentLocation.pathname === '/order' ? '--active' : ''}`}
          to="/order"
        >
          OBJEDNÁNÍ
        </Link>
      </div>
      <button className="navigation__burger-menu">
        <Icon name="bars" type="fas" />
      </button>
    </nav>
  );
};

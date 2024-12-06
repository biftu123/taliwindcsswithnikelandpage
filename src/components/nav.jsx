
import HeaderLogo from '@/assets/images/header-logo.svg';
import { navLinks } from '../constants';
import { hamburger } from '@/assets/icons';

const Nav = () => {
  return (
    <header className="padding-x py-8 fixed top-0 z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/" className="flex items-center">
          <img
            src={HeaderLogo}
            alt="Logo"
            className="h-10 w-26 object-contain mr-4" // Set dimensions and object-fit
          />
          
        </a>
        <ul className={`flex-1 flex justify-center items-center gap-16 max-lg:hidden ${navLinks.length === 0 ? 'hidden' : ''}`}>
          {navLinks.map((item) => (
            <li key={item.label}>
              <a href={item.href} className="font-montserrat leading-normal text-lg text-slate-grey">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
		<div className='hidden  max-lg:block'>
			<img src={hamburger}
			height={25}
			width={25}/>
		</div>
      </nav>
    </header>
  );
};

export default Nav;
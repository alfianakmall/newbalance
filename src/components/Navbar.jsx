import  {headerLogo}  from '../assets/images';
import {hamburger} from '../assets/icons';
import {navLinks} from '../constants'
const Navbar = () => {
  return (
    <header className='padding-x py-8 absolute z-10 w-full'>
        <nav className='flex justify-between items-center max-container'>
            <a href="/">
                <img src={headerLogo} alt="Logo" width={50} height={50} />
            </a>
            <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
                {navLinks.map((navItem) => (
                    <li key={navItem.label}>
                        <a href={navItem.href} className='font-montserrat leading-normal text-lg text-slate-gray'>
                            {navItem.label}
                        </a>
                    </li>
                ))}
            </ul>
            <div>
                <img className='hidden max-lg:block' src={hamburger} alt="hamburger" width={25} height={25} />
            </div>
        </nav>
    </header>
  )
}

export default Navbar
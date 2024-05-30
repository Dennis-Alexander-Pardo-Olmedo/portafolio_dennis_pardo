import { useState } from 'react';
import icon_nav from '../../assets/img/logo-removebg-preview.png'
import { Link } from "react-router-dom";
function Nav() {
	const [isOpen, setIsopen] = useState(false);
	const toggleMenu = () => {
		setIsopen(!isOpen);
	}
	return (

		<div className=' flex items-center justify-between py-1 px-8 bg-blue-700'>
			<div className=''>
			<img className='sm:flex  h-16 w-50 max-sm:w-40 max-sm:h-10 max-sm:-ml-9 '  src={icon_nav} alt="logo_briefcase" />
			</div>
			<nav className=''>
				<div className='md:hidden '>
					<button onClick={toggleMenu} className='text-white hover:text-gray-500  duration-700 '>
						<svg className='w-10 h-10' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
							<path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}></path>
						</svg>
					</button>
				</div>
				<ul className={`md:flex  md:space-x-4 text-white ${isOpen ? 'block' : 'hidden'} md:block `}>
					<li className='mt-2 md:mt-0'>
						<Link to="/inicio" className='hover:text-gray-300 ' onCanPlay={() => setIsopen(false)} >
							Inicio
						</Link>
					</li>
					<li className='border-solid-botton  mt-2 md:mt-0' >
						<Link className='hover:text-gray-300' to="/educacion"  onCanPlay={() => setIsopen(false)}>
							Educación
						</Link>
					</li>
					<li className='  mt-2 md:mt-0' >
						<Link className='hover:text-gray-300' to="/tecnologia"  onCanPlay={() => setIsopen(false)}>
							Tecnologías
						</Link>
					</li>
					<li  className=' mt-2 md:mt-0'> 
						<Link className='hover:text-gray-300' to="/contacto"  onCanPlay={() => setIsopen(false)}>
							Contacto
						</Link>
					</li>
				</ul>
			</nav>
		</div>

	)
}
export default Nav;
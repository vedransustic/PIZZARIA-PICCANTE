import React from 'react';
import Image from 'next/image';
import Logo from '../assets/Logo.png';
import css from '../styles/Navbar.module.css';
import { UilShoppingBag } from '@iconscout/react-unicons';

const Navbar = () => {
	return (
		<nav className={css.navbar}>
			<div className={css.logo}>
				<Image src={Logo} alt={'logo'} width={50} height={50} />
				<span>PIZZARIA PICCANTE</span>
			</div>
			<ul className={css.menu}>
				<li>Home</li>
				<li>Menu</li>
				<li>Contact</li>
			</ul>
			<div className={css.rightSide}>
				<div className={css.cart}>
					<UilShoppingBag size={35} color='#2E2E2E' />
					<div className={css.badge}>1</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;

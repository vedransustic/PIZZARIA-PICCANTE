import React from 'react';
import css from '../styles/Footer.module.css';
import { UilFacebook, UilGithub, UilInstagram } from '@iconscout/react-unicons';

const Footer = () => {
	return (
		<footer className={css.footer}>
			<span>ALL RIGHTS RESERVERD</span>
			<div className={css.social}>
				<UilFacebook size={45} />
				<UilGithub size={45} />
				<UilInstagram size={45} />
			</div>
		</footer>
	);
};

export default Footer;

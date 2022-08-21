import React from 'react';
import css from '../styles/Hero.module.css';
import Peppers from '../assets/Peppers.png';
import GirlEatsPizza from '../assets/GirlEatsPizza.png';
import Diavola from '../assets/diavola.jpg';
import Image from 'next/image';
import { UilPhone } from '@iconscout/react-unicons';

const Hero = () => {
	return (
		<>
			<div className={css.container}>
				<div className={css.left}>
					<div className={css.pepper}>
						<span>Working faster than </span>
						<Image
							src={Peppers}
							alt='peppers'
							width={60}
							height={60}
						/>
					</div>
					<div className={css.heroText}>
						<span>The Fastest</span>
						<span>In Delivery of</span>
						<span>
							Your <span className={css.redLetters}>Pizza</span>
						</span>
					</div>
					<div className={css.subtitle}>
						Enjoy a great and spicey pizza
					</div>
					<button className={'btn'}>Get Started</button>
				</div>
				<div className={css.right}>
					<Image
						src={GirlEatsPizza}
						alt='GirlEatsPizza'
						layout='intrinsic'
					/>

					<button className={css.randomButton}>Randomize</button>
					<div className={css.pizzaContainer}>
						<div className={css.left}>
							<Image
								src={Diavola}
								objectFit={'contain'}
								className={css.img}
							/>
						</div>
						<div className={css.right}>
							<span>Pizza Piccante</span>
							<span
								className={`${css.subtitle} ${css.redLetters}`}>
								$ 12.00
							</span>
						</div>
					</div>
				</div>

				<button className={css.phoneButton}>
					<span>Contact Us</span>
					<div className={css.phoneIcon}>
						<UilPhone size={30} />
					</div>
				</button>
			</div>
		</>
	);
};

export default Hero;

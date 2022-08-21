import type { NextPage } from 'next';
import Head from 'next/head';
import { Layout, Hero, Services } from '../components';
import css from '../styles/Home.module.css';

const Home: NextPage = () => {
	return (
		<>
			<Layout>
				<Head>
					<meta name='description' content='BOHO' />
					<link rel='icon' href='/Logo.png' />
				</Head>
				<main className={css.container}>
					<Hero />
					<Services />
				</main>
			</Layout>
		</>
	);
};

export default Home;

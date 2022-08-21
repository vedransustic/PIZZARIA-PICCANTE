import React, { PropsWithChildren } from 'react';
import { Footer, Navbar } from '.';

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
	return (
		<>
			<Navbar />
			{children}
			<Footer />
		</>
	);
};

export default Layout;

'use client';

import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import theme from '../styles/theme';

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='pt-br'>
			<body>
				<ThemeProvider theme={theme}>
					<CssBaseline />
					<main>{children}</main>
				</ThemeProvider>
			</body>
		</html>
	);
}

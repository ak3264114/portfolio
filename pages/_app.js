// pages/_app.js
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import Carousel from "@/components/Carousel";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
	const router = useRouter();
	const [loading, setLoading] = useState(false);

	// Create a loading state for page transitions
	useEffect(() => {
		const handleStart = () => setLoading(true);
		const handleComplete = () => setLoading(false);

		router.events.on('routeChangeStart', handleStart);
		router.events.on('routeChangeComplete', handleComplete);
		router.events.on('routeChangeError', handleComplete);

		return () => {
			router.events.off('routeChangeStart', handleStart);
			router.events.off('routeChangeComplete', handleComplete);
			router.events.off('routeChangeError', handleComplete);
		};
	}, [router]);

	// Only show carousel on home page
	const showCarousel = router.pathname === '/';

	return (
		<>
			{loading && (
				<div className="fixed inset-0 bg-gray-900/80 z-50 flex items-center justify-center">
					<div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-opacity-50"></div>
				</div>
			)}

			{showCarousel && <Carousel />}
			<Component {...pageProps} />

			<footer className="mt-12 py-6 text-center text-gray-400 text-sm">
				<p>© {new Date().getFullYear()} Amit Kumar. All rights reserved.</p>
			</footer>
		</>
	);
}
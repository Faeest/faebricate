import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const SpaceGrotesk = Space_Grotesk({
	variable: "--font-space-grotesk",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Faebricate - Jasa 3D Printing di Malang",
	description: "Layanan 3D printing berkualitas tinggi di Kota Malang untuk kebutuhan prototyping dan proyek kustom Anda.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${SpaceGrotesk.variable} antialiased font-(family-name:--font-space-grotesk)`}>{children}</body>
		</html>
	);
}

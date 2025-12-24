"use client";
import { Button } from "@/components/ui/button";
import { motion, useInView } from "motion/react";
import { useEffect, useRef } from "react";
export default function Home() {
	const ref = useRef(null);
	const isInView = useInView(ref);
	useEffect(() => {
		console.log("Page in view:", isInView);
	}, [isInView]);
	return (
		<main className="flex min-h-screen items-center justify-center flex-col bg-zinc-50">
			<div className="min-h-screen w-full flex flex-col justify-center items-center bg-[hsl(173,58%,32%)]">
				<motion.div ref={ref} className="text-9xl text-[#f8f9fa] flex">
					{isInView &&
						"Faebricate.".split("").map((char, i) => (
							<motion.span key={i} className="flex font-semibold" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05, ease: "backOut", type: "tween" }}>
								{char}
							</motion.span>
						))}
				</motion.div>
				<Button>TEST</Button>
			</div>
			<div className="min-h-screen w-full flex justify-center items-center"></div>
		</main>
	);
}

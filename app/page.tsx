"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { SiDiscord, SiGmail, SiInstagram, SiWhatsapp } from "@icons-pack/react-simple-icons";
import { Phone } from "lucide-react";
import { motion, useInView } from "motion/react";
import { useEffect, useRef } from "react";

const materials = [
	{
		name: "PLA+",
		category: "Filament",
		price: "800/g",
		description: "kuat, tahan benturan lebih baik, mudah dicetak dan terjangkau. Cocok untuk prototipe.",
		image: "https://hips.hearstapps.com/hmg-prod/images/flowers-trees-and-bushes-reach-their-peak-of-full-bloom-in-news-photo-1678292967.jpg?resize=300:*",
	},
	{
		name: "PETG",
		category: "Filament",
		price: "1200/g",
		description: "Kuat, fleksibel, tahan air, dan tahan panas. Cocok untuk outdoor.",
		image: "https://hips.hearstapps.com/hmg-prod/images/flowers-trees-and-bushes-reach-their-peak-of-full-bloom-in-news-photo-1678292967.jpg?resize=300:*",
	},
	{
		name: "ABS - like",
		category: "Resin",
		price: "2500/g",
		description: "Detail tinggi dan permukaan halus. Cocok untuk miniatur, model detail, prototipe visual.",
		image: "https://hips.hearstapps.com/hmg-prod/images/flowers-trees-and-bushes-reach-their-peak-of-full-bloom-in-news-photo-1678292967.jpg?resize=300:*",
	},
	{
		name: "Tough",
		category: "Resin",
		price: "5000/g",
		description: "Detail tinggi, kuat, dan tahan benturan. Cocok untuk prototipe fungsional dan bagian mekanis.",
		image: "https://hips.hearstapps.com/hmg-prod/images/flowers-trees-and-bushes-reach-their-peak-of-full-bloom-in-news-photo-1678292967.jpg?resize=300:*",
	},
];
export default function Home() {
	const ref = useRef(null);
	const isInView = useInView(ref);
	useEffect(() => {
		console.log("Page in view:", isInView);
	}, [isInView]);
	return (
		<main className="flex min-h-screen items-center justify-center flex-col bg-zinc-50 max-w-640 mx-auto">
			<div ref={ref} className="relative max-h-270 not-2k:min-h-screen 2k:h-screen w-full flex flex-col lg:gap-10 gap-6 justify-center items-center bg-linear-to-b from-teal-800 to-teal-600">
				<div className={cn("absolute inset-0 z-0 opacity-25", "bg-size-[40px_40px]", "bg-[linear-gradient(90deg,var(--color-neutral-300)_1px,transparent_1px),linear-gradient(0deg,var(--color-neutral-300)_1px,transparent_1px)]", "mask-[radial-gradient(ellipse_at_center,black,transparent_95%)]")} />
				<motion.div className="z-1 lg:text-9xl md:text-8xl sm:text-7xl text-5xl text-[#f8f9fa] flex">
					{isInView &&
						"Faebricate.".split("").map((char, i) => (
							<motion.span key={i} className="flex font-semibold" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05, ease: "backOut", type: "tween" }}>
								{char}
							</motion.span>
						))}
				</motion.div>
				<motion.div className="z-1 lg:text-xl text-lg text-[#f8f9fa] flex flex-wrap md:gap-x-2 gap-x-2 max-w-sm w-4/5 justify-center">
					{isInView &&
						"Jasa 3D printing yang berlokasi di Kota Malang".split(" ").map((current, i) => (
							<motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 + i * 0.05, ease: "backOut", type: "tween" }} className="flex">
								{current == "" ? <span>&nbsp;</span> : current}
							</motion.div>
						))}
				</motion.div>
				{isInView && (
					<motion.div className="z-1" key={"kontak-button"} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7, ease: "backOut", type: "tween" }}>
						<Button asChild size={"lg"} variant={"neutral"}>
							<a href="#kontak">
								<Phone /> Kontak
							</a>
						</Button>
					</motion.div>
				)}
			</div>
			<div className="2k:max-h-270 not-2k:min-h-screen 2k:h-screen border-y-4 py-20 w-full flex flex-col justify-start lg:gap-10 gap-6 items-center bg-neutral-100">
				<div className="md:text-4xl sm:text-3xl text-2xl text-teal-700 text-center">Apa saja yang bisa kami tawarkan?</div>
				<div className="text-center w-4/5 max-w-xl text-teal-700 lg:text-xl sm:text-lg">Kami menyediakan layanan 3D printing untuk kebutuhan prototyping atau untuk proyek kustom Anda.</div>
				<div className="w-full flex flex-wrap px-5 py-5 2xl:py-20 justify-center lg:gap-10 gap-6 items-stretch">
					{materials.map((material) => (
						<Card key={material.name} className="card-custom">
							<img src={material.image} alt={`Layanan Faebricate ${material.name}`} className="w-full h-auto" />
							<CardContent className="flex flex-col">
								<div className="flex w-full justify-between items-center mb-4">
									<div className="text-xl font-medium">{material.name}</div>
									<div className="flex gap-1">
										<Badge variant={"neutral"}>{material.category}</Badge>
										<Badge variant={"neutral"}>{material.price}</Badge>
									</div>
								</div>
								<div>{material.description}</div>
							</CardContent>
						</Card>
					))}
				</div>
			</div>
			<div className="2k:max-h-270 not-2k:min-h-screen 2k:h-screen pt-20 w-full flex flex-col justify-start lg:gap-10 gap-6 items-center bg-teal-600">
				<div className="md:text-4xl sm:text-3xl text-2xl text-white text-center">Kontak</div>
				<div className="w-full flex flex-wrap px-5 py-5 2xl:py-20 justify-center lg:gap-10 gap-6 items-stretch">
					<Card className="card-custom-2">
						<a target="_blank" href="https://api.whatsapp.com/send?phone=6285174427445" className="py-3 text-green-600">
							<CardContent className="flex flex-row items-center justify-center gap-2 sm:gap-4 text-center">
								<SiWhatsapp className="sm:size-6 size-4" />
								<div className="sm:text-xl font-medium">Whatsapp</div>
							</CardContent>
						</a>
					</Card>
					<Card className="card-custom-2">
						<a target="_blank" href="https://instagram.com/faeest" className="py-3 text-fuchsia-600">
							<CardContent className="flex flex-row items-center justify-center gap-2 sm:gap-4 text-center">
								<SiInstagram className="sm:size-6 size-4" />
								<div className="sm:text-xl font-medium">Instagram</div>
							</CardContent>
						</a>
					</Card>
					<Card className="card-custom-2">
						<a target="_blank" href="mailto:faeest.115@gmail.com" className="py-3 text-red-600">
							<CardContent className="flex flex-row items-center justify-center gap-2 sm:gap-4 text-center">
								<SiGmail className="sm:size-6 size-4" />
								<div className="sm:text-xl font-medium">Email</div>
							</CardContent>
						</a>
					</Card>
					<Card className="card-custom-2">
						<a target="_blank" href="https://discordapp.com/channels/@me/493157260533563402/" className="py-3 text-indigo-600">
							<CardContent className="flex flex-row items-center justify-center gap-2 sm:gap-4 text-center">
								<SiDiscord className="sm:size-6 size-4" />
								<div className="sm:text-xl font-medium">Discord</div>
							</CardContent>
						</a>
					</Card>
					<Card className="card-custom-3">
						<iframe className="w-full h-full" id="gmap_canvas" src="https://maps.google.com/maps?q=faebricate&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder={0} scrolling="no" marginHeight={0} marginWidth={0} />
					</Card>
				</div>
			</div>
		</main>
	);
}

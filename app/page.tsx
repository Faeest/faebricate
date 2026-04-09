"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { SiDiscord, SiGmail, SiInstagram, SiWhatsapp } from "@icons-pack/react-simple-icons";
import { Phone } from "lucide-react";
import Image from "next/image";
import { motion } from "motion/react";
import Lenis from "lenis";
import mapboxgl from "mapbox-gl";
import { useEffect, useRef } from "react";

const MAPBOX_ACCESS_TOKEN = "pk.eyJ1IjoiZmFlZXN0IiwiYSI6ImNtbnFxNnRnejA5eWgydW40eDNtaHhxNjcifQ.AqUdKkkEmaGuFHjYMn-ADA";
const FAEBRICATE_COORDINATES: [number, number] = [112.59618291280333, -7.914592712527458];
const materials = [
	{
		name: "PLA+",
		category: "Filament",
		price: "800/g",
		description: "Kuat, tahan benturan lebih baik, mudah dicetak, dan terjangkau. Cocok untuk prototipe cepat dan part harian.",
		image: "/pla_plus.webp",
	},
	{
		name: "PETG",
		category: "Filament",
		price: "1200/g",
		description: "Kuat, fleksibel, tahan air, dan tahan panas. Cocok untuk outdoor, komponen fungsional, dan casing.",
		image: "/PETG.webp",
	},
	{
		name: "ABS - like",
		category: "Resin",
		price: "2500/g",
		description: "Detail tinggi dan permukaan halus. Cocok untuk miniatur, model detail, dan prototipe visual.",
		image: "/standard-resin.webp",
	},
	{
		name: "Tough",
		category: "Resin",
		price: "5000/g",
		description: "Detail tinggi, kuat, dan tahan benturan. Cocok untuk prototipe fungsional dan bagian mekanis yang butuh presisi.",
		image: "/tough-resin.webp",
	},
];

const contacts = [
	{
		name: "Whatsapp",
		url: "https://api.whatsapp.com/send?phone=6285174427445",
		icon: SiWhatsapp,
		color: "text-green-600",
	},
	{
		name: "Instagram",
		url: "https://instagram.com/faeest",
		icon: SiInstagram,
		color: "text-fuchsia-600",
	},
	{
		name: "Email",
		url: "mailto:faeest.115@gmail.com",
		icon: SiGmail,
		color: "text-red-600",
	},
	{
		name: "Discord",
		url: "https://discordapp.com/channels/@me/493157260533563402/",
		icon: SiDiscord,
		color: "text-indigo-600",
	},
];
export default function Home() {
	const mapContainerRef = useRef<HTMLDivElement | null>(null);
	const mapRef = useRef<mapboxgl.Map | null>(null);
	useEffect(() => {
		const lenis = new Lenis({
			duration: 1.2,
			easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
		});

		function raf(time: DOMHighResTimeStamp) {
			lenis.raf(time);
			requestAnimationFrame(raf);
		}

		requestAnimationFrame(raf);

		return () => {
			lenis.destroy();
		};
	}, []);

	useEffect(() => {
		if (!mapContainerRef.current || mapRef.current) {
			return;
		}

		mapboxgl.accessToken = MAPBOX_ACCESS_TOKEN;

		const map = new mapboxgl.Map({
			container: mapContainerRef.current,
			style: "mapbox://styles/mapbox/streets-v12",
			center: FAEBRICATE_COORDINATES,
			zoom: 14,
		});

		map.addControl(new mapboxgl.NavigationControl(), "top-right");

		const popup = new mapboxgl.Popup({ offset: 24 }).setText("Faebricate");
		new mapboxgl.Marker({ color: "#0d9488" }).setLngLat(FAEBRICATE_COORDINATES).setPopup(popup).addTo(map);

		mapRef.current = map;

		return () => {
			map.remove();
			mapRef.current = null;
		};
	}, []);
	return (
		<main className="flex min-h-screen items-center justify-center flex-col bg-background max-w-640 mx-auto">
			<motion.div className="relative max-h-270 not-2k:min-h-screen 2k:h-screen w-full flex flex-col lg:gap-10 gap-6 justify-center items-center bg-linear-to-b from-teal-800 to-teal-600">
				<div className={cn("absolute inset-0 z-0 opacity-25", "bg-size-[40px_40px]", "bg-[linear-gradient(90deg,var(--color-border)_1px,transparent_1px),linear-gradient(0deg,var(--color-border)_1px,transparent_1px)]", "mask-[radial-gradient(ellipse_at_center,black,transparent_95%)]")} />
				<div className="section-shell section-stack z-1">
					<motion.div className="lg:text-9xl md:text-8xl sm:text-7xl text-5xl text-secondary-background flex" whileInView="visible" initial="hidden" variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.05 } } }}>
						{"Faebricate.".split("").map((char, i) => (
							<motion.span key={i} className="flex font-semibold" variants={{ hidden: { opacity: 0, y: -20 }, visible: { opacity: 1, y: 0, transition: { ease: "backOut", type: "tween" } } }}>
								{char}
							</motion.span>
						))}
					</motion.div>
					<motion.div className="lg:text-xl text-lg text-secondary-background flex flex-wrap md:gap-x-2 gap-x-2 max-w-sm w-4/5 justify-center" whileInView="visible" initial="hidden" variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.05, delayChildren: 0.25 } } }}>
						{"3D printing untuk prototipe cepat, part custom, dan produksi kecil di Malang".split(" ").map((current, i) => (
							<motion.div key={i} variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { ease: "backOut", type: "tween" } } }} className="flex">
								{current == "" ? <span>&nbsp;</span> : current}
							</motion.div>
						))}
					</motion.div>
					<motion.div whileInView="visible" initial="hidden" variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { delay: 0.7, ease: "backOut", type: "tween" } } }}>
						<Button asChild size={"lg"} variant={"neutral"}>
							<a href="#kontak">
								<Phone /> Hubungi sekarang
							</a>
						</Button>
					</motion.div>
				</div>
			</motion.div>
			<motion.div className="2k:max-h-270 not-2k:min-h-screen 2k:h-screen border-y-4 py-20 w-full flex flex-col justify-start lg:gap-10 gap-6 items-center bg-secondary-background relative">
				<div className={cn("absolute inset-0 z-0 opacity-25", "bg-size-[18px_18px]", "bg-transparent opacity-80 bg-[radial-gradient(var(--color-teal-300)_0.9px,transparent_0.9px)]")} />
				<div className="section-shell section-stack z-1">
					<motion.div className="md:text-4xl sm:text-3xl text-2xl text-foreground text-center" whileInView="visible" initial="hidden" variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { delay: 0.1, ease: "backOut", type: "tween" } } }}>
						Apa saja yang bisa kami tawarkan?
					</motion.div>
					<motion.div className="text-center w-4/5 max-w-xl text-foreground lg:text-xl sm:text-lg" whileInView="visible" initial="hidden" variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { delay: 0.2, ease: "backOut", type: "tween" } } }}>
							Kami menyediakan layanan 3D printing untuk kebutuhan prototyping, komponen custom, dan proyek skala kecil yang butuh hasil cepat.
					</motion.div>
				</div>
				<motion.div className="z-1 w-full flex flex-wrap px-5 py-5 2xl:py-20 justify-center lg:gap-10 gap-6 items-stretch" whileInView="visible" initial="hidden" variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.3 } } }}>
					{materials.map((material) => (
						<motion.div key={material.name} variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
							<Card className="card-custom gap-0 overflow-hidden">
								<div className="relative w-full aspect-4/3 overflow-hidden">
									<Image src={material.image} alt={`Layanan Faebricate ${material.name}`} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" priority={material.name === "PLA+"} />
								</div>
								<CardHeader className="gap-3 pb-3 mt-4">
									<div className="flex w-full justify-between items-center gap-2">
										<CardTitle className="text-xl">{material.name}</CardTitle>
										<div className="flex gap-1">
											<Badge variant={"neutral"}>{material.category}</Badge>
											<Badge variant={"neutral"}>{material.price}</Badge>
										</div>
									</div>
								</CardHeader>
								<CardContent>
									<CardDescription className="text-secondary-background">{material.description}</CardDescription>
								</CardContent>
							</Card>
						</motion.div>
					))}
				</motion.div>
			</motion.div>
			<div id="kontak" className="2k:max-h-270 not-2k:min-h-screen 2k:h-screen pt-20 w-full flex flex-col justify-start lg:gap-10 gap-6 items-center bg-teal-600">
				<div className="section-shell section-stack z-1">
					<motion.div whileInView="visible" initial="hidden" variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { delay: 0.1, ease: "backOut", type: "tween" } } }} className="md:text-4xl sm:text-3xl text-2xl text-secondary-background text-center">
						Kontak
					</motion.div>
				</div>
				<motion.div className="z-1 w-full flex flex-wrap px-5 py-5 2xl:py-20 justify-center lg:gap-10 gap-6 items-stretch" whileInView="visible" initial="hidden" variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } } }}>
						{contacts.map((contact) => {
							const IconComponent = contact.icon;
							return (
								<motion.div key={contact.name} variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
									<Card className="card-custom-2">
										<CardHeader className="grid-rows-1 grid-cols-[auto_auto] justify-center items-center text-center pb-2 gap-2">
											<IconComponent className={cn("sm:size-6 size-4", contact.color)} />
											<CardTitle className="sm:text-xl">{contact.name}</CardTitle>
										</CardHeader>
										<CardFooter className="justify-center pt-0">
											<Button asChild variant={"neutral"} size={"sm"}>
												<a target="_blank" rel="noreferrer" href={contact.url} aria-label={contact.name}>
													Hubungi
												</a>
											</Button>
										</CardFooter>
									</Card>
								</motion.div>
							);
						})}
						<motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
							<Card className="card-custom-3 mb-20 relative">
								<div ref={mapContainerRef} className="w-full h-full" aria-label="Lokasi Faebricate di Mapbox" />
							</Card>
						</motion.div>
				</motion.div>
			</div>
			<div className="not-2k:min-h-screen 2k:h-screen border-y-4 py-20 w-full flex flex-col justify-start lg:gap-10 gap-6 items-center bg-secondary-background relative">
				<div className={cn("absolute inset-0 z-0 opacity-25", "bg-size-[18px_18px]", "bg-transparent opacity-80 bg-[radial-gradient(var(--color-teal-300)_0.9px,transparent_0.9px)]")} />
				<div className="section-shell section-stack z-1">
					<motion.div whileInView="visible" initial="hidden" variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { delay: 0.05, ease: "backOut", type: "tween" } } }} className="md:text-4xl sm:text-3xl text-2xl text-foreground text-center">
						Syarat File Wajib Sebelum Cetak
					</motion.div>
					<motion.div className="text-center w-4/5 max-w-2xl text-foreground lg:text-xl sm:text-lg" whileInView="visible" initial="hidden" variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { delay: 0.1, ease: "backOut", type: "tween" } } }}>
						Kami hanya memproses file yang siap cetak untuk menjaga akurasi hasil dan menghindari reprint.
					</motion.div>
				</div>
				<motion.div className="z-1 w-full flex flex-wrap px-5 py-5 justify-center lg:gap-10 gap-6 items-stretch" whileInView="visible" initial="hidden" variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.15 } } }}>
					<motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
						<Card className="card-custom-2 sm:w-80 w-full h-full">
							<CardHeader className="items-center text-center pb-2">
								<motion.div whileInView={{ scale: [1, 1.06, 1] }} transition={{ duration: 0.45, delay: 0.25 }}>
									<Badge variant={"neutral"}>Tidak menerima 2D image</Badge>
								</motion.div>
								<CardTitle className="text-xl">JPG/PNG/PDF bukan file cetak</CardTitle>
							</CardHeader>
							<CardContent className="text-center">
								<CardDescription className="text-foreground">Kami tidak menyediakan konversi desain dari gambar 2D ke model 3D.</CardDescription>
							</CardContent>
						</Card>
					</motion.div>
					<motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
						<Card className="card-custom-2 sm:w-80 w-full h-full">
							<CardHeader className="items-center text-center pb-2">
								<Badge variant={"neutral"}>Format wajib</Badge>
								<CardTitle className="text-xl">STL (utama) / STEP</CardTitle>
							</CardHeader>
							<CardContent className="text-center">
								<CardDescription className="text-foreground">Kirim model 3D siap cetak agar proses estimasi dan produksi lebih cepat.</CardDescription>
							</CardContent>
						</Card>
					</motion.div>
					<motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
						<Card className="card-custom-2 sm:w-80 w-full h-full">
							<CardHeader className="items-center text-center pb-2">
								<Badge variant={"neutral"}>Dimensi wajib jelas (mm)</Badge>
								<CardTitle className="text-xl">Akurasi ukuran = hasil akurat</CardTitle>
							</CardHeader>
							<CardContent className="text-center">
								<CardDescription className="text-foreground">Dimensi yang tidak valid dapat menyebabkan hasil meleset dan reprint berbiaya tambahan.</CardDescription>
							</CardContent>
						</Card>
					</motion.div>
				</motion.div>
				<motion.div className="section-shell section-stack z-1" whileInView="visible" initial="hidden" variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { delay: 0.15, ease: "backOut", type: "tween" } } }}>
					<Button asChild size={"lg"} variant={"neutral"}>
						<a target="_blank" rel="noreferrer" href="https://api.whatsapp.com/send?phone=6285174427445&text=Halo%20Faebricate%2C%20saya%20ingin%20kirim%20file%20STL%20untuk%20estimasi.">
							Kirim File STL
						</a>
					</Button>
					<p className="text-foreground text-center">Belum punya STL? Gunakan jasa desain CAD terpisah.</p>
				</motion.div>
			</div>
			<footer className="w-full py-6 px-4 flex flex-col sm:flex-row gap-2 sm:gap-4 justify-between items-center bg-main border-t-2 border-border text-sm text-secondary-background">
				<p className="text-center sm:text-left">© {new Date().getFullYear()} Faebricate. All rights reserved.</p>
				<nav aria-label="Footer" className="flex items-center gap-4">
					<a href="#" className="hover:underline">Privacy Policy</a>
					<a href="#" className="hover:underline">Terms of Service</a>
				</nav>
			</footer>
		</main>
	);
}

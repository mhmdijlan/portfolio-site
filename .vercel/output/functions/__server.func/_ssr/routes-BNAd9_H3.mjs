import { i as __toESM } from "../_runtime.mjs";
import { K as require_react, b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as MapPin, c as Download, i as Menu, l as ArrowUpRight, o as Mail, r as Phone, s as KeyRound, t as X, u as ArrowDownRight } from "../_libs/lucide-react.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BNAd9_H3.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var site = {
	name: "Mohomed Ijilaan",
	role: "Website Developer",
	location: "Kandy, Sri Lanka",
	email: "mhmdijlan77@gmail.com",
	phoneDisplay: "+94 77 677 8795",
	phoneHref: "tel:+94776778795",
	whatsapp: "https://wa.me/94776778795",
	linkedin: "https://www.linkedin.com/in/mohomed-ijilan",
	github: "https://github.com/mhmdijlan",
	x: "https://x.com/iamijlan",
	instagram: "https://www.instagram.com/iamijlan",
	cv: "/assets/Mohomed-Ijilaan-CV.pdf",
	availability: "Open to Web Developer roles"
};
var navItems = [
	{
		href: "#work",
		label: "Work"
	},
	{
		href: "#about",
		label: "About"
	},
	{
		href: "#skills",
		label: "Skills"
	},
	{
		href: "#experience",
		label: "Experience"
	},
	{
		href: "#contact",
		label: "Contact"
	}
];
var hero = {
	greeting: "Hey, I'm",
	name: "Mohomed Ijilaan",
	title: "Website Developer",
	lede: "I ship fast, conversion-focused websites and custom web systems — WordPress, Shopify, and PHP — with a First Class Software Engineering background and AI-assisted delivery that still gets a human review before it goes live."
};
var about = {
	paragraphs: [
		"I'm a results-driven Website Developer based in Kandy, Sri Lanka, with a First Class BSc (Hons) in Computer Science in Software Engineering from Kingston University (ESOFT Metro Campus) and a Distinction in BTEC HND Computing.",
		"At BuildaStore I design and customize WordPress sites, Shopify themes, and custom-built solutions — then take them through deployment, VPS management, SEO, and QA. I use AI coding agents to explore code and debug faster, and I review every change before it ships.",
		"The work I care about loads quickly, ranks well, and converts: WhatsApp checkout on an e-commerce store, a full POS with ERP and bookkeeping on a VPS, or a marketing site that actually generates leads."
	],
	facts: [
		{
			label: "Degree",
			value: "First Class BSc"
		},
		{
			label: "HND",
			value: "Overall Distinction"
		},
		{
			label: "Focus",
			value: "Website · SEO · CMS"
		},
		{
			label: "Languages",
			value: "English · Tamil · Sinhala"
		}
	]
};
var highlights = [
	{
		title: "Custom WordPress & Shopify",
		body: "Themes, page builders, WooCommerce, and store features shaped around the brand — not a generic template dump."
	},
	{
		title: "PHP systems that run a business",
		body: "POS, billing, inventory, role-based access, and bookkeeping hosted on a VPS with real uptime expectations."
	},
	{
		title: "AI-assisted, human-reviewed",
		body: "Cursor and Claude Code speed up exploration and debugging. Nothing reaches production without a pass from me."
	},
	{
		title: "Launch, host, and keep it fast",
		body: "Domain, cPanel, VPS, SEO, and ongoing maintenance so the site still performs after the handover."
	}
];
var posDemoMessage = "Hi Ijilaan — I'd like a demo of the POS / ERP & bookkeeping system. Please share the link and login details.";
var projects = [
	{
		id: "pos",
		number: "01",
		title: "POS System with ERP & Bookkeeping",
		kicker: "Custom web app · VPS hosted",
		summary: "A full web-based Point of Sale platform with ERP and bookkeeping modules — built to run sales, inventory, and finances in one place. Hosted on a VPS for reliable, always-on access. A live demo is available on request (link + login).",
		points: [
			"Billing, sales processing, and invoice generation",
			"Inventory, expenses, and financial records in one platform",
			"Role-based access for staff and admin",
			"Responsive interface, deployed on a VPS",
			"Built with an AI coding agent, then reviewed for production"
		],
		tech: [
			"HTML5",
			"CSS3",
			"PHP",
			"MySQL",
			"Bootstrap"
		],
		image: "/images/Pos.png",
		imageAlt: "POS, ERP and bookkeeping dashboard",
		cta: "Request demo & login",
		demoRequest: true
	},
	{
		id: "ipremier",
		number: "02",
		title: "iPremier.lk",
		kicker: "E-commerce · WooCommerce",
		summary: "A live online store for brand-new and pre-owned Apple devices and accessories. Custom WordPress/WooCommerce theme with WhatsApp checkout, SEO, and a mobile-first shopping flow for customers across Sri Lanka.",
		points: [
			"Custom WordPress + WooCommerce theme",
			"WhatsApp checkout for faster conversions",
			"Product pages, category filters, and secure checkout",
			"SEO and mobile performance pass"
		],
		tech: [
			"WordPress",
			"WooCommerce",
			"PHP",
			"CSS"
		],
		image: "/images/ipremier.png",
		imageAlt: "iPremier.lk online Apple store",
		href: "https://ipremier.lk/",
		cta: "Visit live site"
	},
	{
		id: "anowart",
		number: "03",
		title: "Anowart.com",
		kicker: "Digital marketing agency",
		summary: "A lead-focused website for a Sri Lankan digital marketing agency covering SEO, Google Ads, social, branding, and web development. Built to explain services clearly and convert visitors into enquiries.",
		points: [
			"Service-led information architecture",
			"SEO-friendly, responsive layouts",
			"Clear calls to action and contact paths",
			"Built to support paid and organic campaigns"
		],
		tech: [
			"WordPress",
			"PHP",
			"CSS",
			"SEO"
		],
		image: "/images/anowart.png",
		imageAlt: "Anowart digital marketing website",
		href: "https://www.anowart.com/",
		cta: "Visit live site"
	},
	{
		id: "derdium",
		number: "04",
		title: "Derdium.com",
		kicker: "Company website",
		summary: "Corporate site for a digital solutions company — websites, apps, software, POS, and marketing. Custom WordPress theme with intuitive navigation, contact flows, and SEO so the brand reads as credible and easy to hire.",
		points: [
			"Custom WordPress theme tailored to the brand",
			"Service, product, and contact page structure",
			"Mobile-responsive and cross-browser tested",
			"Fast loading with on-page SEO"
		],
		tech: [
			"WordPress",
			"PHP",
			"CSS",
			"Page builder"
		],
		image: "/images/derdium.png",
		imageAlt: "Derdium digital solutions company website",
		href: "https://derdium.com/",
		cta: "Visit live site"
	}
];
var skillGroups = [
	{
		title: "Frontend",
		items: [
			"HTML5",
			"CSS3",
			"JavaScript",
			"React.js",
			"Bootstrap"
		]
	},
	{
		title: "Backend",
		items: [
			"PHP",
			"Node.js",
			"MySQL",
			"REST APIs"
		]
	},
	{
		title: "Platforms",
		items: [
			"WordPress",
			"Shopify",
			"WooCommerce",
			"Elementor",
			"Divi"
		]
	},
	{
		title: "Delivery",
		items: [
			"AI coding agents",
			"Cursor",
			"Claude Code",
			"GitHub",
			"VPS",
			"cPanel",
			"SEO",
			"QA"
		]
	}
];
var techMarquee = [
	"HTML5",
	"CSS3",
	"JavaScript",
	"PHP",
	"MySQL",
	"Bootstrap",
	"React.js",
	"Node.js",
	"WordPress",
	"Shopify",
	"WooCommerce",
	"REST APIs",
	"AI coding agents",
	"VPS",
	"SEO"
];
var experience = [{
	period: "Apr 2026 — Present",
	role: "Website Developer",
	org: "BuildaStore",
	bullets: [
		"Develop and customize WordPress websites, including custom-built solutions tailored to the brief.",
		"Customize Shopify themes and implement features that improve functionality and UX.",
		"Assist with server management, website deployment, maintenance, and troubleshooting.",
		"Use AI coding agents for exploration and debugging, then review changes before they go live."
	]
}];
var education = [{
	period: "Jan 2024 — Jan 2025",
	title: "BSc (Hons) Computer Science in Software Engineering",
	org: "ESOFT Metro Campus, Kandy · Kingston University",
	note: "First Class"
}, {
	period: "Feb 2022 — Jan 2024",
	title: "BTEC HND in Computing in Software Engineering",
	org: "ESOFT Metro Campus, Kandy · Pearson",
	note: "Overall Distinction"
}];
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function Reveal({ children, className, delay = 0 }) {
	const ref = (0, import_react.useRef)(null);
	const [shown, setShown] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const el = ref.current;
		if (!el) return;
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
			setShown(true);
			return;
		}
		const io = new IntersectionObserver(([entry]) => {
			if (entry?.isIntersecting) {
				setShown(true);
				io.disconnect();
			}
		}, {
			threshold: .14,
			rootMargin: "0px 0px -8% 0px"
		});
		io.observe(el);
		return () => io.disconnect();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref,
		className: cn("reveal", shown && "is-in", className),
		style: { transitionDelay: `${delay}ms` },
		children
	});
}
function SectionHeading({ eyebrow, title, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("mb-10 md:mb-14", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mb-3 font-sans text-xs font-medium tracking-[0.22em] text-mint uppercase",
			children: eyebrow
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "font-display text-3xl font-semibold tracking-tight text-foreground md:text-5xl",
			children: title
		})]
	});
}
function About() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "about",
		className: "scroll-mt-24 py-20 md:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "section-shell",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "About",
					title: "Building sites that earn their keep."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid items-start gap-10 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] md:gap-16",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative mx-auto w-full max-w-sm md:mx-0",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute -inset-3 rounded-xl bg-primary/20 blur-2xl",
								"aria-hidden": true
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "relative overflow-hidden rounded-xl bg-card p-2 shadow-[0_0_0_1px_rgb(61_90_254/0.35)]",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: "/images/profile.jpg",
									alt: "Mohomed Ijilaan",
									className: "img-frame aspect-[4/5] w-full rounded-lg object-cover object-top"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 text-sm text-muted",
								children: "First Class Software Engineering · Kandy, Sri Lanka"
							})
						]
					}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "space-y-4 text-base text-muted md:text-lg",
						children: about.paragraphs.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: p }) }, p.slice(0, 24)))
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4",
						children: about.facts.map((fact, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: i * 60,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-lg bg-card p-4 shadow-[0_0_0_1px_rgb(255_255_255/0.08)]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[0.7rem] font-medium tracking-[0.16em] text-mint uppercase",
									children: fact.label
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 font-display text-sm font-semibold text-foreground",
									children: fact.value
								})]
							})
						}, fact.label))
					})] })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-14 grid gap-3 md:grid-cols-2 lg:grid-cols-4",
					children: highlights.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: i * 70,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "h-full rounded-lg bg-card p-5 shadow-[0_0_0_1px_rgb(255_255_255/0.08)]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-base font-semibold text-foreground",
								children: item.title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-muted",
								children: item.body
							})]
						})
					}, item.title))
				})
			]
		})
	});
}
function Contact({ prefill }) {
	const [name, setName] = (0, import_react.useState)("");
	const [email, setEmail] = (0, import_react.useState)("");
	const [message, setMessage] = (0, import_react.useState)("");
	const [sent, setSent] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		if (prefill) {
			setMessage(prefill);
			setSent(false);
		}
	}, [prefill]);
	function onSubmit(e) {
		e.preventDefault();
		const subject = encodeURIComponent(`Portfolio enquiry from ${name || "a visitor"}`);
		const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
		window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
		setSent(true);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "contact",
		className: "scroll-mt-24 py-20 md:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "section-shell",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "Contact",
				title: "Let's build the next one."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "max-w-md text-base text-muted md:text-lg",
						children: "Hiring for a Web Developer, need a WordPress or Shopify build, or want a demo login for the POS system? Send a note — I typically reply the same day."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "mt-8 space-y-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: site.phoneHref,
								className: "group flex items-center gap-3 text-foreground transition-colors duration-150 hover:text-mint",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "inline-flex size-11 items-center justify-center rounded-md bg-card shadow-[0_0_0_1px_rgb(255_255_255/0.08)]",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "size-4" })
								}), site.phoneDisplay]
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: `mailto:${site.email}`,
								className: "group flex items-center gap-3 text-foreground transition-colors duration-150 hover:text-mint",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "inline-flex size-11 items-center justify-center rounded-md bg-card shadow-[0_0_0_1px_rgb(255_255_255/0.08)]",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "size-4" })
								}), site.email]
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-center gap-3 text-muted",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "inline-flex size-11 items-center justify-center rounded-md bg-card shadow-[0_0_0_1px_rgb(255_255_255/0.08)]",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "size-4" })
								}), site.location]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex flex-wrap gap-x-5 gap-y-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Social, {
								href: site.linkedin,
								label: "LinkedIn"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Social, {
								href: site.github,
								label: "GitHub"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Social, {
								href: site.whatsapp,
								label: "WhatsApp"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Social, {
								href: site.x,
								label: "X"
							})
						]
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 80,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit,
						className: "rounded-xl bg-card p-5 shadow-[0_0_0_1px_rgb(255_255_255/0.08)] md:p-7",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-4 sm:grid-cols-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Name",
									htmlFor: "name",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										id: "name",
										name: "name",
										required: true,
										autoComplete: "name",
										value: name,
										onChange: (e) => setName(e.target.value),
										className: "field-input",
										placeholder: "Your name"
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Email",
									htmlFor: "email",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										id: "email",
										name: "email",
										type: "email",
										required: true,
										autoComplete: "email",
										value: email,
										onChange: (e) => setEmail(e.target.value),
										className: "field-input",
										placeholder: "you@company.com"
									})
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Message",
								htmlFor: "message",
								className: "mt-4",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
									id: "message",
									name: "message",
									required: true,
									rows: 6,
									value: message,
									onChange: (e) => setMessage(e.target.value),
									className: "field-input min-h-36 resize-y",
									placeholder: "Role, project, or POS demo request…"
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "submit",
								className: "mt-5 inline-flex h-12 w-full items-center justify-center rounded-full bg-blue-500 text-sm font-semibold text-white transition-[transform,background-color] duration-150 ease-out hover:bg-blue-600 active:scale-[0.96] sm:w-auto sm:px-8",
								children: "Send message"
							}),
							sent ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-3 text-sm text-mint",
								children: [
									"Opening your email client. If it doesn't appear, write me at",
									" ",
									site.email,
									" or WhatsApp."
								]
							}) : null
						]
					})
				})]
			})]
		})
	});
}
function Field({ label, htmlFor, children, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className,
		htmlFor,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "mb-2 block text-xs font-medium tracking-[0.14em] text-muted uppercase",
			children: label
		}), children]
	});
}
function Social({ href, label }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
		href,
		target: "_blank",
		rel: "noreferrer",
		className: "group inline-flex items-center gap-1 text-sm font-medium text-muted transition-colors duration-150 hover:text-mint",
		children: [label, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-3.5 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" })]
	});
}
function CursorGlow() {
	const [pos, setPos] = (0, import_react.useState)({
		x: -200,
		y: -200
	});
	const [on, setOn] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const fine = window.matchMedia("(pointer: fine)").matches;
		const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
		if (!fine || reduce) return;
		setOn(true);
		const move = (e) => setPos({
			x: e.clientX,
			y: e.clientY
		});
		window.addEventListener("mousemove", move, { passive: true });
		return () => window.removeEventListener("mousemove", move);
	}, []);
	if (!on) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		"aria-hidden": true,
		className: "pointer-events-none fixed z-40 hidden size-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgb(180_200_255/0.22),transparent_70%)] md:block",
		style: {
			left: pos.x,
			top: pos.y
		}
	});
}
function Experience() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "experience",
		className: "scroll-mt-24 py-20 md:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "section-shell",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "Path",
				title: "Experience and education."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "mb-6 text-xs font-medium tracking-[0.2em] text-muted uppercase",
					children: "Work"
				}), experience.map((job) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "relative border-l border-line pl-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "absolute top-1.5 -left-[5px] size-2.5 rounded-full bg-primary shadow-[0_0_0_4px_rgb(61_90_254/0.2)]",
							"aria-hidden": true
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-medium tracking-[0.14em] text-mint uppercase",
							children: job.period
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
							className: "mt-2 font-display text-2xl font-semibold text-foreground",
							children: job.role
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm text-muted",
							children: job.org
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-4 space-y-2 text-sm text-muted md:text-base",
							children: job.bullets.map((bullet) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mt-2 size-1 shrink-0 rounded-full bg-mint",
									"aria-hidden": true
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: bullet })]
							}, bullet))
						})
					]
				}) }, job.org))] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "mb-6 text-xs font-medium tracking-[0.2em] text-muted uppercase",
					children: "Education"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "space-y-4",
					children: education.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: i * 80,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "rounded-lg bg-card p-5 shadow-[0_0_0_1px_rgb(255_255_255/0.08)]",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex flex-wrap items-center justify-between gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs font-medium tracking-[0.14em] text-muted uppercase",
										children: item.period
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "rounded-full bg-primary/15 px-2.5 py-1 text-[0.7rem] font-semibold tracking-wide text-mint uppercase",
										children: item.note
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
									className: "mt-3 font-display text-lg font-semibold text-foreground",
									children: item.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-sm text-muted",
									children: item.org
								})
							]
						})
					}, item.title))
				})] })]
			})]
		})
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "border-t border-line py-8",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "section-shell flex flex-col items-start justify-between gap-3 text-sm text-muted sm:flex-row sm:items-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
				"© ",
				(/* @__PURE__ */ new Date()).getFullYear(),
				" ",
				site.name,
				". Built for the next role."
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "#home",
				className: "text-muted transition-colors duration-150 hover:text-mint",
				children: "Back to top"
			})]
		})
	});
}
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "home",
		className: "relative flex min-h-dvh items-center pt-16",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "section-shell px-[10px] md:px-12 lg:px-24 grid w-full items-end gap-10 py-16 md:grid-cols-[minmax(0,1fr)_auto] md:gap-16 md:py-24",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "hero-in hero-d1 mb-5 font-sans text-sm font-medium tracking-[0.18em] text-mint uppercase",
					children: hero.greeting
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "hero-in hero-d2 hero-name font-display font-extrabold tracking-tight text-foreground",
					children: hero.name
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "hero-in hero-d3 mt-5 flex flex-wrap items-center gap-x-3 gap-y-1 font-display text-xl font-medium text-foreground md:text-2xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: hero.title }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-primary",
							"aria-hidden": true,
							children: "/"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-muted",
							children: site.location
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "hero-in hero-d4 mt-6 max-w-xl text-base text-muted md:text-lg",
					children: hero.lede
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "hero-in hero-d5 mt-8 flex flex-wrap gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "#work",
						className: "inline-flex h-12 items-center gap-2 rounded-full bg-blue-500 px-5 text-sm font-semibold text-white transition-[transform,background-color] duration-150 ease-out hover:bg-blue-600 active:scale-[0.96]",
						children: ["View selected work", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowDownRight, {
							className: "size-4",
							"aria-hidden": true
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#contact",
						className: "inline-flex h-12 items-center gap-2 rounded-md px-5 text-sm font-semibold text-foreground shadow-[0_0_0_1px_rgb(255_255_255/0.14)] transition-[transform,background-color,box-shadow] duration-150 ease-out hover:bg-foreground/5 hover:shadow-[0_0_0_1px_rgb(100_255_218/0.45)] active:scale-[0.96]",
						children: "Get in touch"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "hero-in hero-d6 mt-10 flex flex-col gap-3 md:hidden",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-medium tracking-[0.2em] text-muted uppercase",
						children: site.availability
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap gap-x-5 gap-y-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: site.linkedin,
								target: "_blank",
								rel: "noreferrer",
								className: "text-sm text-muted hover:text-mint",
								children: "LinkedIn"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: site.github,
								target: "_blank",
								rel: "noreferrer",
								className: "text-sm text-muted hover:text-mint",
								children: "GitHub"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: site.whatsapp,
								target: "_blank",
								rel: "noreferrer",
								className: "text-sm text-muted hover:text-mint",
								children: "WhatsApp"
							})
						]
					})]
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: "hero-in hero-d6 hidden w-56 flex-col gap-5 md:flex",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-medium tracking-[0.2em] text-muted uppercase",
						children: site.availability
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-px bg-line" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: site.linkedin,
						target: "_blank",
						rel: "noreferrer",
						className: "group flex items-center justify-between text-sm text-muted transition-colors duration-150 hover:text-mint",
						children: ["LinkedIn", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-4 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: site.github,
						target: "_blank",
						rel: "noreferrer",
						className: "group flex items-center justify-between text-sm text-muted transition-colors duration-150 hover:text-mint",
						children: ["GitHub", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-4 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: site.whatsapp,
						target: "_blank",
						rel: "noreferrer",
						className: "group flex items-center justify-between text-sm text-muted transition-colors duration-150 hover:text-mint",
						children: ["WhatsApp", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-4 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" })]
					})
				]
			})]
		})
	});
}
function Nav() {
	const [open, setOpen] = (0, import_react.useState)(false);
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [active, setActive] = (0, import_react.useState)("");
	const [progress, setProgress] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		const onScroll = () => {
			setScrolled(window.scrollY > 12);
			const max = document.documentElement.scrollHeight - window.innerHeight;
			setProgress(max > 0 ? Math.min(1, window.scrollY / max) : 0);
		};
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	(0, import_react.useEffect)(() => {
		const sections = navItems.map((item) => document.querySelector(item.href)).filter((el) => Boolean(el));
		const io = new IntersectionObserver((entries) => {
			const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
			if (visible?.target.id) setActive(`#${visible.target.id}`);
		}, {
			rootMargin: "-30% 0px -55% 0px",
			threshold: [
				.1,
				.25,
				.5
			]
		});
		sections.forEach((el) => io.observe(el));
		return () => io.disconnect();
	}, []);
	(0, import_react.useEffect)(() => {
		document.body.style.overflow = open ? "hidden" : "";
		return () => {
			document.body.style.overflow = "";
		};
	}, [open]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: cn("fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,backdrop-filter] duration-200", scrolled || open ? "bg-background/80 shadow-[0_0_0_1px_rgb(255_255_255/0.06)] backdrop-blur-md" : "bg-transparent"),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "pointer-events-none absolute inset-x-0 bottom-0 h-0.5 origin-left bg-primary",
				style: { transform: `scaleX(${progress})` },
				"aria-hidden": true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "#home",
				className: "sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:rounded-md focus:bg-primary focus:px-3 focus:py-2 focus:text-primary-foreground",
				children: "Skip to content"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "section-shell flex h-16 items-center justify-between md:h-[4.25rem]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden items-center gap-1 md:flex",
					"aria-label": "Primary",
					children: navItems.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: item.href,
						className: cn("rounded-md px-3 py-2 text-sm font-medium transition-colors duration-150", active === item.href ? "text-mint" : "text-muted hover:text-foreground"),
						children: item.label
					}, item.href))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: site.cv,
						target: "_blank",
						rel: "noreferrer",
						className: "hidden h-10 items-center gap-2 rounded-full bg-blue-500 px-4 text-sm font-medium text-white transition-[transform,background-color] duration-150 ease-out hover:bg-blue-600 active:scale-[0.96] md:inline-flex",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, {
							className: "size-4",
							"aria-hidden": true
						}), "Curriculum Vitae"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "inline-flex size-11 items-center justify-center rounded-md text-foreground md:hidden",
						"aria-label": open ? "Close menu" : "Open menu",
						"aria-expanded": open,
						onClick: () => setOpen((v) => !v),
						children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-5" })
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: cn("md:hidden overflow-hidden border-t border-line transition-[max-height,opacity] duration-200 ease-[cubic-bezier(0.22,1,0.36,1)]", open ? "max-h-[28rem] opacity-100" : "pointer-events-none max-h-0 opacity-0"),
				"aria-hidden": !open,
				inert: !open,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "section-shell flex flex-col gap-1 py-4",
					"aria-label": "Mobile",
					children: [navItems.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: item.href,
						onClick: () => setOpen(false),
						className: "rounded-md px-2 py-3 text-lg font-medium text-foreground",
						children: item.label
					}, item.href)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: site.cv,
						target: "_blank",
						rel: "noreferrer",
						onClick: () => setOpen(false),
						className: "mt-2 inline-flex h-12 items-center justify-center gap-2 rounded-full bg-blue-500 text-sm font-medium text-white transition-[transform,background-color] duration-150 ease-out hover:bg-blue-600",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, {
							className: "size-4",
							"aria-hidden": true
						}), "Download Curriculum Vitae"]
					})]
				})
			})
		]
	});
}
function Projects({ onRequestDemo }) {
	const featured = projects[0];
	const rest = projects.slice(1);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "work",
		className: "scroll-mt-24 py-20 md:py-28",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "section-shell",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "Selected work",
					title: "Production sites and systems."
				}),
				featured ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeaturedProject, {
					project: featured,
					onRequestDemo
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6 grid gap-6 lg:grid-cols-3",
					children: rest.map((project, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: i * 80,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProjectCard, {
							project,
							onRequestDemo
						})
					}, project.id))
				})
			]
		})
	});
}
function FeaturedProject({ project, onRequestDemo }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "shine grid overflow-hidden rounded-xl bg-card shadow-[0_0_0_1px_rgb(255_255_255/0.08)] transition-[box-shadow,transform] duration-200 ease-out hover:shadow-[0_0_0_1px_rgb(61_90_254/0.5),0_24px_50px_-28px_rgb(61_90_254/0.5)] md:grid-cols-[1.15fr_0.85fr]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative min-h-56 overflow-hidden bg-background md:min-h-[22rem]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: project.image,
				alt: project.imageAlt,
				className: "img-frame project-shot transition-transform duration-500 ease-out hover:scale-[1.04]"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "absolute left-4 top-4 rounded-md bg-background/80 px-2.5 py-1 font-display text-xs font-semibold tracking-widest text-mint backdrop-blur-sm",
				children: project.number
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col p-6 md:p-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-medium tracking-[0.18em] text-mint uppercase",
					children: project.kicker
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "mt-2 font-display text-2xl font-semibold tracking-tight text-foreground md:text-3xl",
					children: project.title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-sm text-muted md:text-base",
					children: project.summary
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-5 space-y-2 text-sm text-muted",
					children: project.points.map((point) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mt-2 size-1 shrink-0 rounded-full bg-primary",
							"aria-hidden": true
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: point })]
					}, point))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TechRow, { tech: project.tech }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProjectCta, {
					project,
					onRequestDemo
				})
			]
		})]
	}) });
}
function ProjectCard({ project, onRequestDemo }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "shine flex h-full flex-col overflow-hidden rounded-xl bg-card shadow-[0_0_0_1px_rgb(255_255_255/0.08)] transition-[box-shadow,transform] duration-200 ease-out hover:-translate-y-1 hover:shadow-[0_0_0_1px_rgb(61_90_254/0.5),0_24px_50px_-28px_rgb(61_90_254/0.5)]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative aspect-[16/10] overflow-hidden bg-background",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: project.image,
				alt: project.imageAlt,
				className: "img-frame project-shot transition-transform duration-500 ease-out hover:scale-[1.05]"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "absolute left-3 top-3 rounded-md bg-background/80 px-2 py-1 font-display text-[0.7rem] font-semibold tracking-widest text-mint backdrop-blur-sm",
				children: project.number
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-1 flex-col p-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[0.7rem] font-medium tracking-[0.16em] text-mint uppercase",
					children: project.kicker
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "mt-1.5 font-display text-xl font-semibold text-foreground",
					children: project.title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 line-clamp-4 text-sm text-muted",
					children: project.summary
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TechRow, { tech: project.tech }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-auto",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProjectCta, {
						project,
						onRequestDemo
					})
				})
			]
		})]
	});
}
function TechRow({ tech }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mt-4 flex flex-wrap gap-1.5",
		children: tech.map((tag) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "rounded-full px-2.5 py-1 text-[0.7rem] font-medium text-muted shadow-[0_0_0_1px_rgb(255_255_255/0.1)]",
			children: tag
		}, tag))
	});
}
function ProjectCta({ project, onRequestDemo }) {
	if (project.demoRequest) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		onClick: () => onRequestDemo(posDemoMessage),
		className: "mt-6 inline-flex h-11 items-center gap-2 self-start rounded-md bg-primary px-4 text-sm font-semibold text-primary-foreground transition-[transform,background-color] duration-150 ease-out hover:bg-primary/90 active:scale-[0.96]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KeyRound, {
			className: "size-4",
			"aria-hidden": true
		}), project.cta]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
		href: project.href,
		target: "_blank",
		rel: "noreferrer",
		className: "mt-6 inline-flex h-11 items-center gap-2 self-start text-sm font-semibold text-foreground transition-colors duration-150 hover:text-mint",
		children: [project.cta, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {
			className: "size-4",
			"aria-hidden": true
		})]
	});
}
function Skills() {
	const loop = [...techMarquee, ...techMarquee];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "skills",
		className: "scroll-mt-24 py-20 md:py-28",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "section-shell",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "Capabilities",
					title: "The stack I actually ship with."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mb-10 max-w-2xl text-base text-muted md:text-lg",
					children: "Core web technologies, CMS platforms, and the AI-assisted workflow I use to move faster without skipping review. Comfortable from theme work to custom PHP systems and VPS deployment."
				}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-4 md:grid-cols-2",
					children: skillGroups.map((group, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: i * 70,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "rounded-lg bg-card p-5 shadow-[0_0_0_1px_rgb(255_255_255/0.08)] md:p-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-lg font-semibold text-foreground",
								children: group.title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-4 flex flex-wrap gap-2",
								children: group.items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "rounded-md bg-background px-3 py-1.5 text-sm text-foreground shadow-[0_0_0_1px_rgb(255_255_255/0.1)]",
									children: item
								}, item))
							})]
						})
					}, group.title))
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative mt-14 overflow-hidden border-y border-line py-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-background to-transparent" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background to-transparent" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "marquee-track",
					"aria-hidden": true,
					children: loop.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "font-display text-sm font-semibold tracking-[0.18em] text-muted uppercase",
						children: [item, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "ml-10 text-primary",
							children: "/"
						})]
					}, `${item}-${i}`))
				})
			]
		})]
	});
}
function PortfolioPage() {
	const [prefill, setPrefill] = (0, import_react.useState)("");
	const onRequestDemo = (0, import_react.useCallback)((message) => {
		setPrefill(message);
		document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
		window.setTimeout(() => {
			document.getElementById("message")?.focus();
		}, 450);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CursorGlow, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Projects, { onRequestDemo }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(About, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skills, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Experience, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Contact, { prefill })
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PortfolioPage, {});
}
//#endregion
export { Home as component };

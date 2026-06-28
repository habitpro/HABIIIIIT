import "./router-aVxrCYB1.js";
import * as React from "react";
import { useEffect, useState } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import AOS from "aos";
import { Activity, Check, CheckCircle2, ChevronDown, Infinity as Infinity$1, Menu, Palette, RefreshCw, Smartphone, Star, StarHalf, ThumbsUp, Wand2, X } from "lucide-react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
//#region src/components/navbar.tsx
var links$1 = [
	{
		label: "Features",
		href: "#features"
	},
	{
		label: "Reviews",
		href: "#reviews"
	},
	{
		label: "FAQ",
		href: "#faq"
	}
];
function Navbar() {
	const [open, setOpen] = useState(false);
	const shopUrl = "https://dodo.pe/habitproshop";
	return /* @__PURE__ */ jsxs("header", {
		className: "sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md",
		children: [/* @__PURE__ */ jsxs("nav", {
			className: "mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8",
			children: [
				/* @__PURE__ */ jsxs("a", {
					href: "#top",
					className: "flex items-center gap-2 font-heading text-lg font-bold tracking-tight",
					children: [/* @__PURE__ */ jsx("div", {
						className: "text-primary flex items-center justify-center h-8 w-8 shrink-0",
						children: /* @__PURE__ */ jsxs("svg", {
							viewBox: "0 0 24 24",
							className: "w-full h-full",
							fill: "none",
							xmlns: "http://www.w3.org/2000/svg",
							children: [
								/* @__PURE__ */ jsx("path", {
									d: "M2 18L9.5 8L14 14L12.5 18H2Z",
									fill: "currentColor"
								}),
								/* @__PURE__ */ jsx("path", {
									d: "M8.5 18L15 7L22 18H8.5Z",
									fill: "currentColor",
									className: "opacity-85"
								}),
								/* @__PURE__ */ jsx("path", {
									d: "M10.5 10.5L13.5 13.5L19.5 6",
									stroke: "currentColor",
									strokeWidth: "2.5",
									strokeLinecap: "round",
									strokeLinejoin: "round"
								})
							]
						})
					}), "Habit Pro"]
				}),
				/* @__PURE__ */ jsx("div", {
					className: "hidden items-center gap-8 md:flex",
					children: links$1.map((link) => /* @__PURE__ */ jsx("a", {
						href: link.href,
						className: "text-sm font-medium text-muted-foreground transition-colors hover:text-foreground",
						children: link.label
					}, link.href))
				}),
				/* @__PURE__ */ jsx("div", {
					className: "hidden md:block",
					children: /* @__PURE__ */ jsx("a", {
						href: shopUrl,
						target: "_blank",
						rel: "noopener noreferrer",
						className: "rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90",
						children: "Get the Blueprint"
					})
				}),
				/* @__PURE__ */ jsx("button", {
					type: "button",
					"aria-label": "Toggle menu",
					onClick: () => setOpen((v) => !v),
					className: "flex h-10 w-10 items-center justify-center rounded-lg text-foreground md:hidden",
					children: open ? /* @__PURE__ */ jsx(X, { className: "h-5 w-5" }) : /* @__PURE__ */ jsx(Menu, { className: "h-5 w-5" })
				})
			]
		}), open && /* @__PURE__ */ jsx("div", {
			className: "border-t border-border/60 bg-background px-5 py-4 md:hidden",
			children: /* @__PURE__ */ jsxs("div", {
				className: "flex flex-col gap-1",
				children: [links$1.map((link) => /* @__PURE__ */ jsx("a", {
					href: link.href,
					onClick: () => setOpen(false),
					className: "rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground",
					children: link.label
				}, link.href)), /* @__PURE__ */ jsx("a", {
					href: shopUrl,
					target: "_blank",
					rel: "noopener noreferrer",
					onClick: () => setOpen(false),
					className: "mt-2 rounded-full bg-primary px-5 py-2.5 text-center text-sm font-semibold text-primary-foreground",
					children: "Get the Blueprint"
				})]
			})
		})]
	});
}
//#endregion
//#region src/components/hero.tsx
function Hero() {
	return /* @__PURE__ */ jsxs("section", {
		id: "top",
		className: "relative overflow-hidden bg-white pb-20 pt-20 sm:pb-28 sm:pt-24 lg:pb-32 lg:pt-36",
		children: [
			/* @__PURE__ */ jsx("div", { className: "absolute inset-0 -z-10 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-60" }),
			/* @__PURE__ */ jsx("div", { className: "absolute right-1/4 top-0 -z-10 h-96 w-96 rounded-full bg-primary/10 blur-[128px] animate-pulse [animation-duration:8s]" }),
			/* @__PURE__ */ jsx("div", { className: "absolute left-1/3 top-12 -z-10 h-72 w-72 rounded-full bg-indigo-500/5 blur-[96px] animate-pulse [animation-duration:6s]" }),
			/* @__PURE__ */ jsxs("div", {
				className: "mx-auto grid max-w-6xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-10",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "flex flex-col items-start",
					children: [
						/* @__PURE__ */ jsxs("span", {
							className: "mb-6 inline-flex items-center gap-2 rounded-full border border-primary/10 bg-primary/5 px-4 py-1.5 text-xs font-semibold tracking-wide text-primary transition-all animate-in fade-in duration-700",
							children: [/* @__PURE__ */ jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-primary animate-pulse" }), "Built for Google Sheets — no app required"]
						}),
						/* @__PURE__ */ jsxs("h1", {
							className: "text-balance font-heading text-4xl font-black leading-[1.05] tracking-tight text-slate-950 sm:text-5xl lg:text-[3.5rem] animate-in fade-in slide-in-from-bottom-6 duration-1000 ease-out fill-mode-forwards",
							children: [
								"Master your daily execution.",
								" ",
								/* @__PURE__ */ jsx("span", {
									className: "bg-gradient-to-r from-primary via-indigo-600 to-primary bg-clip-text text-transparent",
									children: "Track real progress."
								}),
								" ",
								"Build lasting discipline."
							]
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mt-6 max-w-xl text-pretty text-base font-medium leading-relaxed text-slate-500 sm:text-lg animate-in fade-in slide-in-from-bottom-4 delay-200 duration-1000 fill-mode-both",
							children: "The ultimate Google Sheets framework engineered to turn raw data into a visual, high-performance execution dashboard. Looks like a custom standalone app—not a spreadsheet."
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mt-4 max-w-xl text-pretty text-sm font-medium leading-relaxed text-slate-400 animate-in fade-in slide-in-from-bottom-4 delay-300 duration-1000 fill-mode-both",
							children: "Zero apps to download. Zero monthly subscriptions. Open Google Sheets, select your custom protocol, and instantly gamify your routine."
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center animate-in fade-in slide-in-from-bottom-4 delay-500 duration-1000 fill-mode-both",
							children: [/* @__PURE__ */ jsx("a", {
								href: "https://dodo.pe/habitproshop",
								target: "_blank",
								rel: "noopener noreferrer",
								className: "group inline-flex items-center justify-center rounded-xl bg-primary px-7 py-4 text-sm font-bold text-primary-foreground shadow-lg shadow-primary/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary/95 hover:shadow-xl hover:shadow-primary/25 active:translate-y-0",
								children: "Get the Blueprint — $27"
							}), /* @__PURE__ */ jsxs("div", {
								className: "flex flex-col",
								children: [/* @__PURE__ */ jsx("span", {
									className: "text-xs font-bold text-slate-700 uppercase tracking-wider",
									children: "One-time payment"
								}), /* @__PURE__ */ jsx("span", {
									className: "text-[11px] font-medium text-slate-400 mt-0.5",
									children: "Instant download. Works perfectly in Google Sheets."
								})]
							})]
						})
					]
				}), /* @__PURE__ */ jsxs("div", {
					className: "relative animate-in fade-in zoom-in-95 delay-300 duration-1000 ease-out fill-mode-both",
					children: [
						/* @__PURE__ */ jsx("div", {
							"aria-hidden": "true",
							className: "absolute inset-0 -z-10 mx-auto h-full w-[95%] rounded-[3rem] bg-primary/10 blur-3xl animate-pulse [animation-duration:4s]"
						}),
						/* @__PURE__ */ jsx("div", {
							className: "relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-slate-200 bg-slate-50/50 p-4 shadow-[0_24px_50px_-12px_rgba(0,0,0,0.07)] backdrop-blur-sm transition-all duration-500 hover:shadow-[0_32px_64px_rgba(0,0,0,0.1)]",
							children: /* @__PURE__ */ jsx("img", {
								src: "/dashboard.jpg",
								alt: "Habit Pro dashboard showing daily habit tracking, progress analytics, and completion charts in Google Sheets",
								className: "h-full w-full rounded-xl object-cover object-top shadow-[0_8px_30px_rgba(0,0,0,0.08)]"
							})
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "absolute -bottom-6 -left-3 flex max-w-[18rem] items-start gap-3 rounded-xl border border-indigo-400/20 bg-white/90 p-4 shadow-[0_12px_32px_rgba(0,0,0,0.06)] backdrop-blur-md transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_20px_40px_-4px_rgba(0,0,0,0.1)] sm:-left-6 animate-in fade-in slide-in-from-y-8 delay-700 duration-1000 ease-out fill-mode-both",
							children: [/* @__PURE__ */ jsx("div", {
								className: "flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-dashed border-indigo-400 bg-indigo-50 font-heading text-xs font-bold text-indigo-600",
								children: "MV"
							}), /* @__PURE__ */ jsxs("div", {
								className: "min-w-0 flex-1",
								children: [/* @__PURE__ */ jsxs("div", {
									className: "flex items-center gap-1.5 text-primary",
									children: [/* @__PURE__ */ jsx("span", {
										className: "text-xs font-black text-slate-900",
										children: "4.5"
									}), /* @__PURE__ */ jsxs("div", {
										className: "flex flex-nowrap items-center gap-0.5 whitespace-nowrap shrink-0",
										children: [
											/* @__PURE__ */ jsx(Star, { className: "h-3 w-3 fill-current shrink-0" }),
											/* @__PURE__ */ jsx(Star, { className: "h-3 w-3 fill-current shrink-0" }),
											/* @__PURE__ */ jsx(Star, { className: "h-3 w-3 fill-current shrink-0" }),
											/* @__PURE__ */ jsx(Star, { className: "h-3 w-3 fill-current shrink-0" }),
											/* @__PURE__ */ jsxs("span", {
												className: "relative inline-block h-3 w-3 shrink-0",
												children: [/* @__PURE__ */ jsx(Star, { className: "absolute inset-0 h-3 w-3 fill-none text-primary/20 shrink-0" }), /* @__PURE__ */ jsx(StarHalf, { className: "absolute inset-0 h-3 w-3 fill-current shrink-0" })]
											})
										]
									})]
								}), /* @__PURE__ */ jsx("p", {
									className: "mt-2 text-xs font-medium leading-relaxed text-slate-600",
									children: "Honestly, I just wanted something clean to track my daily habits without paying an app subscription every month. It took 2 seconds to copy to my Drive and it just works."
								})]
							})]
						})
					]
				})]
			})
		]
	});
}
//#endregion
//#region src/components/social-proof-bar.tsx
var tickerText = "1,200+ ROUTINES OPTIMIZED  •  4.9★ ELITE FEEDBACK RATING  •  AUTOMATIC STREAK CALCULATION  •  2-SECOND DRIVE COPY  •  INSTANT DOWNLOAD ACCESS  •  ";
function SocialProofBar() {
	return /* @__PURE__ */ jsx("section", {
		className: "border-y border-border bg-secondary/50 overflow-hidden",
		children: /* @__PURE__ */ jsx("div", {
			className: "mx-auto flex max-w-6xl items-center py-4",
			style: { maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)" },
			children: /* @__PURE__ */ jsxs("div", {
				className: "flex shrink-0 items-center gap-8 whitespace-nowrap",
				style: { animation: "marquee-scroll 25s linear infinite" },
				children: [
					/* @__PURE__ */ jsx("span", {
						className: "text-xs font-semibold uppercase tracking-widest text-muted-foreground",
						children: tickerText
					}),
					/* @__PURE__ */ jsx("span", {
						className: "text-xs font-semibold uppercase tracking-widest text-muted-foreground",
						children: tickerText
					}),
					/* @__PURE__ */ jsx("span", {
						className: "text-xs font-semibold uppercase tracking-widest text-muted-foreground",
						children: tickerText
					}),
					/* @__PURE__ */ jsx("span", {
						className: "text-xs font-semibold uppercase tracking-widest text-muted-foreground",
						children: tickerText
					})
				]
			})
		})
	});
}
//#endregion
//#region src/components/feature-showcase.tsx
var blocks = [
	{
		title: "The 30-Day Execution Matrix & Progression Waves",
		body: "Track your daily habits across a clean, fully integrated monthly grid. As you check off your routines, the system dynamically plots your consistency data onto a fluid progression wave graph, mapping your execution velocity in real time.",
		placeholder: "1.png"
	},
	{
		title: "Weekly Analytics & Dedicated Day Cards",
		body: "Isolate your weekly performance with dedicated analytics columns. Compare execution variables across Week 1 through Week 5 with crisp bar graphs, keeping your focus completely localized on the current macro cycle.",
		placeholder: "2.png"
	},
	{
		title: "Automated Performance Grades & Targets",
		body: "Let the dashboard process your execution math automatically. Get an instant snapshot of your performance trends and an official Monthly Grade percentage block, highlighting exactly where your daily discipline stands.",
		placeholder: "3.png"
	},
	{
		title: "Protocols & Troubleshooting",
		body: "Master your time with proven frameworks. Learn how to anchor new habits, use the 2-Day Rule to maintain consistency, and resolve friction points before they derail your progress.",
		placeholder: "cource.jpg"
	}
];
var gridFeatures = [
	{
		icon: Activity,
		title: "Automated performance metrics",
		body: "Your execution math and progress percentages run themselves cleanly in the background."
	},
	{
		icon: Palette,
		title: "Color-coded visual progress",
		body: "Instantly read your wins and gaps at a glance."
	},
	{
		icon: Smartphone,
		title: "Seamless mobile layout",
		body: "Optimized to feel like a native app on your phone."
	},
	{
		icon: Wand2,
		title: "Zero complex formula setup",
		body: "Copy it once and start tracking immediately."
	},
	{
		icon: Infinity$1,
		title: "Lifetime ownership access",
		body: "Buy once, keep it forever in your workspace."
	},
	{
		icon: RefreshCw,
		title: "All future updates free",
		body: "Every new version lands in your hands at no cost."
	}
];
function ImagePlaceholder({ label }) {
	return /* @__PURE__ */ jsx("div", {
		role: "img",
		"aria-label": "Feature preview",
		className: "relative aspect-[16/11] w-full overflow-hidden rounded-2xl border border-border bg-muted/40 shadow-xl shadow-primary/5",
		children: /* @__PURE__ */ jsx("img", {
			src: `/${label}`,
			alt: "Feature preview",
			className: "h-full w-full object-cover"
		})
	});
}
function FeatureShowcase() {
	return /* @__PURE__ */ jsxs("section", {
		id: "features",
		className: "mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28",
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "mx-auto mb-16 max-w-2xl text-center",
				"data-aos": "fade-up",
				children: [/* @__PURE__ */ jsx("span", {
					className: "text-sm font-semibold uppercase tracking-wide text-primary",
					children: "Inside the blueprint"
				}), /* @__PURE__ */ jsx("h2", {
					className: "mt-3 text-balance font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl",
					children: "Every tab engineered to make discipline feel effortless"
				})]
			}),
			/* @__PURE__ */ jsx("div", {
				className: "flex flex-col gap-20 lg:gap-28",
				children: blocks.map((block, i) => {
					const reversed = i % 2 === 1;
					return /* @__PURE__ */ jsxs("div", {
						className: "grid items-center gap-8 lg:grid-cols-2 lg:gap-14",
						children: [/* @__PURE__ */ jsx("div", {
							className: reversed ? "lg:order-2" : "",
							"data-aos": "zoom-in-up",
							children: /* @__PURE__ */ jsx(ImagePlaceholder, { label: block.placeholder })
						}), /* @__PURE__ */ jsxs("div", {
							className: reversed ? "lg:order-1" : "",
							"data-aos": "fade-up",
							children: [
								/* @__PURE__ */ jsx("span", {
									className: "text-sm font-semibold text-primary",
									children: `0${i + 1}`
								}),
								/* @__PURE__ */ jsx("h3", {
									className: "mt-2 text-balance font-heading text-2xl font-bold tracking-tight text-foreground sm:text-3xl",
									children: block.title
								}),
								/* @__PURE__ */ jsx("p", {
									className: "mt-4 max-w-md text-pretty text-base leading-relaxed text-muted-foreground",
									children: block.body
								})
							]
						})]
					}, block.title);
				})
			}),
			/* @__PURE__ */ jsx("div", {
				className: "mt-24 grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
				children: gridFeatures.map((feature, idx) => /* @__PURE__ */ jsxs("div", {
					className: "rounded-2xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md",
					"data-aos": "zoom-in-up",
					"data-aos-delay": idx * 70,
					children: [
						/* @__PURE__ */ jsx("div", {
							className: "flex h-11 w-11 items-center justify-center rounded-xl bg-accent text-accent-foreground",
							children: /* @__PURE__ */ jsx(feature.icon, { className: "h-5 w-5" })
						}),
						/* @__PURE__ */ jsx("h4", {
							className: "mt-4 font-heading text-base font-semibold text-foreground",
							children: feature.title
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mt-1.5 text-sm leading-relaxed text-muted-foreground",
							children: feature.body
						})
					]
				}, feature.title))
			})
		]
	});
}
//#endregion
//#region src/components/pain-point.tsx
var without = [
	"Messy manual spreadsheets you have to rebuild every month",
	"Forgotten app notifications that get swiped away and ignored",
	"Cluttered inputs that make daily logging a chore",
	"Breakable habit streaks with no safety net or history"
];
var withPro = [
	"Automatic calculation engines that do the math for you",
	"A sharp, minimal interface aesthetic that feels premium",
	"Instant workspace loading — no installs, no waiting",
	"Friction-free habit logging that takes seconds a day"
];
function PainPoint() {
	return /* @__PURE__ */ jsxs("section", {
		className: "mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28",
		children: [/* @__PURE__ */ jsx("div", {
			className: "mx-auto mb-14 max-w-2xl text-center",
			children: /* @__PURE__ */ jsx("h2", {
				className: "text-balance font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl",
				children: "The difference is in the details"
			})
		}), /* @__PURE__ */ jsxs("div", {
			className: "relative grid gap-6 md:grid-cols-2 md:gap-0",
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "rounded-2xl border border-border bg-muted/40 p-7 md:rounded-r-none md:border-r-0",
					children: [/* @__PURE__ */ jsx("h3", {
						className: "font-heading text-lg font-semibold text-muted-foreground",
						children: "Without Habit Pro"
					}), /* @__PURE__ */ jsx("ul", {
						className: "mt-5 flex flex-col gap-4",
						children: without.map((item) => /* @__PURE__ */ jsxs("li", {
							className: "flex items-start gap-3",
							children: [/* @__PURE__ */ jsx("span", {
								className: "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-muted-foreground/15 text-muted-foreground",
								children: /* @__PURE__ */ jsx(X, { className: "h-3 w-3" })
							}), /* @__PURE__ */ jsx("span", {
								className: "text-sm leading-relaxed text-muted-foreground",
								children: item
							})]
						}, item))
					})]
				}),
				/* @__PURE__ */ jsx("div", {
					"aria-hidden": "true",
					className: "absolute left-1/2 top-1/2 z-10 hidden h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-card text-xs font-bold text-primary shadow-md md:flex",
					children: "VS"
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "rounded-2xl border-2 border-primary bg-card p-7 shadow-lg shadow-primary/10 md:rounded-l-none",
					children: [/* @__PURE__ */ jsx("h3", {
						className: "font-heading text-lg font-semibold text-primary",
						children: "With Habit Pro Blueprint"
					}), /* @__PURE__ */ jsx("ul", {
						className: "mt-5 flex flex-col gap-4",
						children: withPro.map((item) => /* @__PURE__ */ jsxs("li", {
							className: "flex items-start gap-3",
							children: [/* @__PURE__ */ jsx("span", {
								className: "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground",
								children: /* @__PURE__ */ jsx(Check, { className: "h-3 w-3" })
							}), /* @__PURE__ */ jsx("span", {
								className: "text-sm font-medium leading-relaxed text-foreground",
								children: item
							})]
						}, item))
					})]
				})
			]
		})]
	});
}
//#endregion
//#region src/components/testimonial-grid.tsx
var featured = [{
	quote: "Better than any native app I've tried. I've tried every habit app on the App Store, but I always quit because of the clunky UI. This spreadsheet doesn't feel like a spreadsheet at all. It feels like an expensive productivity app, but it lives completely inside my private workspace. Absolute game changer for my workflow.",
	name: "Alex R.",
	role: "Digital Creator",
	rating: 5,
	date: "Mar 22, 2026",
	helpful: 142
}];
var moreReviews = [
	{
		quote: "Was skeptical about a spreadsheet that looks like an app but the charts are seriously well done. Knocked off one star only because I had to read the setup guide twice to customize my columns, but it works flawlessly now.",
		name: "Carlos Mendez",
		role: "Verified buyer",
		rating: 4,
		date: "Mar 18, 2026",
		helpful: 6
	},
	{
		quote: "I've bought three different Notion and Sheets templates this year and this is the only one I still use. The weekly summary view keeps me accountable without any effort.",
		name: "Hannah Lee",
		role: "Verified buyer",
		rating: 5,
		date: "Mar 9, 2026",
		helpful: 17
	},
	{
		quote: "Works great on mobile which was my main concern. Syncs instantly between my laptop and phone. Would recommend to anyone who already lives in Google Workspace.",
		name: "Tom Becker",
		role: "Verified buyer",
		rating: 4.8,
		date: "Feb 27, 2026",
		helpful: 11
	},
	{
		quote: "Clean, fast, and no fluff. I customized the habit categories for my gym routine in a few minutes. Support answered my one question about formulas within a day.",
		name: "Aisha Rahman",
		role: "Verified buyer",
		rating: 5,
		date: "Feb 12, 2026",
		helpful: 14
	}
];
var ratingBreakdown = [
	{
		stars: 5,
		pct: 84
	},
	{
		stars: 4,
		pct: 12
	},
	{
		stars: 3,
		pct: 3
	},
	{
		stars: 2,
		pct: 1
	},
	{
		stars: 1,
		pct: 0
	}
];
function Stars({ rating, className = "h-4 w-4" }) {
	return /* @__PURE__ */ jsx("div", {
		className: "flex flex-nowrap items-center gap-0.5 text-primary whitespace-nowrap shrink-0",
		"aria-label": `Rated ${rating} out of 5 stars`,
		children: Array.from({ length: 5 }).map((_, i) => {
			const starValue = i + 1;
			if (starValue <= rating) return /* @__PURE__ */ jsx(Star, { className: `${className} fill-current shrink-0` }, i);
			else if (starValue - .75 <= rating) return /* @__PURE__ */ jsxs("span", {
				className: `relative inline-block ${className} shrink-0`,
				children: [/* @__PURE__ */ jsx(Star, { className: `${className} absolute inset-0 fill-none text-muted-foreground/30 shrink-0` }), /* @__PURE__ */ jsx(StarHalf, { className: `${className} absolute inset-0 fill-current shrink-0` })]
			}, i);
			else return /* @__PURE__ */ jsx(Star, { className: `${className} fill-none text-muted-foreground/30 shrink-0` }, i);
		})
	});
}
function Avatar({ name }) {
	return /* @__PURE__ */ jsx("div", {
		role: "img",
		"aria-label": "Reviewer Avatar Picture",
		className: "flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-full border-2 border-dashed border-primary/40 bg-primary/5 text-xs font-semibold text-primary",
		children: name.split(" ").map((n) => n[0]).slice(0, 2).join("")
	});
}
function TestimonialGrid() {
	const [showMore, setShowMore] = useState(false);
	return /* @__PURE__ */ jsxs("section", {
		id: "reviews",
		className: "mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-24",
		children: [
			/* @__PURE__ */ jsxs("div", {
				className: "mx-auto mb-14 max-w-2xl text-center",
				children: [/* @__PURE__ */ jsx("span", {
					className: "text-sm font-semibold uppercase tracking-wide text-primary",
					children: "User Feedback"
				}), /* @__PURE__ */ jsx("h2", {
					className: "mt-3 text-balance font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl",
					children: "It turns out, a simple layout was exactly what was missing."
				})]
			}),
			/* @__PURE__ */ jsx("div", {
				className: "flex justify-center",
				children: /* @__PURE__ */ jsx("div", {
					className: "w-full max-w-xl",
					children: featured.map((t) => /* @__PURE__ */ jsxs("div", {
						className: "flex flex-col rounded-2xl border border-border bg-card p-6 shadow-sm",
						children: [
							/* @__PURE__ */ jsxs("div", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ jsx("span", {
									className: "text-xs font-semibold text-muted-foreground",
									children: t.rating.toFixed(1)
								}), /* @__PURE__ */ jsx(Stars, { rating: t.rating })]
							}),
							/* @__PURE__ */ jsx("p", {
								className: "mt-4 flex-1 text-pretty text-sm leading-relaxed text-foreground font-medium text-center md:text-base",
								children: t.quote
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "mt-6 flex items-center justify-center gap-3",
								children: [/* @__PURE__ */ jsx(Avatar, { name: t.name }), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsxs("p", {
									className: "flex items-center gap-1 text-sm font-semibold text-foreground",
									children: [t.name, /* @__PURE__ */ jsx(CheckCircle2, {
										"aria-label": "Verified",
										className: "h-3.5 w-3.5 text-primary"
									})]
								}), /* @__PURE__ */ jsx("p", {
									className: "text-xs text-muted-foreground",
									children: t.role
								})] })]
							})
						]
					}, t.name))
				})
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "mt-10 overflow-hidden rounded-2xl border border-border bg-card shadow-sm",
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "grid gap-8 border-b border-border p-6 sm:grid-cols-[auto_1fr] sm:gap-10 sm:p-8",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "flex flex-col items-center justify-center text-center min-w-max shrink-0",
							children: [
								/* @__PURE__ */ jsx("span", {
									className: "font-heading text-5xl font-bold text-foreground tracking-tight",
									children: "4.8"
								}),
								/* @__PURE__ */ jsx("div", {
									className: "mt-2 flex justify-center w-full",
									children: /* @__PURE__ */ jsx(Stars, {
										rating: 4.8,
										className: "h-4 w-4"
									})
								}),
								/* @__PURE__ */ jsx("span", {
									className: "mt-2 text-xs text-muted-foreground whitespace-nowrap",
									children: "642 verified reviews"
								})
							]
						}), /* @__PURE__ */ jsx("div", {
							className: "flex flex-col justify-center gap-2",
							children: ratingBreakdown.map((row) => /* @__PURE__ */ jsxs("div", {
								className: "flex items-center gap-3",
								children: [
									/* @__PURE__ */ jsx("span", {
										className: "flex w-6 items-center gap-1 text-xs font-medium text-muted-foreground",
										children: row.stars
									}),
									/* @__PURE__ */ jsx("div", {
										className: "h-2 flex-1 overflow-hidden rounded-full bg-muted",
										children: /* @__PURE__ */ jsx("div", {
											className: "h-full rounded-full bg-primary",
											style: { width: `${row.pct}%` }
										})
									}),
									/* @__PURE__ */ jsxs("span", {
										className: "w-8 text-right text-xs text-muted-foreground",
										children: [row.pct, "%"]
									})
								]
							}, row.stars))
						})]
					}),
					/* @__PURE__ */ jsx("div", {
						className: "flex justify-center p-4",
						children: /* @__PURE__ */ jsx("button", {
							type: "button",
							"aria-expanded": showMore,
							onClick: () => setShowMore((v) => !v),
							className: "rounded-full border border-border bg-background px-5 py-2 text-sm font-semibold text-foreground transition-colors hover:bg-muted",
							children: showMore ? "Hide reviews" : "View More Verified Reviews"
						})
					}),
					showMore && /* @__PURE__ */ jsx("div", {
						className: "max-h-[26rem] overflow-y-auto border-t border-border",
						children: /* @__PURE__ */ jsx("ul", {
							className: "divide-y divide-border",
							children: moreReviews.map((r) => /* @__PURE__ */ jsxs("li", {
								className: "flex gap-4 p-5 sm:p-6",
								children: [/* @__PURE__ */ jsx(Avatar, { name: r.name }), /* @__PURE__ */ jsxs("div", {
									className: "min-w-0 flex-1",
									children: [
										/* @__PURE__ */ jsxs("div", {
											className: "flex flex-wrap items-center justify-between gap-2",
											children: [/* @__PURE__ */ jsxs("p", {
												className: "flex items-center gap-1 text-sm font-semibold text-foreground",
												children: [r.name, /* @__PURE__ */ jsx(CheckCircle2, {
													"aria-label": "Verified",
													className: "h-3.5 w-3.5 text-primary"
												})]
											}), /* @__PURE__ */ jsx("span", {
												className: "text-xs text-muted-foreground",
												children: r.date
											})]
										}),
										/* @__PURE__ */ jsxs("div", {
											className: "mt-1 flex items-center gap-2",
											children: [/* @__PURE__ */ jsx("span", {
												className: "text-xs font-medium text-muted-foreground",
												children: r.rating.toFixed(1)
											}), /* @__PURE__ */ jsx(Stars, {
												rating: r.rating,
												className: "h-3.5 w-3.5"
											})]
										}),
										/* @__PURE__ */ jsx("p", {
											className: "mt-2 text-pretty text-sm leading-relaxed text-foreground",
											children: r.quote
										}),
										/* @__PURE__ */ jsxs("div", {
											className: "mt-3 flex items-center gap-1.5 text-xs text-muted-foreground",
											children: [/* @__PURE__ */ jsx(ThumbsUp, { className: "h-3.5 w-3.5" }), /* @__PURE__ */ jsxs("span", { children: [r.helpful, " people found this helpful"] })]
										})
									]
								})]
							}, r.name))
						})
					})
				]
			})
		]
	});
}
//#endregion
//#region src/components/faq.tsx
var faqs = [
	{
		q: "Do I need any spreadsheet experience to use this?",
		a: "No complex technical knowledge needed. It works right out of the box when you copy it."
	},
	{
		q: "Will this work on my phone?",
		a: "Yes, Google Sheets syncs beautifully on mobile, giving you a custom app interface on the go."
	},
	{
		q: "Is this a subscription or one-time payment?",
		a: "This is a 100% one-time payment for permanent, lifetime ownership."
	},
	{
		q: "What is your refund policy?",
		a: "Because the Blueprint is a digital product delivered instantly, all sales are final. That said, we stand fully behind it — our dedicated support team is here to help you get set up and make the most of every feature."
	},
	{
		q: "How do I get the template after purchase?",
		a: "You will receive an immediate instant download link via email containing your private copy link."
	},
	{
		q: "Can I customize the colors and categories?",
		a: "Completely. All data structures, colors, and habit tracking points remain entirely modular for your customization."
	}
];
function Faq() {
	const [open, setOpen] = useState(0);
	return /* @__PURE__ */ jsxs("section", {
		id: "faq",
		className: "mx-auto max-w-3xl px-5 py-20 sm:px-8 lg:py-28",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "mb-12 text-center",
			children: [/* @__PURE__ */ jsx("span", {
				className: "text-sm font-semibold uppercase tracking-wide text-primary",
				children: "FAQ"
			}), /* @__PURE__ */ jsx("h2", {
				className: "mt-3 text-balance font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl",
				children: "Questions, answered"
			})]
		}), /* @__PURE__ */ jsx("div", {
			className: "flex flex-col gap-3",
			children: faqs.map((faq, i) => {
				const isOpen = open === i;
				return /* @__PURE__ */ jsxs("div", {
					className: "overflow-hidden rounded-2xl border border-border bg-card",
					children: [/* @__PURE__ */ jsxs("button", {
						type: "button",
						"aria-expanded": isOpen,
						onClick: () => setOpen(isOpen ? null : i),
						className: "flex w-full items-center justify-between gap-4 px-5 py-4 text-left",
						children: [/* @__PURE__ */ jsx("span", {
							className: "font-heading text-base font-semibold text-foreground",
							children: faq.q
						}), /* @__PURE__ */ jsx(ChevronDown, { className: `h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-200 ${isOpen ? "rotate-180" : ""}` })]
					}), /* @__PURE__ */ jsx("div", {
						className: `grid transition-all duration-200 ease-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`,
						children: /* @__PURE__ */ jsx("div", {
							className: "overflow-hidden",
							children: /* @__PURE__ */ jsx("p", {
								className: "px-5 pb-5 text-sm leading-relaxed text-muted-foreground",
								children: faq.a
							})
						})
					})]
				}, faq.q);
			})
		})]
	});
}
//#endregion
//#region src/components/final-cta.tsx
function FinalCta() {
	return /* @__PURE__ */ jsx("section", {
		id: "pricing",
		className: "bg-primary",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-3xl px-5 py-20 text-center sm:px-8 lg:py-28",
			children: [
				/* @__PURE__ */ jsx("h2", {
					className: "text-balance font-heading text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl",
					children: "Stop managing habits in a spreadsheet. Start running them like a pro."
				}),
				/* @__PURE__ */ jsx("p", {
					className: "mx-auto mt-4 max-w-xl text-pretty text-base leading-relaxed text-primary-foreground/80",
					children: "Open Google Sheets, copy the Blueprint, and gamify your discipline in minutes."
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "mt-8 flex flex-col items-center gap-3",
					children: [/* @__PURE__ */ jsx("a", {
						href: "https://dodo.pe/habitproshop",
						target: "_blank",
						rel: "noopener noreferrer",
						className: "rounded-full bg-card px-7 py-3.5 text-base font-semibold text-primary shadow-lg transition-opacity hover:opacity-90",
						children: "Get the Blueprint — $27"
					}), /* @__PURE__ */ jsx("span", {
						className: "text-xs text-primary-foreground/80",
						children: "Instant download • One-time payment • Dedicated customer support"
					})]
				})
			]
		})
	});
}
//#endregion
//#region src/lib/utils.ts
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
//#endregion
//#region src/components/ui/dialog.tsx
var Dialog = DialogPrimitive.Root;
var DialogTrigger = DialogPrimitive.Trigger;
var DialogPortal = DialogPrimitive.Portal;
var DialogOverlay = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(DialogPrimitive.Overlay, {
	ref,
	className: cn("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
	...props
}));
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;
var DialogContent = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs(DialogPortal, { children: [/* @__PURE__ */ jsx(DialogOverlay, {}), /* @__PURE__ */ jsxs(DialogPrimitive.Content, {
	ref,
	className: cn("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:rounded-lg", className),
	...props,
	children: [children, /* @__PURE__ */ jsxs(DialogPrimitive.Close, {
		className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background cursor-pointer transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
		children: [/* @__PURE__ */ jsx(X, { className: "h-4 w-4" }), /* @__PURE__ */ jsx("span", {
			className: "sr-only",
			children: "Close"
		})]
	})]
})] }));
DialogContent.displayName = DialogPrimitive.Content.displayName;
var DialogHeader = ({ className, ...props }) => /* @__PURE__ */ jsx("div", {
	className: cn("flex flex-col space-y-1.5 text-center sm:text-left", className),
	...props
});
DialogHeader.displayName = "DialogHeader";
var DialogFooter = ({ className, ...props }) => /* @__PURE__ */ jsx("div", {
	className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
	...props
});
DialogFooter.displayName = "DialogFooter";
var DialogTitle = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(DialogPrimitive.Title, {
	ref,
	className: cn("text-lg font-semibold leading-none tracking-tight", className),
	...props
}));
DialogTitle.displayName = DialogPrimitive.Title.displayName;
var DialogDescription = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(DialogPrimitive.Description, {
	ref,
	className: cn("text-sm text-muted-foreground", className),
	...props
}));
DialogDescription.displayName = DialogPrimitive.Description.displayName;
//#endregion
//#region src/components/support-policy.tsx
function SupportPolicy() {
	return /* @__PURE__ */ jsxs(Dialog, { children: [/* @__PURE__ */ jsx(DialogTrigger, {
		className: "text-sm text-muted-foreground transition-colors hover:text-foreground",
		children: "Support"
	}), /* @__PURE__ */ jsxs(DialogContent, { children: [/* @__PURE__ */ jsx(DialogHeader, { children: /* @__PURE__ */ jsx(DialogTitle, { children: "Support" }) }), /* @__PURE__ */ jsxs("div", {
		className: "text-sm text-muted-foreground space-y-4",
		children: [
			/* @__PURE__ */ jsx("p", { children: "Need help with your Habit Pro Blueprint or have questions about your order?" }),
			/* @__PURE__ */ jsxs("p", { children: [
				"Please reach out to our dedicated support team at ",
				/* @__PURE__ */ jsx("strong", { children: "habitprosupport@gmail.com" }),
				"."
			] }),
			/* @__PURE__ */ jsx("p", { children: "We aim to respond to all inquiries within 24-48 hours." })
		]
	})] })] });
}
//#endregion
//#region src/components/contact-info.tsx
function ContactInfo() {
	return /* @__PURE__ */ jsxs(Dialog, { children: [/* @__PURE__ */ jsx(DialogTrigger, {
		className: "text-sm text-muted-foreground transition-colors hover:text-foreground",
		children: "Contact"
	}), /* @__PURE__ */ jsxs(DialogContent, { children: [/* @__PURE__ */ jsx(DialogHeader, { children: /* @__PURE__ */ jsx(DialogTitle, { children: "Contact" }) }), /* @__PURE__ */ jsxs("div", {
		className: "text-sm text-muted-foreground space-y-4",
		children: [
			/* @__PURE__ */ jsxs("p", { children: [
				"For business inquiries, reach us at ",
				/* @__PURE__ */ jsx("strong", { children: "habitprosupport@gmail.com" }),
				"."
			] }),
			/* @__PURE__ */ jsx("p", { children: "Connect with us on our platforms:" }),
			/* @__PURE__ */ jsxs("ul", {
				className: "list-disc pl-5 space-y-1",
				children: [
					/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", {
						href: "https://www.linkedin.com/company/habit-pro-u",
						target: "_blank",
						rel: "noopener noreferrer",
						className: "hover:text-primary",
						children: "LinkedIn"
					}) }),
					/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", {
						href: "https://www.youtube.com/channel/UC75Ar8H9-3Q7CDY6_pNrDAA",
						target: "_blank",
						rel: "noopener noreferrer",
						className: "hover:text-primary",
						children: "YouTube"
					}) }),
					/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", {
						href: "https://www.instagram.com/habit.pro?igsh=cG4xNmc5d3R5OGE4",
						target: "_blank",
						rel: "noopener noreferrer",
						className: "hover:text-primary",
						children: "Instagram"
					}) }),
					/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", {
						href: "https://vt.tiktok.com/ZSCJtFANr/",
						target: "_blank",
						rel: "noopener noreferrer",
						className: "hover:text-primary",
						children: "TikTok"
					}) }),
					/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", {
						href: "https://pin.it/3G8IdvcoU",
						target: "_blank",
						rel: "noopener noreferrer",
						className: "hover:text-primary",
						children: "Pinterest"
					}) }),
					/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", {
						href: "https://x.com/HABITPR0",
						target: "_blank",
						rel: "noopener noreferrer",
						className: "hover:text-primary",
						children: "X (Twitter)"
					}) })
				]
			})
		]
	})] })] });
}
//#endregion
//#region src/components/terms-conditions.tsx
function TermsConditions() {
	return /* @__PURE__ */ jsxs(Dialog, { children: [/* @__PURE__ */ jsx(DialogTrigger, {
		className: "text-sm text-muted-foreground transition-colors hover:text-foreground",
		children: "Terms"
	}), /* @__PURE__ */ jsxs(DialogContent, { children: [/* @__PURE__ */ jsx(DialogHeader, { children: /* @__PURE__ */ jsx(DialogTitle, { children: "Terms of Service" }) }), /* @__PURE__ */ jsxs("div", {
		className: "text-sm text-muted-foreground space-y-4",
		children: [
			/* @__PURE__ */ jsxs("p", { children: [/* @__PURE__ */ jsx("strong", { children: "1. License:" }), " Upon purchase, you are granted a single-user license for personal use of the Habit Pro Blueprint. You may not resell, redistribute, or share the template with others."] }),
			/* @__PURE__ */ jsxs("p", { children: [/* @__PURE__ */ jsx("strong", { children: "2. Digital Products:" }), " Due to the nature of digital products, all sales are final. We do not offer refunds once the access link has been sent."] }),
			/* @__PURE__ */ jsxs("p", { children: [/* @__PURE__ */ jsx("strong", { children: "3. Disclaimer:" }), " The Habit Pro Blueprint is provided \"as-is\" for educational and personal organization purposes. We are not liable for any outcomes resulting from the use of this tool."] }),
			/* @__PURE__ */ jsxs("p", { children: [/* @__PURE__ */ jsx("strong", { children: "4. Intellectual Property:" }), " All content, design, and branding associated with Habit Pro remain the sole property of the creator."] })
		]
	})] })] });
}
//#endregion
//#region src/components/footer.tsx
var links = [{
	label: "FAQ",
	href: "#faq"
}];
function Footer() {
	return /* @__PURE__ */ jsx("footer", {
		className: "border-t border-border bg-background",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-5 py-10 sm:px-8 md:flex-row",
			children: [
				/* @__PURE__ */ jsxs("a", {
					href: "#top",
					className: "flex items-center gap-2 font-heading text-base font-bold tracking-tight",
					children: [/* @__PURE__ */ jsx("div", {
						className: "text-primary flex items-center justify-center h-8 w-8 shrink-0",
						children: /* @__PURE__ */ jsxs("svg", {
							viewBox: "0 0 24 24",
							className: "w-full h-full",
							fill: "none",
							xmlns: "http://www.w3.org/2000/svg",
							children: [
								/* @__PURE__ */ jsx("path", {
									d: "M2 18L9.5 8L14 14L12.5 18H2Z",
									fill: "currentColor"
								}),
								/* @__PURE__ */ jsx("path", {
									d: "M8.5 18L15 7L22 18H8.5Z",
									fill: "currentColor",
									className: "opacity-85"
								}),
								/* @__PURE__ */ jsx("path", {
									d: "M10.5 10.5L13.5 13.5L19.5 6",
									stroke: "currentColor",
									strokeWidth: "2.5",
									strokeLinecap: "round",
									strokeLinejoin: "round"
								})
							]
						})
					}), "Habit Pro"]
				}),
				/* @__PURE__ */ jsxs("nav", {
					className: "flex flex-wrap items-center justify-center gap-x-6 gap-y-2",
					children: [
						links.map((link) => /* @__PURE__ */ jsx("a", {
							href: link.href,
							className: "text-sm text-muted-foreground transition-colors hover:text-foreground",
							children: link.label
						}, link.label)),
						/* @__PURE__ */ jsx(SupportPolicy, {}),
						/* @__PURE__ */ jsx(ContactInfo, {}),
						/* @__PURE__ */ jsx(TermsConditions, {}),
						/* @__PURE__ */ jsx("a", {
							href: "/privacy-policy",
							className: "text-sm text-muted-foreground transition-colors hover:text-foreground",
							children: "Privacy Policy"
						})
					]
				}),
				/* @__PURE__ */ jsxs("p", {
					className: "text-xs text-muted-foreground",
					children: [
						"© ",
						(/* @__PURE__ */ new Date()).getFullYear(),
						" Habit Pro Blueprint. All rights reserved."
					]
				})
			]
		})
	});
}
//#endregion
//#region src/routes/index.tsx?tsr-split=component
function Index() {
	useEffect(() => {
		AOS.init({
			duration: 1200,
			once: true,
			easing: "ease-out"
		});
	}, []);
	return /* @__PURE__ */ jsxs("main", {
		className: "min-h-screen bg-background overflow-x-hidden antialiased",
		children: [
			/* @__PURE__ */ jsx(Navbar, {}),
			/* @__PURE__ */ jsx(Hero, {}),
			/* @__PURE__ */ jsx("div", {
				"data-aos": "fade-up",
				"data-aos-delay": "100",
				children: /* @__PURE__ */ jsx(SocialProofBar, {})
			}),
			/* @__PURE__ */ jsx(FeatureShowcase, {}),
			/* @__PURE__ */ jsx("div", {
				"data-aos": "zoom-in-up",
				"data-aos-offset": "200",
				children: /* @__PURE__ */ jsx(PainPoint, {})
			}),
			/* @__PURE__ */ jsx("div", {
				"data-aos": "zoom-in-up",
				"data-aos-offset": "200",
				children: /* @__PURE__ */ jsx(TestimonialGrid, {})
			}),
			/* @__PURE__ */ jsx("div", {
				"data-aos": "zoom-in-up",
				"data-aos-offset": "150",
				children: /* @__PURE__ */ jsx(Faq, {})
			}),
			/* @__PURE__ */ jsx("div", {
				"data-aos": "zoom-in-up",
				"data-aos-offset": "100",
				children: /* @__PURE__ */ jsx(FinalCta, {})
			}),
			/* @__PURE__ */ jsx(Footer, {})
		]
	});
}
//#endregion
export { Index as component };

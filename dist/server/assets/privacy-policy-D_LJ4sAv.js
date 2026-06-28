import { Fragment, jsx, jsxs } from "react/jsx-runtime";
//#region src/components/privacy-policy.tsx
var PrivacyPolicy = () => {
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx("style", { children: `
        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          background: #f6f8fb;
        }

        .privacy-wrapper {
          min-height: 100vh;
          padding: 50px 20px;
          font-family: Inter, system-ui, sans-serif;
        }

        .privacy-card {
          max-width: 900px;
          margin: auto;
          background: white;
          border-radius: 20px;
          padding: 50px;
          box-shadow: 0 10px 40px rgba(0,0,0,.08);
        }

        .privacy-header {
          border-bottom: 1px solid #eaeaea;
          padding-bottom: 25px;
          margin-bottom: 35px;
        }

        .privacy-header h1 {
          margin: 0;
          font-size: 42px;
          color: #111827;
        }

        .updated {
          margin-top: 10px;
          color: #6b7280;
        }

        h2 {
          color: #111827;
          margin-top: 40px;
          margin-bottom: 15px;
          font-size: 24px;
        }

        p {
          color: #4b5563;
          line-height: 1.8;
        }

        ul {
          padding-left: 20px;
        }

        li {
          margin-bottom: 10px;
          color: #4b5563;
        }

        a {
          color: #2563eb;
          text-decoration: none;
          font-weight: 600;
        }

        a:hover {
          text-decoration: underline;
        }

        .contact-box {
          background: #f9fafb;
          border: 1px solid #e5e7eb;
          border-radius: 12px;
          padding: 20px;
          margin-top: 15px;
        }

        .footer {
          margin-top: 50px;
          padding-top: 20px;
          border-top: 1px solid #e5e7eb;
          text-align: center;
          color: #6b7280;
        }

        @media(max-width:768px){
          .privacy-card{
            padding:30px;
          }

          .privacy-header h1{
            font-size:32px;
          }
        }
      ` }), /* @__PURE__ */ jsx("div", {
		className: "privacy-wrapper",
		children: /* @__PURE__ */ jsxs("div", {
			className: "privacy-card",
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "privacy-header",
					children: [/* @__PURE__ */ jsx("h1", { children: "Privacy Policy" }), /* @__PURE__ */ jsx("div", {
						className: "updated",
						children: "Last Updated: November 17, 2025"
					})]
				}),
				/* @__PURE__ */ jsxs("p", { children: [
					"At ",
					/* @__PURE__ */ jsx("strong", { children: "Habit Pro" }),
					", we value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard information when you use our services."
				] }),
				/* @__PURE__ */ jsx("h2", { children: "1. Information We Collect" }),
				/* @__PURE__ */ jsxs("ul", { children: [
					/* @__PURE__ */ jsx("li", { children: "Email address" }),
					/* @__PURE__ */ jsx("li", { children: "Account information" }),
					/* @__PURE__ */ jsx("li", { children: "Payment information handled by third-party processors" }),
					/* @__PURE__ */ jsx("li", { children: "Support requests and communications" }),
					/* @__PURE__ */ jsx("li", { children: "Usage analytics and device information" }),
					/* @__PURE__ */ jsx("li", { children: "Browser and operating system details" })
				] }),
				/* @__PURE__ */ jsx("h2", { children: "2. How We Use Information" }),
				/* @__PURE__ */ jsxs("ul", { children: [
					/* @__PURE__ */ jsx("li", { children: "Provide and improve our services" }),
					/* @__PURE__ */ jsx("li", { children: "Process purchases and transactions" }),
					/* @__PURE__ */ jsx("li", { children: "Respond to customer support requests" }),
					/* @__PURE__ */ jsx("li", { children: "Send important service notifications" }),
					/* @__PURE__ */ jsx("li", { children: "Prevent fraud and maintain security" }),
					/* @__PURE__ */ jsx("li", { children: "Comply with legal obligations" })
				] }),
				/* @__PURE__ */ jsx("h2", { children: "3. Payment Processing" }),
				/* @__PURE__ */ jsx("p", { children: "Payments are processed securely through trusted third-party payment providers. We do not store your full payment card information on our servers." }),
				/* @__PURE__ */ jsx("h2", { children: "4. Sharing Information" }),
				/* @__PURE__ */ jsx("p", { children: "We do not sell your personal information. Information may be shared only with trusted service providers necessary to operate our business, including payment processors, hosting providers, analytics services, and legal authorities when required by law." }),
				/* @__PURE__ */ jsx("h2", { children: "5. Cookies" }),
				/* @__PURE__ */ jsx("p", { children: "We may use cookies and similar technologies to improve functionality, remember preferences, and analyze usage patterns. You can control cookies through your browser settings." }),
				/* @__PURE__ */ jsx("h2", { children: "6. Data Retention" }),
				/* @__PURE__ */ jsx("p", { children: "We retain personal information only as long as necessary to provide our services and comply with legal obligations." }),
				/* @__PURE__ */ jsx("h2", { children: "7. Data Security" }),
				/* @__PURE__ */ jsx("p", { children: "We use reasonable security measures to protect your information. However, no internet transmission or storage system can be guaranteed to be completely secure." }),
				/* @__PURE__ */ jsx("h2", { children: "8. Children's Privacy" }),
				/* @__PURE__ */ jsx("p", { children: "Our services are not intended for children under 13 years of age. We do not knowingly collect personal information from children." }),
				/* @__PURE__ */ jsx("h2", { children: "9. Your Rights" }),
				/* @__PURE__ */ jsxs("ul", { children: [
					/* @__PURE__ */ jsx("li", { children: "Access your personal information" }),
					/* @__PURE__ */ jsx("li", { children: "Correct inaccurate information" }),
					/* @__PURE__ */ jsx("li", { children: "Request deletion of your data" }),
					/* @__PURE__ */ jsx("li", { children: "Withdraw consent where applicable" }),
					/* @__PURE__ */ jsx("li", { children: "Object to certain processing activities" })
				] }),
				/* @__PURE__ */ jsx("h2", { children: "10. Third-Party Services" }),
				/* @__PURE__ */ jsx("p", { children: "Our services may contain links to third-party websites and services. We are not responsible for their privacy practices." }),
				/* @__PURE__ */ jsx("h2", { children: "11. Updates To This Policy" }),
				/* @__PURE__ */ jsx("p", { children: "We may update this Privacy Policy periodically. Any changes will be posted on this page with a revised update date." }),
				/* @__PURE__ */ jsx("h2", { children: "12. Contact Us" }),
				/* @__PURE__ */ jsxs("div", {
					className: "contact-box",
					children: [/* @__PURE__ */ jsxs("p", { children: [
						/* @__PURE__ */ jsx("strong", { children: "Email:" }),
						" ",
						/* @__PURE__ */ jsx("a", {
							href: "mailto:habitprosupport@gmail.com",
							children: "habitprosupport@gmail.com"
						})
					] }), /* @__PURE__ */ jsxs("p", { children: [
						/* @__PURE__ */ jsx("strong", { children: "Website:" }),
						" ",
						/* @__PURE__ */ jsx("a", {
							href: "https://habitpro.store",
							target: "_blank",
							rel: "noopener noreferrer",
							children: "habitpro.store"
						})
					] })]
				}),
				/* @__PURE__ */ jsx("h2", { children: "13. Account Deletion" }),
				/* @__PURE__ */ jsxs("p", { children: [
					"You may request deletion of your account and personal information by emailing us at",
					" ",
					/* @__PURE__ */ jsx("a", {
						href: "mailto:habitprosupport@gmail.com",
						children: "habitprosupport@gmail.com"
					}),
					"."
				] }),
				/* @__PURE__ */ jsx("div", {
					className: "footer",
					children: "© 2025 Habit Pro. All Rights Reserved."
				})
			]
		})
	})] });
};
//#endregion
//#region src/routes/privacy-policy.tsx?tsr-split=component
var SplitComponent = PrivacyPolicy;
//#endregion
export { SplitComponent as component };

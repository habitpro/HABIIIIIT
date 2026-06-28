const PrivacyPolicy = () => {
  return (
    <>
      <style>{`
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
      `}</style>

      <div className="privacy-wrapper">
        <div className="privacy-card">

          <div className="privacy-header">
            <h1>Privacy Policy</h1>
            <div className="updated">
              Last Updated: November 17, 2025
            </div>
          </div>

          <p>
            At <strong>Habit Pro</strong>, we value your privacy and are
            committed to protecting your personal information.
            This Privacy Policy explains how we collect, use, and safeguard
            information when you use our services.
          </p>

          <h2>1. Information We Collect</h2>

          <ul>
            <li>Email address</li>
            <li>Account information</li>
            <li>Payment information handled by third-party processors</li>
            <li>Support requests and communications</li>
            <li>Usage analytics and device information</li>
            <li>Browser and operating system details</li>
          </ul>

          <h2>2. How We Use Information</h2>

          <ul>
            <li>Provide and improve our services</li>
            <li>Process purchases and transactions</li>
            <li>Respond to customer support requests</li>
            <li>Send important service notifications</li>
            <li>Prevent fraud and maintain security</li>
            <li>Comply with legal obligations</li>
          </ul>

          <h2>3. Payment Processing</h2>

          <p>
            Payments are processed securely through trusted third-party
            payment providers. We do not store your full payment card
            information on our servers.
          </p>

          <h2>4. Sharing Information</h2>

          <p>
            We do not sell your personal information.
            Information may be shared only with trusted service providers
            necessary to operate our business, including payment processors,
            hosting providers, analytics services, and legal authorities
            when required by law.
          </p>

          <h2>5. Cookies</h2>

          <p>
            We may use cookies and similar technologies to improve
            functionality, remember preferences, and analyze usage patterns.
            You can control cookies through your browser settings.
          </p>

          <h2>6. Data Retention</h2>

          <p>
            We retain personal information only as long as necessary to
            provide our services and comply with legal obligations.
          </p>

          <h2>7. Data Security</h2>

          <p>
            We use reasonable security measures to protect your information.
            However, no internet transmission or storage system can be
            guaranteed to be completely secure.
          </p>

          <h2>8. Children's Privacy</h2>

          <p>
            Our services are not intended for children under 13 years of age.
            We do not knowingly collect personal information from children.
          </p>

          <h2>9. Your Rights</h2>

          <ul>
            <li>Access your personal information</li>
            <li>Correct inaccurate information</li>
            <li>Request deletion of your data</li>
            <li>Withdraw consent where applicable</li>
            <li>Object to certain processing activities</li>
          </ul>

          <h2>10. Third-Party Services</h2>

          <p>
            Our services may contain links to third-party websites and
            services. We are not responsible for their privacy practices.
          </p>

          <h2>11. Updates To This Policy</h2>

          <p>
            We may update this Privacy Policy periodically. Any changes
            will be posted on this page with a revised update date.
          </p>

          <h2>12. Contact Us</h2>

          <div className="contact-box">
            <p>
              <strong>Email:</strong>{" "}
              <a href="mailto:habitprosupport@gmail.com">
                habitprosupport@gmail.com
              </a>
            </p>

            <p>
              <strong>Website:</strong>{" "}
              <a
                href="https://habitpro.store"
                target="_blank"
                rel="noopener noreferrer"
              >
                habitpro.store
              </a>
            </p>
          </div>

          <h2>13. Account Deletion</h2>

          <p>
            You may request deletion of your account and personal information
            by emailing us at{" "}
            <a href="mailto:habitprosupport@gmail.com">
              habitprosupport@gmail.com
            </a>.
          </p>

          <div className="footer">
            © 2025 Habit Pro. All Rights Reserved.
          </div>

        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;
export const TermsOfService = () => {
  return (
    <div className="bg-white">
      <div className="container section">
        <div className="container-narrow">
          <h1 style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>Terms of Service</h1>
          <p style={{ color: 'var(--color-text-muted)', marginBottom: '2.5rem', fontSize: '1.05rem' }}>
            Last updated: December 6, 2025
          </p>

          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Acceptance of Terms</h2>
            <p style={{ lineHeight: '1.7', fontSize: '1.05rem' }}>
              By accessing and using TrainBot, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>
          </section>

          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>License to Use</h2>
            <p style={{ lineHeight: '1.7', fontSize: '1.05rem' }}>
              TrainBot grants you a limited, non-exclusive, non-transferable license to use the TrainBot software and services for your internal business purposes, subject to these Terms of Service.
            </p>
            <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem', marginTop: '1rem', fontSize: '1.05rem', lineHeight: '1.7' }}>
              <li>You may install and use the TrainBot application on devices you own or control</li>
              <li>You may create, modify, and use simulation environments for your projects</li>
              <li>You may download and use marketplace content according to their individual licenses</li>
            </ul>
          </section>

          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Prohibited Uses</h2>
            <p style={{ lineHeight: '1.7', fontSize: '1.05rem' }}>
              You may not use TrainBot for any unlawful purpose or to solicit others to perform unlawful acts. Specifically, you agree not to:
            </p>
            <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem', marginTop: '1rem', fontSize: '1.05rem', lineHeight: '1.7' }}>
              <li>Reverse engineer, decompile, or disassemble the software</li>
              <li>Use the service to develop competing simulation platforms</li>
              <li>Share your account credentials with unauthorized users</li>
              <li>Upload malicious code or attempt to compromise system security</li>
              <li>Violate any applicable laws or regulations</li>
            </ul>
          </section>

          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Intellectual Property</h2>
            <p style={{ lineHeight: '1.7', fontSize: '1.05rem' }}>
              The TrainBot platform, including its software, documentation, and content, is protected by copyright, trademark, and other intellectual property laws. You retain ownership of your simulation data and models created using TrainBot.
            </p>
          </section>

          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Marketplace Content</h2>
            <p style={{ lineHeight: '1.7', fontSize: '1.05rem' }}>
              Content available through the TrainBot Marketplace is provided by third-party developers. Each item has its own license terms, which you must accept before downloading. TrainBot is not responsible for third-party content quality or licensing disputes.
            </p>
          </section>

          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Service Availability</h2>
            <p style={{ lineHeight: '1.7', fontSize: '1.05rem' }}>
              While we strive to maintain high availability, TrainBot services may be temporarily unavailable due to maintenance, updates, or technical issues. We do not guarantee uninterrupted access to our services.
            </p>
          </section>

          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Limitation of Liability</h2>
            <p style={{ lineHeight: '1.7', fontSize: '1.05rem' }}>
              TrainBot shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your use of the service.
            </p>
          </section>

          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Termination</h2>
            <p style={{ lineHeight: '1.7', fontSize: '1.05rem' }}>
              We may terminate or suspend your account and access to TrainBot immediately, without prior notice, for conduct that we believe violates these Terms of Service or is harmful to other users, us, or third parties.
            </p>
          </section>

          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Changes to Terms</h2>
            <p style={{ lineHeight: '1.7', fontSize: '1.05rem' }}>
              We reserve the right to modify these terms at any time. We will notify users of significant changes via email or through the application. Continued use of TrainBot after changes constitutes acceptance of the new terms.
            </p>
          </section>

          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Contact Information</h2>
            <p style={{ lineHeight: '1.7', fontSize: '1.05rem' }}>
              Questions about the Terms of Service should be sent to us at:
            </p>
            <p style={{ marginTop: '1rem', fontSize: '1.05rem', lineHeight: '1.7' }}>
              Email: legal@trainbot.com<br />
              Address: TrainBot Inc., 123 Innovation Drive, Tech City, TC 12345
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

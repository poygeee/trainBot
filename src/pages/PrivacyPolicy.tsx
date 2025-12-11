export const PrivacyPolicy = () => {
  return (
    <div className="bg-white">
      <div className="container section">
        <div className="container-narrow">
          <h1 style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>Privacy Policy</h1>
          <p style={{ color: 'var(--color-text-muted)', marginBottom: '2.5rem', fontSize: '1.05rem' }}>
            Last updated: December 6, 2025
          </p>

          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Information We Collect</h2>
            <p style={{ lineHeight: '1.7', fontSize: '1.05rem' }}>
              TrainBot collects information to provide better services to our users. We collect information in the following ways:
            </p>
            <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem', marginTop: '1rem', fontSize: '1.05rem', lineHeight: '1.7' }}>
              <li><strong>Information you give us:</strong> Account registration details, profile information, and simulation data you choose to share.</li>
              <li><strong>Information we get from your use of our services:</strong> Usage statistics, performance metrics, and technical logs from the TrainBot application.</li>
              <li><strong>Device information:</strong> Hardware specifications, operating system details, and application version information.</li>
            </ul>
          </section>

          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>How We Use Information</h2>
            <p style={{ lineHeight: '1.7', fontSize: '1.05rem' }}>
              We use the information we collect to:
            </p>
            <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem', marginTop: '1rem', fontSize: '1.05rem', lineHeight: '1.7' }}>
              <li>Provide, maintain, and improve our simulation platform</li>
              <li>Process transactions and send related information</li>
              <li>Send technical notices, updates, and support messages</li>
              <li>Respond to comments, questions, and customer service requests</li>
              <li>Monitor and analyze trends, usage, and activities</li>
            </ul>
          </section>

          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Information Sharing</h2>
            <p style={{ lineHeight: '1.7', fontSize: '1.05rem' }}>
              We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy:
            </p>
            <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem', marginTop: '1rem', fontSize: '1.05rem', lineHeight: '1.7' }}>
              <li><strong>Service Providers:</strong> We may share information with trusted third-party service providers who assist in operating our platform.</li>
              <li><strong>Legal Requirements:</strong> We may disclose information when required by law or to protect our rights and safety.</li>
              <li><strong>Business Transfers:</strong> Information may be transferred in connection with a merger, acquisition, or sale of assets.</li>
            </ul>
          </section>

          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Data Security</h2>
            <p style={{ lineHeight: '1.7', fontSize: '1.05rem' }}>
              We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. Your simulation data is processed locally on your Windows machine and is not transmitted to our servers unless you explicitly choose to share it.
            </p>
          </section>

          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Your Rights</h2>
            <p style={{ lineHeight: '1.7', fontSize: '1.05rem' }}>
              You have the right to:
            </p>
            <ul style={{ listStyle: 'disc', paddingLeft: '1.5rem', marginTop: '1rem', fontSize: '1.05rem', lineHeight: '1.7' }}>
              <li>Access, update, or delete your personal information</li>
              <li>Object to processing of your personal information</li>
              <li>Request restriction of processing your personal information</li>
              <li>Request transfer of your personal information</li>
              <li>Withdraw consent at any time</li>
            </ul>
          </section>

          <section style={{ marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Contact Us</h2>
            <p style={{ lineHeight: '1.7', fontSize: '1.05rem' }}>
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <p style={{ marginTop: '1rem', fontSize: '1.05rem', lineHeight: '1.7' }}>
              Email: privacy@trainbot.com<br />
              Address: TrainBot Inc., 123 Innovation Drive, Tech City, TC 12345
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

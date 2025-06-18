export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 animate-fade-in">
      <header className="text-center mb-12 md:mb-16">
        <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary">Privacy Policy</h1>
      </header>
      <div className="max-w-3xl mx-auto bg-card p-6 sm:p-8 lg:p-10 rounded-lg shadow-xl prose prose-lg">
        <p><em>Last Updated: {new Date().toLocaleDateString()}</em></p>

        <h2 className="font-headline">Introduction</h2>
        <p>Welcome to Analytica AI. We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about this privacy notice, or our practices with regards to your personal information, please contact us at privacy@analytica.ai.</p>

        <h2 className="font-headline">Information We Collect</h2>
        <p>We may collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and services, when you participate in activities on the Website or otherwise when you contact us.</p>
        <p>The personal information that we collect depends on the context of your interactions with us and the Website, the choices you make and the products and features you use. The personal information we collect may include the following:</p>
        <ul>
          <li>Names</li>
          <li>Email addresses</li>
          <li>Phone numbers</li>
          <li>Company information</li>
          <li>Any other information you choose to provide</li>
        </ul>

        <h2 className="font-headline">How We Use Your Information</h2>
        <p>We use personal information collected via our Website for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations.</p>
        
        <h2 className="font-headline">Sharing Your Information</h2>
        <p>We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations.</p>

        <h2 className="font-headline">Cookies and Other Tracking Technologies</h2>
        <p>We may use cookies and similar tracking technologies (like web beacons and pixels) to access or store information. Specific information about how we use such technologies and how you can refuse certain cookies is set out in our Cookie Policy (to be created).</p>

        <h2 className="font-headline">Data Security</h2>
        <p>We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure.</p>
        
        <h2 className="font-headline">Your Privacy Rights</h2>
        <p>In some regions (like the European Economic Area and the UK), you have certain rights under applicable data protection laws. These may include the right (i) to request access and obtain a copy of your personal information, (ii) to request rectification or erasure; (iii) to restrict the processing of your personal information; and (iv) if applicable, to data portability.</p>

        <h2 className="font-headline">Changes to This Policy</h2>
        <p>We may update this privacy notice from time to time. The updated version will be indicated by an updated "Last Updated" date and the updated version will be effective as soon as it is accessible. We encourage you to review this privacy notice frequently to be informed of how we are protecting your information.</p>

        <h2 className="font-headline">Contact Us</h2>
        <p>If you have questions or comments about this notice, you may email us at privacy@analytica.ai or by post to:</p>
        <p>Analytica AI<br/>
        123 Innovation Drive<br/>
        Tech City, TX 75001<br/>
        USA</p>
      </div>
    </div>
  );
}

export const metadata = {
  title: 'Privacy Policy | Analytica AI',
  description: 'Read the Privacy Policy for Analytica AI to understand how we collect, use, and protect your personal information.',
};

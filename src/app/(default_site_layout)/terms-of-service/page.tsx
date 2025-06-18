export default function TermsOfServicePage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 animate-fade-in">
      <header className="text-center mb-12 md:mb-16">
        <h1 className="text-4xl md:text-5xl font-headline font-bold text-primary">Terms of Service</h1>
      </header>
      <div className="max-w-3xl mx-auto bg-card p-6 sm:p-8 lg:p-10 rounded-lg shadow-xl prose prose-lg">
        <p><em>Last Updated: {new Date().toLocaleDateString()}</em></p>

        <h2 className="font-headline">1. Agreement to Terms</h2>
        <p>By accessing or using our website (the "Site") and services (collectively, the "Services") provided by Analytica AI ("we," "us," or "our"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, do not use our Services.</p>

        <h2 className="font-headline">2. Use of Our Services</h2>
        <p>You may use our Services only if you can form a binding contract with Analytica AI, and only in compliance with these Terms and all applicable local, state, national, and international laws, rules, and regulations.</p>
        <p>You agree not to engage in any of the following prohibited activities:</p>
        <ul>
          <li>Copying, distributing, or disclosing any part of the Services in any medium.</li>
          <li>Using any automated system, including "robots," "spiders," "offline readers," etc., to access the Services.</li>
          <li>Transmitting spam, chain letters, or other unsolicited email.</li>
          <li>Attempting to interfere with, compromise the system integrity or security, or decipher any transmissions to or from the servers running the Services.</li>
        </ul>

        <h2 className="font-headline">3. Intellectual Property</h2>
        <p>The Services and all materials therein or transferred thereby, including, without limitation, software, images, text, graphics, logos, patents, trademarks, service marks, copyrights, photographs, audio, videos, music ("Our Content"), and all Intellectual Property Rights related thereto, are the exclusive property of Analytica AI and its licensors. Except as explicitly provided herein, nothing in these Terms shall be deemed to create a license in or under any such Intellectual Property Rights.</p>

        <h2 className="font-headline">4. AI Chat Assistant and GenAI Features</h2>
        <p>Our Services may include AI-powered features, such as a chat assistant or project cost estimator. These tools provide information and estimates based on the data provided to them and their underlying models. While we strive for accuracy, the outputs from these AI features are for informational purposes only and should not be considered definitive advice or guarantees. Analytica AI is not liable for any decisions made based on the information provided by these AI tools.</p>
        <p>You are responsible for the input you provide to AI features and must ensure it does not violate any laws or third-party rights.</p>
        
        <h2 className="font-headline">5. Disclaimer of Warranties</h2>
        <p>The Services are provided on an "as is" and "as available" basis. Use of the Services is at your own risk. To the maximum extent permitted by applicable law, the Services are provided without warranties of any kind, whether express or implied, including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, or non-infringement.</p>

        <h2 className="font-headline">6. Limitation of Liability</h2>
        <p>To the maximum extent permitted by applicable law, in no event shall Analytica AI, its affiliates, agents, directors, employees, suppliers, or licensors be liable for any indirect, punitive, incidental, special, consequential, or exemplary damages, including without limitation damages for loss of profits, goodwill, use, data, or other intangible losses, arising out of or relating to the use of, or inability to use, the Services.</p>

        <h2 className="font-headline">7. Governing Law</h2>
        <p>These Terms shall be governed by the laws of the State of Texas, United States, without respect to its conflict of laws principles.</p>

        <h2 className="font-headline">8. Changes to Terms</h2>
        <p>We reserve the right to modify these Terms at any time. We will provide notice of such changes by posting the updated Terms on our Site and changing the "Last Updated" date. Your continued use of the Services after any such change constitutes your acceptance of the new Terms.</p>

        <h2 className="font-headline">9. Contact Us</h2>
        <p>If you have any questions about these Terms, please contact us at legal@analytica.ai or by post to:</p>
        <p>Analytica AI<br/>
        Attn: Legal Department<br/>
        123 Innovation Drive<br/>
        Tech City, TX 75001<br/>
        USA</p>
      </div>
    </div>
  );
}

export const metadata = {
  title: 'Terms of Service | Analytica AI',
  description: 'Read the Terms of Service for Analytica AI before using our website and services.',
};

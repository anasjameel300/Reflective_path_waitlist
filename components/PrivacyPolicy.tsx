import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export function PrivacyPolicy() {
    return (
        <div className="min-h-screen bg-zinc-950 text-zinc-200 font-sans selection:bg-[#8da391] selection:text-zinc-900 overflow-x-hidden">
            <div className="max-w-3xl mx-auto px-6 py-12 md:py-20">

                {/* Header / Back Link */}
                <div className="mb-12">
                    <Link
                        to="/"
                        className="inline-flex items-center text-zinc-500 hover:text-[#8da391] transition-colors duration-200 group"
                    >
                        <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                        Back to Home
                    </Link>
                </div>

                {/* Title */}
                <h1 className="text-4xl md:text-5xl serif text-zinc-100 mb-2">Privacy Policy</h1>
                <p className="text-zinc-500 mb-8">Reflective Path - Local-First Edition • Version 2.1.0</p>
                <p className="text-zinc-500 mb-12">Last Updated: January 14, 2026</p>

                {/* Content */}
                <div className="space-y-10 text-zinc-300 leading-relaxed">

                    <section>
                        <h2 className="text-2xl serif text-zinc-100 mb-4">Overview</h2>
                        <p className="text-zinc-400">
                            Reflective Path is a mindful productivity app designed to help you focus on a single meaningful goal.
                            While the core application logic remains 100% local-first, this version includes advertising support to sustain development.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl serif text-zinc-100 mb-4">Data We Collect</h2>
                        <p className="text-zinc-200 font-medium mb-2">App Data: None.</p>
                        <p className="text-zinc-200 font-medium mb-2">Ad Data: Minimally Collected by Google.</p>
                        <p className="text-zinc-400">
                            **Reflective Path (The Developer)** does not collect, transmit, or store any of your personal content (goals, reflections, logs) on external servers. That data lives and dies on your device.
                        </p>
                        <p className="text-zinc-400 mt-2">
                             However, to support the app, we use **Google AdMob** to display advertisements. Google may collect and use data (such as your Advertising ID, device information, and approximate location) to serve personalized or non-personalized ads.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl serif text-zinc-100 mb-4">What Stays on Your Device</h2>
                        <p className="text-zinc-400 mb-4">All of your personal productivity data is stored locally:</p>
                        <ul className="list-disc list-inside text-zinc-400 ml-4 space-y-1">
                            <li>Your goal and strategies</li>
                            <li>Daily progress logs and reflections</li>
                            <li>Milestones and support tasks</li>
                            <li>Your username</li>
                            <li>Notification preferences</li>
                        </ul>
                        <p className="text-zinc-400 mt-3">
                            This personal data is never shared with advertisers.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl serif text-zinc-100 mb-4">Third-Party Services</h2>

                        <div className="mb-4">
                            <p className="text-zinc-400 mb-2">We Use:</p>
                            <ul className="list-none text-zinc-400 ml-0 space-y-1">
                                <li>✅ <strong>Google AdMob</strong> — Displays banner or interstitial ads. AdMob may use cookies and identifiers to serve ads.</li>
                                <li>✅ <strong>Local Notifications</strong> — Handled entirely by your device OS.</li>
                            </ul>
                        </div>

                        <div>
                            <p className="text-zinc-400 mb-2">We Do NOT Use:</p>
                            <ul className="list-none text-zinc-400 ml-0 space-y-1">
                                <li>❌ Analytics — We do not track how you use the app features.</li>
                                <li>❌ Cloud databases — Your personal data is not stored in the cloud.</li>
                                <li>❌ Authentication services — No account required.</li>
                            </ul>
                        </div>
                        
                        <p className="text-zinc-400 mt-4 text-sm">
                            For more information on how Google handles your data, please review the <a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noopener noreferrer" className="text-[#8da391] hover:underline">Google Privacy & Terms</a>.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl serif text-zinc-100 mb-4">Data Sharing</h2>
                        <p className="text-zinc-400">
                            We (the developer) do not share your entered data with anyone.
                        </p>
                        <p className="text-zinc-400 mt-2">
                            However, by using the app, you acknowledge that Google (as a third-party vendor) interacts with your device to provide advertising services.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl serif text-zinc-100 mb-4">Data Retention</h2>
                        <p className="text-zinc-400 mb-3">
                            Your personal data persists on your device until you uninstall the app or clear app data. We have no control over this data.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl serif text-zinc-100 mb-4">Your Rights</h2>
                        <p className="text-zinc-400 mb-3">
                            You manage your own data rights on your device:
                        </p>
                        <ul className="list-disc list-inside text-zinc-400 ml-4 space-y-1">
                            <li><span className="text-zinc-200">Access/Delete:</span> App settings or uninstalling.</li>
                            <li><span className="text-zinc-200">Ad Personalization:</span> You can opt-out of personalized advertising in your device's Android/iOS system settings or via Google's Ad Settings.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl serif text-zinc-100 mb-4">Contact Us</h2>
                        <p className="text-zinc-400">
                            Questions? Reach us at:
                        </p>
                        <p className="text-[#8da391] hover:underline mt-2">
                            <a href="mailto:jameelanas00@gmail.com" className="text-[#8da391] hover:underline">jameelanas00@gmail.com</a>
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl serif text-zinc-100 mb-4">Summary</h2>

                        <div className="overflow-x-auto bg-zinc-900 p-4 rounded-md">
                            <table className="w-full text-left text-zinc-300">
                                <tbody>
                                    <tr>
                                        <td className="py-2 font-medium text-zinc-200 w-1/2">Do you collect my goals/logs?</td>
                                        <td className="py-2">No</td>
                                    </tr>
                                    <tr className="border-t border-zinc-800">
                                        <td className="py-2 font-medium text-zinc-200">Is personal data sent to the cloud?</td>
                                        <td className="py-2">No</td>
                                    </tr>
                                    <tr className="border-t border-zinc-800">
                                        <td className="py-2 font-medium text-zinc-200">Do you show ads?</td>
                                        <td className="py-2 text-[#8da391]">Yes (via Google AdMob)</td>
                                    </tr>
                                    <tr className="border-t border-zinc-800">
                                        <td className="py-2 font-medium text-zinc-200">Can Google see my goals?</td>
                                        <td className="py-2">No</td>
                                    </tr>
                                    <tr className="border-t border-zinc-800">
                                        <td className="py-2 font-medium text-zinc-200">Where is my data stored?</td>
                                        <td className="py-2">Only on your device</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <p className="text-zinc-400 mt-4">
                            Reflective Path remains a private space for your journey. Ads are strictly separate from your personal data.
                        </p>
                    </section>

                </div>
            </div>
        </div>
    );
}

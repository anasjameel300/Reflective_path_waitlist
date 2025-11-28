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
                <h1 className="text-4xl md:text-5xl serif text-zinc-100 mb-4">Privacy Policy</h1>
                <p className="text-zinc-500 mb-12">Last Updated: {new Date().toLocaleDateString()}</p>

                {/* Content */}
                <div className="space-y-12 text-zinc-300 leading-relaxed">

                    <section>
                        <h2 className="text-2xl serif text-zinc-100 mb-4">1. Introduction</h2>
                        <p className="text-zinc-400">
                            Welcome to Reflective Path ("we," "our," or "us"). We are committed to protecting your privacy and ensuring you have a positive experience on our mobile application. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our application.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl serif text-zinc-100 mb-4">2. Information We Collect</h2>

                        <div className="space-y-6">
                            <div>
                                <h3 className="text-lg font-medium text-zinc-200 mb-2">A. Personal Information</h3>
                                <p className="text-zinc-400 mb-2">
                                    When you sign in to Reflective Path, we collect authentication information provided by Google Sign-In and managed via Supabase. This may include:
                                </p>
                                <ul className="list-disc list-inside text-zinc-400 ml-4 space-y-1">
                                    <li>User ID</li>
                                    <li>Email address</li>
                                    <li>Profile information (name, avatar)</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-lg font-medium text-zinc-200 mb-2">B. User Content</h3>
                                <p className="text-zinc-400 mb-2">
                                    We collect the data you explicitly create within the app to provide the core functionality of tracking your goals and progress. This includes:
                                </p>
                                <ul className="list-disc list-inside text-zinc-400 ml-4 space-y-1">
                                    <li>Goals and Plans: Titles, start/end dates, and status.</li>
                                    <li>Tasks: Titles, types, completion status, and repeatability.</li>
                                    <li>Reflections and Logs: Daily logs, milestone achievements, and written reflections.</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-lg font-medium text-zinc-200 mb-2">C. Usage and Device Data</h3>
                                <p className="text-zinc-400 mb-2">
                                    We use third-party tools to help us improve the app and identify bugs.
                                </p>
                                <ul className="list-disc list-inside text-zinc-400 ml-4 space-y-2">
                                    <li><span className="text-zinc-200">PostHog:</span> We use PostHog to track anonymous usage events (e.g., "Plan Created", "Task Completed") to understand how users interact with the app.</li>
                                    <li><span className="text-zinc-200">Sentry:</span> We use Sentry to collect crash reports and performance data to help us fix bugs and improve stability.</li>
                                    <li><span className="text-zinc-200">Device Information:</span> We may collect information about your device model, operating system version, and unique device identifiers for analytics and debugging purposes.</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl serif text-zinc-100 mb-4">3. How We Use Your Information</h2>
                        <p className="text-zinc-400 mb-4">We use the collected information for the following purposes:</p>
                        <ul className="list-disc list-inside text-zinc-400 ml-4 space-y-2">
                            <li><span className="text-zinc-200">Service Provision:</span> To store and sync your goals, plans, and tasks across devices using Supabase.</li>
                            <li><span className="text-zinc-200">Authentication:</span> To verify your identity and manage your account.</li>
                            <li><span className="text-zinc-200">Notifications:</span> To send you reminders and nudges for your tasks (if you grant permission).</li>
                            <li><span className="text-zinc-200">Improvement:</span> To analyze usage patterns and fix technical issues using PostHog and Sentry.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl serif text-zinc-100 mb-4">4. Data Storage and Security</h2>
                        <ul className="list-disc list-inside text-zinc-400 ml-4 space-y-2">
                            <li><span className="text-zinc-200">Cloud Storage:</span> Your data is securely stored in the cloud using Supabase, a backend-as-a-service platform.</li>
                            <li><span className="text-zinc-200">Local Storage:</span> We also store a copy of your data locally on your device using AsyncStorage for offline access and performance.</li>
                            <li><span className="text-zinc-200">Security:</span> We implement reasonable security measures to protect your information. However, please be aware that no method of transmission over the internet or electronic storage is 100% secure.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl serif text-zinc-100 mb-4">5. Third-Party Services</h2>
                        <p className="text-zinc-400 mb-4">We may share data with the following third-party service providers solely for the purpose of operating and improving the app:</p>
                        <ul className="list-disc list-inside text-zinc-400 ml-4 space-y-1">
                            <li>Supabase: For database, authentication, and backend services.</li>
                            <li>Google: For authentication services.</li>
                            <li>PostHog: For product analytics.</li>
                            <li>Sentry: For error tracking and performance monitoring.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl serif text-zinc-100 mb-4">6. Your Rights and Data Control</h2>
                        <ul className="list-disc list-inside text-zinc-400 ml-4 space-y-2">
                            <li><span className="text-zinc-200">Account Deletion:</span> You can delete your account and all associated data directly within the app settings. This action will permanently remove your data from our servers (Supabase) and your local device.</li>
                            <li><span className="text-zinc-200">Data Access:</span> You access your data simply by using the application.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl serif text-zinc-100 mb-4">7. Children's Privacy</h2>
                        <p className="text-zinc-400">
                            Reflective Path is not intended for use by children under the age of 13. We do not knowingly collect personal information from children under 13.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl serif text-zinc-100 mb-4">8. Changes to This Privacy Policy</h2>
                        <p className="text-zinc-400">
                            We may update this Privacy Policy from time to time. We will notify you of any changes by updating the "Last Updated" date at the top of this policy.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl serif text-zinc-100 mb-4">9. Contact Us</h2>
                        <p className="text-zinc-400">
                            If you have any questions or concerns about this Privacy Policy, please contact us at: <a href="mailto:jameelanas00@gmail.com" className="text-[#8da391] hover:underline">jameelanas00@gmail.com</a>
                        </p>
                        <p className="text-zinc-400 mt-2">
                            You can also reach us on X (formerly Twitter): <a href="https://x.com/AnasJameel300" target="_blank" rel="noopener noreferrer" className="text-[#8da391] hover:underline">@AnasJameel300</a>
                        </p>
                    </section>

                </div>
            </div>
        </div>
    );
}

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
                <p className="text-zinc-500 mb-8">Reflective Path - Local-First Edition • Version 2.0.0</p>
                <p className="text-zinc-500 mb-12">Last Updated: December 31, 2024</p>

                {/* Content */}
                <div className="space-y-10 text-zinc-300 leading-relaxed">

                    <section>
                        <h2 className="text-2xl serif text-zinc-100 mb-4">Overview</h2>
                        <p className="text-zinc-400">
                            Reflective Path is a mindful productivity app designed to help you focus on a single meaningful goal.
                            This version (2.0.0) is a completely local-first application — your data never leaves your device.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl serif text-zinc-100 mb-4">Data We Collect</h2>
                        <p className="text-zinc-200 font-medium mb-2">Short Answer: None.</p>
                        <p className="text-zinc-400">
                            Reflective Path does not collect, transmit, or store any of your data on external servers.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl serif text-zinc-100 mb-4">What Stays on Your Device</h2>
                        <p className="text-zinc-400 mb-4">All of the following data is stored locally on your device only:</p>
                        <ul className="list-disc list-inside text-zinc-400 ml-4 space-y-1">
                            <li>Your goal</li>
                            <li>Your strategies (plans)</li>
                            <li>Your milestones and support tasks</li>
                            <li>Your daily progress logs</li>
                            <li>Your reflections</li>
                            <li>Your username (if you choose to set one)</li>
                            <li>Notification preferences</li>
                        </ul>
                        <p className="text-zinc-400 mt-3">
                            This data is stored using your device's local storage and is never transmitted to any server.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl serif text-zinc-100 mb-4">Third-Party Services</h2>

                        <div className="mb-4">
                            <p className="text-zinc-400 mb-2">We Do Not Use:</p>
                            <ul className="list-none text-zinc-400 ml-0 space-y-1">
                                <li>❌ Analytics — We do not track how you use the app</li>
                                <li>❌ Cloud databases — Your data is not stored in the cloud</li>
                                <li>❌ Authentication services — No account required</li>
                                <li>❌ Advertising — No ads, no ad tracking</li>
                                <li>❌ Error tracking — No crash reports are sent externally</li>
                            </ul>
                        </div>

                        <div>
                            <p className="text-zinc-400 mb-2">We Do Use:</p>
                            <ul className="list-none text-zinc-400 ml-0 space-y-1">
                                <li>✅ Local notifications — Only if you enable them, to remind you about your daily tasks. These are handled entirely by your device's operating system.</li>
                            </ul>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl serif text-zinc-100 mb-4">Data Sharing</h2>
                        <p className="text-zinc-400">
                            We do not share your data with anyone. Period.
                        </p>
                        <p className="text-zinc-400 mt-2">
                            Since all data is stored locally on your device, there is nothing to share.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl serif text-zinc-100 mb-4">Data Retention</h2>
                        <p className="text-zinc-400 mb-3">
                            Your data persists on your device until:
                        </p>
                        <ul className="list-disc list-inside text-zinc-400 ml-4 space-y-1">
                            <li>You choose to reset your data within the app</li>
                            <li>You uninstall the app</li>
                            <li>You clear the app's data through your device settings</li>
                        </ul>
                        <p className="text-zinc-400 mt-3">
                            We have no control over your data and cannot access, recover, or delete it remotely.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl serif text-zinc-100 mb-4">Children's Privacy</h2>
                        <p className="text-zinc-400">
                            Reflective Path does not collect any personal information from anyone, including children under 13.
                            The app contains no accounts, no tracking, and no data collection of any kind.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl serif text-zinc-100 mb-4">Your Rights</h2>
                        <p className="text-zinc-400 mb-3">
                            Since we don't collect your data, traditional data rights (access, deletion, portability) are handled entirely by you on your device:
                        </p>
                        <ul className="list-disc list-inside text-zinc-400 ml-4 space-y-1">
                            <li><span className="text-zinc-200">Access:</span> Open the app to see all your data</li>
                            <li><span className="text-zinc-200">Delete:</span> Use the "Reset Data" feature or uninstall the app</li>
                            <li><span className="text-zinc-200">Export:</span> Your data lives in your device's app storage</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl serif text-zinc-100 mb-4">Changes to This Policy</h2>
                        <p className="text-zinc-400">
                            If we update this privacy policy, we will update the "Last Updated" date above. Significant changes will be noted in app update release notes.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl serif text-zinc-100 mb-4">Contact Us</h2>
                        <p className="text-zinc-400">
                            If you have questions about this privacy policy or the app, you can reach us at:
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
                                        <td className="py-2 font-medium text-zinc-200 w-1/2">Do you collect my data?</td>
                                        <td className="py-2">No</td>
                                    </tr>
                                    <tr className="border-t border-zinc-800">
                                        <td className="py-2 font-medium text-zinc-200">Is my data sent to the cloud?</td>
                                        <td className="py-2">No</td>
                                    </tr>
                                    <tr className="border-t border-zinc-800">
                                        <td className="py-2 font-medium text-zinc-200">Do you use analytics?</td>
                                        <td className="py-2">No</td>
                                    </tr>
                                    <tr className="border-t border-zinc-800">
                                        <td className="py-2 font-medium text-zinc-200">Do you show ads?</td>
                                        <td className="py-2">No</td>
                                    </tr>
                                    <tr className="border-t border-zinc-800">
                                        <td className="py-2 font-medium text-zinc-200">Can you see my goals?</td>
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
                            Reflective Path is built with a simple belief: your journey is yours alone. We respect that by keeping everything local, private, and under your control.
                        </p>
                    </section>

                </div>
            </div>
        </div>
    );
}

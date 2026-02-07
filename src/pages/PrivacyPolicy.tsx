import { Navbar } from '@/components/Navbar';
import { useEffect } from 'react';

const PrivacyPolicy = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-background">
            <Navbar />

            <div className="pt-28 sm:pt-36 lg:pt-48 pb-12 sm:pb-16">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-4 sm:p-8 md:p-12">
                        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 flex items-center gap-2 sm:gap-3">
                            <span className="text-2xl sm:text-3xl">🔒</span> Privacy Policy
                        </h1>
                        <p className="text-muted-foreground mb-8">Effective Date: February 7, 2026</p>

                        <div className="prose prose-lg dark:prose-invert max-w-none">
                            <p className="text-lg leading-relaxed mb-6">
                                At WeScaleForYou, your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your personal information when you visit or use our website and services.
                            </p>

                            <h2 className="text-2xl font-bold mt-8 mb-4 text-primary">Information We Collect</h2>
                            <p className="mb-4">We may collect the following information:</p>
                            <ul className="list-disc pl-6 space-y-2 mb-6">
                                <li>Personal details such as your name, email address, or contact information when you contact us.</li>
                                <li>Usage data including browser type, IP address, pages visited, and time spent on our website.</li>
                                <li>Any information you voluntarily provide through forms or communication.</li>
                            </ul>

                            <h2 className="text-2xl font-bold mt-8 mb-4 text-primary">How We Use Your Information</h2>
                            <p className="mb-4">We use your information to:</p>
                            <ul className="list-disc pl-6 space-y-2 mb-6">
                                <li>Provide and improve our services</li>
                                <li>Respond to your inquiries and support requests</li>
                                <li>Communicate updates, offers, or important information</li>
                                <li>Improve website performance and user experience</li>
                            </ul>

                            <h2 className="text-2xl font-bold mt-8 mb-4 text-primary">Data Protection</h2>
                            <p className="mb-6">
                                We take appropriate security measures to protect your data against unauthorized access, alteration, or disclosure. However, no method of transmission over the internet is 100% secure.
                            </p>

                            <h2 className="text-2xl font-bold mt-8 mb-4 text-primary">Third-Party Services</h2>
                            <p className="mb-6">
                                We may use trusted third-party tools (such as analytics or hosting services) that help us operate our website. These services may have access to limited data only to perform their tasks.
                            </p>

                            <h2 className="text-2xl font-bold mt-8 mb-4 text-primary">Your Rights</h2>
                            <p className="mb-4">You have the right to:</p>
                            <ul className="list-disc pl-6 space-y-2 mb-6">
                                <li>Request access to your personal data</li>
                                <li>Request correction or deletion of your data</li>
                                <li>Withdraw consent at any time</li>
                            </ul>

                            <p className="mt-8 text-muted-foreground">
                                If you have any questions about this Privacy Policy, please contact us.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;

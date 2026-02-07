import { Navbar } from '@/components/Navbar';
import { useEffect } from 'react';

const CookiePolicy = () => {
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
                            <span className="text-2xl sm:text-3xl">🍪</span> Cookie Policy
                        </h1>
                        <p className="text-muted-foreground mb-8">Effective Date: February 7, 2026</p>

                        <div className="prose prose-lg dark:prose-invert max-w-none">
                            <p className="text-lg leading-relaxed mb-6">
                                This Cookie Policy explains how WeScaleForYou uses cookies and similar technologies on our website.
                            </p>

                            <h2 className="text-2xl font-bold mt-8 mb-4 text-primary">What Are Cookies?</h2>
                            <p className="mb-6">
                                Cookies are small text files stored on your device to help websites function properly and improve user experience.
                            </p>

                            <h2 className="text-2xl font-bold mt-8 mb-4 text-primary">How We Use Cookies</h2>
                            <p className="mb-4">We use cookies to:</p>
                            <ul className="list-disc pl-6 space-y-2 mb-6">
                                <li>Understand how visitors use our website</li>
                                <li>Improve website performance and content</li>
                                <li>Remember user preferences</li>
                            </ul>

                            <h2 className="text-2xl font-bold mt-8 mb-4 text-primary">Types of Cookies We Use</h2>
                            <ul className="list-disc pl-6 space-y-2 mb-6">
                                <li><strong>Essential Cookies:</strong> Required for basic website functionality</li>
                                <li><strong>Analytics Cookies:</strong> Help us analyze traffic and usage patterns</li>
                            </ul>

                            <h2 className="text-2xl font-bold mt-8 mb-4 text-primary">Managing Cookies</h2>
                            <p className="mb-6">
                                You can choose to disable cookies through your browser settings. Please note that disabling cookies may affect some website features.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CookiePolicy;

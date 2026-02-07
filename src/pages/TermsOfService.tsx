import { Navbar } from '@/components/Navbar';
import { useEffect } from 'react';

const TermsOfService = () => {
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
                            <span className="text-2xl sm:text-3xl">📜</span> Terms of Service
                        </h1>
                        <p className="text-muted-foreground mb-8">Effective Date: February 7, 2026</p>

                        <div className="prose prose-lg dark:prose-invert max-w-none">
                            <p className="text-lg leading-relaxed mb-6">
                                Welcome to WeScaleForYou. By accessing or using our website, you agree to comply with and be bound by these Terms of Service.
                            </p>

                            <h2 className="text-2xl font-bold mt-8 mb-4 text-primary">Use of Our Website</h2>
                            <p className="mb-6">
                                You agree to use our website only for lawful purposes and in a way that does not violate any applicable laws or regulations.
                            </p>

                            <h2 className="text-2xl font-bold mt-8 mb-4 text-primary">Services</h2>
                            <p className="mb-6">
                                WeScaleForYou provides business growth and scaling-related services. We reserve the right to modify, suspend, or discontinue any service at any time without prior notice.
                            </p>

                            <h2 className="text-2xl font-bold mt-8 mb-4 text-primary">Intellectual Property</h2>
                            <p className="mb-6">
                                All content on this website, including text, graphics, logos, and design, is the property of WeScaleForYou and may not be copied, reproduced, or distributed without permission.
                            </p>

                            <h2 className="text-2xl font-bold mt-8 mb-4 text-primary">Limitation of Liability</h2>
                            <p className="mb-6">
                                WeScaleForYou shall not be liable for any direct, indirect, or incidental damages arising from the use or inability to use our website or services.
                            </p>

                            <h2 className="text-2xl font-bold mt-8 mb-4 text-primary">User Responsibilities</h2>
                            <p className="mb-6">
                                You are responsible for ensuring that any information you provide is accurate and up to date.
                            </p>

                            <h2 className="text-2xl font-bold mt-8 mb-4 text-primary">Changes to Terms</h2>
                            <p className="mb-6">
                                We may update these Terms of Service at any time. Continued use of the website means you accept the updated terms.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TermsOfService;

import "../styles/PrivacyPolicy.css"; 

export const PrivacyPolicy = () => {
    return (
        <div className="privacy">
            <div className="privacy__wrapper">
                <div className="privacy__main">
                    <div className="privacy__top" data-testid="privacy__top">
                        <h1>Privacy Policy</h1>
                        <p>At SAIL.LY we take your privacy seriously. This Privacy Policy explains how we collect, use, and disclose your personal information when you use our web app.</p>
                    </div>
                    <div className="privacy__bottom">
                        <h2>Information We Collect</h2>
                        <p>When you use SAIL.LY we do not collect any of the following personal information:</p>
                        <ul>
                            <li>Contact Information: Name and email address</li>
                            <li>Usage Information: Information about how you use our web app, such as the pages you visit and the features you use</li>
                            <li>Device Information: Information about the device you use to access our web app, such as your IP address, browser type, and operating system</li>
                        </ul>
                        <h2>How We Use Your Information</h2>
                        <p>We do not use your personal information to provide and/or improve our web app. This app is built and designed for anyone that may want to learn more about climatic conditions pertaining to sailing.</p>
                        <h2>Data Retention</h2>
                        <p>We do not retain any personal information simply because it is not needed.</p>
                        <h2>Changes to This Privacy Policy</h2>
                        <p>We may update this Privacy Policy if needed. If we make any material changes we will post a notice on our web app prior to the effective date of the changes.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
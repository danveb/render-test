import "../styles/TermsAndConditions.css"; 

export const TermsAndConditions = () => {
    return (
        <div className="terms" data-testid="terms">
            <div className="terms__wrapper">
                <div className="terms__main">
                    <div className="terms__top">
                        <h1>Terms And Conditions</h1>
                        <p>Welcome to SAIL.LY! Please read these Terms and Conditions carefully before using our web app. By accessing or using SAIL.LY, you agree to be bound by these Terms and Conditions. If you do not agree to these Terms and Conditions, please do not use our web app.</p>
                    </div>
                    <div className="terms__bottom">
                        <h2>Use of SAIL.LY</h2>
                        <p>SAIL.LY is an application intended for educational purposes. It serves anyone who has little-to-no experience up to experienced sailors.</p>
                        <h2>Intellectual Property</h2>
                        <p>You agree that all materials, products, and services provided on this payment application are the property of SAIL.LY, its affiliates, directors, officers, employees, agents, suppliers, or licensors including all copyrights, trade secrets, trademarks, patents, and other intellectual property.</p>
                        <h2>Applicable Law</h2>
                        <p>By visiting this website, you agree that the laws of the United States of America, without regard to principles of conflict laws, will govern these terms and conditions, or any dispute of any sort that might come.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
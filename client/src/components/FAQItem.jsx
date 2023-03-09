import { useState } from "react";
import { faqs } from "../constants/faq"; 
import arrowUp from "../assets/faq/chevron-up-left.svg"; 
import arrowDown from "../assets/faq/chevron-down-right.svg"; 
import "../styles/FAQItem.css"; 

export const FAQItem = () => {
    const [selected, setSelected] = useState(null); 

    const toggle = (index) => {
        if(selected === index) {
            return setSelected(null); 
        }; 
        setSelected(index); 
    }; 

    return (
        <div className="faqItem__drawer">
            {faqs.map((item, index) => {
                return (
                    <div key={index} className={selected === index
                        ? "faqItem__drawer--open"
                        : "faqItem__drawer--close"}
                    >
                        <div
                            className="faqItem__drawer__control"
                            onClick={() => toggle(index)}
                        >
                            <h2 className={selected === index
                                    ? "faqItem__drawer__heading--bold"
                                    : "faqItem__drawer__heading"}
                            >
                                {item.title}
                            </h2>
                            <div className="arrow__container">
                                {selected === index ? <img src={arrowUp} alt="arrow up" className="arrow" /> : <img src={arrowDown} alt="arrow down" className="arrow" />}
                            </div>
                        </div>
                        <p className={selected === index
                            ? "faqItem__drawer__subheading--bold"
                            : "faqItem__drawer__subheading"}
                        >
                            {item.text}
                        </p>
                    </div>
                );
            })}
        </div>
    )
}
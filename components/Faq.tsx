'use client'
import { useState } from "react";
import {FaqData} from "@/utility/interface";

const Faq = () => {
  const [faq, setFaq] = useState<number | null>(null);

  const handleFaqToggle = (id: number) => {
    setFaq(prevId => (prevId === id ? null : id));
  };

  return (
      <section className="faq-section section-padding">
        <div className="container">
          <div className="section-title text-center">
          <span className="sub-content wow fadeInUp">
            <img src="assets/img/bale.png" alt="img" />
            Some Question
          </span>
            <h2 className="wow fadeInUp" data-wow-delay=".3s">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="faq-content">
                <div className="faq-accordion">
                  <div className="accordion">
                    {FaqData.map(item => (
                        <div key={item.id} className="accordion-item">
                          <h4 className="accordion-header">
                            <button
                                className={`accordion-button ${faq === item.id ? 'active' : 'collapsed'}`}
                                onClick={() => handleFaqToggle(item.id)}
                            >
                              {item.title}
                            </button>
                          </h4>
                          <div
                              className={`accordion-collapse wow fadeInUp" ${faq === item.id ? 'show' : ''}`}
                              style={{
                                height: faq === item.id ? "auto" : "0",
                                overflow: "hidden",
                                transition: "height 0.3s ease-in-out",
                              }}
                          >
                            <div className="accordion-body">
                              {item.description}
                            </div>
                          </div>
                        </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default Faq;


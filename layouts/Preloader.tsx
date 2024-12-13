"use client";
import { useEffect } from "react";
import { nextUtility } from "@/utility";

const Preloader = () => {
  useEffect(() => {
    nextUtility.preloader();
  }, []);

  return (
      <div id="preloader" className="preloader">
        <div className="animation-preloader">
          <div className="spinner"></div>
          <div className="txt-loading">
            {["N", "I", "R", "V", "I"].map((letter, index) => (
                <span key={index} data-text-preloader={letter} className="letters-loading">
              {letter}
            </span>
            ))}
          </div>
          <p className="text-center">Loading</p>
        </div>
        <div className="loader">
          <div className="row">
            {Array.from({ length: 4 }).map((_, index) => (
                <div
                    key={index}
                    className={`col-3 loader-section ${
                        index < 2 ? "section-left" : "section-right"
                    }`}
                >
                  <div className="bg" />
                </div>
            ))}
          </div>
        </div>
      </div>
  );
};

export default Preloader;

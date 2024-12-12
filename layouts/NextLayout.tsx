"use client";
import { nextUtility } from "@/utility";
import { Fragment, useEffect } from "react";
import Footer from "./Footer";
import Header from "./Header";
import {NextLayoutProps} from "@/utility/interface";

export const metadata = {
  title: "Nirvy - Online Food Delivery Application",
  description: "Welcome to our Nirvy page.",
};
const NextLayout = ({ header, footer, children, bgBlack, single }:NextLayoutProps) => {
  useEffect(() => {
    const body = document?.querySelector("body");

    if (body) {
      if (bgBlack) {
        body.classList.add("home-5-body-color");
      } else {
        if (body.classList.contains("home-5-body-color")) {
          body.classList.remove("home-5-body-color");
        }
      }
    }
    return () => {}
  }, [bgBlack]);

  useEffect(() => {
    nextUtility.scrollAnimation();
  }, []);

  return (
    <Fragment>
      <Header header={header} single={single} />
      {children}
      <Footer footer={footer} />
    </Fragment>
  );
};
export default NextLayout;

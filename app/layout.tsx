import React from "react";
import "@css/animate.css";
import "@css/bootstrap.min.css";
import "@css/font-awesome.css";
import "@css/magnific-popup.css";
import "@css/main.css";
import "@css/meanmenu.css";
import "@css/nice-select.css";
import "@css/swiper-bundle.min.css";
import "./globals.css";
import Preloader from "@/layouts/Preloader";
import Chatbot from "@/components/Chatbot";

export const metadata = {
  title: "Nirvy - Online Food Delivery Application",
  description: "Welcome to our Nirvy page.",
};

export default function RootLayout({children,}: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body>
      <Preloader />
      {children}
      <Chatbot/>
      </body>
    </html>
  );
}

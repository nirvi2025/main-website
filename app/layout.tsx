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
import type {Metadata} from "next";

export const metadata: Metadata = {
    title: "Nirvy - Healthy Meals for Happy Kids | Online Food Delivery",
    description: "Discover nutritious, delicious, and freshly prepared meals delivered straight to your child's school with love and care. Experience the joy of healthy eating with Nirvy's online food delivery service.",
    keywords: "Nirvy, Food Delivery, Healthy School Meals, Online Food Delivery, Kids Meals Delivery, Healthy Lunch for Kids, Food for School, Child Nutrition, Wholesome Food Delivery, Nirvy Meals",
    openGraph: {
        title: "Nirvy - Healthy Meals for Happy Kids | Online Food Delivery",
        description: "Experience the perfect balance of nutrition and taste with Nirvy's wholesome meals delivered to schools. Every bite matters for your child's growth and happiness.",
        images: ["https://nirvy.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FNirvi_Main%20Logo%20File_Horizontal%20Logo.530c666c.png&w=3840&q=75"],
        url: "https://nirvy.com",
    },
    twitter: {
        title: "Nirvy - Healthy Meals for Happy Kids | Online Food Delivery",
        description: "Nutritious, tasty, and freshly prepared meals delivered to schools with love and care. Choose Nirvy for healthy school lunches your kids will love!",
        images: "https://nirvy.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FNirvi_Main%20Logo%20File_Horizontal%20Logo.530c666c.png&w=3840&q=75",
        card: "summary_large_image",
        creator: "@nirvy",
        site: "https://nirvy.com",
    }
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

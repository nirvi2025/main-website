import Breadcrumb from "@/components/Breadcrumb";
import Cta from "@/components/Cta";
import Faq from "@/components/Faq";
import GrowBusiness from "@/components/GrowBusiness";
import Services, { Service2 } from "@/components/Services";
import NextLayout from "@/layouts/NextLayout";
import type {Metadata} from "next";

export const metadata:Metadata = {
    title: "Nirvy - Online Food Delivery Application",
    description: "Welcome to our Nirvy page.",
    keywords: "Nirvy, Food Delivery, Online Food Delivery, Nirvy Food, Online Food Delivery Application, Nirvi, Niirvii",
};
const page = () => {
  return (
    <NextLayout>
      <Breadcrumb pageName="Our Services" pageTitle="Popular Services" />
      <GrowBusiness paddingTop={9} />
      <Services />
      <Service2 paddingTop={9} title="Core Features" />
      <Cta />
      <Faq />
    </NextLayout>
  );
};
export default page;

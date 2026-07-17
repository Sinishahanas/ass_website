import Contact from "@/components/contact/contact";
import PageHeader from "@/components/pageHeader";

export default function ContactPage() {
  return (
    <main>
      <PageHeader
        description="Get in touch with our experts for reliable security solutions."
        subTitle="Contact Us"
      >
        Contact Our Experts
      </PageHeader>
      <Contact />
    </main>
  );
}

// import PageHeader from "@/components/pageHeader";
// import AboutDisplay from "./aboutDisplay";
// import { siteName } from "@/utils/envExport";
// import { Metadata } from "next";
// import { coursesData } from "@/components/services/courseData";

// export const metadata: Metadata = {
//   title: `Courses | ${siteName}`,
//   description: "Skillsaint  Online Learning Platform",
// };

// const About = () => {
//   const courses = coursesData;
//   return (
// <main>
//   <PageHeader
//     description="Grow your skills with expert-led lessons designed to help you achieve your goals — anytime, anywhere."
//     subTitle="Our Courses"
//   >
//     About Arena
//   </PageHeader>
//   <AboutDisplay courses={courses} />
// </main>
//   );
// };

// export default About;

import { siteName } from "@/utils/envExport";
import { Metadata } from "next";
import AboutContent from "./aboutContent";

export const metadata: Metadata = {
  title: `Courses | ${siteName}`,
  description: "Skillsaint  Online Learning Platform",
};

const About = () => {
  return (
    <main>
      <AboutContent />
    </main>
  );
};

export default About;

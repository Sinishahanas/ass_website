import {
  CertificateCheckFill,
  Headset,
  ShieldChecker,
  UserCheck,
} from "@/lib/icons";
import { Handshake } from "lucide-react";
import { ReactElement } from "react";

type featureType = {
  id: number;
  icon: ReactElement;
  title: string;
  description: string;
  thumbnail: string;
};
export const featuresData: featureType[] = [
  {
    id: 1,
    icon: <UserCheck />,
    title: "Expertise & Experience",
    description:
      "Skilled professionals delivering reliable ELV solutions with industry expertise.",
    thumbnail: "/images/features/expertise.png",
  },
  {
    id: 2,
    icon: <ShieldChecker />,
    title: "Quality & Reliability",
    description:
      "Providing high-quality systems designed for secure, efficient, and long-lasting performance.",
    thumbnail: "/images/features/quality.png",
  },
  {
    id: 3,
    // icon: <Handshake className="text-purple-500" size={25} />,
    icon: (
      <div className="relative">
        <Handshake className="absolute text-white" size={20} strokeWidth={3} />
        <Handshake
          className="text-purple-500 relative"
          size={18}
          strokeWidth={3}
        />
      </div>
    ),
    title: "Complete Support",
    description:
      "Offering end-to-end services from consultation and installation to maintenance and support.",
    thumbnail: "/images/features/support.png",
  },
];

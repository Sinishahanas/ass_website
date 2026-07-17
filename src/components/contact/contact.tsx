import React from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import Button from "../ui/button";

const Contact = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-10">
          <div className="bg-gradient-to-br from-[#d2cfe6] via-white to-[#ebe8ff] rounded-xl shadow-lg p-8 border border-[#d8eaf7]">
            <h2 className="text-2xl font-semibold text-[#023053] mb-6">
              Get In Touch
            </h2>

            <div className="space-y-6">
              <div className="flex gap-4">
                <MapPin className="text-purple-500" />
                <p>Abu Dhabi, UAE</p>
              </div>

              <div className="flex gap-4">
                <Phone className="text-purple-500" />
                <p>+971 XX XXX XXXX</p>
              </div>

              <div className="flex gap-4">
                <Mail className="text-purple-500" />
                <p>info@arenasecuritysystems.com</p>
              </div>

              <div className="flex gap-4">
                <Clock className="text-purple-500" />
                <p>
                  Monday - Saturday
                  <br />
                  9:00 AM - 6:00 PM
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#d2cfe6] via-white to-[#ebe8ff] rounded-xl shadow-lg p-8 border border-[#d8eaf7]">
            <h2 className="text-2xl font-semibold text-[#023053] mb-6">
              Send Us A Message
            </h2>

            <form className="space-y-5">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border rounded-lg p-3"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full border rounded-lg p-3"
              />

              <textarea
                placeholder="Your Message"
                rows={5}
                className="w-full border rounded-lg p-3"
              />

              <Button
                type="submit"
                size="lg"
                className="py-1.5 pr-6 pl-6 max-sm:w-full bg-purple-500 hover:bg-purple-600"
              >
                Schedule a Consultation
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

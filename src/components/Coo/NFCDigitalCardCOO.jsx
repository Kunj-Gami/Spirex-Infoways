import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  Globe,
  MapPin,
  MessageCircle,
  Download,
} from "lucide-react";

import profileImg from "../../assets/HomeImg/Spriex Infoway_LOGO A4 1x1.png";
import companyLogo from "../../assets/HomeImg/Spriex Infoway_LOGO A2.png";

export default function NFCDigitalCardCOO() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoaded(true), 250);
  }, []);

  const data = {
    name: "Anand Patel",
    designation: "Chief Operating Officer",
    phone: "+91 7600188115",
    whatsapp: "+91 7600188115",
    email: "info@spirexinfoways.com",
    website: "https://www.spirexinfoways.com",
    location:
      "https://maps.app.goo.gl/773ZGR6GvDNyBQp18",
    services: [
      "web development",
      "App Development",
      "Custom ERP Software",
      "HRMS systems",
    ],
  };

  /* ---------- SAVE CONTACT FUNCTION ---------- */
  const handleSaveContact = () => {
    // 1. Construct vCard string
    // VERSION:3.0 is standard.
    // N:Last;First;Middle;Prefix;Suffix
    // FN: Display Name
    const vCardData = `BEGIN:VCARD
VERSION:3.0
FN:${data.name}
N:;${data.name};;;
ORG:${data.name}
TITLE:${data.designation}
TEL;TYPE=CELL:${data.phone}
EMAIL;TYPE=WORK:${data.email}
URL:${data.website}
NOTE:Services: ${data.services.join(", ")}. Location: ${data.location}
END:VCARD`;

    // 2. Create a blob
    const blob = new Blob([vCardData], { type: "text/vcard;charset=utf-8" });
    const url = window.URL.createObjectURL(blob);

    // 3. Create a hidden link and trigger click
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "contact.vcf");
    document.body.appendChild(link);
    link.click();

    // 4. Cleanup
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen outfit bg-white flex items-center justify-center ">

      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.97 }}
        animate={loaded ? { opacity: 1, y: 0, scale: 1 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full lg:max-w-sm bg-white rounded-[28px] shadow-md overflow-hidden my-5"
      >

        {/* HEADER */}
        <div className="relative h-40 bg-[#0064E0] flex items-center justify-center ">
          <img
            src={companyLogo}
            alt="Company Logo"
            className=" w-[320px] absolute -bottom-[70px]"
          />
          {/* <div className="absolute inset-0 bg-[#0064E0]/20 blur-2xl" /> */}
        </div>

        {/* PROFILE */}
        <div className="relative flex justify-center -mt-12">
          <img
            src={profileImg}
            alt="Profile"
            className="w-28 h-28 rounded-full border-4 border-white bg-white shadow-xl object-cover"
          />
        </div>

        {/* NAME */}
        <div className="text-center mt-4 px-6">
          <h2 className="text-lg font-semibold text-gray-900">
            {data.name}
          </h2>
          <p className="text-[#0064E0] text-xs font-medium tracking-wide ">
            {data.designation}
          </p>
        </div>

        {/* DETAILS (INPUT STYLE) */}
        <div className="mt-6 px-6 space-y-4">

          <InputLink
            icon={Phone}
            label="Call"
            value={data.phone}
            href={`tel:${data.phone}`}
          />

          <InputLink
            icon={MessageCircle}
            label="WhatsApp"
            value="Chat on WhatsApp"
            href={`https://wa.me/${data.whatsapp.replace("+", "")}`}
          />

          <InputLink
            icon={Mail}
            label="Email"
            value={data.email}
            href={`mailto:${data.email}`}
          />

          <InputLink
            icon={Globe}
            label="Website"
            value={data.website}
            href={data.website}
          />

          <InputLink
            icon={MapPin}
            label="Location"
            value="Open in Google Maps"
            href={data.location}
          />
        </div>

        {/* SERVICES */}
        {/* <div className="px-6 mt-6">
          <p className="text-sm font-semibold text-gray-800 mb-3">
            Services
          </p>
          <div className="grid grid-cols-2 gap-3">
            {data.services.map((service, i) => (
              <div
                key={i}
                className="border border-blue-100 rounded-xl py-2 text-sm font-medium text-[#0064E0] text-center"
              >
                {service}
              </div>
            ))}
          </div>
        </div> */}

        {/* SAVE CONTACT */}
        <div className="px-6 mt-6">
          <button
            onClick={handleSaveContact}
            className="w-full flex items-center justify-center gap-2 bg-[#0064E0] text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition"
          >
            <Download className="w-5 h-5" />
            Save Contact
          </button>
        </div>

        <div className="h-6" />
      </motion.div>
    </div>
  );
}

/* ---------- INPUT STYLE LINK ---------- */

const InputLink = ({ icon: Icon, label, value, href }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-3 bg-white border border-gray-200 rounded-xl px-4 py-3 shadow-sm hover:shadow-md transition"
  >
    <Icon className="w-5 h-5 text-[#0064E0]" />
    <div className="flex flex-col">
      <span className="text-xs text-gray-400">{label}</span>
      <span className="text-sm font-medium text-gray-800 truncate">
        {value}
      </span>
    </div>
  </a>
);
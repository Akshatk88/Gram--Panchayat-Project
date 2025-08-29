// src/components/ContactUs.tsx
import React from "react";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaClock,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

const ContactUs: React.FC = () => {
  return (
    <section className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Title */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-green-700">Contact Us</h2>
          <p className="text-gray-600 mt-2">
            Get in touch with Gram Panchayat Longwala
          </p>
          <div className="w-16 h-1 bg-green-500 mx-auto mt-3"></div>
        </div>

        {/* Content */}
        <div className="mt-10 grid gap-10 md:grid-cols-2">
          {/* Left Side - Contact Info */}
          <div>
            <h3 className="text-xl font-semibold text-green-700 mb-6">
              Contact Information
            </h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-green-100 p-3 rounded-lg">
                  <FaMapMarkerAlt className="text-green-700 text-lg" />
                </div>
                <div className="ml-4">
                  <p className="font-semibold text-green-700">Address</p>
                  <p className="text-gray-600">
                    Gram Panchayat Longwala <br />
                    Block: Surajgarh <br />
                    District: Jhunjhunu, Rajasthan 333001
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-green-100 p-3 rounded-lg">
                  <FaPhone className="text-green-700 text-lg" />
                </div>
                <div className="ml-4">
                  <p className="font-semibold text-green-700">Phone</p>
                  <p className="text-gray-600">+91-98765-43210 (Office)</p>
                  <p className="text-gray-600">+91-97654-32109 (Sarpanch)</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-green-100 p-3 rounded-lg">
                  <FaEnvelope className="text-green-700 text-lg" />
                </div>
                <div className="ml-4">
                  <p className="font-semibold text-green-700">Email</p>
                  <p className="text-gray-600">
                    panchayat.longwala@rajasthan.gov.in
                  </p>
                  <p className="text-gray-600">info@longwalapanchayat.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-green-100 p-3 rounded-lg">
                  <FaClock className="text-green-700 text-lg" />
                </div>
                <div className="ml-4">
                  <p className="font-semibold text-green-700">Office Hours</p>
                  <p className="text-gray-600">
                    Monday to Saturday: 10:00 AM – 5:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Social Media */}
          <div>
            <h3 className="text-xl font-semibold text-green-700 mb-6">
              Connect With Us
            </h3>
            <p className="text-gray-600 mb-4">
              Follow us on social media for the latest updates and announcements:
            </p>
            <div className="grid grid-cols-2 gap-4">
              <a
                href="#"
                className="bg-blue-600 text-white py-4 rounded-lg flex flex-col items-center hover:opacity-90 transition"
              >
                <FaFacebookF size={20} />
                <span className="mt-1">Facebook</span>
              </a>
              <a
                href="#"
                className="bg-sky-500 text-white py-4 rounded-lg flex flex-col items-center hover:opacity-90 transition"
              >
                <FaTwitter size={20} />
                <span className="mt-1">Twitter</span>
              </a>
              <a
                href="#"
                className="bg-purple-600 text-white py-4 rounded-lg flex flex-col items-center hover:opacity-90 transition"
              >
                <FaInstagram size={20} />
                <span className="mt-1">Instagram</span>
              </a>
              <a
                href="#"
                className="bg-red-600 text-white py-4 rounded-lg flex flex-col items-center hover:opacity-90 transition"
              >
                <FaYoutube size={20} />
                <span className="mt-1">YouTube</span>
              </a>
            </div>

            {/* Emergency Contact */}
            <div className="mt-6 bg-green-50 p-4 rounded-lg">
              <p className="text-green-700 font-semibold">
                Emergency Contact
              </p>
              <p className="text-gray-600">
                For urgent matters after office hours:
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;

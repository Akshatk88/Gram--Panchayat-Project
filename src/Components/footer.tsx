 // src/components/Footer.tsx
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-green-800 text-white py-10">
      <div className="max-w-7xl mx-auto px-4 grid gap-8 md:grid-cols-3">
        {/* Column 1 */}
        <div>
          <h3 className="text-lg font-bold">Gram Panchayat Longwala</h3>
          <p className="mt-3 text-sm leading-relaxed">
            Dedicated to serving our community with integrity, transparency, and compassion.
          </p>
          <p className="mt-3 text-sm leading-relaxed">
            ईमानदारी, पारदर्शिता और करुणा के साथ हमारे समुदाय की सेवा करना
          </p>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="text-lg font-bold">Quick Links</h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <a href="#" className="hover:underline">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Gallery
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="text-lg font-bold">Government Partners</h3>
          <p className="mt-3 text-sm">
            Working in collaboration with:
            <br />
            Rajasthan Government
            <br />
            Ministry of Panchayati Raj
            <br />
            NREGA Implementation
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-8 border-t border-green-700 pt-4 text-center text-sm">
        © 2023 Gram Panchayat Longwala. All rights reserved. |{" "}
        <a href="#" className="hover:underline">
          Privacy Policy
        </a>{" "}
        |{" "}
        <a href="#" className="hover:underline">
          Terms of Service
        </a>
      </div>
    </footer>
  );
};

export default Footer;

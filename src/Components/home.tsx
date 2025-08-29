// src/Components/Home.tsx
// src/Components/Home.tsx
import type { FC } from "react";

const Home: FC = () => {
  return (
    <section
      className="relative h-screen flex items-center justify-center text-center text-white"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80')", // replace with your background image
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-green-900 bg-opacity-70"></div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl px-6">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
          Welcome to <br /> Longwala Panchayat
        </h1>
        <p className="mt-4 text-lg md:text-xl font-light">
          Serving our community with dedication and transparency since 1985
        </p>
        <p className="mt-2 text-base md:text-lg font-medium">
          समर्पण और पारदर्शिता के साथ हमारे समुदाय की सेवा
        </p>

        {/* Buttons */}
        <div className="mt-8 flex justify-center gap-6">
          <a
            href="#contact"
            className="bg-white text-green-800 px-6 py-3 rounded-md shadow-md font-semibold hover:bg-green-100 transition"
          >
            Contact Us
          </a>
          <a
            href="#services"
            className="border-2 border-white px-6 py-3 rounded-md font-semibold hover:bg-white hover:text-green-800 transition"
          >
            Our Services
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;

// src/Components/About.tsx
// src/Components/About.tsx
import type { FC } from "react";

const About: FC = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-green-800 mb-4">
          About Our Panchayat
        </h2>
        <div className="w-24 h-1 bg-green-600 mx-auto mb-12"></div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Left Content */}
          <div>
            <h3 className="text-2xl font-semibold text-green-700 mb-4">
              Our Mission
            </h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Gram Panchayat Longwala is committed to the holistic development
              of our village through sustainable practices, community engagement,
              and transparent governance. We strive to create an environment
              where every citizen can thrive.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Established in 1985, our panchayat has been at the forefront of
              rural development, implementing various government schemes and
              initiatives for the betterment of our community.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-8 mt-8">
              <div>
                <p className="text-3xl font-bold text-green-700">5,200+</p>
                <p className="text-gray-600">Residents</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-green-700">15</p>
                <p className="text-gray-600">Villages in Gram Panchayat</p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div>
    <img
  src="https://images.unsplash.com/photo-1442544213729-6a15f1611937?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHZpbGxhZ2V8ZW58MHx8MHx8fDA%3D"
  alt="Village Scenery"
  className="rounded-lg shadow-lg"
/>



          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

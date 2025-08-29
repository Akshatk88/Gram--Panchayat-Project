// src/Components/Gallery.tsx
// src/Components/Gallery.tsx
import type { FC } from "react";

const Gallery: FC = () => {
const images = [
  "https://images.unsplash.com/photo-1647184223407-ef8273a6822c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aW5kaWFuJTIwdmlsbGFnZXxlbnwwfHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1600180758895-6ff40e540f01?auto=format&fit=crop&w=800&q=80"
];


  return (
    <section id="gallery" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-green-800 mb-3">
          Photo Gallery
        </h2>
        <p className="text-center text-gray-600 mb-8">
          Glimpses of our village life and development activities
        </p>
        <div className="w-24 h-1 bg-green-600 mx-auto mb-12"></div>

        {/* Image Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`gallery-${index}`}
              className="rounded-lg shadow-md hover:scale-105 transition-transform duration-300 cursor-pointer"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;

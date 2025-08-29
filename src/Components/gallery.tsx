// src/Components/Gallery.tsx
// src/Components/Gallery.tsx
import type { FC } from "react";

const Gallery: FC = () => {
const images = [
  "https://images.unsplash.com/photo-1647184223407-ef8273a6822c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aW5kaWFuJTIwdmlsbGFnZXxlbnwwfHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1651678938586-affccc71c270?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aW5kaWFuJTIwdmlsbGFnZXxlbnwwfHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1634874706682-3468a6e421ba?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aW5kaWFuJTIwdmlsbGFnZXxlbnwwfHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1586618770443-e6f8167fca61?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGluZGlhbiUyMHZpbGxhZ2V8ZW58MHx8MHx8fDA%3D",
  "https://images.unsplash.com/photo-1598972674627-30907e6ba976?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGluZGlhbiUyMHZpbGxhZ2V8ZW58MHx8MHx8fDA%3D",
  "https://plus.unsplash.com/premium_photo-1721487064031-a394c7267785?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODF8fGluZGlhbiUyMHZpbGxhZ2V8ZW58MHx8MHx8fDA%3D"
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

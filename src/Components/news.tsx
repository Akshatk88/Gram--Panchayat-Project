import React from "react";

interface NewsItem {
  id: number;
  type: "Announcement" | "Event";
  date: string;
  title: string;
  description: string;
  image: string;
}

const newsData: NewsItem[] = [
  {
    id: 1,
    type: "Announcement",
    date: "December 15, 2023",
    title: "New Water Supply Project Launch",
    description:
      "The new water supply project benefiting 200 households has been successfully launched. This initiative ensures 24/7 clean drinking water availability across all villages.",
    image:
      "https://images.unsplash.com/photo-1668961915523-884872e392f8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2F0ZXIlMjBzdXBwbHklMjBpbiUyMHZpbGxhZ2V8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 2,
    type: "Event",
    date: "December 20, 2023",
    title: "Annual Gram Sabha Meeting",
    description:
      "The annual Gram Sabha meeting will be held on December 20th at the Panchayat Bhawan. All villagers are invited to participate and share their suggestions for village development.",
    image:
      "https://images.unsplash.com/photo-1595683259103-3a70d0969112?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fEFubnVhbCUyMEdyYW0lMjBTYWJoYSUyME1lZXRpbmclMjB2aWxsYWdlfGVufDB8fDB8fHww",
  },
];

const NewsSection: React.FC = () => {
  return (
    <section className="py-12 px-6 bg-gray-50">
      <h2 className="text-3xl font-bold text-center text-green-700">
        Latest News & Updates
      </h2>
      <p className="text-center text-gray-600 mt-2">
        Stay informed about village development and events
      </p>

      <div className="mt-10 grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {newsData.map((news) => (
          <div
            key={news.id}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition"
          >
            {/* Image */}
            <img
              src={news.image}
              alt={news.title}
              className="w-full h-48 object-cover"
            />

            {/* Content */}
            <div className="p-6">
              <span
                className={`inline-block px-3 py-1 text-sm rounded-full ${
                  news.type === "Announcement"
                    ? "bg-green-100 text-green-700"
                    : "bg-blue-100 text-blue-700"
                }`}
              >
                {news.type}
              </span>
              <span className="ml-3 text-sm text-gray-500">{news.date}</span>

              <h3 className="mt-3 text-xl font-semibold text-green-800">
                {news.title}
              </h3>
              <p className="mt-2 text-gray-600">{news.description}</p>

              <a
                href="#"
                className="mt-4 inline-block text-green-600 font-medium hover:underline"
              >
                Read More →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewsSection;

// src/components/PanchayatMembers.tsx
import React from "react";

interface Member {
  name: string;
  role: string;
  description: string;
  image: string;
}

const members: Member[] = [
  {
    name: "Shri Rajesh Kumar",
    role: "Sarpanch",
    description:
      "Leading the panchayat with vision and dedication since 2020",
    image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/5e14d662-2b1a-456d-8e8d-4d956da46849.png" // replace with your image path
  },
  {
    name: "Smt. Sita Devi",
    role: "Up-Sarpanch",
    description:
      "Focusing on women empowerment and education initiatives",
    image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/7c5e5cdb-5c0c-49bf-ae08-ea3eb4fb4829.png", // replace with your image path
  },
  {
    name: "Shri Mohan Lal",
    role: "Panchayat Member",
    description:
      "Expert in agricultural development and water management",
    image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/93caabd2-e63e-437a-9bc3-d2270933faf1.png" // replace with your image path
  },
];

const PanchayatMembers: React.FC = () => {
  return (
    <section className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-green-700">
          Our Panchayat Members
        </h2>
        <p className="text-gray-600 mt-2">
          Dedicated representatives serving the community
        </p>
        <div className="w-16 h-1 bg-green-500 mx-auto mt-3"></div>

        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {members.map((member, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-24 h-24 rounded-full mx-auto object-cover"
              />
              <h3 className="mt-4 text-lg font-semibold text-green-700">
                {member.name}
              </h3>
              <p className="text-green-500 font-medium">{member.role}</p>
              <p className="mt-2 text-gray-600">{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PanchayatMembers;

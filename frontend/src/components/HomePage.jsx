// HomePage.jsx
import React from "react";
import PostCard from "../../utils/PostCard.jsx";
import PostData from "../../utils/PostData"

const HomePage = () => {
  const posts = PostData();

  return (
    <div className="flex flex-col bg-black  w-full min-h-screen overflow-y-auto items-center no-scrollbar py-8">
      {posts.map((post) => (
        <div key={post._id} className="rounded-2xl bg-slate-300 p-1 mb-4">
          <PostCard {...post} />
        </div>
      ))}
    </div>
  );
};

export default HomePage;
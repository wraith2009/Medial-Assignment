import React, { useState } from 'react';
import { AiOutlineLike, AiOutlineDislike } from 'react-icons/ai';
import { FaRegComment } from 'react-icons/fa';
import { Helmet } from "react-helmet";

const PostCard = ({ title, description, owner, votes, updatedAt, media, comments, category, _id }) => {
  const [userVote, setUserVote] = useState(null);

  // Simulate current user data
  const currentUser = "user1";

  return (
    <div className="post-card bg-[#13181d] shadow-md w-[500px] max-h-[500px] min-w-[600px] rounded-lg py-1">
      <div className='hover:bg-[#2e2b2b] rounded-2xl py-4 px-8'>
        <div className='flex gap-10 justify-between'>
          {owner && (
            <div className="owner-info flex items-center mb-4 gap-4 text-white">
              <img
                src={owner.avatar}
                alt={`Avatar of ${owner.userName}`}
                className="w-10 h-10 rounded-full mr-2"
              />
              <div>
                <span className="font-bold">{owner.userName}</span>
                <p className='text-sm'> {new Date(updatedAt).toLocaleDateString()}</p>
              </div>
            </div>
          )}
          <p className='text-sm text-white'>{category.name}</p>
        </div>
        <div>
          <div>
            <h2 className="text-xl font-bold text-white">{title}</h2>
            <p className="text-[#9bb7b8]">{description}</p>
            {media && (
              <div className="media mt-4 rounded-2xl border border-slate-200 flex justify-center">
                <a href={media} target="_blank" rel="noopener noreferrer">
                  <img src={media} alt="Media content" className="max-w-[500px] max-h-[300px]" />
                </a>
              </div>
            )}
          </div>
          </div>
        </div>
      </div>
  
  );
};

export default PostCard;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const PostCard = ({ title, description, owner, media, _id }) => {

  return (
    <div className="post-card bg-slate-300 shadow-md w-[500px] max-h-[500px] min-w-[600px] rounded-2xl py-1">
      <div className=' rounded-2xl py-4 px-8'>
        <div className='flex gap-10 justify-between'>
          {owner && (
            <div className="owner-info flex items-center mb-3 gap-4 text-gray-800 ml-3">
              <img
                src={owner.avatar}
                alt={`Avatar of ${owner.userName}`}
                className="w-10 h-10 rounded-full mr-2"
              />
              <div>
                <span className="font-bold text-gray-800">{owner.userName}</span>
                
              </div>
            </div>
          )}
          
        </div>
        <div>
          <div>
            <h2 className="text-xl font-bold text-gray-800 ml-3 ">{title}</h2>
            <p className="text-gray-800 ml-3">{description}</p>

            {media && (
              <div className="media mt-4 rounded-2xl border border-black w-[300px] flex justify-center">
                <a href={media} target="_blank" rel="noopener noreferrer">
                  <img src={media} alt="Media content" className="max-w-[300px] max-h-[300px]" />
                </a>
              </div>
            )}
          </div>
            
            <Link to={`post/${_id}`}>
              <div className='flex bg-[#222020] rounded-full gap-1 cursor-pointer pr-1 mt-3'>
                <p className='text-xl'>Share</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
  );
};

export default PostCard;
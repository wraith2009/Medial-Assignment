import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PostData from "../../utils/postData";
import PostCard from "../../utils/PostCard";
import { Helmet } from "react-helmet";

const PostPage = () => {
  const { postId } = useParams();
  const posts = PostData();
  const post = posts.find((p) => p._id === postId);

  const [imageUrl, setImageUrl] = useState('');

  if (!post) {
    return <h1>Post not found</h1>;
  }

  const generateImageUrl = (post) => {
    const params = new URLSearchParams({
      avatar: post.owner.avatar,
      title: post.title,
      description: post.description,
      media: post.media,
      username: post.owner.userName,
    
    });

    return `http://localhost:3000/api/generate-image?${params.toString()}`;
  };

  const fetchImageUrl = async () => {
    const url = generateImageUrl(post);
    const response = await fetch(url);
    const data = await response.json();
    setImageUrl(data.imageUrl);
  };

  useEffect(() => {
    fetchImageUrl();
  }, []);

  return (
    <div className="post-page">
      <Helmet>
        <meta property="og:image" content={imageUrl} />
      </Helmet>
      <div>
        <PostCard {...post} />
      </div>
    </div>
  );
};

export default PostPage;
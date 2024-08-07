const PostData = () => {
  const posts = [
    {
      title: "Sample Post Title 1",
      description: "This is a sample post description 1.",
      owner: {
        userName: "User 1",
        avatar: "https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg",
      },
      media: "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg",
     
      _id: "post1",
    },
    {
      title: "Sample Post Title 2",
      description: "This is a sample post description 2.",
      owner: {
        userName: "User 2",
        avatar: "https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg",
      },
      media: "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg",
      _id: "post2"
    },

  {
    title: "Sample Post Title 3",
    description: "This is a sample post description 3.",
    owner: {
      userName: "User 3",
      avatar: "https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg",
    },
    media: "https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg",
    _id: "post3"
  },
    // Add more posts as needed
  ];

  return posts;
};

export default PostData;
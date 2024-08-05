const PostData = () => {
    const posts = [
      {
        title: "Sample Post Title 1",
        description: "This is a sample post description 1.",
        owner: {
          userName: "John Doe",
          avatar: "https://via.placeholder.com/40",
        },
        media: "https://via.placeholder.com/500x300",
       
        _id: "post1",
      },
      {
        title: "Sample Post Title 2",
        description: "This is a sample post description 2.",
        owner: {
          userName: "Jane Smith",
          avatar: "https://via.placeholder.com/40",
        },
        media: "https://via.placeholder.com/500x300",
        _id: "post2"
      },

    {
      title: "Sample Post Title 3",
      description: "This is a sample post description 3.",
      owner: {
        userName: "User 3",
        avatar: "https://via.placeholder.com/40",
      },
      media: "https://via.placeholder.com/500x300",
      _id: "post3"
    },
      // Add more posts as needed
    ];
  
    return posts;
  };
  
  export default PostData;
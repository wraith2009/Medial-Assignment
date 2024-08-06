const PostData = () => {
    const posts = [
      {
        title: "Sample Post Title 1",
        description: "This is a sample post description 1.",
        owner: {
          userName: "John Doe",
          avatar: "https://via.placeholder.com/40",
        },
        media: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fletsenhance.io%2F&psig=AOvVaw2fTVzDNY-peGMlccLi2TnP&ust=1723038555052000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCNjUpvnA4IcDFQAAAAAdAAAAABAE",
       
        _id: "post1",
      },
      {
        title: "Sample Post Title 2",
        description: "This is a sample post description 2.",
        owner: {
          userName: "Jane Smith",
          avatar: "https://via.placeholder.com/40",
        },
        media: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fletsenhance.io%2F&psig=AOvVaw2fTVzDNY-peGMlccLi2TnP&ust=1723038555052000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCNjUpvnA4IcDFQAAAAAdAAAAABAE",
        _id: "post2"
      },

    {
      title: "Sample Post Title 3",
      description: "This is a sample post description 3.",
      owner: {
        userName: "User 3",
        avatar: "https://via.placeholder.com/40",
      },
      media: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fletsenhance.io%2F&psig=AOvVaw2fTVzDNY-peGMlccLi2TnP&ust=1723038555052000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCNjUpvnA4IcDFQAAAAAdAAAAABAE",
      _id: "post3"
    },
      // Add more posts as needed
    ];
  
    return posts;
  };
  
  export default PostData;
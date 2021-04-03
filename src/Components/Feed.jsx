import React from "react";
import "../Css/Feed.css";
import MessageSender from "./MessageSender";
import Post from "./Post";
import StoryReel from "./StoryReel";
import db from "../firebase";
const Feed = () => {
  const [posts, setPosts] = React.useState([]);

  React.useEffect(() => {
    
    db.collection("posts").orderBy("timeStamp","desc").onSnapshot((snapshot) => {
     
      setPosts(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
      
    });
  }, []);
  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />
      {posts.map((post) => {
        return (
          <Post
            profilePic={post.data.profilePic}
            image={post.data.image}
            userName={post.data.userName}
            timeStamp={post.data.timeStamp}
            message={post.data.message}
          />
        );
      })}
    </div>
  );
};

export default Feed;

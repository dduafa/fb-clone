import React, { useState, useEffect } from "react";
import StoryReel from "../storyReel/StoryReel";
import "./Feed.css";

import Post from "../post/Post";
import MessageSender from "../messageSender/MessageSender";

import { orderBy, collection, getDocs, query } from "firebase/firestore";
import db from "../../config/firebase";

const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fromFirestore = async () => {
      const postsRef = collection(db, "posts");
      const orderedPostsQuery = query(postsRef, orderBy("timestamp", "desc"));
      const querySnapshot = await getDocs(orderedPostsQuery);

      setPosts(
        querySnapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
      );
    };
    fromFirestore();
  }, [posts]);

  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />
      {posts &&
        posts.map((post) => (
          <Post
            key={post.id}
            profilePic={post.data.profilePic}
            message={post.data.message}
            image={post.data.image}
            username={post.data.username}
            timestamp={post.data.timestamp}
          />
        ))}
    </div>
  );
};

export default Feed;

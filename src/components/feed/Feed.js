import React from 'react';
import StoryReel from '../storyReel/StoryReel';
import './Feed.css';

import Post from '../post/Post';
import MessageSender from '../messageSender/MessageSender';
const Feed = () => {
    return (
        <div className="feed">
            <StoryReel />
            <MessageSender />

            <Post 
                profilePic='https://i.picsum.photos/id/1011/5472/3648.jpg?hmac=Koo9845x2akkVzVFX3xxAc9BCkeGYA9VRVfLE4f0Zzk'
                message='Some message'
                image='https://i.picsum.photos/id/101/200/300.jpg?hmac=xUDvORQTxaML0fp9wnx4y6LIHvc7M-tNcOJz8rDLRXo'
                username='David' 
                timestamp='timesapm'
            />
        </div>
    )
}

export default Feed

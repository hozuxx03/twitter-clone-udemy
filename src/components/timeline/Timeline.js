import React from 'react';
import "./Timeline.css";
import Post from './Post';
import TweetBox from './TweetBox';

function Timeline() {
    return (
    <div className='timeline'>
        {/* Header */}
        <div className='timeline--header'>
            <h2>ホーム</h2>
        </div>
        {/* TweetBox */}
        <TweetBox/>
        {/* Post */}
        <Post
            displayName = "プログラミングチュートリアル"
            username = "Shin_Engineer"
            verified= {true}
            text="初めてのツイート"
            avatar="https://shincode.info/wp-content/uploads/2021/12/icon.png"
            image="https://source.unsplash.com/random"
            />
        {/* Post */}
        {/* Post */}
        {/* Post */}
        {/* Post */}
        {/* Post */}
    </div>
    );
};

export default Timeline;

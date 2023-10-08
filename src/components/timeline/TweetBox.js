import { Avatar, Button } from '@mui/material';
import React, { useState } from 'react';
import "./TweetBox.css";

function TweetBox() {

    const [tweetMessage, setTweetMessage] = useState("");
    const [tweeImage, setTweetImage] = useState("");

    const sendTweet = (e) => {
        // firebaseのデータベースにデータを追加する
    };
    

    return (
    <div className='tweetBox'>
        <form>
            <div className='tweetBox--input'>
                <Avatar />
                <input placeholder='いまどうしてる？'
                    type='text'
                    onChange={(e) => setTweetMessage(e.target.value)}>
                </input>
            </div>
            <input className='tweetBox--imageInput'
                placeholder='画像のURLを入力してください'
                type='text'
                onChange={(e) => setTweetImage(e.target.value)}>
            </input>
            <Button className='tweetBox-tweetButton'
                    type='submit'
                    onClick={sendTweet}>
                    ツイートする
            </Button>
        </form>
    </div>
  );
};

export default TweetBox;

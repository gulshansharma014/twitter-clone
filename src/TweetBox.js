import React, {useState} from 'react'
import './TweetBox.css'
import { Avatar, Button } from '@material-ui/core'
import PhotoIcon from '@material-ui/icons/Photo';
import GifIcon from '@material-ui/icons/Gif';
import PollIcon from '@material-ui/icons/Poll';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import db from './firebase'


function TweetBox() {

    const [tweetMessage, settweetMessage] = useState("");
    const [tweetImage, setTweetImage] = useState("");

    const sendTweet = (e) =>{
        e.preventDefault();

        db.collection("posts").add({
            displayName: "Gulshan Kumar",
            userName: "@Gulshhaan",
            verified: true,
            text: tweetMessage,
            image: tweetImage,
            avatar: "https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png"
        });

        settweetMessage("");
        setTweetImage("");
    };


    return (
        <div class="tweetbox">

            <form>
                <div class="tweetbox_input">
                    <Avatar src="https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png" />
                    <input onChange={(e) => settweetMessage(e.target.value)} value={tweetMessage} placeholder="What's happening?" type="text" />

                </div>

                <input onChange={(e) => setTweetImage(e.target.value)} value={tweetImage} className="tweetbox_imageInput" placeholder="Optional: enter an image url" />
                <div class="tweetbox_downicons">
                    <div class="tweetbox_downiconsEmojis">
                        <PhotoIcon />
                        <GifIcon />
                        <PollIcon />
                        <EmojiEmotionsIcon />
                    </div>


                    <Button onClick={sendTweet} type="submit" className="tweetbox__tweetButton">Tweet</Button>
                </div>

            </form>

        </div>
    )
}

export default TweetBox

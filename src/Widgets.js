import React from 'react'
import './Widgets.css'
import SearchIcon from '@material-ui/icons/Search';
import {
    TwitterTimelineEmbed,
    TwitterShareButton,
    TwitterTweetEmbed,
} from "react-twitter-embed";

function Widgets() {
    return (
        <div class="widgets">

            <div class="widgets_input">
                <SearchIcon className="widgets_searchchIcon" />
                <input placeholder="Seach Twitter" type="text" />
            </div>

            <div class="widgets_container">
                <h2>What's happening</h2>

                <TwitterTweetEmbed tweetId={"852566441115213826"} />
                <TwitterTimelineEmbed
                    sourceType="profile"
                    screenName="Gulshhaan"
                    options={{ height: 400 }}
                />
                <TwitterShareButton
                    url={"https://facebook.com/gulshankumar"}
                    options={{ text: "#reactjs is awesome", via: "Gulshhaan" }}
                />
            </div>
        
        </div >
    )
}

export default Widgets

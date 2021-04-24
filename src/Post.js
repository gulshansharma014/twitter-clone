import React, { forwardRef } from 'react'
import './Post.css'
import { Avatar } from '@material-ui/core'
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";

const Post = forwardRef(({
    displayName,
    userName,
    verified,
    avatar,
    text,
    image
}, ref) => {
    return (
        <div class="post">
            <div class="post_avatar">
                <Avatar src={avatar}/>
            </div>
            <div class="post_body">
                <div class="post_header">
                    <div class="post_headerText">
                        <h3>
                            {displayName}<span class="post_headerspecial">
                                {verified && <img src="https://cpng.pikpng.com/pngl/s/16-169541_open-verified-account-twitter-icon-clipart.png" class="post_badge" alt="verified"/>}
                                {userName}
                            </span>
                        </h3>
                    </div>
                    <div class="post_headerDescription">
                        <p>{text}</p>
                    </div>
                    <div class="post_image">
                        <img src={image} />
                    </div>
                </div>
                <div class="post_footer">
                    <ChatBubbleOutlineIcon fontSize="small" />
                    <RepeatIcon fontSize="small"/>
                    <FavoriteBorderIcon fontSize="small"/>
                    <PublishIcon fontSize="small"/>
                </div>

            </div>
            
        </div>
    );
});

export default Post

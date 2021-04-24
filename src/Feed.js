import React, { useState, useEffect } from 'react'
import './Feed.css'
import TweetBox from './TweetBox'
import Post from './Post'
import db from './firebase'
import FlipMove from "react-flip-move";
import StarBorderIcon from '@material-ui/icons/StarBorder';

function Feed() {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection("posts").onSnapshot((snapshot) =>
            setPosts(snapshot.docs.map((docs) => docs.data()))
        );
    }, []);
    //console.log(posts);
    return (
        <div class="feed">
            {/*Header*/}
            <div class="feed_header">
                <h2>Home</h2>
                <StarBorderIcon className="feed_headerHome"/>
            </div>

            {/*TweetBox*/}
            <TweetBox />

            {/*Post*/}

            <FlipMove>
                {posts.map(posts => (
                    <Post key={posts.text} displayName={posts.displayName} userName={posts.userName} verified={posts.verified} avatar={posts.avatar} text={posts.text} image={posts.image}
                    />
                )
                )}
            </FlipMove>


        </div>
    )
}

export default Feed

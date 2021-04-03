import { Avatar } from "@material-ui/core";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ChatBubbleOutlinedIcon from "@material-ui/icons/ChatBubbleOutlined";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import NearMeIcon from "@material-ui/icons/NearMe";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import React from "react";
import "../Css/Post.css";
const Post = ({ profilePic, image, userName, timeStamp, message }) => {
  return (
    <div className="post">
      <div className="post__top">
        <Avatar src={profilePic} className="post__avatar" />
        <div className="postTop__info">
          <h3>{userName}</h3>
          <p>{new Date(timeStamp?.toDate()).toUTCString()}</p>
        </div>
      </div>
      {/*  */}
      <div className="post__bottom">{message}</div>
      <div className="post__image">
        <img src={image} alt="name" />
      </div>
      <div className="post__options">
        <div className="post__option">
          <ThumbUpIcon />
          <p>Like</p>
        </div>
        <div className="post__option">
          <ChatBubbleOutlinedIcon />
          <p>Comment</p>
        </div>
        <div className="post__option">
          <NearMeIcon />
          <p>Share</p>
        </div>
        <div className="post__option">
          <AccountCircleIcon />
          <ExpandMoreIcon />
        </div>
      </div>
    </div>
  );
};

export default Post;

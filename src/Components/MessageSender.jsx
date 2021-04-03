import { Avatar } from "@material-ui/core";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import VideocamIcon from "@material-ui/icons/Videocam";
import React from "react";
import "../Css/MessageSender.css";
import db from '../firebase';
import firebase from 'firebase';
import {useStateValue} from '../StateProvider';

// ------ //

const MessageSender = () => {
  const [{user}] = useStateValue();
  const [input, setInput] = React.useState("");
  const [imageUrl, setImageUrl] = React.useState("");

  // --------- //
  const handleSubit = (e) => {
    e.preventDefault();
    // db.collection('posts').add({
    //   message: input,
    //   timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
    //   profilePic: user.photoURL,
    //   userName: user.displayName,
    //   image: imageUrl,
    // });
    setInput("");
    setImageUrl("");
  };
  // -------- //
  return (
    <div className="messageSender">
      <div className="messageSender__top">
        <Avatar src={user.photoURL}/>
        <form>
          <input
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
            }}
            className="messageSender__input"
            placeholder={`What's on your mind ${user.displayName}?`}
          />
          <input
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            placeholder="image url (Optional)"
          />
          <button onClick={handleSubit} type="submit">
            Hidden Submit
          </button>
        </form>
      </div>
      <div className="messageSender__bottom">
        <div className="messageSender__option">
          <VideocamIcon style={{ color: "red" }} />
          <h3>Live Video</h3>
        </div>
        <div className="messageSender__option">
          <PhotoLibraryIcon style={{ color: "green" }} />
          <h3>Photo/Video</h3>
        </div>
        <div className="messageSender__option">
          <InsertEmoticonIcon style={{ color: "orange" }} />
          <h3>Feeling/Activity</h3>
        </div>
      </div>
    </div>
  );
};

export default MessageSender;

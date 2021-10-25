import {
  addDoc,
  collection,
  onSnapshot,
  orderBy,
  serverTimestamp,
  query,
  setDoc,
  doc,
} from "@firebase/firestore";
import nextId from "react-id-generator";
import {
  BookmarkIcon,
  ChatIcon,
  DotsHorizontalIcon,
  EmojiHappyIcon,
  HeartIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/outline";
import { HeartIcon as HeartIconFilled } from "@heroicons/react/solid";
import { db } from "../firebase";
import { useState, useEffect } from "react";
import Moment from "react-moment";
function Post({ username, userImg, caption, img, id }) {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");
  const [hasLiked, setHasLiked] = useState(false);

  const likePost = () => {
    setHasLiked(!hasLiked);
    console.log(hasLiked);
  };

  useEffect(() => {
    onSnapshot(
      query(
        collection(db, "posts", id, "comments"),
        orderBy("timestamp", "desc")
      ),
      (snapshot) => {
        setComments(snapshot.docs);
      }
    );
  }, [db, id]);
  console.log(comments);

  const sendComment = async (e) => {
    e.preventDefault();
    const commentToSend = comment;
    setComment("");
    await addDoc(collection(db, "posts", id, "comments"), {
      comment: commentToSend,
      username: "John Doe",
      userImage:
        "https://i.pinimg.com/236x/0f/8a/8a/0f8a8ad94bf9f7ae8ed451abcfea191d.jpg",
      timestamp: serverTimestamp(),
    });
  };
  return (
    <div className='bg-white my-7 border rounded-sm shadow-sm'>
      {/* Header */}

      <div className='flex items-center p-5'>
        <img
          src={userImg}
          alt={username}
          className='h-12 w-12 rounded-full object-contain border p-1 mr-3'
        />
        <p className='flex-1 font-bold text-sm'>{username}</p>
        <DotsHorizontalIcon className='h-5 cursor-pointer' />
      </div>
      {/* image post */}
      <img src={img} alt={username} className='object-cover w-full' />

      {/* Buttons */}
      <div className='flex justify-between items-center px-4 pt-5'>
        <div className='flex space-x-4'>
          {hasLiked ? (
            <HeartIconFilled onClick={likePost} className='btn text-red-500' />
          ) : (
            <HeartIcon onClick={likePost} className='btn ' />
          )}
          <ChatIcon className='btn' />
          <PaperAirplaneIcon className='btn r' />
        </div>
        <BookmarkIcon className='btn' />
      </div>
      {/* caption */}
      <p className='p-5 truncate'>
        <span className='font-bold mr-2 text-sm'>{username}</span>
        {caption}
      </p>
      {/* comments */}
      {comments.length > 0 && (
        <div className='ml-8 h-20 overflow-y-scroll scrollbar-thumb-gray-300 scrollbar-thin'>
          {comments.map((comment) => (
            <div key={comment.id} className='flex items-center space-x-2 mb-3'>
              <img
                src={comment.data().userImage}
                className='h-7 rounded-full'
              />
              <p className='text-sm flex-1'>
                <span className='font-bold'>{comment.data().username}</span>{" "}
                {comment.data().comment}
              </p>
              <Moment fromNow className='pr-5 text-sm'>
                {comment.data().timestamp?.toDate()}
              </Moment>
            </div>
          ))}
        </div>
      )}
      {/* input */}
      <form className='flex items-center p-4'>
        <EmojiHappyIcon className='h-7' />
        <input
          type='text'
          className='border-none focus:ring-0 flex-1 outline-none text-sm'
          placeholder='Add a comment...'
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <button
          className='font-semibold text-blue-400'
          type='submit'
          disabled={!comment.trim()}
          onClick={sendComment}
        >
          Post
        </button>
      </form>
    </div>
  );
}

export default Post;

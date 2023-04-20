import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const UserPost = () => {
  const location = useLocation();
  const userId = location.state.id;

  const [post, setPost] = useState([]);
  const [postId, setPostId] = useState([]);
  const [comment, setComment] = useState([]);
  const [counter, setCounter] = useState(5);

  const getPost = async () => {
    const postFetch = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    const ans = await postFetch.json();
    setPost(ans);
  };

  const getComment = async (postId) => {
    setPostId(postId);
    const commentFetch = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
    );
    const cmt = await commentFetch.json();
    setComment(cmt);
  };
  useEffect(() => {
    getPost();  
  }, []);

  return (
    <>
      <div className="flex flex-wrap content-start">
        {post
          .filter((post) => post.userId == userId)
          .slice(0, counter)
          .map((cur) => (
            <div className="card border m-2 w-[400px]" key={cur.id}>
              <h1 className="bg-slate-400 p-2"> {cur.title}</h1>
              <p className="p-2">{cur.body}</p>
              <div className="p-2">
                Comments{" "}
                <button
                  onClick={() => {
                    getComment(cur.id);
                  }}
                >
                  &#128065;
                </button>
              </div>

              {(cur.id===postId) ? (
                <div className="flex flex-wrap">
                  {comment.map((cur) => (
                    <div className="border w-1/2" key={cur.id}>
                      <h1 className="bg-slate-300">{cur.email}</h1>
                      <h4 className="bg-orange-100">{cur.name}</h4>
                      <p>{cur.body}</p>
                    </div>
                  ))}
                </div>
              ) : (
                ""
              )}
            </div>
          ))}
      </div>
      <button
        onClick={() => {
          setCounter(counter + 5);
        }}
        className="px-8 py-3 bg-green-500 hover:bg-green-600 text-white rounded-full"
      >
        Load more...
      </button>
    </>
  );
};

export default UserPost;

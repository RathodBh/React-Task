import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const UserPost = () => {
  const location = useLocation();
  const userId = location.state.id;

  const [post, setPost] = useState([]);
  const [counter, setCounter] = useState(5);

  const getPost = async () => {
    const postFetch = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    const ans = await postFetch.json();
    setPost(ans);
  };

  const getComment = async (postId) => {
    let checkPost = post.find((p) => postId === p.id && "show" in p);
   
    if (checkPost) {
      checkPost.show = !checkPost.show;
      setPost(post.map((obj) => (obj.id === postId ? checkPost : obj)));
    } else {
      const postFetch = await fetch(
        `https://jsonplaceholder.typicode.com/posts`
      );
      const ans = await postFetch.json();

      const commentFetch = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
      );
      const cmt = await commentFetch.json();

      const cPost = ans.find((p) => postId === p.id);
      cPost.comments = cmt;
      cPost.show = true;

      const cPostArr = [cPost];

      setPost(post.map((obj) => cPostArr.find((c) => c.id === obj.id) || obj));
    }
  };

  useEffect(() => {
    getPost();
  }, []);

  return (
    <>
      <Link to="/user" className="underline-none all-center">
        <ArrowBackIcon></ArrowBackIcon>
      </Link>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 10, padding: 20 }}>
        {post
          .filter((post) => post.userId === userId)
          .slice(0, counter)
          .map((cur) => (
            <Card sx={{ minWidth: 275, maxWidth: 300 }} key={cur.id}>
              <CardContent>
                <Typography variant="h4" component="div">
                  {cur.title}
                </Typography>
                <Typography variant="body2">{cur.body}</Typography>
                <Typography
                  sx={{ mb: 1.5 }}
                  color="text.secondary"
                ></Typography>
              </CardContent>
              <CardActions>
                <Button
                  variant="outlined"
                  color="success"
                  onClick={() => {
                    getComment(cur.id);
                  }}
                >
                  Comments &#128065;
                </Button>
              </CardActions>
              {cur?.show === true ? (
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 10,
                    padding: 20,
                  }}
                >
                  {cur.comments.map((cur) => (
                    <div className="" key={cur.id}>
                      <Typography variant="h6" sx={{ mb: 1.5 }}>
                        {cur.email}
                      </Typography>
                      <Typography sx={{ mb: 1.5 }}>{cur.body}</Typography>
                    </div>
                  ))}
                </div>
              ) : (
                <></>
              )}
            </Card>
          ))}
      </div>

      <Button
        variant="outlined"
        color="primary"
        style={{ margin: 20 }}
        onClick={() => {
          setCounter(counter + 5);
        }}
        className="px-8 py-3 bg-green-500 hover:bg-green-600 text-white rounded-full"
      >
        Load more...
      </Button>
    </>
  );
};

export default UserPost;

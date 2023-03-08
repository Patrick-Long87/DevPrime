import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import { NavBar } from "./Components/navbar.component";
import { Posts } from "./Components/posts.component";
import { Home } from "./pages/Home";
import { Post } from "./pages/Post";
import { Profile } from "./pages/Profile";
import { PostsProvider } from "./context/posts.context";
import { UsersProvider } from "./context/users.context";
import { CommentsProvider } from "./context/comments.context";
function App() {
  return (
    <PostsProvider>
      <UsersProvider>
        <CommentsProvider>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Post" element={<Post />} />
            <Route path="/Profile" element={<Profile />} />
          </Routes>
        </CommentsProvider>
      </UsersProvider>
    </PostsProvider>
  );
}

export default App;

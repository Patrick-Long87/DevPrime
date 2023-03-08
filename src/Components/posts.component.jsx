import { usePosts } from "../context/posts.context";
import { useUsers } from "../context/users.context";
import { useComments } from "../context/comments.context";

export function Posts() {
  const { posts } = usePosts();
  const { users } = useUsers();
  const { comments } = useComments();

  return (
    <div>
      {posts.map((post) => {
        return (
          <div key={post.id}>
            <h2>{post.title}</h2>
            <h5>{post.author}</h5>
            <p>{post.body}</p>
          </div>
        );
      })}
      {users.map((user) => {
        return (
          <div key={user.id}>
            <h2>Author</h2>
            <p>{user.displayName}</p>
          </div>
        );
      })}
      {comments.map((comment) => {
        return (
          <div key={comment.id}>
            <h2>{comment.title}</h2>
            <p>{comment.body}</p>
          </div>
        );
      })}
    </div>
  );
}

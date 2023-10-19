import { useCallback, useEffect, useState } from "react";
import { api } from "../../lib/axios";
import { Post } from "./components/Post";
import { Profile } from "./components/Profile";
import { SearchInput } from "./components/SearchInput";
import { PostsListContainer } from "./styled";
import { Spinner } from "../../components/Spinner";

const username = import.meta.env.VITE_GITHUB_USERNAME;
const reponame = import.meta.env.VITE_GITHUB_REPONAME;

export interface IPost {
  title: string;
  body: string;
  created_at: string;
  number: number;
  html_url: string;
  comments: number;
  user: {
    login: string;
  };
}

export function Home() {
  const [posts, setPosts] = useState<IPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const getPosts = useCallback(async (query: string = "") => {
    try {
      setIsLoading(true);
      const response = await api.get(
        `/search/issues?q=${query}%20repo:${username}/${reponame}`
      );

      setPosts(response.data.items);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <>
      <Profile />
      <SearchInput postsLength={posts.length} getPosts={getPosts} />
      {isLoading ? (
        <Spinner />
      ) : (
        <PostsListContainer>
          {posts.map((post) => (
            <Post key={post.number} post={post} />
          ))}
        </PostsListContainer>
      )}
    </>
  );
}

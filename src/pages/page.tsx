import { PostData } from "@/domain/posts/post";
import { GetStaticProps } from "next";

const getPosts = async (): Promise<PostData[]> => {
  const posts = await fetch(
    "http://localhost:1337/api/posts"
  );
  const jsonPosts = await posts.json();
  return jsonPosts;
};

export type PostProps = {
  posts: PostData[];
};

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getPosts();

  return {
    props: { posts },
  };
};

import { ReactElement } from "react";
import Head from "next/head";
import { PostCard, Categories, PostWidget } from "../../components";
import { getPosts } from "../../services";
import { FeaturedPosts } from "../../sections";
import { Key } from "react";
import BlogLayout from "../../components/BlogLayout";

export default function Home({ posts }: { posts: any }) {
  return (
    <div className="container mx-auto px-10 mb-8">
      <Head>
        <title>BONX Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <FeaturedPosts />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1">
          {posts.map((post: { node: any; title: Key | null | undefined }) => (
            <PostCard post={post.node} key={post.title} />
          ))}
        </div>
        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-8">
            {/* categories and slug below were a quick fix suggestion. Not sure about them */}
            <PostWidget categories={undefined} slug={undefined} />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const posts = (await getPosts()) || [];

  return {
    props: { posts },
  };
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <BlogLayout>{page}</BlogLayout>;
};

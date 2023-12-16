import { FC } from "react";
import { BlogLayout } from "@github20k/components/blog/blog.layout";
import Link from "next/link";
import { Details } from "@github20k/services/blog/blog.interface";
import ReactHtmlParser from "react-html-parser";
import Head from "next/head";
import { TwitterWidget } from "@github20k/helpers/twitter.widget";
import dayjs from "dayjs";
import {NextSeo} from "next-seo";

export const BlogPostComponent: FC<{
  stargazers_count: number;
  blog: Details;
}> = (props) => {
  const { stargazers_count, blog } = props;

  return (
    <>
      <NextSeo
          title={process.env.COURSE_NAME! + ' Blog - ' + blog.title}
          description={`Blog - ${blog.title}`}
          canonical={process.env.COURSE_URL + '/blog/' + blog.slug}
          openGraph={{
            url: process.env.COURSE_URL,
            title: process.env.COURSE_NAME,
            description: 'Learn the best tips and trick to grow your GitHub library',
            images: [{
              url: process.env.COURSE_URL + "/github-blog.png", width: 1200, height: 630, alt: process.env.COURSE_NAME, type: "image/png",
            }],
            siteName: process.env.COURSE_NAME,
          }}
          twitter={{
            handle: "@nevodavid", site: "@nevodavid", cardType: "summary_large_image",
          }}
      />
      <BlogLayout stargazers_count={stargazers_count} image={blog.picture}>
        <div className="flex items-center mb-4">
          <Link href="/blog" className="text-white hover:underline">
            &larr; Back to Blog
          </Link>
        </div>
        <div className="flex items-center mb-4">
          <img
            className="w-12 h-12 object-cover rounded-full mr-4"
            src={blog.author.picture}
            alt={blog.author.name}
          />
          <div>
            <h1 className="text-white text-4xl font-semibold mb-1">
              {blog.title}
            </h1>{" "}
            <p className="mb-2 mt-2 text-sm">{dayjs.unix(blog.publish_date).format('MMMM D, YYYY')}</p>
            {/* Add title here */}
            <p className="text-gray-500">{blog.author.name}</p>{" "}
            {/* Add author name here */}
          </div>
        </div>
        <TwitterWidget
          active={blog.description.indexOf(`class="twitter-tweet"`) > -1}
        >
          <div
            className="prose max-w-none blog-container"
            dangerouslySetInnerHTML={{ __html: blog.description.replace(/<h1/, '<h2').replace(/<\/h1>/, '<\/h2>') }}
          />
        </TwitterWidget>
      </BlogLayout>
    </>
  );
};

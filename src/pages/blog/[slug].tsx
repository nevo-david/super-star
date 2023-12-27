import { getGithubStars } from "@github20k/helpers/get.github.stars";
import { BlogPostComponent } from "@github20k/components/blog/blog.post.component";
import { blogService } from "@github20k/services/blog/blog.service";
import {Details} from "@github20k/services/blog/blog.interface";
import {JSDOM} from "jsdom";

export default function Index(props: { stargazers_count: number, blog: Details }) {
  return <BlogPostComponent stargazers_count={props.stargazers_count} blog={props.blog} />;
}

export async function getStaticPaths() {
  const load = await blogService.getPostList();
  return {
    paths: load.map((p: Details) => ({ params: { slug: p.slug } })),
    fallback: 'blocking',
  };
}

export async function getStaticProps(props: { params: { slug: string } }) {
  const blog = await blogService.getPost(props.params.slug);
  const description = new JSDOM(blog.description.replace(/<h1/, '<h2').replace(/<\/h1>/, '<\/h2>'));
  const findAllH = description.window.document.querySelectorAll('h1, h2, h3, h4, h5, h6');
  const middleH = Math.ceil(findAllH.length / 2);
  const div = description.window.document.createElement('div');

  const parentOfH = findAllH[middleH]?.parentElement!;
  const parentparentOfH = parentOfH.parentElement;

  div.id = 'register-newsletter';
  parentparentOfH?.insertBefore(div, parentOfH);
  blog.description = description.serialize();
  return {
    props: {
      ...(await getGithubStars()),
      blog,
    }, // will be passed to the page component as props
    revalidate: 3600
  };
}

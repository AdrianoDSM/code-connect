import logger from "@/logger";
import { remark } from "remark";
import html from "remark-html";
import styles from './page.module.css';
import { CardPost } from "@/components/CardPost";

async function GetPostsBySlug(slug: string) {
  const url = `http:/localhost:3042/posts?slug=${slug}`;
  const res = await fetch(url);
  if (!res.ok) {
    logger.error("Ops, alguma coisa correu mal");
    return {};
  }
  logger.info("Posts obtidos com sucesso");
  const data = await res.json();
  if (data.length == 0) {
    return {};
  }

  const post = data[0];

  const processedContent = await remark().use(html).process(post.markdown);
  const contentHtml = processedContent.toString();

  post.markdown = contentHtml;

  return post;
}

const PagePost = async ({ params }: any) => {
  const slug = params.slug;
  const post = await GetPostsBySlug(slug);
  return (
    <div>
      <CardPost post={post} highlight />
      <h3 className={styles.subtitle}>Código</h3>
      <div className={styles.code}>
        <div dangerouslySetInnerHTML={{__html: post.markdown}}/>
      </div>
    </div>
  );
};

export default PagePost;

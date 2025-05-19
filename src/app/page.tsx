import { CardPost } from "@/components/CardPost";
import logger from "@/logger";
import Link from "next/link";
import styles from './page.module.css'
 
async function getAllPosts (page: string) {
  const res = await fetch(`http://localhost:3042/posts?_page=${page}&_per_page=6`)
  if(!res.ok) {
    logger.error('Ops, alguma coisa correu mal')
  }
  logger.info('Posts obtidos com sucesso!')
  return res.json()
}

export default async function Home({searchParams}: any) {
  const currentPage = searchParams?.page || 1 
  const { data: posts, prev, next } = await getAllPosts(currentPage)
  return (<main className={styles.grid}>
      {posts.map((post: any) =>  <CardPost key={post.id} post={post} />)}
      <div className={styles.links}>
        {prev && <Link href={`/?page=${prev}`}>Página anterior</Link>}
        {next && <Link href={`/?page=${next}`}>Próxima página</Link>}
      </div>
    </main>)
    ;
}

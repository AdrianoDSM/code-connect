import { CardPost } from "@/components/CardPost";
import logger from "@/logger";
import Link from "next/link";
import styles from './page.module.css'
import db from '../../prisma/db'
 
async function getAllPosts (page: any, search: any) {
  try {

    const where: any = {}

    if(search) {
      where.title = {
        contains: search,
        mode: 'insensitive'
      }
    }

    const perPage = 4;
    const skip = (page - 1) * perPage;
    const totalItems = await db.post.count({where})
    const totalPages = Math.ceil(totalItems / perPage)
    const prev = page > 1 ? page - 1 : null
    const next = page < totalPages ? page + 1 : null

    const posts = await db.post.findMany({
      take: perPage,
      skip,
      where,
      orderBy: {createdAt: 'desc'},
      include: {
        author: true
      }
    })

    return { data: posts, prev, next }
  } catch (error) {
    logger.error('Falha ao obter posts', { error })
    return {data: [], prev: null, next: null}
  }
}

export default async function Home({searchParams}: any) {
  const currentPage = parseInt(searchParams?.page || 1) 
  const search = searchParams.q
  const { data: posts, prev, next } = await getAllPosts(currentPage, search)
  
  return (<main className={styles.grid}>
      {posts.map((post: any) =>  <CardPost key={post.id} post={post} />)}
      <div className={styles.links}>
        {prev && <Link href={{pathname: '/', query: { page: prev, q: search}}}>Página anterior</Link>}
        {next && <Link href={{pathname: '/', query: { page: next, q: search}}}>Próxima página</Link>}
      </div>
    </main>)
    ;
}

import { CardPost } from "@/components/CardPost";
import logger from "@/logger";
import Link from "next/link";

const post = {
  id: 1,
  cover:
    "https://raw.githubusercontent.com/viniciosneves/code-connect-assets/main/posts/introducao-ao-react.png",
  title: "Introdução ao React",
  slug: "introducao-ao-react",
  body: "Neste post, vamos explorar os conceitos básicos do React, uma biblioteca JavaScript para construir interfaces de usuário. Vamos cobrir componentes, JSX e estados.",
  markdown: "```javascript\nfunction HelloComponent() {\n  return <h1>Hello, world!</h1>;\n}\n```",
  author: {
    id: 101,
    name: "Ana Beatriz",
    username: "anabeatriz_dev",
    avatar: "https://raw.githubusercontent.com/viniciosneves/code-connect-assets/main/authors/anabeatriz_dev.png",
  },
};
 
async function getAllPosts (page: any) {
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
  return <main className="content-area">
    <div className="grid">
      {posts.map((post: any) => <CardPost key={post.id} post={post}/>)}
    </div>
    <div className="pagination-nav">
      {prev && <Link className="link" href={`/?page=${prev}`}> Página anterior</Link>}
      {next && <Link className="link" href={`/?page=${next}`}> Próxima página</Link>}
    </div>
  </main>;
}

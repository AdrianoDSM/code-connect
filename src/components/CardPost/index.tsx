import Image from "next/image"
import { Avatar } from "../Avatar"
import styles from './card.module.css'

export const CardPost = ({ post }: any) => {
    return (
        <article className={styles.card}>
            <header className={styles.header}>
                <figure>
                    <Image
                        className={styles.image}
                        src={post.cover}
                        width={438} 
                        height={133} 
                        alt={`Capa do post de titulo: ${post.title}`}
                    />
                </figure>
            </header>
            <section className={styles.section}>
                <h2>{post.title}</h2>
                <p>{post.body}</p>
            </section>
            <footer className={styles.footer}>
                <Avatar 
                    imageSrc={post.author.avatar} 
                    name={post.author.username}
                />
            </footer>
        </article>
    )
}
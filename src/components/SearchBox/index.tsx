import { Button } from '../Button'
import styles from './searchbox.module.css'

export const SearchBox = () => {
    return (
        <form className={styles.form}  action='/'>
            <input
                name="q"
                className={styles.input}
                placeholder="Digite o que você procura"
            />
            <Button>
                Buscar
            </Button>
        </form>
    )
}
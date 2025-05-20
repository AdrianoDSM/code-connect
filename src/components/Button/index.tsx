import styles from './button.module.css'

export const Button = ({children}: any) => {
    return <button className={styles.btn}>
        {children}
    </button>
}
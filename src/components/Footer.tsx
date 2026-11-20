
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <p>
                <span>Todo App React + TS</span> @ {new Date().getFullYear()}
            </p>
        </footer>
    )
}

export default Footer

// CSS
import styles from './Modal.module.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

interface Props {
    children: React.ReactNode
}

const Modal = ({ children }: Props) => {
    const closeModal = (): void => {
        const modal = document.querySelector("#modal")
        modal!.classList.add("hide")
    }
    return (
        <div id="modal" className='hide'>
            <div className={styles.fade}></div>
            <div className={styles.modal}>
                <button
                    type="button"
                    className={styles.close}
                    aria-label="Fechar"
                    onClick={closeModal}
                >
                    <i className="bi bi-x-lg" aria-hidden="true"></i>
                </button>
                <h2>Conteudo Modal</h2>
                {children}
            </div>
        </div>
    )
}

export default Modal

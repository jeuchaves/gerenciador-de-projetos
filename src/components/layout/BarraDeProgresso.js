import styles from './BarraDeProgresso.module.css';

function BarraDeProgresso({ name, percent }) {
    return (
        <div className={styles.barra}>
            <div className={styles.barra__header}>
                <h3>{name}</h3>
                <span>{percent}%</span>
            </div>
            <div className={styles.progresso}>
                <div style={{width: percent + "%"}}></div>
            </div>
        </div>
    )
}

export default BarraDeProgresso;
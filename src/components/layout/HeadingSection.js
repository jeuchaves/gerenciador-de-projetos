import styles from './HeadingSection.module.css'

function HeadingSection({ titulo }) {
    return (
        <div className={styles.st_heading}>
            <h4>{titulo}</h4>
        </div>
    )
}

export default HeadingSection;
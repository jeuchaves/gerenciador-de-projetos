import styles from './IconContent.module.css';

function IconContent({ title, text, icon, visibleContent }) {

    return (
        <div className={styles.group_icon}>
            <div className={styles.icon}>
                {icon}
            </div>
            {visibleContent && (
                <div className={styles.icon_content}>
                    <h4>{title}</h4>
                    <p>{text}</p>
                </div>
            )}
        </div>
    )
}

IconContent.defaultProps = {
    visibleContent: true
}

export default IconContent;
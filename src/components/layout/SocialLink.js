import styles from './SocialLink.module.css'

function SocialLink({link, name, icon, isActive, onHover}) {

    const handleMouseEnter = () => {
        onHover(true)
    }

    const handleMouseLeave = () => {
        onHover(false)
    }
    
    return (
        <a 
            onMouseEnter={handleMouseEnter} 
            onMouseLeave={handleMouseLeave}
            href={link} 
            className={`${styles.st_social_btn} ${isActive ? styles.active : ''}`}
        >
            <span className={styles.st_social_icon}>{icon}</span>
            <span className={styles.st_social_name}>{name}</span>
        </a>
    )
}

export default SocialLink;
import styles from './SocialLinkContainer.module.css'

import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa'
import SocialLink from './SocialLink'
import { useState } from 'react'

function SocialLinkContainer() {

    const [activeLink, setActiveLink] = useState('Instagram')

    const handleHover = (name) => {
        setActiveLink(name)
    }

    return (
        <div className={styles.st_social_group}>
            <div className={styles.st_social_link}>
                <SocialLink href="#" name="Instagram" icon={<FaInstagram />} isActive={activeLink === 'Instagram'} onHover={() => handleHover('Instagram')} />
                <SocialLink href="#" name="Linkedin" icon={<FaLinkedin />} isActive={activeLink === 'Linkedin'} onHover={() => handleHover('Linkedin')} />
                <SocialLink href="#" name="Github" icon={<FaGithub />} isActive={activeLink === 'Github'} onHover={() => handleHover('Github')} />
            </div>
        </div>
    )
}

export default SocialLinkContainer
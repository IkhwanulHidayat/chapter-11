import styles from './footer.module.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import Link from 'next/link';



export default function Footer() {
  return (
    <div className={styles.mainFooter}>
      <div>
        <h4 className={styles.text}>WAKANDA FOREVER</h4>
        <h7 className={styles.text}>Get Some Traditional Gaming Experience With Us</h7>
      </div>
      <div>
        <Link className={styles.footerContent} href='/#'>Home</Link>
        <Link className={styles.footerContent} href='/#'>Games</Link>
        <Link className={styles.footerContent} href='/#'>About Us</Link>
      </div>
      <div className={styles.text}>
        <Link className={styles.footerIcon} href='/#'><FacebookIcon /></Link>
        <Link className={styles.footerIcon} href='/#'><InstagramIcon /></Link>
        <Link className={styles.footerIcon} href='/#'><TwitterIcon /></Link>
      </div>
    </div>
  )
}

import Image from 'next/image'
import Link from 'next/link'
import navStyles from '../styles/Nav.module.css'
import utilStyles from '../styles/utils.module.css'

const Nav = () => {
  return (
    <nav className={navStyles.nav}>
      
                <Image
                  priority
                  className={utilStyles.borderCircle}
                  src="/images/nextechcreators-logo-1.png"
                  
                  height={108}
                  width={300}
                  
                  
                />
             
      <ul>
      
        <li>
          <Link href='/'>Home</Link>
        </li>
        <li>
          <Link href='/about'>About Us</Link>
        </li>
        <li>
          <Link href='/benefit'>Benefit</Link>
        </li>
        <li>
          <Link href='/about'>Team</Link>
        </li>
        <li>
          <Link href='/about'>News</Link>
        </li>
        <li>
          <Link href='/contact'>Contact</Link>
        </li>
        
      </ul>
    </nav>
  )
}

export default Nav

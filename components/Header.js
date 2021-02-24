import headerStyles from '../styles/Header.module.css'

const Header = () => {
  return (
    <div>
      <h1 className={headerStyles.title}>
        THINK IN <span>MOTION</span> 
      </h1>
      <p className={headerStyles.description}>
        We Create. We Develop. We Inspire
      </p>
      
      
    </div>
  )
}

export default Header

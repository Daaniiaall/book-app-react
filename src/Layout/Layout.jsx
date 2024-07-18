import styles from "./Layout.module.css"

import { IoHeartOutline } from "react-icons/io5";

function Layout({children}) {
  return (
    <>
        <header className={styles.header}>
                <h3>Book APP</h3>
                <p><a href="https://github.com/Daaniiaall">Danial Momenpour</a> | React.js</p>
        </header>
        {children}
        <footer className={styles.footer}>
            <p>Developed with <IoHeartOutline /></p>
        </footer>
    </>
  )
}

export default Layout
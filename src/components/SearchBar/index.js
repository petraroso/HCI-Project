import React from 'react'
import { FaSearch } from 'react-icons/fa'
import styles from './style.module.css'

const SearchBar = () => {
    return(
        <div className={styles.container}>
            <form className={styles.form} action="/blog" method="get">
                <input type="text" name="q" className={styles.input} placeholder="Upišite traženi pojam..."></input>
                <FaSearch style={{ marginBottom: '-3px' }} className={styles.search}/>
            </form>
        </div>
    )
}

export default SearchBar
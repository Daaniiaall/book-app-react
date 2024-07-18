import { IoSearch } from "react-icons/io5";

import styles from "./SearchBox.module.css"

function SearchBox({search , setSearch , searchHandler}) {

    function searchFunction(e){
        setSearch(e.target.value.toLowerCase())
    }

  return (
    <div className={styles.search}>
        <input type="text" placeholder="search..." value={search} onChange={searchFunction}/>
        <button onClick={searchHandler}>
          <IoSearch />
        </button>
    </div>
  )
}

export default SearchBox
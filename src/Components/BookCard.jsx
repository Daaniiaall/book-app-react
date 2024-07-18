import { useState } from "react";

import styles from "./BookCard.module.css"
import { FaHeart } from "react-icons/fa6";


function BookCard({data , handleLikedList }) {
    
    const {image , title , author , language , pages } = data

    const [like , setLike]= useState(false)

    function likeHandler(){
        setLike((like) => !like)
        handleLikedList(data , like)
    }

  return (
    <div className={styles.card}>
      <img src={image} alt={title} />
    <div className={styles.info}>
      <h3>{title}</h3>
      <p>{author}</p>
      <div>
        <span>{language}</span>
        <span>{pages} pages</span>
      </div>
    </div>

    <button onClick={likeHandler}>
        <FaHeart color={like ? "red" : "white"} fontSize="1.5rem"/>
    </button>
  
    </div>
  )
}

export default BookCard
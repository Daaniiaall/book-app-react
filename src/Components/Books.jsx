import { useState } from "react"

import { books as booksData } from "../constants/mockData"
import BookCard from "./BookCard"
import SideBookCard from "./SideBookCard"
import SearchBox from "./SearchBox"

import styles from "./Books.module.css"

function Books() {

  const [books , setBooks] = useState(booksData)
  const [search , setSearch] = useState([])
  const [liked , setLiked] = useState([])
    // console.log(liked)

  function handleLikedList(likedBookData , likeStatus) {
    if(likeStatus){
      // if user remove like
      const updateLikedList = liked.filter((item)=> item.id !== likedBookData.id)
      setLiked(updateLikedList)
    }else{
      // if user liked 
      setLiked((liked)=>[...liked , likedBookData])
    }
  }

  function searchHandler(){
    // console.log(search)

    // if user fill search input => search(state) has value => search=true
    if(search){
      const searchedBook = booksData.filter( (item)=>( item.title.toLowerCase().includes(search) ) )
      setBooks(searchedBook)
    }
    else{
    // if user doesnt fill search box 
      setBooks(booksData)
      }
    }

  return (
    <>
      <SearchBox search={search} setSearch={setSearch} searchHandler={searchHandler} />

      <div className={styles.container}>
        <div className={styles.cards}>
          {books.map( (book)=>(
            <BookCard data={book} key={book.id} handleLikedList={handleLikedList}/>
          ))}
        </div>
     

     
        {liked.length > 0 && 
          <div className={styles.favorite}>
            <h4>Favorites:</h4>
            {liked.map((book)=> (<SideBookCard data={book} key={book.id} /> ))}
          </div>
        }

      </div>
     
    </>
  )
}

export default Books
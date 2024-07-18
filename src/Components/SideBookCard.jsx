import styles from "./SideBookCard.module.css"

function SideBookCard({data:{image , title}}) {
    // console.log(data)
  return (
    <div className={styles.card}>
      <img src={image} alt={title} />
      <h5>{title}</h5>
    </div>
  )
}

export default SideBookCard
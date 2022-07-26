import styles from '../../styles/Footer.module.scss'

const Footer = ({ choosePage, beers }) => {

  const pageList = Array(13).fill(0)

  if (beers.length === 0)
    return (
      <div className={styles.notFound}>
        <h1>NOT FOUND</h1>
      </div>
    )

  return (
    <div className={styles.cover}>
      {
        pageList.map((el, index) => {
          const currentPage = index + 1
          return (
            <button
              className={styles.btn}
              key={index}
              onClick={() => choosePage(currentPage)}>
              {currentPage}
            </button>
          )
        })
      }
    </div>
  )
}

export default Footer
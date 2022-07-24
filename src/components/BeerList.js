/* eslint-disable @next/next/no-img-element */
import { useRouter, withRouter } from "next/router"
import Link from "next/link"
import styles from '../../styles/BeerList.module.scss'
const Item = ({ beers, loading }) => {

  const router = useRouter()

  const goToPage = (data) => {

    router.push({
      pathname: '/beers',
      query: { data: JSON.stringify(data) }
    })
  }

  if (loading)
    return (<h1>Loading...</h1>)

  return (
    <div className={styles.cover}>
      {
        beers.map((el, index) => {
          const shortDesc = el.description.length > 140 ? el.description.substr(0, 140) + "..." : el.description
          const shortName = el.name.substr(0, 20)
          const data = JSON.stringify(el)
          return (
            <Link
              href={{
                pathname: "/beers",
                query: { data },
              }}
              key={index}

            >
              <div className={styles.card} >
                <div className={styles.cardImage}>
                  <img src={el.image_url} width={30} height={100} alt="SOS" />
                </div>
                <div className={styles.content}>
                  <div className={styles.cardContent}>
                    <span>{shortName}</span>
                  </div>
                  <div className={styles.descContent}>
                    <span>{shortDesc}</span>
                  </div>
                </div>
              </div>
            </Link>
          )
        })}
    </div>
  )
}

export default withRouter(Item)
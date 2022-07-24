/* eslint-disable @next/next/no-img-element */
import styles from "../../../styles/BeerCard.module.scss"
import { useRouter } from "next/router";
export default function BeerId({ props }) {

  const router = useRouter()
  const {
    query: { data },
  } = router

  try {
    const beer = JSON.parse(data)
 
  return (
    <div className={styles.cover}>
      <div className={styles.card}>
        <div className={styles.cardImage}>
          <img src={beer.image_url} alt="SOS" width="120%" height="100%" />
        </div>
        <div className={styles.content}>
          <div className={styles.eachRow}>
            <span>Name:</span>
            <p id={styles.beerName}>{beer.name}</p>
          </div>
          <div className={styles.eachRow}>
            <span>Description:</span>
            <p>{beer.description}</p>
          </div>
          <div className={styles.eachRow}>
            <span>Tagline:</span>
            <p>{beer.tagline}</p>
          </div>
          <div className={styles.eachRow}>
            <span>ABV:</span>
            <p>{beer.abv}</p>
          </div>
          <div className={styles.arrayRow}>
            <span>Food pairing:</span>
            <ul>
              {
                beer.food_pairing.map((el, index) => (
                  <li key={index}>
                    {el}
                  </li>
                ))
              }
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
} catch(err) {
  console.log(err)
}

}

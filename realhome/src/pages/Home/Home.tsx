import styles from './Home.module.css'
import CategoriesDisplay from '../../components/CategoriesDisplay'
import VendorDisplay from '../../components/VendorDisplay'
import MainHeroDivider from '../../components/MainHeroDivider'
import ExploreProducts from '../../components/ExploreProducts'
import PageHero from '../../components/PageHero'
import bgImg from '../../assets/images/webaliser-_TPTXZd9mOo-unsplash.jpg'

const heroData = {
  heading: "Real Home for Real Estate Real Vendors and Real Peoples",
  quickSearches: ['Home Products', 'Real Estate'],
  bgImage: bgImg,
};

function Home() {
  return (
    <>
      <PageHero {...heroData} />
      <MainHeroDivider />
      <section className={`${styles.category}`}>
        <CategoriesDisplay />
      </section>
      <section className={`${styles.vendor}`}>
        <VendorDisplay />
      </section>
      <section className={`${styles.products}`}>
        <ExploreProducts category='All' />
      </section>
      
    </>
  )
}

export default Home
import React from 'react';
import SearchBox from './SearchBox';
import defaultBgImg from '../assets/svg/undraw_for-sale_7qjb.svg';
import styles from '../style/PageHero.module.css';
import { useQuery } from '@tanstack/react-query';
import { PageHeroProps } from './types';
import QuickSearchLinks from './QuickSearchLinks';
import axios from 'axios';
import { useEffect,useState } from 'react';

interface Product {
  id: number;
  productName: string;
}

const fetchQuickSearches = async (): Promise<Product[]> => {
  const response = await axios.get<Product[]>(
    `${import.meta.env.VITE_API_BASE_URL}/products-by-rating`
  );
  return response.data;
};

// const quickSearches = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/products-by-rating`);
const PageHero: React.FC<PageHeroProps> = ({ 
  heading, 
  description, 
  // quickSearches = ['Real Estate', 'Home Products'], 
  bgImage = defaultBgImg 
  
}) =>
 {
   const { data: quickSearches = [], isLoading, isError } = useQuery<Product[]>({
  queryKey: ['quickSearches'],
  queryFn: fetchQuickSearches,
});


  // const [quickSearches, setQuickSearches] = useState<string[]>([]);
if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Failed to load quick searches.</p>;
  return (
  <section className={`${styles.pageHero} d-flex justify-content-center align-items-center position-relative`}>
    <img src={bgImage} alt="ProHomez" className={`${styles.pageHeroBgImg} position-absolute`} />
    <div className={`container position-relative ${styles.pageHeroContainer}`}>
      <div className="row">
        <div className="col-12">
          <div className={`${styles.contentBox} d-flex flex-column align-items-center text-white text-center`}>
            <h2 className={`${styles.pageHeroHeading} mb-0`}>{heading}</h2>
            {description && <p className={`${styles.pageHeroDescription} mb-0`}>{description}</p>}
            <div className={`${styles.searchBoxContainer} w-100`}>
            <SearchBox mainCategory="home products" />
              <div className={`${styles.inputQuickSearches}`}>
                <p className={`${styles.inputQuickSearchPara} py-4`}>
                  <QuickSearchLinks quickSearches={quickSearches.map(p => p.productName)} />
                </p>
              </div>
            </div>
          </div>
        </div>  
      </div>
    </div>
  </section>
);
 }
export default PageHero;

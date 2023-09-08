"use client"

import Header from './components/Header';
import Banner from './components/Banner';
import { exploreData,CardData } from './Data';
import SmallCard from './components/SmallCard';
import MediumCard from './components/MediumCard';
import LargeCard from './components/LargeCard';
import Footer from './components/Footer';

export default function Home() {

 

  return (
    <div>
      <Header/>
      <Banner/>
      
      <main className='max-w-7xl px-5 mx-auto sm:px-16'>
      <section className='pt-6 '>
         <h2 className='text-4xl font-semibold pb-5'>Explore Nearby</h2>
         <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
         {exploreData?.map(({img,distance,location})=>(
        <SmallCard key={img} img location={location} distance={distance}/>
       ))}
         </div>
      </section>

      <section className='pt-6 '>
         <h2 className='text-4xl font-semibold pb-5'>Live Anywhere</h2>
         <div className='flex space-x-3 overflow-scroll p-3 -ml-3 scrollbar-hide' >
         {CardData?.map(({img,title})=>(
        <MediumCard key={img} img title={title}/> 
       ))}
         </div>
         
      </section>
      <LargeCard 
        title="The Greatest Outdoor"
        description="Wishlists curated by Airbnb"
        buttonText="Get Inspired"
      />
      
      </main>
      <Footer/>
    </div>
  )
}


 
{/*img="https://links.papareact.com/4cj"*/}
 
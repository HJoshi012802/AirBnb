
import React from 'react';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import { useRouter } from 'next/router';



const Search = () => {
    const router = useRouter();
  const query = router.query;

    useEffect(() => {
       console.log(query)
      }, [query]);
   
    return ( <div>
 <Header/>
 <section className='flex-grow pt-14 px-6'>
    <p className='text-xs'>300+ Stays --for number of Guests</p>
    <h1 className='text-3xl font-semibold mt-2 mb-6'>Stays in </h1>
    <div className='hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap'>
        <p className='button'> Cancellation Flexibility</p>
        <p className='button'> Type of Place</p>
        <p className='button'> Places</p>
        <p className='button'> Rooms and Bed</p>
        <p className='button'> More..</p>

    </div>
 </section>
 <Footer/>
    </div> );
}
 
export default Search;

{/*const { startDate,endDate,noOfGuests }=router.query;
     
     
      const formatedStartDate =formate(new Date(startDate),"dd MMMM yy")
      const formatedEndDate =formate(new Date(endDate),"dd MMMM yy")
      const range =`${formatedStartDate}-${formatedEndDate}`;

*/}
"use client"


import {useState} from 'react';
import Image from 'next/image';
import Logo from '@/public/airbnb_logo.png';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import {useRouter} from "next/router";

const Header = () => {
    const [searchInput,setSearchInput]=useState("");
    const [startDate,setStartDate]=useState(new Date());
    const [endDate,setEndDate]=useState(new Date());
    const [noOfGuests,setNoOfGuests]=useState(1);
   // const router=useRouter();

    const selectionRange = {
      startDate:startDate ,
      endDate: endDate,
      key: 'selection',
    }
   
    
    const handleSelect = (ranges) =>{
      setStartDate(ranges.selection.startDate);
      setEndDate(ranges.selection.endDate);
    }

    const cancelButton =()=>{
      setSearchInput("");
    }

    const search = () => {
      router.push({
        pathname: '/search',
        query: {
          location: searchInput,
          startDate: startDate.toISOString(),
          endDate: endDate.toISOString(),
          noOfGuests: numberOfGuests,
          days: howManyDaysCounter()
        }
      })
      setSearchInput('')
    }
    
    return ( 
        <header className='sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10'>
           <div onClick={()=>router.push('/')} className='relative flex cursor-pointer'>
              <Image
              src={Logo}
              alt="AirBnb Logo"
              width={130}
              height={26}
            />
        </div>

        <div className='flex items-center border-2 rounded-full py-2 md:border-2 md:shadow-lg text-gray-600 placeholder-gray-400'>
            <input value={searchInput} onChange={(e)=>setSearchInput(e.target.value)}
             className='pl-4 bg-transparent outline-none flex-grow text-sm ' type="text" placeholder='Start your Search'/>

            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" 
            className="hidden md:inline-flex h-8 p-2 bg-red-400 text-white rounded-full md:mx-2 cursor-pointer">
               <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z" clipRule="evenodd" />
            </svg>
        </div>
        
        <div className='flex items-center space-x-3 justify-end text-gray-500'>
           <p className='hidden md:inline cursor-pointer'>Become a Host</p>
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" 
           className="h-6
           ">
             <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
           </svg>
           <div className='flex space-x-2 border-2 p-2 rounded-full'>
           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
            className=" h-6">
             <path fillRule="evenodd" d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" clipRule="evenodd" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" 
            className=" h-6">
           <path fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clipRule="evenodd" />
           </svg>

           </div>

        </div>
        {searchInput&&(<div className='flex flex-col col-span-3 mx-auto mt-3'>
         <DateRangePicker
        ranges={[selectionRange]}
       minDate={new Date()}
       rangeColors={["#FD5B61"]}
       onChange={handleSelect}
       />
      <div className='flex items-center border-b mb-4'>
         <h2 className='text-2xl flex-grow font-semibold'>Number of Guests</h2>
         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4 ">
         <path d="M4.5 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM14.25 8.625a3.375 3.375 0 116.75 0 3.375 3.375 0 01-6.75 0zM1.5 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM17.25 19.128l-.001.144a2.25 2.25 0 01-.233.96 10.088 10.088 0 005.06-1.01.75.75 0 00.42-.643 4.875 4.875 0 00-6.957-4.611 8.586 8.586 0 011.71 5.157v.003z" />
        </svg>
       <input type="number" className='w-12 pl-2 text-lg outline-none text-red-400' 
       value={noOfGuests}
       onChange={(e)=>setNoOfGuests(e.target.value)}
       min={1}/>
      </div>
      <div className='flex '>
         <button onClickCapture={cancelButton} className='flex-grow text-gray-500'>Cancle</button>
         <button onClick={ search } className='flex-grow text-red-500'>Search</button>
      </div>
        </div>
        )}
        </header>
     );
}
 
export default Header;


{/* Router.push({
            pathname:"/search",
            query:{
              location:searchInput,
          endDate:endDate.toISOString,
          startDate:startDate.toISOString,
          noOfGuests:noOfGuests,
            }
          });*/}

          {/*const  search=()=>{

      const first=startDate.toISOString;
      const last=endDate.toISOString;
       router.push(`/search?location=${searchInput}&startData=${first}&endDate=${last}&noOfGuests=${noOfGuests}`)
   };*/}
/* eslint-disable no-unused-vars */
import {useState} from 'react';
import Path from "../Components/Path";

const Home = () => {
  return (
    <>
    <div className='w-screen h-[200vh] flex justify-center items-start py-2 overflow-y-scroll mt-[3%] scroll-smooth'>
      <div className='lg:w-[90vw] md:w-11/12 w-full h-auto flex flex-col justify-center items-center'>
        <Path />

        {/*  announcement ,tutors,title */}
        <div className='h-[30vh] w-full bg-gray-100 flex justify-between items-center'>
           <div className='w-[32%] h-full flex flex-col justify-start items-center bg-gray-100 p-2'>
            <div className='w-full flex font-medium justify-start items-center text-lg'>Announcement</div>
             <div className='flex-1 w-full bg-gray-400'>Content</div>
           </div>
           <div className='w-[32%] h-full flex flex-col justify-start items-center bg-gray-200 p-2'>
            <div className='w-full flex font-medium justify-start items-center text-lg'>Assigned Tutors</div>
             <div className='flex-1 w-full bg-gray-400'>Content</div>
           </div>
           <div className='w-[32%] h-full flex flex-col justify-start items-center bg-gray-300 p-2'>
            <div className='w-full flex font-medium justify-start items-center text-lg'>Title</div>
             <div className='flex-1 w-full bg-gray-400'>Content</div>
           </div>
        </div>


          {/*  charts and recent tests */}
        <div className='h-[60vh] w-full flex justify-between items-center bg-gray-100 mt-[50px]'>
          <div className='h-full flex-1 flex justify-center items-center bg-gray-200 me-[32px]'>
            charts
          </div>
          <div className='w-[32%] h-full flex flex-col justify-center items-center bg-gray-400'>
            <div className='w-full text-xl'>Recent Tests</div>
            <div className='flex-1 w-full overflow-y-scroll'>
                 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium illo harum enim doloribus dignissimos impedit consequatur quasi nam tempore hic, unde aspernatur aperiam quaerat animi quia dolorem voluptates. Illo eius repellat hic. Excepturi dignissimos necessitatibus, consectetur perferendis beatae rerum cupiditate aperiam dolor eius. Aliquam odit a nesciunt dolorem ullam nostrum voluptates fugit repellendus quibusdam dicta. Magni!
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Home
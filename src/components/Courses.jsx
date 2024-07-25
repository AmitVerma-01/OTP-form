import { Reorder } from 'framer-motion'
import { useState } from 'react'
const Courses = () => {
 
    const [items, setItems] = useState([
      { 
        id:1,
        name:"Interview Preparation with JavaScript 2.0",
        price : "Rs. 9000/-",
        tag : 'Course'
      },{
        id:2,
        name : "Aptitude - Averages, Mixtures and Allegation",
        price : "Free",
        tag : 'Mock Test'
      },{
        id:3,
        name : "Aptitude - Simple & Compound Interest ",
        price : "Free",
        tag : 'Mock Test'
      },{
        id:4,
        name : "Aptitude - Partnership",
        price : "Free",
        tag : 'Mock Test'
      },{
        id:5,
        name : "Aptitude - Time & Work",
        price : "Free",
        tag : 'Mock Test'
      },
    ])
    
    return (
      <div className="bg-white w-3/4 h-3/4 rounded-lg shadow-md p-5">
        <div>
          <h1 className="text-2xl font-bold ">Manage Bundle</h1>
          <p className="text-gray-600"> Change orders of the Products based on priority</p>
        </div>
        <Reorder.Group axis="y" values={items} onReorder={setItems}>
          {items.map((item) => (
            <Reorder.Item key={item.id} value={item}>
              <div className='w-11/12 bg-slate-300 my-3 px-3 rounded-lg h-16 shadow-lg flex items-center justify-between gap-x-3'>
                <div className='flex items-center w-11/12'>
                  <svg width="18" height="28" viewBox="0 0 18 28" fill="none" xmlns="http://www.w3.org/2000/svg" className='mr-2'>
                    <path d="M7.33332 24C7.33332 25.8333 5.83332 27.3333 3.99999 27.3333C2.16666 27.3333 0.666656 25.8333 0.666656 24C0.666656 22.1666 2.16666 20.6666 3.99999 20.6666C5.83332 20.6666 7.33332 22.1666 7.33332 24ZM3.99999 10.6666C2.16666 10.6666 0.666656 12.1666 0.666656 14C0.666656 15.8333 2.16666 17.3333 3.99999 17.3333C5.83332 17.3333 7.33332 15.8333 7.33332 14C7.33332 12.1666 5.83332 10.6666 3.99999 10.6666ZM3.99999 0.666626C2.16666 0.666626 0.666656 2.16663 0.666656 3.99996C0.666656 5.83329 2.16666 7.33329 3.99999 7.33329C5.83332 7.33329 7.33332 5.83329 7.33332 3.99996C7.33332 2.16663 5.83332 0.666626 3.99999 0.666626ZM14 7.33329C15.8333 7.33329 17.3333 5.83329 17.3333 3.99996C17.3333 2.16663 15.8333 0.666626 14 0.666626C12.1667 0.666626 10.6667 2.16663 10.6667 3.99996C10.6667 5.83329 12.1667 7.33329 14 7.33329ZM14 10.6666C12.1667 10.6666 10.6667 12.1666 10.6667 14C10.6667 15.8333 12.1667 17.3333 14 17.3333C15.8333 17.3333 17.3333 15.8333 17.3333 14C17.3333 12.1666 15.8333 10.6666 14 10.6666ZM14 20.6666C12.1667 20.6666 10.6667 22.1666 10.6667 24C10.6667 25.8333 12.1667 27.3333 14 27.3333C15.8333 27.3333 17.3333 25.8333 17.3333 24C17.3333 22.1666 15.8333 20.6666 14 20.6666Z" fill="#7F7F7F"/>
                  </svg>
                  <img src="image1.png" alt="courseImg" className='h-12 w-20 mr-2' />
                  <div className='flex items-center justify-between w-full'>
                    <h3 className='text-lg font-medium'>{item.name}</h3>
                    <div className='flex items-center justify-between'>
                      <div className='mr-2'>{item.price}</div>
                      <div className='border bg-[#DBFFCE] border-black rounded-lg px-1'>{item.tag}</div>
                    </div>
                  </div>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" viewBox="0 0 16 16" fill="#000000" className="bi bi-three-dots-vertical">
                  <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
                </svg>
              </div>

            </Reorder.Item>
          ))}
        </Reorder.Group>
      </div>
    )
  
}

export default Courses

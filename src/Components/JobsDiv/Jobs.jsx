import React from 'react'
import { BiTimeFive } from 'react-icons/bi'
import logo1 from '../../assets/logo1.svg'
import logo2 from '../../assets/logo2.svg'
import logo3 from '../../assets/logo3.svg'
import logo4 from '../../assets/logo4.svg'

const Data=[{
  id:1,
  image:logo1,
  title:'Web Developer',
  time: 'Now',
  location: 'Canada',
  desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates odio a alias laboriosam rem iste rerum dolores culpa, ',
  company:'Amazone '
},

{
  id:2,
  image:logo2,
  title:'Data engineer',
  time: 'Now',
  location: 'Gurugram',
  desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates odio a alias laboriosam rem iste rerum dolores culpa, ',
  company:'Microsoft '
},

{
  id:3,
  image:logo3,
  title:'UI/UX Developer',
  time: 'Now',
  location: 'USA',
  desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates odio a alias laboriosam rem iste rerum dolores culpa, ',
  company:'Facebook '
},

{
  id:4,
  image:logo4,
  title:'Java Developer',
  time: 'Now',
  location: 'Banglore',
  desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates odio a alias laboriosam rem iste rerum dolores culpa, ',
  company:'Zoho '
}
]


const Jobs = () => {
  return (
    <div>
      <div className='jobContainer flex gap-10 justify-center flex-wrap items-center py-10'>

      {
        Data.map((data)=>{
          return (
            <div key={data.id} className='group group/items singleJob w-[250px] p-[20px] bg-white rounded-[10px] hover:bg-blueColor shadow-lg shadow-greyIsh-400/700 hover:shadow-lg'>
            <span className='flex justify-between items-center gap-4'>
              <h1 className='text-[16px] font-semibold text-textColor group:hover:text-white' >{data.title}</h1>
              <span className='flex items-center text-[#ccc] gap-1'>
                <BiTimeFive /> {data.time}
              </span>
            </span>
            <h6 className='text-[#ccc]'>{data.location}</h6>
            <p className='text-[13px] text-[#95959] pt-[20px] border-t-[2px] mt-[20px] group-hover:text-white'>{data.desc}
            </p>
            <div className='company flex items-center gap-2'>
              <img src={data.image} alt="company logo" className='w-[10%]' />
              <span className='text-[14px] py-[1rem] block group-hover:text-white'> {data.company}
             
              </span>
              </div>
              <button className='border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold text-textColor hover:bg-white group-hover/item:text-textColor  group-hover:text-textColor'>
                Apply
              </button>
            
  
          </div>
          )
        })
      }
       
      </div>
    </div>
  )
}

export default Jobs

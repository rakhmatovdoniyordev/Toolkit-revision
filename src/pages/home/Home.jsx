import React, { useEffect, useState } from 'react'
import {useFetch} from "../../hooks/useFetch"
import { motion } from "framer-motion"
import male from "../../assets/male.png"
import female from "../../assets/female.svg"

const Home = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const {data}= useFetch('https://dummyjson.com/users')
  console.log(data);
  return (
    <>
    <section className='py-16 max-[900px]:py-12 max-[500px]:py-10 bg-slate-100'>
      <div className="container__person">
        <div className='grid grid-cols-4 gap-4 max-[1050px]:grid-cols-3 max-[800px]:grid-cols-2 max-[550px]:grid-cols-1'>
          {
            data?.users?.map(item => (
              <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.9 }}
              transition={{ duration: 0.5 }}
              className="w-full max-w-sm mx-auto"
              key={item.id}
            >
              <div className="bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 transform hover:shadow-lg hover:-translate-y-1 cursor-pointer">
                <div className="p-6">
                  <div className="flex justify-center mb-4">
                    <img
                      src={item.gender === "male" ? male : female}
                      alt="User avatar"
                      className="w-24 h-24 rounded-full object-cover border-4 border-gray-200 dark:border-gray-700"
                    />
                  </div>
                  <div className="text-center">
                    <h2 className="text-2xl font-bold text-gray-800 mb-1 h-16">{item.firstName} {item.lastName} {item.maidenName}</h2>
                    <p className="text-sm text-gray-600  mb-4">{item.company.department}</p>
                    <p className="text-[12px] text-gray-700 ">
                      email: {item.email}
                    </p>
                    <p className="text-[12px] text-gray-700 ">
                      phone: {item.phone}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            ))
          }
        </div>
      </div>
    </section>
    </>
  )
}

export default Home
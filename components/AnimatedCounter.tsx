'use client';


import CountUp from 'react-countup'

const AnimatedCounter = ({amount}: {amount: number}) => {
  return (
    <div className='w-full'>
        <CountUp 
        decimal='.'
        duration={1.75}
        decimals={2}
        prefix='KES '
        end={amount} />

            </div>
  )
}

export default AnimatedCounter